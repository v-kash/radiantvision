"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "MEPFP Engineering Design",
    desc: "Efficient and code-compliant system design.",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200",
  },
  {
    title: "BIM Modeling",
    desc: "High-precision BIM models for project delivery.",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200",
  },
  {
    title: "BIM Coordination",
    desc: "Clash-free coordination across disciplines.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
  },
  {
    title: "Construction Support",
    desc: "Reliable support during execution.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
  },
  {
    title: "Lighting Design & Simulation",
    desc: "Lighting solutions through simulation and analysis",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 px-[8%] bg-[#f8f4ef]">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl tracking-[0.25em] uppercase text-[#5a7a4a] mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-6xl text-[#1a1a1a] mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-[#777] text-base max-w-xl mx-auto leading-relaxed"
          >
            Comprehensive MEPFP and BIM solutions tailored for modern
            construction.
          </motion.p>
        </div>

        {/* 5-COL GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden rounded-[2px] cursor-pointer border border-[#e0dbd4]"
            >
              {/* DEFAULT STATE — cream bg */}
              <div className="absolute inset-0 bg-[#f0ece5] flex flex-col justify-between p-6 transition-opacity duration-500 group-hover:opacity-0">
                {/* Number */}
                <span className="text-xs font-medium tracking-[0.2em] text-[#5a7a4a]/50 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title + desc at bottom */}
                <div>
                  {/* Accent line */}
                  <div className="w-6 h-[2px] bg-[#5a7a4a] mb-4" />
                  <h3 className="font-heading text-base text-[#1a1a1a] leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#888] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* IMAGE — slides up from bottom on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]"
                style={{ backgroundImage: `url(${service.img})` }}
              />

              {/* DARK OVERLAY on image */}
              <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* HOVER CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                {/* Number */}
                <span className="text-xs font-medium tracking-[0.2em] text-white/40 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  {/* Green accent line */}
                  <div className="w-6 h-[2px] bg-[#c8d5b9] mb-4" />
                  <h3 className="font-heading text-lg text-white leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-white/65 leading-relaxed mb-4">
                    {service.desc}
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
