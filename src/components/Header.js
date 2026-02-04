"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";



const navItems = [
  { label: "Services", href: "#services" },
  { label: "Markets", href: "#markets" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#services");

  const headerRef = useRef(null);

  /* ---------------- SCROLL BACKGROUND ---------------- */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- LOADING ANIMATION ---------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.2,
      });

      tl.fromTo(
        ".header-logo",
        { opacity: 0, y: -14 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".header-nav a",
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
          },
          "-=0.3"
        )
        .fromTo(
          ".header-cta",
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.25"
        );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white backdrop-blur text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        {/* LOGO */}
        <div className="header-logo text-lg font-medium tracking-wide">
          MEPFE BIM
        </div>

        {/* NAVIGATION */}
        <nav className="header-nav hidden md:flex gap-10 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setActive(item.href)}
              className="relative group"
            >
              <span className="relative z-10">
                {item.label}
              </span>

              {/* UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-1 h-[1.5px] w-full bg-current
                  origin-left scale-x-0 transition-transform duration-300 ease-out
                  group-hover:scale-x-100
                  ${active === item.href ? "scale-x-100" : ""}`}
              />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className={`header-cta border px-5 py-2 text-sm rounded-md transition ${
            scrolled
              ? "border-black/30 hover:bg-black hover:text-white"
              : "border-white/40 hover:bg-white hover:text-black"
          }`}
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}
