"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef(null);

  /* ---------- LOADING ANIMATION ---------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" }, delay: 0.2 })
        .fromTo(
          ".header-logo",
          { opacity: 0, y: -14 },
          { opacity: 1, y: 0, duration: 0.6 }
        )
        .fromTo(
          ".header-nav a",
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 },
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
      className="fixed top-0 left-0 w-full z-50 bg-[#f8f4ef] text-balckr"
    >
      <div className="mx-auto max-w-7xl px-24 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="header-logo flex items-center"
          style={{ opacity: 0 }}
        >
          <Image
            src="/LOGO.svg"
            alt="MEPFE BIM"
            width={120}
            height={40}
            className="h-10 w-auto object-contain scale-[4]"
            priority
          />
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
                  className={`absolute left-0 -bottom-1 h-[1.5px] w-full bg-current origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="header-cta border px-5 py-2 text-sm rounded-md transition border-current hover:bg-[#5a7a4a] hover:text-white hover:border-[#5a7a4a]"
          style={{ opacity: 0 }}
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}