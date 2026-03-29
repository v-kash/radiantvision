"use client";

import { motion } from "framer-motion";

const points = [
  {
    number: "01",
    text: "Thinking ahead to prevent on-site challenges",
  },
  {
    number: "02",
    text: "Designing systems that are easy to execute and maintain",
  },
  {
    number: "03",
    text: "Prioritizing coordination over correction",
  },
  {
    number: "04",
    text: "Delivering solutions, not just drawings",
  },
];

export default function WhatDrivesUs() {
  return (
    <section className="py-20 px-[8%] bg-[#1a1f16]">
      {/* TOP — heading row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6  pb-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.25em] uppercase text-[#5a7a4a] mb-4"
          >
            What Drives Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading text-white leading-tight max-w-lg"
          >
            Mindset Over <span className="text-[#a8c090]">Methodology.</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-[#a0a89a] text-sm leading-relaxed max-w-sm md:text-right"
        >
          We believe great engineering is not just about calculations — it's
          about clarity, coordination, and responsibility.
        </motion.p>
      </div>

      {/* BOTTOM — 2x2 bold points grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06]">
        {points.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="group relative bg-[#1a1f16] hover:bg-[#212818] transition-colors duration-300 p-10"
          >
            {/* Number */}
            <p className="text-xs font-medium tracking-[0.2em] text-[#5a7a4a]/50 mb-6">
              {point.number}
            </p>

            {/* Bold point text */}
            <p className="text-white/80 group-hover:text-white text-xl md:text-2xl font-heading leading-snug transition-colors duration-300 max-w-xs">
              {point.text}
            </p>

            {/* Bottom accent line — grows on hover */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-[#5a7a4a] transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
