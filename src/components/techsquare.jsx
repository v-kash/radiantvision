"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Tools that will scroll in the marquee
const tools = [
  { name: "Revit", logo: "/tools/revit.svg", color: "from-blue-500 to-blue-600" },
  { name: "Navisworks", logo: "/tools/navisworks.svg", color: "from-green-500 to-green-600" },
  { name: "AutoCAD", logo: "/tools/autocad.svg", color: "from-red-500 to-red-600" },
  { name: "BIM 360", logo: "/tools/bim360.svg", color: "from-orange-500 to-orange-600" },
  { name: "Rhino", logo: "/tools/rhino.svg", color: "from-gray-600 to-gray-700" },
  { name: "Grasshopper", logo: "/tools/grasshopper.svg", color: "from-green-600 to-green-700" },
];

const standards = [
  {
    name: "LOD 300-500",
    subtitle: "BIM Modeling",
    iconType: "cube",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "ASHRAE",
    subtitle: "HVAC Standards",
    iconType: "wind",
    color: "from-cyan-500 to-teal-500",
  },
  {
    name: "NFPA",
    subtitle: "Fire Protection",
    iconType: "flame",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "IBC",
    subtitle: "Building Code",
    iconType: "document",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "IEC",
    subtitle: "Electrical Standards",
    iconType: "bolt",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "ISO 19650",
    subtitle: "BIM Standards",
    iconType: "shield",
    color: "from-green-500 to-emerald-500",
  },
];

// Icon component
const StandardIcon = ({ type, className = "" }) => {
  const icons = {
    cube: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    wind: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.5 2c1.93 0 3.5 1.57 3.5 3.5S16.43 9 14.5 9H2m0 4h13.5c1.93 0 3.5 1.57 3.5 3.5S17.43 20 15.5 20 12 18.43 12 16.5m-6.5-9C5.5 5.57 3.93 4 2 4" />
      </svg>
    ),
    flame: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2c.754 0 1.396.627 1.516 1.422C14.19 6.474 15 9.15 15 12c0 3.866-2.686 7-6 7s-6-3.134-6-7c0-2.85.81-5.526 1.484-8.578C4.604 2.627 5.246 2 6 2c.754 0 1.396.627 1.516 1.422.632 3.068 1.484 5.744 1.484 8.578 0 1.657 1.343 3 3 3s3-1.343 3-3c0-2.834.852-5.51 1.484-8.578C16.604 2.627 17.246 2 18 2" />
      </svg>
    ),
    document: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    bolt: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    shield: (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  };

  return icons[type] || null;
};

export default function TechMarquee() {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label reveal
      const labelTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#tech-standards",
          start: "top 70%",
        },
      });

      labelTl
        .from(".tech-label-wrap .h-px", {
          scaleX: 0,
          duration: 1.2,
          ease: "power3.inOut",
          stagger: 0.1,
        })
        .from(
          ".tech-label",
          {
            opacity: 0,
            letterSpacing: "0.4em",
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.8",
        );

      // Title fade
      gsap.from(".tech-title", {
        opacity: 0,
        y: 60,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tech-title",
          start: "top 75%",
        },
      });

      // Intro paragraph
      gsap.from(".tech-intro", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".tech-intro",
          start: "top 80%",
        },
      });

      // Marquee container fade in
      gsap.from(".marquee-container", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".marquee-container",
          start: "top 85%",
        },
      });

      // Standards section header
      gsap.from(".standards-header", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".standards-header",
          start: "top 85%",
        },
      });

      // Standards badges stagger
      gsap.from(".standard-badge", {
        opacity: 0,
        scale: 0.8,
        y: 30,
        duration: 0.8,
        stagger: 0.08,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".standard-badge",
          start: "top 85%",
        },
      });

      // Infinite marquee scroll
      const marquee = marqueeRef.current;
      if (marquee) {
        const marqueeContent = marquee.querySelector(".marquee-content");
        const marqueeWidth = marqueeContent.offsetWidth / 2;

        gsap.to(marqueeContent, {
          x: -marqueeWidth,
          duration: 30,
          ease: "none",
          repeat: -1,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
      <section
      id="tech-standards"
      ref={containerRef}
      className="relative bg-black text-white py-24 overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 tech-label-wrap">
            <div className="h-px w-8 bg-white/20" />
            <span className="tech-label text-xs uppercase tracking-[0.2em] text-white/50 font-medium">
              Enterprise Grade
            </span>
            <div className="h-px w-8 bg-white/20" />
          </div>

          <h2 className="tech-title text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-white tracking-tight mb-6">
            Technology &<br />
            <span className="font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Standards
            </span>
          </h2>

          <p className="tech-intro text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Our workflows align with global BIM execution plans and
            international engineering standards to ensure accuracy, efficiency,
            and compliance.
          </p>
        </div>

        {/* Software Marquee */}
        <div className="marquee-container mb-20">
          {/* Label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-white/5" />
            <span className="text-sm uppercase tracking-[0.3em] text-white/40 font-medium">
              Software Stack
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/20 to-white/5" />
          </div>

          {/* Marquee Container */}
          <div
            ref={marqueeRef}
            className="relative overflow-hidden py-8"
          >
            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

            {/* Marquee Content - Duplicated for seamless loop */}
            <div className="marquee-content flex gap-8 will-change-transform">
              {/* First set */}
              {tools.map((tool, index) => (
                <div
                  key={`tool-1-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-48 h-48 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col items-center justify-center p-6 hover:scale-105">
                    {/* Glow effect on hover */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
                    />

                    {/* Logo */}
                    <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
                      <div className="absolute inset-0 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-500" />
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="relative w-16 h-16 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>

                    {/* Name */}
                    <span className="text-lg font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                      {tool.name}
                    </span>

                    {/* Accent Line */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`}
                    />
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {tools.map((tool, index) => (
                <div
                  key={`tool-2-${index}`}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-48 h-48 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col items-center justify-center p-6 hover:scale-105">
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
                    />
                    <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
                      <div className="absolute inset-0 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-500" />
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="relative w-16 h-16 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                    <span className="text-lg font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                      {tool.name}
                    </span>
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Standards - 3D Rotating Seals */}
        <div>
          {/* Header */}
          <div className="standards-header mb-10">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-white/5" />
              <span className="text-sm uppercase tracking-[0.3em] text-white/40 font-medium">
                Compliance Standards
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/20 to-white/5" />
            </div>
          </div>

          {/* 3D Seal Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto perspective-1000">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="standard-badge group"
                style={{ perspective: "1000px" }}
              >
                {/* 3D Rotating Seal */}
                <div 
                  className="relative preserve-3d transition-transform duration-700 hover:rotate-y-180"
                  style={{ 
                    transformStyle: "preserve-3d",
                    transition: "transform 0.7s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "rotateY(180deg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "rotateY(0deg)";
                  }}
                >
                  {/* Front Face - Seal Design */}
                  <div 
                    className="absolute inset-0 backface-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="relative w-full aspect-square">
                      {/* Outer Circle */}
                      <div className={`absolute inset-0 rounded-full border-4 border-white/20 bg-gradient-to-br ${standard.color} p-1`}>
                        {/* Inner Circle */}
                        <div className="w-full h-full rounded-full border-2 border-white/30 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center p-4">
                          {/* Icon */}
                          <div className="mb-2">
                            <StandardIcon 
                              type={standard.iconType} 
                              className="w-10 h-10 text-white"
                            />
                          </div>
                          
                          {/* Name */}
                          <h4 className="text-sm font-bold text-white text-center leading-tight">
                            {standard.name}
                          </h4>
                          
                          {/* Decorative Stars/Dots */}
                          <div className="flex gap-1 mt-2">
                            <div className="w-1 h-1 rounded-full bg-white/60" />
                            <div className="w-1 h-1 rounded-full bg-white/60" />
                            <div className="w-1 h-1 rounded-full bg-white/60" />
                          </div>
                        </div>
                      </div>

                      {/* Glow Effect */}
                      <div 
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${standard.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                      />

                      {/* Rotating Badge Border Animation */}
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div 
                          className={`absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r ${standard.color} animate-spin-slow`}
                          style={{
                            backgroundClip: "padding-box",
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                            padding: "2px",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Back Face - Details */}
                  <div 
                    className="absolute inset-0 backface-hidden rotate-y-180"
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="relative w-full aspect-square">
                      {/* Background */}
                      <div className={`absolute inset-0 rounded-full border-4 border-white/20 bg-gradient-to-br ${standard.color} p-1`}>
                        <div className="w-full h-full rounded-full border-2 border-white/30 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4">
                          {/* Check Icon */}
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
                            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          
                          {/* Subtitle */}
                          <p className="text-xs text-white/90 text-center font-medium leading-tight">
                            {standard.subtitle}
                          </p>
                          
                          {/* Verified Badge */}
                          <div className="mt-2 px-2 py-1 bg-white/10 rounded-full">
                            <span className="text-[10px] text-white/70 font-bold uppercase tracking-wider">
                              Certified
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Glow */}
                      <div 
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${standard.color} opacity-30 blur-xl`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 py-8 border-t border-white/10">
          <div className="flex items-center gap-3 text-white/50">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium">ISO 19650 Compliant</span>
          </div>
          <div className="w-px h-6 bg-white/10" />
          <div className="flex items-center gap-3 text-white/50">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-medium">Global BIM Standards</span>
          </div>
          <div className="w-px h-6 bg-white/10" />
          <div className="flex items-center gap-3 text-white/50">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm font-medium">Quality Assured</span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}