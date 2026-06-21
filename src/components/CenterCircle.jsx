"use client";

import { motion } from "framer-motion";
import { services, CANVAS, CENTER, CIRCLE_DIAMETER } from "./data";

const SIZE = 320; // local SVG viewBox, independent of how big the circle renders
const C = SIZE / 2;
const RING_R = 132;
const INNER_R = 110;
const GAP_DEG = 5;

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
}

// Quadrant angle ranges: 0deg = 12 o'clock, increasing clockwise.
const QUADRANTS = [
  {
    id: "mechanical",
    start: 270 + GAP_DEG,
    end: 360 - GAP_DEG,
    nodeAngle: 315,
  }, // upper-left
  { id: "electrical", start: 0 + GAP_DEG, end: 90 - GAP_DEG, nodeAngle: 45 }, // upper-right
  { id: "fire", start: 90 + GAP_DEG, end: 180 - GAP_DEG, nodeAngle: 135 }, // lower-right
  { id: "plumbing", start: 180 + GAP_DEG, end: 270 - GAP_DEG, nodeAngle: 225 }, // lower-left
];

/**
 * @param {{ variant?: 'canvas'|'standalone' }} props
 * 'canvas'     -> absolutely positioned at CENTER, sized via CIRCLE_DIAMETER, for the desktop diagram.
 * 'standalone' -> simply fills its parent (used in the mobile stacked layout).
 */
export default function CenterCircle({ variant = "canvas" }) {
  const byId = Object.fromEntries(services.map((s) => [s.id, s]));

  const containerClass =
    variant === "canvas"
      ? "absolute z-20 flex items-center justify-center rounded-full pointer-events-none"
      : "relative z-20 flex h-full w-full items-center justify-center rounded-full";

  const containerStyle =
    variant === "canvas"
      ? {
          left: `${((CENTER.x - CIRCLE_DIAMETER / 2) / CANVAS.width) * 100}%`,
          top: `${((CENTER.y - CIRCLE_DIAMETER / 2) / CANVAS.height) * 100}%`,
          width: `${(CIRCLE_DIAMETER / CANVAS.width) * 100}%`,
          height: `${(CIRCLE_DIAMETER / CANVAS.height) * 100}%`,
        }
      : undefined;

  return (
    <div className={containerClass} style={containerStyle}>
      {/* soft outer glow / glass halo */}
      <div className="absolute inset-[-6%] rounded-full bg-white/70 shadow-[0_30px_80px_-18px_rgba(40,40,30,0.25)]" />
      <div className="absolute inset-[-1%] rounded-full ring-1 ring-black/5" />

      <motion.svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="relative h-full w-full"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <clipPath id="mepfp-inner-clip">
            <circle cx={C} cy={C} r={INNER_R} />
          </clipPath>
        </defs>

        {/* inner solid base */}
        <circle cx={C} cy={C} r={INNER_R + 6} fill="#FFFFFF" />

        {/* faint architectural blueprint decoration, clipped to the inner circle */}
        <g
          clipPath="url(#mepfp-inner-clip)"
          stroke="#7C8A78"
          strokeWidth={1}
          opacity={0.16}
        >
          <line x1={C - 92} y1={C - 64} x2={C + 92} y2={C - 64} />
          <line x1={C - 92} y1={C - 14} x2={C + 92} y2={C - 14} />
          <line x1={C - 92} y1={C + 38} x2={C + 92} y2={C + 38} />
          <line x1={C - 52} y1={C - 92} x2={C - 52} y2={C + 92} />
          <line x1={C} y1={C - 92} x2={C} y2={C + 92} />
          <line x1={C + 52} y1={C - 92} x2={C + 52} y2={C + 92} />
          <rect x={C - 38} y={C - 38} width={76} height={76} fill="none" />
        </g>

        {/* colored ring, one arc per discipline */}
        {QUADRANTS.map((q) => (
          <path
            key={q.id}
            d={describeArc(C, C, RING_R, q.start, q.end)}
            fill="none"
            stroke={byId[q.id].colors.primary}
            strokeWidth={5}
            strokeLinecap="round"
          />
        ))}

        {/* ring connector nodes */}
        {QUADRANTS.map((q) => {
          const { x, y } = polarToCartesian(C, C, RING_R, q.nodeAngle);
          return (
            <circle
              key={`node-${q.id}`}
              cx={x}
              cy={y}
              r={7}
              fill="#FFFFFF"
              stroke={byId[q.id].colors.primary}
              strokeWidth={3}
            />
          );
        })}

        {/* center wordmark */}
        <text
          x={C}
          y={C - 26}
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize={28}
          fontWeight={700}
          fill="#1F2A1F"
        >
          MEPFP
        </text>

        <line
          x1={C - 34}
          y1={C - 2}
          x2={C - 14}
          y2={C - 2}
          stroke="#9B9B8F"
          strokeWidth={1}
        />
        <text
          x={C}
          y={C + 2}
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize={13}
          fill="#6B6B60"
        >
          &amp;
        </text>
        <line
          x1={C + 14}
          y1={C - 2}
          x2={C + 34}
          y2={C - 2}
          stroke="#9B9B8F"
          strokeWidth={1}
        />

        <text
          x={C}
          y={C + 32}
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize={28}
          fontWeight={700}
          fill="#1F2A1F"
        >
          FP
        </text>

        <line
          x1={C - 46}
          y1={C + 48}
          x2={C + 46}
          y2={C + 48}
          stroke="#C9C9BC"
          strokeWidth={1}
        />
        <text
          x={C}
          y={C + 66}
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize={11}
          letterSpacing={2}
          fill="#5B5B50"
        >
          ENGINEERING
        </text>
      </motion.svg>
    </div>
  );
}
