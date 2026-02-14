"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    id: 1,
    title: "Commercial",
    subtitle: "Developments",
    image: "/industries/commercial.jpg",
    description: "Office towers, retail complexes, and mixed-use developments",
    stats: "500+ Projects",
  },
  {
    id: 2,
    title: "Residential",
    subtitle: "High-Rise & Villas",
    image: "/industries/residential.jpg",
    description: "Luxury apartments, condominiums, and premium villas",
    stats: "200+ Buildings",
  },
  {
    id: 3,
    title: "Healthcare",
    subtitle: "& Hospitals",
    image: "/industries/healthcare.jpg",
    description: "Medical facilities with critical MEP requirements",
    stats: "50+ Facilities",
  },
  {
    id: 4,
    title: "Data",
    subtitle: "Centers",
    image: "/industries/datacenter.jpg",
    description: "Mission-critical infrastructure with precision cooling",
    stats: "30+ Centers",
  },
  {
    id: 5,
    title: "Industrial",
    subtitle: "& Manufacturing",
    image: "/industries/industrial.jpg",
    description: "Factories, warehouses, and production facilities",
    stats: "100+ Sites",
  },
  {
    id: 6,
    title: "Infrastructure",
    subtitle: "Projects",
    image: "/industries/infrastructure.jpg",
    description: "Transportation hubs, utilities, and public works",
    stats: "75+ Projects",
  },
];

export default function IndustriesSlider() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Header animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label reveal
      const labelTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#industries",
          start: "top 70%",
        },
      });

      labelTl
        .from(".industry-label-wrap .h-px", {
          scaleX: 0,
          duration: 1.2,
          ease: "power3.inOut",
          stagger: 0.1,
        })
        .from(
          ".industry-label",
          {
            opacity: 0,
            letterSpacing: "0.4em",
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.8",
        );

      // Title fade
      gsap.from(".industry-title", {
        opacity: 0,
        y: 60,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".industry-title",
          start: "top 75%",
        },
      });

      // Intro paragraph
      gsap.from(".industry-intro", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".industry-intro",
          start: "top 80%",
        },
      });

      // Initial card entrance
      gsap.from(".slider-card", {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".slider-card",
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    if (index < 0 || index >= industries.length) return;

    setIsAnimating(true);

    const direction = index > currentIndex ? -100 : 100;
    const slider = sliderRef.current;

    // Animate out current card
    gsap.to(slider.children[currentIndex], {
      x: -direction,
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        // Reset position after animation
        gsap.set(slider.children[currentIndex], { x: 0 });
      },
    });

    // Animate in new card
    gsap.fromTo(
      slider.children[index],
      {
        x: direction,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex(index);
          setIsAnimating(false);
        },
      },
    );
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % industries.length;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex =
      currentIndex === 0 ? industries.length - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  };

  // Auto-play (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section
      id="industries"
      ref={containerRef}
      className="relative bg-gradient-to-b from-white via-gray-50 to-white text-black py-24 overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-400/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-purple-400/8 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 industry-label-wrap">
            <div className="h-px w-8 bg-black/20" />
            <span className="industry-label text-xs uppercase tracking-[0.2em] text-black/50 font-medium">
              Industries We Serve
            </span>
            <div className="h-px w-8 bg-black/20" />
          </div>

          <h2 className="industry-title text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-black tracking-tight mb-6">
            Trusted across
            <br />
            <span className="font-medium">diverse sectors</span>
          </h2>

          <p className="industry-intro text-lg text-black/60 leading-relaxed max-w-2xl mx-auto">
            We partner with developers, consultants, and contractors across
            diverse sectors to deliver reliable and scalable MEP and BIM
            solutions.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Cards Container */}
          <div ref={sliderRef} className="relative h-[500px] md:h-[450px]">
            {industries.map((industry, index) => {
              return (
                <div
                  key={industry.id}
                  className="slider-card absolute inset-0"
                  style={{
                    opacity: index === currentIndex ? 1 : 0,
                    pointerEvents: index === currentIndex ? "auto" : "none",
                    zIndex: index === currentIndex ? 10 : 1,
                  }}
                >
                  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full">
                    <div className="grid md:grid-cols-2 h-full">
                      {/* Image Side - Diagonal Clip - ALWAYS ON LEFT */}
                      <div
                        className="relative overflow-hidden order-1"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                        }}
                      >
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-gray-200">
                          <img
                            src={industry.image}
                            alt={industry.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>

                        {/* Gradient Overlay - ALWAYS LEFT TO RIGHT */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black/60 group-hover:via-black/50 transition-all duration-500" />

                        {/* Number Overlay - ALWAYS ON RIGHT */}
                        <div className="absolute right-8 top-8">
                          <div className="text-8xl md:text-9xl font-light leading-none text-white/20 group-hover:text-white/30 transition-colors duration-500">
                            0{industry.id}
                          </div>
                        </div>

                        {/* Stats Badge - ALWAYS ON RIGHT */}
                        
                      </div>

                      {/* Content Side - ALWAYS ON RIGHT */}
                      <div className="relative p-8 md:p-12 flex flex-col justify-center order-2">
                        <div className="transform transition-all duration-700 translate-x-8 group-hover:translate-x-0 opacity-90 group-hover:opacity-100">
                          {/* Title */}
                          <h3 className="text-4xl md:text-5xl font-light text-black mb-1">
                            {industry.title}
                          </h3>
                          <h4 className="text-3xl md:text-4xl font-medium text-black mb-6">
                            {industry.subtitle}
                          </h4>

                          {/* Divider Line - ALWAYS BLUE */}
                          <div className="h-px w-16 bg-black/20 mb-6 group-hover:w-32 transition-all duration-700 group-hover:bg-blue-500" />

                          {/* Description */}
                          <p className="text-lg text-black/60 leading-relaxed mb-8">
                            {industry.description}
                          </p>

                          {/* Learn More Link */}
                          <div className="flex items-center gap-2 text-black/50 group-hover:text-black transition-colors duration-300">
                            <span className="text-sm font-medium uppercase tracking-wider">
                              Explore Projects
                            </span>
                            <svg
                              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Decorative Corner - ALWAYS TOP RIGHT, BLUE */}
                        <div className="absolute right-0 top-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                          <div className="w-full h-full bg-blue-500 rounded-full blur-3xl" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Border - ALWAYS BLUE */}
                    <div className="absolute inset-0 border-2 border-transparent rounded-2xl transition-colors duration-500 group-hover:border-blue-500/30" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 bg-white hover:bg-black text-black hover:text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <svg
              className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 bg-white hover:bg-black text-black hover:text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <svg
              className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-black"
                    : "w-2 h-2 bg-black/20 hover:bg-black/40"
                } disabled:cursor-not-allowed`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4 text-sm text-black/40 font-medium">
            <span className="text-black">{currentIndex + 1}</span> /{" "}
            {industries.length}
          </div>
        </div>
      </div>
    </section>
  );
}