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
    title: "MEP Design",
    desc: "Efficient, sustainable, and code-compliant MEP system design.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?q=80&w=1600",
    scope: ["HVAC systems", "Electrical design", "Plumbing", "Fire systems"],
    deliverables: ["Drawings", "Load calculations", "BOQs"],
  },
  {
    key: "bim",
    title: "BIM Modeling",
    desc: "High-precision BIM models for visualization and planning.",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600",
    scope: ["3D modeling", "Shop drawings", "As-built"],
    deliverables: ["Revit models", "Drawings", "Quantities"],
  },
  {
    key: "coord",
    title: "BIM Coordination",
    desc: "Clash-free coordination across all disciplines.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600",
    scope: ["Clash detection", "Coordination", "Model validation"],
    deliverables: ["Reports", "Coordinated models"],
  },
  {
    key: "support",
    title: "Construction Support",
    desc: "Ensuring accurate implementation on site.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600",
    scope: ["RFI handling", "Site support", "Updates"],
    deliverables: ["Reports", "Updated drawings"],
  },
  {
    key: "fm",
    title: "Facility Management",
    desc: "Data-driven BIM for lifecycle management.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600",
    scope: ["Asset data", "COBie", "Digital twin"],
    deliverables: ["FM models", "Asset database"],
  },
];

export default function ServicesTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  /* AUTO SWITCH */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const active = services[activeIndex];

  /* MOUSE PARALLAX */
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 60, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 60, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    x.set((mouseX - centerX) / 25);
    y.set((mouseY - centerY) / 25);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-28 px-[8%] bg-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl mb-4">
            Our Expertise
          </h2>
          <p className="font-body text-white/60 max-w-2xl mx-auto">
            Advanced MEP and BIM solutions crafted with precision and modern workflows.
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {services.map((service, i) => (
            <button
              key={service.key}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                activeIndex === i
                  ? "bg-white text-black"
                  : "bg-white/5 text-white/60 hover:bg-white/10"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE WITH PARALLAX */}
          <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleLeave}
            className="relative w-full max-w-[420px] aspect-square mx-auto"
          >
            {/* glow */}
            <motion.div
              style={{ x: smoothX, y: smoothY }}
              className="absolute inset-0 blur-3xl bg-white/5 z-0"
            />

            {/* outer frame */}
            <motion.div
              style={{ x: smoothX * 0.6, y: smoothY * 0.6 }}
              className="absolute inset-0 translate-x-6 translate-y-6 border border-white/10 z-0"
            />

            {/* inner glass */}
            <motion.div
              style={{ x: smoothX * 0.4, y: smoothY * 0.4 }}
              className="absolute inset-0 backdrop-blur-sm bg-white/[0.02] border border-white/5 z-0"
            />

            {/* image */}
            <div className="relative w-full h-full overflow-hidden z-10">
              <AnimatePresence mode="sync">
                <motion.img
                  key={active.img}
                  src={active.img}
                  alt={active.title}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.8 }}
                  style={{ x: smoothX * 0.8, y: smoothY * 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
<div className="relative min-h-[320px] flex items-center">
  <AnimatePresence mode="sync">
    <motion.div
      key={active.key}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.5 }}
      className="absolute w-full"
    >
      <h3 className="font-heading text-3xl mb-4">
        {active.title}
      </h3>

      <p className="font-body text-white/60 mb-6">
        {active.desc}
      </p>

      <div className="grid sm:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="font-heading text-lg mb-2">Scope</h4>
          <ul className="text-sm text-white/60 space-y-1">
            {active.scope.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg mb-2">Deliverables</h4>
          <ul className="text-sm text-white/60 space-y-1">
            {active.deliverables.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <button className="px-6 py-3 bg-white text-black rounded-full text-sm hover:bg-gray-200 transition">
        Learn More
      </button>
    </motion.div>
  </AnimatePresence>
</div>

        </div>
      </div>
    </section>
  );
}