"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header"; // adjust path if needed

export default function ServicesHero() {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      {/* HEADER (overlay on hero) */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Header />
      </div>

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero2.jpeg')", // replace with your image
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl text-white mb-6 leading-tight"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-body text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed mb-8"
        >
          Delivering precise MEPFP engineering and advanced BIM solutions to
          streamline design, coordination, and construction workflows.
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="px-8 py-3 bg-[#5a7a4a] text-white font-body text-sm tracking-wide rounded-[2px] hover:bg-[#4a6a3a] transition"
        >
          Request a Consultation
        </motion.button>
      </div>
    </section>
  );
}
