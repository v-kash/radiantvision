"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Design",
    desc: "Efficient and code-compliant MEP system design tailored to your project.",
  },
  {
    title: "Model",
    desc: "Accurate BIM models to visualize and plan every detail.",
  },
  {
    title: "Coordinate",
    desc: "Clash-free integration across all disciplines before construction.",
  },
  {
    title: "Deliver",
    desc: "Final outputs and support for smooth project execution.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 px-[8%] bg-[#f6f4ee] text-[#1a1f16] overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[0.25em] uppercase text-[#5a7a4a] mb-4"
          >
            Our Workflow
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl mb-4"
          >
            Our Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#6b705c] max-w-2xl mx-auto"
          >
            A structured workflow designed to ensure precision and efficiency at every stage.
          </motion.p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* BASE LINE */}
          <div className="absolute top-6 left-0 w-full h-[1px] bg-[#5a7a4a]/15" />

          {/* ACTIVE LINE */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute top-6 left-0 h-[1px] bg-[#5a7a4a]"
          />

          {/* STEPS */}
          <div className="grid md:grid-cols-4 gap-12 relative z-10">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                className="group relative text-center"
              >

                {/* SOFT HOVER LIGHT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute inset-0 blur-2xl bg-[#5a7a4a]/10 rounded-xl" />
                </div>

                {/* DOT SYSTEM */}
                <div className="relative w-16 h-16 mx-auto mb-8">

                  {/* OFFSET FRAME */}

                  {/* OUTER RING */}
                  <div className="absolute inset-0 rounded-full border border-[#5a7a4a]/30 group-hover:scale-110 transition duration-500" />

                  {/* INNER CORE */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-[#f6f4ee] border border-[#5a7a4a]/20 group-hover:bg-[#5a7a4a] transition duration-500">

                    <span className="text-sm text-[#5a7a4a] group-hover:text-white transition">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                  </div>
                </div>

                {/* TITLE */}
                <h3 className="font-heading text-xl mb-3 transition duration-300 group-hover:-translate-y-1">
                  {step.title}
                </h3>

                {/* DESC */}
                <p className="text-[#6b705c] text-sm leading-relaxed transition duration-300 group-hover:text-[#1a1f16]">
                  {step.desc}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}