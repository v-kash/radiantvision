"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-28 px-[8%] bg-black overflow-hidden">

      {/* SUBTLE GLOW BACKGROUND */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl text-white mb-6 leading-tight"
        >
          Let’s Build Something Efficient Together
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="font-body text-white/60 text-lg max-w-2xl mx-auto mb-10"
        >
          Whether you need precise MEP design or advanced BIM solutions,
          our team is ready to support your project from concept to completion.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >

          {/* PRIMARY CTA */}
          <button className="px-8 py-3 bg-white text-black rounded-full text-sm font-body hover:bg-gray-200 transition">
            Request a Consultation
          </button>

          {/* SECONDARY CTA */}
          <button className="px-8 py-3 border border-white/20 text-white rounded-full text-sm font-body hover:bg-white/10 transition">
            View Our Projects
          </button>

        </motion.div>

      </div>
    </section>
  );
}