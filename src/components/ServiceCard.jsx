"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fan, Zap, Droplet, ShowerHead } from "lucide-react";
import { CANVAS } from "./data";

const ICONS = { Fan, Zap, Droplet, ShowerHead };

function toPercentBox(box) {
  return {
    left: `${(box.x / CANVAS.width) * 100}%`,
    top: `${(box.y / CANVAS.height) * 100}%`,
    width: `${(box.w / CANVAS.width) * 100}%`,
    height: `${(box.h / CANVAS.height) * 100}%`,
  };
}

function polar(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polar(cx, cy, r, startAngle);
  const end = polar(cx, cy, r, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
}

const RING_START = 15;
const RING_END = 345;
const ringDot = polar(50, 50, 45, RING_END);
const ringPath = describeArc(50, 50, 45, RING_START, RING_END);

export default function ServiceCard({
  service,
  index = 0,
  variant = "canvas",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const leaveTimer = useRef(null);
  const Icon = ICONS[service.icon] ?? Fan;
  const isLeft = service.side === "left";

  // Shared enter/leave handlers — 120ms delay prevents flicker
  // when mouse crosses the 14px gap between circle and tooltip
  const onEnter = () => {
    clearTimeout(leaveTimer.current);
    setIsHovered(true);
  };
  const onLeave = () => {
    leaveTimer.current = setTimeout(() => setIsHovered(false), 120);
  };

  const circleBody = (
    <div
      className="relative h-full w-full rounded-full bg-white"
      style={{
        boxShadow: `0 18px 40px -14px ${service.colors.glow}, 0 6px 16px -6px rgba(15,23,15,0.10)`,
      }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <path
          d={ringPath}
          fill="none"
          stroke={service.colors.primary}
          strokeWidth={3.2}
          strokeLinecap="round"
        />
        <circle
          cx={ringDot.x}
          cy={ringDot.y}
          r={3.4}
          fill={service.colors.primary}
        />
      </svg>

      <div className="absolute -left-1.5 -top-1.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[0.7rem] font-bold text-slate-600 shadow-[0_4px_10px_-2px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
        {service.number}
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-7 text-center">
        <div
          className="h-12 w-12 scale-[1.7]"
          style={{
            backgroundColor: service.colors.primary,

            WebkitMaskImage: `url(${service.icons})`,
            maskImage: `url(${service.icons})`,

            WebkitMaskSize: "contain",
            maskSize: "contain",

            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",

            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />{" "}
        <div className="leading-tight">
          <p className="text-[0.74rem] font-bold uppercase tracking-wide text-slate-800">
            {service.title}
          </p>
          <p className="text-[0.74rem] font-bold uppercase tracking-wide text-slate-800">
            {service.subtitle}
          </p>
        </div>
      </div>
    </div>
  );

  if (variant === "stack") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="flex flex-col items-center"
      >
        <div className="relative h-40 w-40">{circleBody}</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        ...toPercentBox(service.layout.box),
        zIndex: isHovered ? 50 : 1,
      }}
      initial={{
        opacity: 0,
        x: isLeft ? -40 : 40,
        y: service.corner === "top" ? -20 : 20,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {circleBody}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-1/2 z-50 w-48 -translate-y-1/2 rounded-xl bg-white p-3.5 ring-1 ring-slate-200"
            style={{
              left: isLeft ? "calc(100% + 14px)" : "auto",
              right: isLeft ? "auto" : "calc(100% + 14px)",
              boxShadow: `0 8px 28px -4px ${service.colors.glow}, 0 4px 12px -2px rgba(0,0,0,0.07)`,
            }}
            initial={{ opacity: 0, x: isLeft ? -8 : 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isLeft ? -8 : 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onMouseEnter={onEnter} // keeps tooltip alive while reading
            onMouseLeave={onLeave}
          >
            {/* color accent bar */}
            <div
              className="mb-2.5 h-0.5 w-8 rounded-full"
              style={{ backgroundColor: service.colors.primary }}
            />
            <p
              className="mb-2.5 text-[0.7rem] font-bold uppercase tracking-wider"
              style={{ color: service.colors.dark }}
            >
              {service.title} {service.subtitle}
            </p>
            <ul className="space-y-1.5">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[0.72rem] text-slate-500"
                >
                  <span
                    className="h-1 w-1 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: service.colors.primary }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
