"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { title: "Commercial Projects",   image: "/project1.jpg" },
  { title: "Residential Projects",  image: "/project2.jpg" },
  { title: "Industrial Projects",   image: "/project3.jpg" },
  { title: "Infra Projects",        image: "/project4.jpg" },
];

const ROWS = [[0, 1], [2, 3]];

export default function PremiumProjectsFixed() {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-24 px-[8%] bg-[#f8f4ef]">
      <div className="text-center mb-16">
        <p className="text-sm tracking-[0.2em] uppercase text-[#5a7a4a] mb-4">
          Featured Projects
        </p>
        <h2 className="text-3xl md:text-5xl font-heading text-[#1a1a1a] mb-6">
          Our Featured Work
        </h2>
        <p className="max-w-2xl mx-auto text-[#555] text-lg">
          A showcase of our expertise across diverse industries.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {ROWS.map((pair) => (
          <div key={pair[0]} className="flex gap-6 h-[300px]">
            {pair.map((index) => {
              const project = projects[index];
              const isActive = active === index;
              const isHovered = hovered === index;
              const siblingActive = pair.some((i) => i !== index && active === i);

              return (
                <motion.div
                  key={index}
                  onClick={() => setActive(isActive ? null : index)}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative rounded-2xl overflow-hidden flex-shrink-0"
                  style={{ cursor: "pointer", minWidth: 0 }}
                  animate={{ flex: isActive ? 4 : siblingActive ? 0.3 : 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {/* IMAGE */}
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                    animate={{ scale: isHovered && !isActive ? 1.05 : 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* OVERLAY */}
                  <div
                    className={`absolute inset-0 transition-all duration-400 ${
                      isActive ? "bg-black/65" : isHovered ? "bg-black/50" : "bg-black/45"
                    }`}
                  />

                  {/* SHRUNKEN vertical label */}
                  {siblingActive && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <p
                        className="text-white/70 text-xs font-medium tracking-widest uppercase whitespace-nowrap"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        {project.title}
                      </p>
                    </div>
                  )}

                  {/* EXPANDED — just big title + close */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="relative z-10 h-full flex items-center justify-center text-white"
                      >
                        <h3 className="text-5xl font-heading tracking-tight">
                          {project.title}
                        </h3>

                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] text-white/60 hover:text-white/90 transition-colors"
                          style={{
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            cursor: "pointer",
                          }}
                          onClick={(e) => { e.stopPropagation(); setActive(null); }}
                        >
                          ✕ Close
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* DEFAULT — title only */}
                  {!isActive && !siblingActive && (
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                      <h3 className="text-white text-xl font-heading leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}