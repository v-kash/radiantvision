"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const strengths = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
    label: "Expert MEPFP Engineering Team",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
    ),
    label: "Advanced BIM Capabilities",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    ),
    label: "Reduced Rework Through Coordination",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    label: "On-Time Project Delivery",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    label: "Compliance with Global Standards",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
    label: "Client-Focused Execution",
  },
];

export default function WhyUsSection() {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px]">
      {/* LEFT — dark panel */}
      <div className="relative md:w-1/2 bg-[#1a1f16] px-[6%] py-20 flex flex-col justify-center overflow-hidden">
        {/* Subtle green radial glow */}
        <div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(90,122,74,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.25em] uppercase text-[#5a7a4a] mb-5"
        >
          Why Our Projects Stand Out
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading text-white leading-tight mb-6"
        >
          Precision. <span className="text-[#5a7a4a]">Performance.</span>
          <br />
          Reliability.
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[#a0a89a] text-base leading-relaxed mb-10 max-w-md"
        >
          Our projects are driven by innovation and backed by engineering
          expertise. We focus on delivering solutions that not only meet current
          requirements but are also future-ready.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-[#5a7a4a] hover:bg-[#4a6a3a] text-white text-sm font-medium px-7 py-3.5 rounded-[2px] transition-colors duration-300"
          >
            Start a Project
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </Link>

          <Link
            href="/about"
            className="text-sm text-[#a0a89a] hover:text-white transition-colors duration-300 underline underline-offset-4"
          >
            Know About Us
          </Link>
        </motion.div>

        {/* Decorative corner bracket */}
        <div className="absolute bottom-8 right-8 opacity-10">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M48 0H28V4H44V20H48V0Z" fill="white" />
            <path d="M0 48H20V44H4V28H0V48Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* RIGHT — light panel */}
      <div className="md:w-1/2 bg-[#f8f4ef] px-[6%] py-20 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.25em] uppercase text-[#5a7a4a] mb-8"
        >
          Key Strengths
        </motion.p>

        {/* Strengths grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {strengths.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              viewport={{ once: true }}
              className="group flex items-start gap-4 p-5 rounded-xl border border-[#ece8e2] bg-white hover:border-[#5a7a4a]/30 hover:shadow-sm transition-all duration-300"
            >
              {/* Icon dot */}
              <div className="shrink-0 w-9 h-9 rounded-lg bg-[#eef2eb] group-hover:bg-[#5a7a4a] flex items-center justify-center text-[#5a7a4a] group-hover:text-white transition-colors duration-300">
                {s.icon}
              </div>

              <p className="text-sm text-[#333] leading-snug pt-1.5 font-medium">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat strip */}
        
      </div>
    </section>
  );
}
