"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);

  const [active, setActive] = useState(1);

  useEffect(() => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (!v1 || !v2) return;

    v1.muted = true;
    v2.muted = true;

    v1.play().catch(() => {});
    v2.play().catch(() => {});

    const interval = setInterval(() => {
      setActive((prev) => (prev === 1 ? 2 : 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".reveal-text",
        { yPercent: 120 },
        { yPercent: 0, duration: 1.2, stagger: 0.14 },
      )
        .fromTo(
          ".reveal-para",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.3",
        )
        .fromTo(
          ".btn-anim",
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.6, stagger: 0.12 },
          "-=0.4",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 60,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(textRef.current, {
        y: -80,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        ref={containerRef}
        className="relative min-h-[93vh] text-white overflow-hidden"
      >
        {/* VIDEO */}
        <div ref={bgRef} className="absolute inset-0">
          <video
            ref={video1Ref}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${active === 1 ? "opacity-100" : "opacity-0"}`}
            src="/hero-2.mp4"
            muted
            playsInline
            loop
          />
          <video
            ref={video2Ref}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${active === 2 ? "opacity-100" : "opacity-0"}`}
            src="/hero-3.mp4"
            muted
            playsInline
            loop
          />
        </div>

        {/* OVERLAY (SOFTER) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div
          ref={textRef}
          className="relative z-10 mx-auto max-w-7xl px-6 pt-40"
        >
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05]">
              <span className="block overflow-hidden">
                <span className="block reveal-text">Global MEPFP & BIM</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block reveal-text">Engineering Solutions</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block reveal-text">
                  From Vision To Built Excellence
                </span>
              </span>
            </h1>

            <div className="mt-8 flex gap-4">
              <a
                href="#services"
                className="btn-anim bg-[#5a7a4a] text-white px-6 py-3 text-sm rounded-md hover:bg-[#4a693d] transition"
              >
                View Our Capabilities
              </a>

              <a
                href="#contact"
                className="btn-anim border border-white/40 px-6 py-3 text-sm rounded-md hover:bg-white/10 transition"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative bg-[#f8f4ef] text-black pt-16 overflow-hidden"
      >
        {/* Soft glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c8d5b9]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#e0dbd4]/30 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[#5a7a4a]/20" />
              <span className="text-xl uppercase tracking-[0.2em] text-[#6b705c] font-medium">
                What We Do
              </span>
              <div className="h-px w-8 bg-[#5a7a4a]/20" />
            </div>
            <h2 className="text-6xl font-light leading-snug">
              Engineering excellence
            </h2>
          </div>

          {/* Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              [
                "01",
                "MEPFP",
                "Engineering Design",
                "HVAC, electrical, plumbing, and fire protection systems engineered to international standards.",
                "🔧",
              ],
              [
                "02",
                "BIM",
                "Modeling & Coordination",
                "Multi-discipline BIM models with clash detection and coordination workflows.",
                "📐",
              ],
              [
                "03",
                "Construction",
                "Support",
                "Shop drawings and technical support across the construction lifecycle.",
                "🏗️",
              ],
            ].map(([num, word1, word2, desc], i) => (
              <div
                key={i}
                className="group relative rounded-[20px] border border-white/75 bg-white/55 backdrop-blur-md p-8 overflow-hidden
                     transition-all duration-300
                     hover:-translate-y-1.5 hover:bg-white/80 hover:border-[#5a7a4a]/30 hover:shadow-[0_20px_48px_rgba(90,122,74,0.13)]"
              >
                {/* Glass sheen */}

                {/* Number */}
                <div className="text-[56px] font-extralight leading-none tracking-tighter text-[#5a7a4a]/80  mb-4">
                  {num}
                </div>

                {/* Divider */}
                <div className="h-[1.5px] w-8 bg-[#5a7a4a]/25 mb-3.5 rounded-full transition-all duration-300 group-hover:w-14 group-hover:bg-[#5a7a4a]" />

                {/* Title */}
                <h3 className="text-[17px] font-semibold text-[#27411e] mb-2.5 leading-snug">
                  {word1}{" "}
                  <span className="font-semibold text-[#27411e]">{word2}</span>
                </h3>

                {/* Description */}
                <p className="text-sm text-[#577b44] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
