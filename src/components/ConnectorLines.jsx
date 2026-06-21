'use client';

import { motion } from 'framer-motion';
import { services, CANVAS } from './data';

/**
 * Premium flowing connector path
 */
function buildPath(dot, node, side) {
  const dx = Math.abs(node.x - dot.x);

  const c1x =
    side === 'left'
      ? dot.x + dx * 0.35
      : dot.x - dx * 0.35;

  const c1y = dot.y;

  const c2x =
    side === 'left'
      ? node.x - dx * 0.35
      : node.x + dx * 0.35;

  const c2y = node.y;

  return `
    M ${dot.x} ${dot.y}
    C ${c1x} ${c1y},
      ${c2x} ${c2y},
      ${node.x} ${node.y}
  `;
}

export default function ConnectorLines() {
  return (
    <svg
      viewBox={`0 0 ${CANVAS.width} ${CANVAS.height}`}
      className="absolute inset-0 z-10 h-full w-full pointer-events-none"
      aria-hidden="true"
    >
      {services.map((service, i) => {
        const d = buildPath(
          service.layout.dot,
          service.layout.node,
          service.side
        );

        return (
          <g key={service.id}>
            {/* Soft glow layer */}
            <motion.path
              d={d}
              fill="none"
              stroke={service.colors.primary}
              strokeWidth={12}
              strokeLinecap="round"
              opacity={0.12}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.12 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                delay: 0.15 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* Main premium connector */}
            <motion.path
              d={d}
              fill="none"
              stroke={service.colors.primary}
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                delay: 0.2 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* Connector dot */}
            <motion.circle
              cx={service.layout.dot.x}
              cy={service.layout.dot.y}
              r={9}
              fill={service.colors.primary}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                delay: 0.25 + i * 0.15,
              }}
            />

            {/* Center node dot */}
            <motion.circle
              cx={service.layout.node.x}
              cy={service.layout.node.y}
              r={5}
              fill={service.colors.primary}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.9, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                delay: 0.45 + i * 0.15,
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}