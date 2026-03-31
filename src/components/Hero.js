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

      tl.fromTo(".reveal-text",{ yPercent: 120 },{ yPercent: 0, duration: 1.2, stagger: 0.14 })
        .fromTo(".reveal-para",{ opacity: 0, y: 12 },{ opacity: 1, y: 0, duration: 0.9 },"-=0.3")
        .fromTo(".btn-anim",{ opacity: 0, scale: 0.96 },{ opacity: 1, scale: 1, duration: 0.6, stagger: 0.12 },"-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current,{
        yPercent: 60,
        ease: "none",
        scrollTrigger:{ trigger: containerRef.current, start: "top top", end: "bottom top", scrub: true },
      });

      gsap.to(textRef.current,{
        y: -80,
        opacity: 0,
        ease: "none",
        scrollTrigger:{ trigger: containerRef.current, start: "center top", end: "bottom top", scrub: true },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* HERO */}
      <section ref={containerRef} className="relative min-h-[93vh] text-white overflow-hidden">

        {/* VIDEO */}
        <div ref={bgRef} className="absolute inset-0">
          <video ref={video1Ref} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${active === 1 ? "opacity-100" : "opacity-0"}`} src="/hero-2.mp4" muted playsInline loop />
          <video ref={video2Ref} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${active === 2 ? "opacity-100" : "opacity-0"}`} src="/hero-3.mp4" muted playsInline loop />
        </div>

        {/* OVERLAY (SOFTER) */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div ref={textRef} className="relative z-10 mx-auto max-w-7xl px-6 pt-40">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05]">
              <span className="block overflow-hidden"><span className="block reveal-text">Global MEP & BIM</span></span>
              <span className="block overflow-hidden"><span className="block reveal-text">Engineering Solutions</span></span>
              <span className="block overflow-hidden"><span className="block reveal-text">for Complex Built Environments</span></span>
            </h1>

            <p className="mt-6 text-lg text-white/70 reveal-para">
              We deliver coordinated MEP design and BIM services for global projects.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#services" className="btn-anim bg-[#5a7a4a] text-white px-6 py-3 text-sm rounded-md hover:bg-[#4a693d] transition">
                View Our Capabilities
              </a>

              <a href="#contact" className="btn-anim border border-white/40 px-6 py-3 text-sm rounded-md hover:bg-white/10 transition">
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative bg-[#f8f4ef] text-black py-16 overflow-hidden">

        {/* Soft glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c8d5b9]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#e0dbd4]/30 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">

          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[#5a7a4a]/20" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#6b705c] font-medium">What We Do</span>
              <div className="h-px w-8 bg-[#5a7a4a]/20" />
            </div>

            <h2 className="text-5xl font-light">
              Engineering excellence
              <br />
              <span className="font-medium text-[#5a7a4a]">for complex environments</span>
            </h2>
          </div>

          {/* Services */}
          <div className="max-w-4xl mx-auto space-y-16">

            {[ 
              ["01","MEP Engineering Design","HVAC, electrical, plumbing, and fire protection systems engineered to international standards."],
              ["02","BIM Modeling & Coordination","Multi-discipline BIM models with clash detection and coordination workflows."],
              ["03","Construction Support","Shop drawings and technical support across the construction lifecycle."]
            ].map((s,i)=>(
              <div key={i} className="service-item group">

                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-2">
                    <div className="text-8xl text-[#5a7a4a]/10 group-hover:text-[#5a7a4a]/30 transition">
                      {s[0]}
                    </div>
                  </div>

                  <div className="md:col-span-10">
                    <h3 className="text-3xl font-light mb-2">
                      {s[1].split(" ")[0]} <span className="font-medium">{s[1].split(" ").slice(1).join(" ")}</span>
                    </h3>

                    <div className="h-px w-12 bg-[#5a7a4a]/20 mb-4 group-hover:w-24 group-hover:bg-[#5a7a4a] transition-all" />

                    <p className="text-[#5f5f5f]">{s[2]}</p>
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#e0dbd4] to-transparent mt-12 group-hover:via-[#5a7a4a]/30 transition" />
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}