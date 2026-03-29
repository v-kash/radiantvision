"use client";

import { motion } from "framer-motion";

const points = [
  {
    number: "01",
    heading: "Coordination, Not Just Design",
    text: "We focus on how every system interacts with the others — ensuring MEP, fire protection, and structural elements work together seamlessly from day one.",
  },
  {
    number: "02",
    heading: "Problems Solved Before Site",
    text: "Through advanced BIM coordination and clash detection, we identify and resolve conflicts in the model — before they become costly issues on the ground.",
  },
  {
    number: "03",
    heading: "Engineering Meets Execution",
    text: "We combine deep engineering knowledge with real-world construction thinking — delivering designs that are not just technically sound, but practically buildable.",
  },
  {
    number: "04",
    heading: "Every Project, A Long-Term Responsibility",
    text: "We don't hand over drawings and walk away. We treat every project as a commitment — supporting our clients through execution, handover, and beyond.",
  },
];

export default function WhatSetsUsApart() {
  return (
    <section className="py-20 px-[8%] bg-[#f8f4ef]">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT — sticky heading */}
        <div className="md:sticky md:top-28">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.25em] uppercase text-[#5a7a4a] mb-4"
          >
            What Makes Us Different
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading text-[#1a1a1a] leading-tight mb-6"
          >
            What Sets <br />
            Us Apart
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-[#888] text-sm leading-relaxed max-w-xs"
          >
            Four principles that shape how we approach every project, every
            team, and every client relationship.
          </motion.p>

          {/* Progress dots — visual indicator of 4 points */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex gap-2 mt-10"
          >
            {points.map((_, i) => (
              <div
                key={i}
                className="h-[3px] rounded-full"
                style={{
                  width: i === 0 ? 28 : 10,
                  background: i === 0 ? "#5a7a4a" : "#d6d2cc",
                }}
              />
            ))}
          </motion.div>
          {/* MISSION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
            className="mt-10 rounded-[2px] p-8 relative overflow-hidden"
            style={{ background: "#1a1f16" }}
          >
            {/* Subtle green glow */}
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(90,122,74,0.25) 0%, transparent 70%)",
              }}
            />

            {/* Quote mark */}
            <div className="text-[72px] font-heading leading-none text-[#5a7a4a]/20 select-none -mt-4 -mb-4">
              "
            </div>

            {/* Mission statement */}
            <p
              className="relative z-10 text-white/85 leading-relaxed mb-6"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "17px",
                fontStyle: "italic",
              }}
            >
              Engineering should not just meet standards — it should elevate how
              buildings perform.
            </p>

            {/* Divider */}
            <div className="w-8 h-[2px] bg-[#5a7a4a] mb-5" />

            {/* Attribution */}
            <p className="text-xs tracking-[0.15em] uppercase text-white/35">
              Our founding belief
            </p>

            {/* Decorative corner bracket */}
            <div className="absolute bottom-5 right-5 opacity-10">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M32 0H20V3H29V12H32V0Z" fill="white" />
                <path d="M0 32H12V29H3V20H0V32Z" fill="white" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — stacked points */}
        <div className="flex flex-col divide-y divide-[#e0dbd4]">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
              className="group py-8 first:pt-0 last:pb-0"
            >
              <div className="flex items-start gap-5">
                {/* Number */}
                <span className="text-xs font-medium tracking-[0.2em] text-[#5a7a4a]/50 mt-1 shrink-0 tabular-nums">
                  {point.number}
                </span>

                <div className="flex-1">
                  {/* Heading */}
                  <h3 className="text-lg md:text-xl font-heading text-[#1a1a1a] leading-snug mb-3 group-hover:text-[#5a7a4a] transition-colors duration-300">
                    {point.heading}
                  </h3>

                  {/* Body */}
                  <p className="text-[#777] text-sm leading-relaxed">
                    {point.text}
                  </p>
                </div>

                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
