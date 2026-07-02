"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="py-16 px-[8%] bg-[#f8f4ef]">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT — text */}
        <div>
          {/* TAG */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.25em] uppercase text-[#5a7a4a] mb-4"
          >
            Our Story
          </motion.p>

          {/* HEADING */}
         <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
  className="text-2xl md:text-3xl font-heading text-[#1a1a1a] leading-snug mb-6"
>
  Every remarkable journey begins with a dream one driven by{" "}
  <span className="text-[#5a7a4a]">
    passion, perseverance, and continuous learning.
  </span>
</motion.h2>

          {/* BODY PARAGRAPHS */}
          {[
  "RadiantVision was founded on the belief that dedication and continuous learning can transform ideas into reality. What began as a journey of learning MEPFP design gradually evolved into a vision of creating safer, smarter, and more efficient buildings through engineering excellence.",
  
  "That vision became the foundation of RadiantVision. Built on technical expertise, integrity, innovation, and strong client relationships, the company officially began its journey on June 1, 2025. In the early days, countless discussions, planning sessions, and shared ideas helped shape the company's identity and long term goals.",
  
  "One of the first milestones was establishing RadiantVision's professional presence by sharing engineering knowledge and insights with the industry. Soon after, the company earned its first commercial project on June 26, 2025, turning a dream into reality. Today, RadiantVision continues to grow with the same commitment to quality, delivering reliable MEPFP design solutions while building lasting partnerships. Our journey is still unfolding, and every project becomes a new chapter in our story.",
].map((para, i) => (
  <motion.p
    key={i}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, delay: 0.15 + i * 0.08 }}
    viewport={{ once: true }}
    className="text-[#666] text-sm leading-relaxed mb-3 last:mb-0"
  >
    {para}
  </motion.p>
))}

          {/* DIVIDER */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 mb-5 h-[1px] bg-[#d6d2cc] origin-left"
          />

          {/* FOUNDER SIGNATURE */}
          <motion.div
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.45 }}
  viewport={{ once: true }}
  className="flex items-center gap-3"
>
  <div className="w-9 h-9 rounded-full bg-[#dde8d5] border border-[#c8d5b9] flex items-center justify-center text-[#5a7a4a] text-xs font-heading font-semibold shrink-0">
    RV
  </div>

  <div>
    <p
      className="text-[#1a1a1a] leading-none mb-0.5"
      style={{
        fontFamily: "Georgia, serif",
        fontSize: "18px",
        fontStyle: "italic",
      }}
    >
      RadiantVision
    </p>

    <p className="text-[10px] tracking-[0.15em] uppercase text-[#999]">
      Engineering the Future, Designing with Purpose
    </p>
  </div>
</motion.div>
        </div>

        {/* RIGHT — image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* MAIN IMAGE — reduced height */}
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4] w-full max-h-[420px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/about-story.jpg')" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
