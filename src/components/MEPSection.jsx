"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const services = [
  {
    key: "mep",
    title: "MEPFP Design",
    desc: "Efficient, sustainable, and code-compliant MEPFP system design.",
    img: "/services/mepfp.png",
    scope: ["Mechanical Design", "Electrical Design", "Plumbing Design", "Fire Protection Design"],
    deliverables: ["Drawings", "Load calculations", "BOQs"],
  },
  {
    key: "bim",
    title: "BIM Modeling",
    desc: "High-precision BIM models for visualization and planning.",
    img: "/services/bim.png",
    scope: [
      "3D modeling",
      "Multi-Discipline BIM Coordination",
      "Document Support",
    ],
    deliverables: [
      "LOD Complinant Revit Models",
      "Drawings & Installation Layouts",
      "BOQ/ Quantity Schedules",
    ],
  },
  {
    key: "coord",
    title: "BIM Coordination",
    desc: "Clash-free coordination across all disciplines.",
    img: "/services/bimc.png",
    scope: ["Clash Detection", "Coordination", "Model Validation"],
    deliverables: ["Reports", "Coordinated Models"],
  },
  {
    key: "support",
    title: "Design Support",
    desc: "Technical guidance to address design-related challenges during construction.",
    img: "/services/support.png",
    scope: ["RFI Handling", "Design Issue Resolution", "Technical Assistance"],
    deliverables: ["Reports", "Updated Drawings"],
  },
  {
    key: "fm",
    title: "Lighting Design",
    desc: "Optimized lighting solutions through simulation and analysis.",
    img: "/services/light.png",
    scope: [
      "Illumination Calculation",
      "Lighting Simulation",
      "Fixture Selection",
    ],
    deliverables: [
      "Lighting Layouts",
      "Illumination Reports",
      "Fixture Schedules",
    ],
  },
];

export default function ServicesTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  /* AUTO SWITCH — pauses on hover */
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 35000);
    return () => clearInterval(interval);
  }, [paused]);

  const active = services[activeIndex];

  /* MOUSE PARALLAX */
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 60, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 60, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / 25);
    y.set((e.clientY - rect.top - rect.height / 2) / 25);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      className="py-16 px-[8%] bg-[#1a1f16]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* HEADING */}
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xl tracking-[0.25em] uppercase text-[#5a7a4a] mb-4"
        >
          What We Offer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-6xl text-white mb-4"
        >
          Our Expertise
        </motion.h2>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {services.map((service, i) => (
          <button
            key={service.key}
            onClick={() => setActiveIndex(i)}
            className="relative px-5 py-2 text-sm tracking-wide transition-colors duration-300 rounded-[2px]"
            style={{
              color: activeIndex === i ? "#1a1f16" : "rgba(255,255,255,0.45)",
              background:
                activeIndex === i ? "#c8d5b9" : "rgba(255,255,255,0.05)",
              border:
                activeIndex === i
                  ? "1px solid transparent"
                  : "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {service.title}

            {/* Auto-progress underline */}
            {activeIndex === i && !paused && (
              <motion.div
                key={`progress-${activeIndex}`}
                className="absolute bottom-0 left-0 h-[2px] bg-[#5a7a4a]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT — parallax image */}
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleLeave}
          className="relative w-full max-w-[460px] aspect-square mx-auto"
        >
          {/* Outer offset frame */}
          <motion.div
            style={{ x: smoothX * 0.4, y: smoothY * 0.4 }}
            className="absolute inset-0 translate-x-5 translate-y-5 border border-[#5a7a4a]/20"
          />

          {/* Green glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 30% 70%, rgba(90,122,74,0.18) 0%, transparent 60%)",
            }}
          />

          {/* Image */}
          <div className="relative w-full h-full overflow-hidden z-10 rounded-sm">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.img}
                src={active.img}
                alt={active.title}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.65 }}
                style={{ x: smoothX * 0.6, y: smoothY * 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-[#1a1f16]/20" />
          </div>

          {/* Floating index badge */}
        </div>

        {/* RIGHT — service detail */}
        <div className="relative min-h-[340px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45 }}
              className="w-full"
            >
              {/* Tag */}
              <p className="text-xs tracking-[0.2em] uppercase text-[#5a7a4a] mb-4">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(services.length).padStart(2, "0")}
              </p>

              {/* Title */}
              <h3 className="font-heading text-3xl md:text-4xl text-white mb-4 leading-tight">
                {active.title}
              </h3>

              {/* Desc */}
              <p className="text-[#a0a89a] text-base leading-relaxed mb-8 max-w-md">
                {active.desc}
              </p>

              {/* Scope + Deliverables */}
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#5a7a4a] mb-3">
                    Scope
                  </p>
                  <ul className="space-y-2">
                    {active.scope.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-white/65"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#5a7a4a] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#5a7a4a] mb-3">
                    Deliverables
                  </p>
                  <ul className="space-y-2">
                    {active.deliverables.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-white/65"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#5a7a4a] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              {/* <button className="group relative inline-flex items-center gap-3 overflow-hidden rounded-[2px] px-7 py-3 text-sm tracking-wide text-white font-medium">
                <span className="absolute inset-0 bg-gradient-to-r from-[#4f6f52] to-[#739072] transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[#739072]/30 blur-xl" />
                <span className="relative z-10">Learn More</span>
                <span className="relative z-10 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </button> */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* BOTTOM PROGRESS DOTS */}
      <div className="flex justify-center gap-2 mt-16">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="transition-all duration-300"
            style={{
              width: i === activeIndex ? 28 : 8,
              height: 3,
              borderRadius: 999,
              background:
                i === activeIndex ? "#c8d5b9" : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
