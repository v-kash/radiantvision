"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";  // ← add this
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

export default function Header() {
  const pathname  = usePathname();   // ← always in sync with actual route
  const headerRef = useRef(null);
  const headerEl  = useRef(null);
  const scrolled  = useRef(false);

  /* ---------- SCROLL BACKGROUND ---------- */
  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 20;
      if (past === scrolled.current) return;
      scrolled.current = past;

      const el = headerEl.current;
      if (!el) return;

      if (past) {
        el.classList.add("bg-[#f8f4ef]", "text-black");
        el.classList.remove("bg-transparent", "text-white");
      } else {
        el.classList.add("bg-transparent", "text-white");
        el.classList.remove("bg-[#f8f4ef]", "text-black");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- LOADING ANIMATION ---------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.2 })
        .fromTo(".header-logo",  { opacity: 0, y: -14 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(".header-nav a", { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 }, "-=0.3")
        .fromTo(".header-cta",   { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.45 }, "-=0.25");
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={(el) => { headerRef.current = el; headerEl.current = el; }}
      className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-transparent text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="header-logo flex items-center" style={{ opacity: 0 }}>
          <Image src="/LOGO.png" alt="MEPFE BIM" width={120} height={40} className="h-10 w-auto object-contain" priority />
        </Link>

        {/* NAVIGATION */}
        <nav className="header-nav hidden md:flex gap-10 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative group"
                style={{ opacity: 0 }}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-[1.5px] w-full bg-current origin-left
                    transition-transform duration-300 ease-out
                    group-hover:scale-x-100
                    ${isActive ? "scale-x-100" : "scale-x-0"}`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="header-cta border px-5 py-2 text-sm rounded-md transition border-current hover:bg-current hover:text-white"
          style={{ opacity: 0 }}
        >
          Get in Touch
        </Link>

      </div>
    </header>
  );
}