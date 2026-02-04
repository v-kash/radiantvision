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

  /* ---------------- VIDEO STARTS IMMEDIATELY ---------------- */
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

  /* ---------------- TEXT REVEAL ---------------- */
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

  /* ---------------- SCROLL PARALLAX ---------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax
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

      // Text drift + fade
      gsap.to(textRef.current, {
        y: -80,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center top", // ← Better timing
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ---------------- PREMIUM SERVICES ANIMATIONS ---------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Label reveal
      const labelTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#services",
          start: "top 70%",
        },
      });

      labelTl
        .from(".service-label-wrap .h-px", {
          scaleX: 0,
          duration: 1.2,
          ease: "power3.inOut",
          stagger: 0.1,
        })
        .from(
          ".service-label",
          {
            opacity: 0,
            letterSpacing: "0.4em",
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.8",
        );

      // 2. Title fade
      gsap.from(".service-title", {
        opacity: 0,
        y: 60,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-title",
          start: "top 75%",
        },
      });

      // 3. Service items - staggered reveal
      gsap.from(".service-item", {
        opacity: 0,
        y: 80,
        duration: 1.2,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-item",
          start: "top 80%",
        },
      });

      // 4. Parallax on scroll
      gsap.utils.toArray(".service-item").forEach((item, i) => {
        gsap.to(item, {
          y: -40 - i * 15,
          scrollTrigger: {
            trigger: "#services",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section
        ref={containerRef}
        className="relative min-h-[93vh] text-white overflow-hidden"
      >
        {/* VIDEO BACKGROUND */}
        <div ref={bgRef} className="absolute inset-0 will-change-transform">
          <video
            ref={video1Ref}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms]
            ${active === 1 ? "opacity-100" : "opacity-0"}`}
            src="/hero-2.mp4"
            muted
            playsInline
            preload="auto"
            loop
          />

          <video
            ref={video2Ref}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms]
            ${active === 2 ? "opacity-100" : "opacity-0"}`}
            src="/hero-3.mp4"
            muted
            playsInline
            preload="auto"
            loop
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div
          ref={textRef}
          className="relative z-10 mx-auto max-w-7xl px-6 pt-40"
        >
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05]">
              <span className="block overflow-hidden">
                <span className="block reveal-text">Global MEP & BIM</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block reveal-text">Engineering Solutions</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block reveal-text">
                  for Complex Built Environments
                </span>
              </span>
            </h1>

            <p className="mt-6 text-lg text-white/70 reveal-para">
              We deliver coordinated MEP design and BIM services that support
              large-scale commercial, residential, healthcare, and
              infrastructure projects across global markets.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#services"
                className="btn-anim bg-white text-black px-6 py-3 text-sm rounded-md"
              >
                View Our Capabilities
              </a>

              <a
                href="#contact"
                className="btn-anim border border-white/40 px-6 py-3 text-sm rounded-md"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="services"
        className="relative bg-gradient-to-b from-white via-gray-50 to-white text-black py-24 overflow-hidden"
      >
        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          {/* Header - Minimalist */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4 service-label-wrap">
              <div className="h-px w-8 bg-black/20" />
              <span className="service-label text-xs uppercase tracking-[0.2em] text-black/50 font-medium">
                What We Do
              </span>
              <div className="h-px w-8 bg-black/20" />
            </div>

            <h2 className="service-title text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-black tracking-tight">
              Engineering excellence
              <br />
              <span className="font-medium">for complex environments</span>
            </h2>
          </div>

          {/* Services - Flowing Vertical Layout */}
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Service 1 */}
            <div className="service-item group">
              <div className="grid md:grid-cols-12 gap-6 items-start">
                {/* Number */}
                <div className="md:col-span-2">
                  <div className="text-7xl md:text-8xl font-light leading-none text-black/5 group-hover:text-blue-500/20 transition-colors duration-700">
                    01
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-10 pt-0 md:pt-4">
                  <h3 className="text-2xl md:text-3xl font-light text-black mb-2">
                    MEP Engineering
                    <span className="font-medium"> Design</span>
                  </h3>
                  <div className="h-px w-12 bg-black/10 mb-4 group-hover:w-24 group-hover:bg-blue-500 transition-all duration-700" />

                  <p className="text-base md:text-lg text-black/60 leading-relaxed">
                    HVAC, electrical, plumbing, and fire protection systems
                    engineered to international standards with precision and
                    innovation.
                  </p>
                </div>
              </div>

              {/* Divider Line */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent mt-12 group-hover:via-blue-500/30 transition-colors duration-700" />
            </div>

            {/* Service 2 */}
            <div className="service-item group">
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2">
                  <div className="text-7xl md:text-8xl font-light leading-none text-black/5 group-hover:text-cyan-500/20 transition-colors duration-700">
                    02
                  </div>
                </div>

                <div className="md:col-span-10 pt-0 md:pt-4">
                  <h3 className="text-2xl md:text-3xl font-light text-black mb-2">
                    BIM Modeling &
                    <span className="font-medium"> Coordination</span>
                  </h3>
                  <div className="h-px w-12 bg-black/10 mb-4 group-hover:w-24 group-hover:bg-cyan-500 transition-all duration-700" />

                  <p className="text-base md:text-lg text-black/60 leading-relaxed">
                    Multi-discipline BIM models with advanced clash detection
                    and seamless coordination workflows that reduce risk and
                    improve constructability.
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent mt-12 group-hover:via-cyan-500/30 transition-colors duration-700" />
            </div>

            {/* Service 3 */}
            <div className="service-item group">
              <div className="grid md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-2">
                  <div className="text-7xl md:text-8xl font-light leading-none text-black/5 group-hover:text-indigo-500/20 transition-colors duration-700">
                    03
                  </div>
                </div>

                <div className="md:col-span-10 pt-0 md:pt-4">
                  <h3 className="text-2xl md:text-3xl font-light text-black mb-2">
                    Construction
                    <span className="font-medium"> Support</span>
                  </h3>
                  <div className="h-px w-12 bg-black/10 mb-4 group-hover:w-24 group-hover:bg-indigo-500 transition-all duration-700" />

                  <p className="text-base md:text-lg text-black/60 leading-relaxed">
                    Shop drawings, construction models, and comprehensive
                    technical support throughout the entire construction
                    lifecycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
