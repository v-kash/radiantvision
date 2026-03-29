"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Premium Commercial Tower",
    location: "Ahmedabad, India",
    type: "Commercial High-Rise",
    scope: "MEP Design, BIM Modeling (LOD 400), Coordination, Clash Detection",
    image: "/project1.jpg",
    overview:
      "A landmark commercial tower designed to meet modern business demands with high-performance MEP systems. The project required precise coordination between disciplines to ensure optimal space utilization and system efficiency.",
    points: [
      "Advanced HVAC system design ensuring thermal comfort and energy efficiency",
      "Electrical distribution with redundancy and backup systems",
      "Efficient plumbing design for water conservation",
      "Fire protection system compliant with international safety standards",
      "BIM-based clash detection reducing on-site conflicts significantly",
    ],
    tools: "Revit | Navisworks | AutoCAD | ASHRAE | NFPA",
  },
  {
    title: "Multi-Specialty Hospital",
    location: "Mumbai, India",
    type: "Healthcare Infrastructure",
    scope: "MEPFP Design & Coordination",
    image: "/project2.jpg",
    overview:
      "A critical healthcare facility requiring precision-engineered systems to support life-saving operations. The project focused on reliability, hygiene, and strict compliance.",
    points: [
      "HVAC systems designed for infection control and air quality",
      "Medical gas pipeline integration",
      "Uninterrupted power supply systems with backup",
      "Advanced fire safety and alarm systems",
      "Seamless coordination with architectural and structural teams",
    ],
    tools: "Revit | AutoCAD | NFPA | IPC | Healthcare Guidelines",
  },
  {
    title: "Industrial Manufacturing Facility",
    location: "Pune, India",
    type: "Industrial",
    scope: "BIM Modeling, Shop Drawings, Execution Support",
    image: "/project3.jpg",
    overview:
      "A large-scale manufacturing facility requiring robust and scalable MEP systems to support heavy industrial operations.",
    points: [
      "High-capacity electrical systems for machinery",
      "Industrial ventilation and exhaust systems",
      "Process piping and utility integration",
      "Detailed shop drawings for accurate execution",
      "On-site technical coordination",
    ],
    tools: "Revit | Navisworks | AutoCAD",
  },
  {
    title: "Luxury Residential Complex",
    location: "Bangalore, India",
    type: "Residential Development",
    scope: "MEP Design & BIM Coordination",
    image: "/project4.jpg",
    overview:
      "A premium residential project focused on comfort, efficiency, and smart infrastructure integration.",
    points: [
      "Energy-efficient HVAC systems",
      "Smart electrical layouts for modern living",
      "Optimized plumbing systems for water efficiency",
      "Fire safety systems for residential safety",
      "BIM coordination ensuring smooth construction workflow",
    ],
    tools: "Revit | AutoCAD",
  },
];
const ROWS = [[0, 1], [2, 3]];

export default function PremiumProjectsFixed() {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      {/* CUSTOM CURSOR — renders at root level so it floats above everything */}
      <AnimatePresence>
        {hovered !== null && active !== hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
            className="fixed z-[9999] pointer-events-none"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              style={{
                background: "#c8d5b9",
                color: "#1a1a1a",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "8px 14px",
                borderRadius: "999px",
                whiteSpace: "nowrap",
                userSelect: "none",
              }}
            >
              View Details
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        className="py-24 px-[8%] bg-[#f8f4ef]"
        onMouseMove={handleMouseMove}
      >
        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-[#5a7a4a] mb-4">
            Featured Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-heading text-[#1a1a1a] mb-6">
            Our Featured Work
          </h2>
          <p className="max-w-2xl mx-auto text-[#555] text-lg">
            A showcase of our expertise across diverse industries, highlighting
            our ability to handle complex engineering challenges with confidence.
          </p>
        </div>

        {/* ROWS */}
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
                    style={{
                      cursor: isActive ? "default" : "none",
                      minWidth: 0,
                    }}
                    animate={{
                      flex: isActive ? 4 : siblingActive ? 0.3 : 1,
                    }}
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
                        isActive
                          ? "bg-black/65"
                          : isHovered
                          ? "bg-black/50"
                          : "bg-black/45"
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

                    {/* EXPANDED CONTENT */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="relative z-10 p-8 h-full flex gap-8 text-white"
                        >
                          <div className="flex flex-col justify-end w-[40%] shrink-0">
                            <p className="text-xs tracking-[0.2em] uppercase text-[#c8d5b9] mb-2">
                              {project.type} · {project.location}
                            </p>
                            <h3 className="text-2xl font-heading mb-3 leading-tight">
                              {project.title}
                            </h3>
                            <p className="text-xs text-white/50 mb-3">
                              <span className="text-white/70">Scope: </span>
                              {project.scope}
                            </p>
                            <p className="text-sm text-white/75 leading-relaxed line-clamp-4">
                              {project.overview}
                            </p>
                          </div>

                          <div className="w-px bg-white/10 self-stretch" />

                          <div className="flex flex-col justify-end flex-1 overflow-hidden">
                            <p className="text-xs tracking-[0.15em] uppercase text-[#c8d5b9] mb-3">
                              Key Highlights
                            </p>
                            <ul className="space-y-1.5 mb-4">
                              {project.points.map((point, i) => (
                                <li key={i} className="flex gap-2 text-xs text-white/75">
                                  <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-[#c8d5b9]" />
                                  {point}
                                </li>
                              ))}
                            </ul>
                            <p className="text-xs text-white/40">
                              <span className="text-white/60">Tools: </span>
                              {project.tools}
                            </p>
                          </div>

                          {/* CLOSE BUTTON */}
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

                    {/* DEFAULT STATE */}
                    {!isActive && !siblingActive && (
                      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                        <p className="text-xs text-white/60 uppercase tracking-widest mb-1">
                          {project.type}
                        </p>
                        <h3 className="text-white text-lg font-heading leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-white/50 text-xs mt-1">{project.location}</p>
                      </div>
                    )}

                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}