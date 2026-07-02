"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-16 px-[8%] bg-[#1a1f16] overflow-hidden">
      {/* RADIAL GLOW */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#5a7a4a]/10 blur-[140px] rounded-full" />
      </div>

      {/* SOFT TOP LIGHT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5a7a4a]/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.25em] uppercase text-[#5a7a4a] mb-5"
        >
          Start Your Project
        </motion.p>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl md:text-5xl text-white mb-6 leading-tight"
        >
          Let’s Build Something Efficient Together
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-[#a0a89a] text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Whether you need precise MEPFP design or advanced BIM solutions, our
          team is ready to support your project from concept to completion.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.7 }}
  className="flex flex-col sm:flex-row justify-center gap-4"
>
  {/* PRIMARY CTA */}
  <Link
    href="/contact"
    className="group relative inline-flex items-center gap-3 overflow-hidden px-8 py-3 text-sm tracking-wide text-white font-medium rounded-[2px]"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-[#4f6f52] to-[#739072] transition-transform duration-300 group-hover:scale-105" />
    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[#739072]/30 blur-xl" />

    <span className="relative z-10">Request a Consultation</span>
    <span className="relative z-10 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
      →
    </span>
  </Link>

  {/* SECONDARY CTA */}
  <Link
    href="/projects"
    className="group relative px-8 py-3 text-sm tracking-wide text-white rounded-[2px] border border-white/10 hover:border-[#5a7a4a]/40 transition"
  >
    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[#5a7a4a]/10" />
    <span className="relative z-10">View Our Projects</span>
  </Link>
</motion.div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1a1f16] to-transparent pointer-events-none" />
    </section>
  );
}
