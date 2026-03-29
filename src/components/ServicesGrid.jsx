"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "MEP Engineering Design",
    desc: "Efficient and code-compliant system design.",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200",
  },
  {
    title: "BIM Modeling",
    desc: "High-precision 3D BIM models.",
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
    title: "Facility Management BIM",
    desc: "Smart lifecycle and asset management.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 px-[8%] bg-white">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1f2a1f] mb-4">
            Our Services
          </h2>
          <p className="font-body text-[#5a6a5a] max-w-2xl mx-auto">
            Comprehensive MEP and BIM solutions tailored for modern construction.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden  border border-[#e5ece5] cursor-pointer"
            >

              {/* DEFAULT CONTENT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[#f7faf7] transition duration-300 group-hover:opacity-0">
                <h3 className="font-heading text-xl text-[#1f2a1f] mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-[#5a6a5a]">
                  {service.desc}
                </p>
              </div>

              {/* IMAGE SLIDE FROM TOP */}
              <div
                className="absolute inset-0 bg-cover bg-center translate-y-[-100%] group-hover:translate-y-0 transition duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]"
                style={{ backgroundImage: `url(${service.img})` }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* HOVER CONTENT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition duration-500 z-10">
                <h3 className="font-heading text-xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-white/80 mb-4">
                  {service.desc}
                </p>

                <span className="text-white text-sm tracking-wide">
                  Explore →
                </span>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}