"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const workflowSteps = [
  {
    id: 1,
    number: "01",
    title: "Discover",
    subtitle: "Understanding Your Vision",
    description:
      "Every successful project begins with listening. We take the time to understand your goals, challenges, and project requirements before any design work starts.",
    details: [
      "Review project objectives and architectural intent",
      "Discuss scope, timelines, and key expectations",
      "Identify codes, standards, and project constraints",
    ],
    image: "/workflow/discover.jpg",
    color: "from-blue-500 to-cyan-500",
    accentColor: "blue-500",
  },

  {
    id: 2,
    number: "02",
    title: "Design",
    subtitle: "Engineering Smart Solutions",
    description:
      "Our engineers develop efficient MEPFP systems tailored to your project's unique operational and performance needs.",
    details: [
      "HVAC, electrical, plumbing, and fire protection design",
      "Engineering analysis and load calculations",
      "Equipment selection and system optimization",
    ],
    image: "/workflow/design.jpg",
    color: "from-cyan-500 to-teal-500",
    accentColor: "cyan-500",
  },

  {
    id: 3,
    number: "03",
    title: "Coordinate",
    subtitle: "Seamless BIM Collaboration",
    description:
      "Through BIM coordination, we align every discipline to minimize conflicts and improve construction efficiency.",
    details: [
      "Revit MEP modeling and documentation",
      "Clash detection across all disciplines",
      "Coordinated drawings and specifications",
    ],
    image: "/workflow/coordinate.jpg",
    color: "from-purple-500 to-pink-500",
    accentColor: "purple-500",
  },

  {
    id: 4,
    number: "04",
    title: "Validate",
    subtitle: "Quality & Compliance Assurance",
    description:
      "Every design undergoes rigorous review to ensure accuracy, compliance, and readiness for approval.",
    details: [
      "Comprehensive internal reviews",
      "Cross-disciplinary design verification",
      "Client feedback integration and refinements",
      "Permit and authority submission support",
    ],
    image: "/workflow/validate.jpg",
    color: "from-orange-500 to-amber-500",
    accentColor: "orange-500",
  },

 {
  id: 5,
  number: "05",
  title: "Deliver",
  subtitle: "Documentation Excellence",
  description:
    "We provide comprehensive project documentation tailored to client requirements and industry standards, ensuring a smooth transition from design to execution.",
  details: [
    "Standardized documentation aligned with client requirements",
    "Detailed schedules, specifications, and deliverables",
    "Quality-checked final documentation for project handover",
  ],
  image: "/workflow/deliver.jpg",
  color: "from-green-500 to-emerald-500",
  accentColor: "green-500",
},]

export default function WorkflowTimeline() {
  const containerRef = useRef(null);
  const progressLineRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label reveal
      const labelTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#workflow",
          start: "top 70%",
        },
      });

      labelTl
        .from(".workflow-label-wrap .h-px", {
          scaleX: 0,
          duration: 1.2,
          ease: "power3.inOut",
          stagger: 0.1,
        })
        .from(
          ".workflow-label",
          {
            opacity: 0,
            letterSpacing: "0.4em",
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.8",
        );

      // Title fade
      gsap.from(".workflow-title", {
        opacity: 0,
        y: 60,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".workflow-title",
          start: "top 75%",
        },
      });

      // Animated progress line
      gsap.to(progressLineRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onUpdate: (self) => {
            // Update active step based on scroll progress
            const progress = self.progress;
            const newActiveStep = Math.min(
              Math.floor(progress * workflowSteps.length),
              workflowSteps.length - 1,
            );
            setActiveStep(newActiveStep);
          },
        },
      });

      // Timeline steps entrance
      gsap.utils.toArray(".timeline-step").forEach((step, i) => {
        // Step container
        gsap.from(step, {
          opacity: 0,
          x: i % 2 === 0 ? -100 : 100,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
          },
        });

        // Image reveal
        gsap.from(step.querySelector(".step-image"), {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 75%",
          },
        });

        // Content stagger
        gsap.from(step.querySelectorAll(".step-content > *"), {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 70%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="workflow"
      ref={containerRef}
      className="relative bg-[#f8f4ef] text-black py-16 overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#c8d5b9]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#e0dbd4]/30 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4 workflow-label-wrap">
            <div className="h-px w-8 bg-black/20" />
            <span className="workflow-label text-xl uppercase tracking-[0.2em] text-[#6b705c] font-medium">
              How We Work
            </span>
            <div className="h-px w-8 bg-black/20" />
          </div>

          <h2 className="workflow-title text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-black tracking-tight mb-6">
            Our Workflow
          </h2>

         
        </div>

        {/* Timeline Container */}
        <div className="timeline-container relative max-w-6xl mx-auto">
          {/* Central Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block">
            {/* Background line */}
            <div className="absolute inset-0 bg-[#e0dbd4]" />
            {/* Animated progress line */}
            <div
              ref={progressLineRef}
              className="absolute top-0 left-0 w-full h-0 bg-[#5a7a4a]"
            />
          </div>

          {/* Timeline Steps */}
          <div className="space-y-24 lg:space-y-32">
            {workflowSteps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className="timeline-step relative"
                >
                  {/* Center Node */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
                    <div
                      className={`relative w-16 h-16 rounded-full border-4 border-[#588740] shadow-xl transition-all duration-500 ${
                        activeStep >= index
                          ? `bg-[#ffffff] `
                          : "bg-[#ffffff] "
                      }`}
                    >

                      {/* Number */}
                      <div className="relative flex items-center justify-center h-full text-[#588740] font-bold text-lg">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Image Side */}
                    <div
                      className={`${isLeft ? "lg:order-1" : "lg:order-2"} ${isLeft ? "lg:pr-16" : "lg:pl-16"}`}
                    >
                      <div className="step-image group relative">
                        {/* Image Container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                            <img
                              src={step.image}
                              alt={step.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>

                          {/* Gradient Overlay */}
                          <div
                            className={`absolute inset-0 bg-[#5a7a4a] opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                          />

                          {/* Large Number Watermark */}
                          <div className="absolute top-4 right-4 text-[#1a1f16]/15 font-bold text-8xl leading-none pointer-events-none">
                            {step.number}
                          </div>
                        </div>

                        {/* Decorative Element */}
                        <div
                          className={`absolute -bottom-4 ${isLeft ? "-right-4" : "-left-4"} w-32 h-32 bg-[#c8d5b9] rounded-full blur-2xl -z-10`}
                        />
                      </div>
                    </div>

                    {/* Text Content Side */}
                    <div
                      className={`step-content ${isLeft ? "lg:order-2 lg:pl-16" : "lg:order-1 lg:pr-16"}`}
                    >
                      {/* Step Number Badge (Mobile only) */}
                      <div className="lg:hidden mb-6">
                        <div
                          className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#5a7a4a] text-white font-bold text-lg shadow-lg`}
                        >
                          {step.number}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-4xl md:text-5xl font-light text-black mb-2">
                        {step.title}
                      </h3>
                      <h4
                        className={`text-2xl md:text-3xl font-medium bg-[#5a7a4a] bg-clip-text text-transparent mb-4`}
                      >
                        {step.subtitle}
                      </h4>

                      {/* Divider */}
                      <div
                        className={`h-1 w-20 bg-[#5a7a4a] rounded-full mb-6`}
                      />

                      {/* Description */}
                      <p className="text-lg text-[#5f5f5f] leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Details List */}
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div
                              className={`flex-shrink-0 w-6 h-6 rounded-full bg-[#5a7a4a] flex items-center justify-center mt-0.5`}
                            >
                              <svg
                                className="w-3.5 h-3.5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={3}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="text-[#7a7a7a] leading-relaxed">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>

                      
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        
      </div>
    </section>
  );
}