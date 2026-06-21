"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HumanTouchCTA() {
  return (
    <>
      {/* ── PART 1: HUMAN TOUCH ── */}
      <section className="bg-[#1a1f16] overflow-hidden">
        <div className="px-[8%] pt-24 pb-16 border-b border-white/[0.06]">

          {/* Oversized background word */}
          <div
            className="absolute left-0 right-0 flex justify-center pointer-events-none select-none overflow-hidden"
            style={{ marginTop: "-2rem" }}
          >
            <span
              className="font-heading text-white/[0.03] whitespace-nowrap"
              style={{ fontSize: "clamp(80px, 18vw, 220px)", lineHeight: 1 }}
            >
              PARTNERS
            </span>
          </div>

          <div className="relative z-10">

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.3em] uppercase text-[#5a7a4a] mb-8"
            >
              Our Mindset
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-heading text-white leading-[0.95] tracking-tight mb-10"
              style={{ fontSize: "clamp(40px, 8vw, 96px)" }}
            >
              More Than<br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(168,192,144,0.6)" }}
              >
                Just Engineers.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#a0a89a] text-base leading-relaxed max-w-lg mb-10"
            >
              We see ourselves as partners in your project. Every system we
              design impacts performance, cost, and long-term operation.
              That's why we take ownership of our work and stay committed
              from concept to completion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {["Ownership", "Transparency", "Commitment"].map((val) => (
                <span
                  key={val}
                  className="text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-full text-[#a8c090]"
                  style={{
                    background: "rgba(90,122,74,0.08)",
                    border: "1px solid rgba(90,122,74,0.2)",
                  }}
                >
                  {val}
                </span>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── PART 2: CTA ── */}
      <section className="bg-[#f8f4ef] overflow-hidden">
        <div className="px-[8%] pt-16 pb-24 relative">

          {/* Oversized background word */}
          <div className="absolute left-0 right-0 bottom-0 flex justify-end pointer-events-none select-none overflow-hidden">
            <span
              className="font-heading whitespace-nowrap pr-[4%]"
              style={{
                fontSize: "clamp(80px, 18vw, 220px)",
                lineHeight: 1,
                color: "rgba(26,31,22,0.04)",
              }}
            >
              TOGETHER
            </span>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-end">

            {/* Left */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-xs tracking-[0.3em] uppercase text-[#5a7a4a] mb-8"
              >
                Get Started
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="font-heading text-[#1a1a1a] leading-[0.95] tracking-tight"
                style={{ fontSize: "clamp(40px, 8vw, 96px)" }}
              >
                Let's Work<br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(90,122,74,0.5)" }}
                >
                  Together.
                </span>
              </motion.h2>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-8">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[#777] text-base leading-relaxed"
              >
                If you're looking for a team that values precision,
                coordination, and real world performance. we're here.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex gap-4 flex-wrap"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-[2px] px-7 py-3.5 text-sm tracking-wide text-white font-medium"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#4f6f52] to-[#739072] transition-transform duration-300 group-hover:scale-105" />
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[#739072]/30 blur-xl" />
                  <span className="relative z-10">Start a Project</span>
                  <span className="relative z-10 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-[2px] border border-[#1a1a1a]/20 px-7 py-3.5 text-sm tracking-wide text-[#1a1a1a]/60 hover:text-[#1a1a1a] hover:border-[#1a1a1a]/40 transition-all duration-300"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}