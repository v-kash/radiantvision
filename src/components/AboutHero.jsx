"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";

export default function AboutHero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">

      {/* HEADER */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Header />
      </div>

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/about-hero.jpg')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">

        {/* SMALL TAG */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm tracking-[0.2em] uppercase text-[#c8d5b9]"
        >
          About Us
        </motion.span>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl text-white mb-6 leading-tight max-w-4xl"
        >
          Built on Precision.{" "}
          <br className="hidden md:block" />
          Driven by Purpose.
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-body text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
        >
          Behind every system we design is a commitment to quality,
          coordination, and long-term performance.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          {/* PRIMARY BUTTON */}
          <button className="group relative px-8 py-3 rounded-[2px] overflow-hidden text-sm tracking-wide text-white font-medium transition-all duration-300">
            <span className="absolute inset-0 bg-gradient-to-r from-[#4f6f52] to-[#739072] transition-all duration-300 group-hover:scale-105" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[#739072]/30 blur-xl" />
            <span className="relative z-10">Our Projects</span>
          </button>

          {/* SECONDARY BUTTON */}
          <button className="px-8 py-3 rounded-[2px] border border-white/30 text-white text-sm tracking-wide font-medium backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300">
            Get in Touch
          </button>
        </motion.div>

      </div>
    </section>
  );
}