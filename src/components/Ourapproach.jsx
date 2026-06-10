"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const steps = [
  {
    title: "Client Consultation",
    desc: "Understanding project requirements, objectives, and expectations to establish a clear project direction.",
    image: "/process1.jpg",
  },
  {
    title: "Planning & Strategy",
    desc: "Evaluating codes, safety standards, operational needs, and recommending the most suitable engineering solutions.",
    image: "/process2.jpg",
  },
  {
    title: "Engineering Design",
    desc: "Developing efficient MEPFP designs, BIM deliverables, and technical documentation tailored to project requirements.",
    image: "/process3.jpg",
  },
  {
    title: "Coordination & Review",
    desc: "Ensuring designs are coordinated, compliant, and aligned with project objectives before finalization.",
    image: "/process4.jpg",
  },
  {
    title: "Project Delivery",
    desc: "Providing finalized drawings, schedules, and documentation in accordance with client standards and requirements.",
    image: "/process5.jpg",
  },
  {
    title: "Design Support",
    desc: "Offering design clarifications and engineering guidance when required during project implementation.",
    image: "/process6.jpg",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const index = Math.min(steps.length - 1, Math.floor(v * steps.length));
      setActiveStep(index);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      style={{ height: `${steps.length * 100}vh` }}
      className="relative bg-[#f8f4ef]"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center px-[8%] overflow-hidden">

        {/* HEADING */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.2em] uppercase text-[#5a7a4a] mb-3">
            Our Approach
          </p>
          <h2 className="text-3xl md:text-5xl font-heading text-[#1a1a1a] mb-4">
            Our Engineering Process
          </h2>
          <p className="max-w-xl mx-auto text-[#777] text-base">
            Scroll to walk through how we take every project from idea to handover.
          </p>
        </div>

        {/* PROGRESS TRACK */}
        <div className="relative mb-8">

          {/* Background track */}
          <div className="h-[2px] w-full bg-[#d6d2cc] rounded-full" />

          {/* Animated fill */}
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-[#5a7a4a] rounded-full origin-left"
            style={{ width: progressWidth }}
          />

          {/* Step dots + numbers */}
          <div className="absolute top-1/2 left-0 w-full flex justify-between -translate-y-1/2">
            {steps.map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-3">

                {/* Number above dot */}
                <motion.span
                  animate={{
                    color: i <= activeStep ? "#5a7a4a" : "#bbb",
                    fontWeight: i === activeStep ? 600 : 400,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-[11px] tracking-widest -mt-7"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>

                {/* Dot */}
                <motion.div
                  animate={{
                    scale: i === activeStep ? 1.4 : i < activeStep ? 1.1 : 1,
                    backgroundColor: i <= activeStep ? "#5a7a4a" : "#fff",
                    borderColor: i <= activeStep ? "#5a7a4a" : "#d6d2cc",
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-4 h-4 rounded-full border-2"
                />

                {/* Step label below dot — active only */}
                <motion.span
                  animate={{
                    opacity: i === activeStep ? 1 : 0,
                    y: i === activeStep ? 0 : 4,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-[10px] tracking-wide text-transparent uppercase whitespace-nowrap mt-1 font-medium"
                >
                  Active
                </motion.span>

              </div>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-center mt-6">

          {/* LEFT — step text */}
          <div>
            <motion.p
              key={`label-${activeStep}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[11px] tracking-[0.25em] uppercase text-[#5a7a4a] mb-4"
            >
              Step {activeStep + 1} of {steps.length}
            </motion.p>

            <motion.h3
              key={`title-${activeStep}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-4xl md:text-5xl font-heading text-[#1a1a1a] leading-tight mb-6"
            >
              {steps[activeStep].title}
            </motion.h3>

            <motion.p
              key={`desc-${activeStep}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-[#666] text-lg leading-relaxed max-w-md"
            >
              {steps[activeStep].desc}
            </motion.p>

            {/* Step counter pills */}
            <div className="flex gap-2 mt-8">
              {steps.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    width: i === activeStep ? 32 : 8,
                    backgroundColor: i === activeStep ? "#5a7a4a" : "#d6d2cc",
                  }}
                  transition={{ duration: 0.4 }}
                  className="h-[3px] rounded-full"
                />
              ))}
            </div>
          </div>

          {/* RIGHT — fading image */}
          <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden">

            {/* Ghost big number watermark */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none select-none">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`watermark-${activeStep}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.18, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="text-[160px] font-heading text-white leading-none"
                  style={{ textShadow: "0 4px 32px rgba(0,0,0,0.3)" }}
                >
                  {activeStep + 1}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Images with crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${activeStep}`}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${steps[activeStep].image})` }}
              />
            </AnimatePresence>

            {/* Overlay gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-[5]" />

            {/* Bottom label on image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`imglabel-${activeStep}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute bottom-5 left-5 z-20"
              >
                <span className="text-xs tracking-[0.15em] uppercase text-white/60">
                  Phase {activeStep + 1}
                </span>
                <p className="text-white text-sm font-medium mt-0.5">
                  {steps[activeStep].title}
                </p>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* SCROLL HINT */}
        <motion.div
          animate={{ opacity: activeStep === 0 ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-[#aaa]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="w-[1px] h-6 bg-[#aaa]"
          />
        </motion.div>

      </div>
    </section>
  );
}