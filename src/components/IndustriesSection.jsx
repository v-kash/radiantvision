"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const industries = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21h18M3 10.5V21M21 10.5V21M6 21V10.5M10.5 21V10.5M13.5 21V10.5M18 21V10.5M3 10.5L12 3l9 7.5"
        />
      </svg>
    ),
    title: "Commercial & Office Buildings",
    desc: "High-performance MEPFP for corporate towers and mixed-use spaces.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955a1.5 1.5 0 012.092 0L21.75 12M4.5 9.75V21a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75V9.75"
        />
      </svg>
    ),
    title: "Residential Developments",
    desc: "Smart, efficient living environments for premium housing projects.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
        />
      </svg>
    ),
    title: "Hospitals & Healthcare",
    desc: "Precision systems ensuring infection control, reliability and compliance.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17L4.655 7.926a2.25 2.25 0 010-3.182l.92-.92a2.25 2.25 0 013.182 0l6.29 6.29"
        />
      </svg>
    ),
    title: "Industrial & Manufacturing",
    desc: "Robust, scalable MEPFP infrastructure for heavy-duty operations.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    title: "Hotels & Hospitality",
    desc: "Guest-centric design delivering comfort and seamless operations.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
    title: "Educational Institutions",
    desc: "Safe, future-ready infrastructure for schools and universities.",
  },
];

// Duplicate for seamless loop
const doubled = [...industries, ...industries];

function MarqueeRow({ direction = 1, speed = 35 }) {
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-5 pr-5"
        animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ width: "max-content" }}
      >
        {doubled.map((industry, i) => (
          <div
            key={i}
            className="group relative w-72 shrink-0 rounded-2xl border border-[#ece8e2] bg-[#faf8f5] p-6 overflow-hidden cursor-default transition-shadow duration-300 hover:shadow-md hover:border-[#c8d5b9]"
          >
            {/* Subtle hover green tint bg */}
            <div className="absolute inset-0 bg-[#5a7a4a]/0 group-hover:bg-[#5a7a4a]/[0.03] transition-colors duration-300" />

            {/* ICON */}
            <div className="relative z-10 w-11 h-11 rounded-xl bg-[#eef2eb] group-hover:bg-[#dde8d5] flex items-center justify-center text-[#5a7a4a] mb-4 transition-colors duration-300">
              {industry.icon}
            </div>

            {/* TITLE */}
            <h3 className="relative z-10 text-sm font-heading text-[#1a1a1a] mb-2 leading-snug">
              {industry.title}
            </h3>

            {/* DESC */}
            <p className="relative z-10 text-xs text-[#888] leading-relaxed">
              {industry.desc}
            </p>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-[#5a7a4a] transition-all duration-500" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function IndustriesMarquee() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* HEADING */}
      <div className="text-center mb-16 px-[8%]">
        <p className="text-sm tracking-[0.2em] uppercase text-[#5a7a4a] mb-4">
          Industries We Serve
        </p>
        <h2 className="text-3xl md:text-5xl font-heading text-[#1a1a1a] mb-6">
          Industries We Work With
        </h2>
        <p className="max-w-xl mx-auto text-[#777] text-base">
          From corporate towers to critical healthcare facilities — our
          expertise spans every major sector.
        </p>
      </div>

      {/* TWO MARQUEE ROWS */}
      <div className="flex flex-col gap-5">
        {/* Row 1 — scrolls left */}
        <MarqueeRow direction={1} speed={38} />

        {/* Row 2 — scrolls right */}
      </div>

      {/* EDGE FADES */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
    </section>
  );
}
