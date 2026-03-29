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
    <section className="py-32 px-[8%] bg-black text-white overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-24">
          <h2 className="font-heading text-4xl md:text-5xl mb-4">
            Our Process
          </h2>
          <p className="font-body text-white/60 max-w-2xl mx-auto">
            A structured workflow designed to ensure precision and efficiency at every stage.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute top-5 left-0 h-[1px] bg-white/10"
          />

          {/* STEPS */}
          <div className="grid md:grid-cols-4 gap-10 relative z-10">

            {steps.map((step, i) => (
              <motion.div
  key={i}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.2, duration: 0.7 }}
  viewport={{ once: true }}
  className="group relative text-center"
>

  {/* HOVER GLOW */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
    <div className="absolute inset-0 blur-2xl bg-white/5 rounded-xl" />
  </div>

  {/* DOT */}
  <div className="relative w-12 h-12 mx-auto mb-6">

    {/* OUTER RING */}
    <div className="absolute inset-0 rounded-full border border-white/10 group-hover:scale-125 group-hover:border-white/30 transition duration-500" />

    {/* INNER DOT */}
    <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black border border-white/20 group-hover:bg-white group-hover:text-black transition duration-500">

      <span className="text-sm text-white/60 group-hover:text-black">
        {`0${i + 1}`}
      </span>
    </div>

  </div>

  {/* TITLE */}
  <h3 className="font-heading text-xl mb-3 transition duration-300 group-hover:translate-y-[-4px]">
    {step.title}
  </h3>

  {/* DESC */}
  <p className="font-body text-white/60 text-sm leading-relaxed transition duration-300 group-hover:text-white/80">
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