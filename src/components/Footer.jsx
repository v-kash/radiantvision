"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-[#f6f4ee] text-[#1a1f16] px-[8%] pt-16 pb-8 overflow-hidden">

      {/* SOFT RADIAL LIGHT */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#5a7a4a]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-16">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-xl mb-4">MEPFE BIM</h3>
            <p className="text-[#6b705c] text-sm leading-relaxed max-w-xs">
              Precision-driven MEP and BIM solutions designed for efficiency,
              coordination, and long-term performance.
            </p>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-[#5a7a4a] mb-6">
              Navigation
            </p>

            <div className="flex flex-col gap-4 text-sm">
              {["Home", "Services", "Projects", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="group relative w-fit text-[#6b705c] hover:text-[#1a1f16] transition"
                >
                  {item}

                  {/* premium underline */}
                  <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-[#5a7a4a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-[#5a7a4a] mb-6">
              Contact
            </p>

            <div className="flex flex-col gap-5 text-sm text-[#6b705c]">

              <div className="flex items-center gap-3 group">
                <Mail size={16} className="text-[#5a7a4a] group-hover:scale-110 transition" />
                hello@mepfebim.com
              </div>

              <div className="flex items-center gap-3 group">
                <Phone size={16} className="text-[#5a7a4a] group-hover:scale-110 transition" />
                +91 98765 43210
              </div>

              <div className="flex items-start gap-3 group">
                <MapPin size={16} className="text-[#5a7a4a] mt-1 group-hover:scale-110 transition" />
                Ahmedabad, Gujarat, India
              </div>

            </div>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-[#5a7a4a] mb-6">
              Follow
            </p>

            <div className="flex gap-4">

              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group relative w-11 h-11 flex items-center justify-center border border-[#5a7a4a]/20 rounded-sm overflow-hidden"
                >
                  {/* hover fill */}
                  <span className="absolute inset-0 bg-[#5a7a4a] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                  <Icon className="relative z-10 text-[#5a7a4a] group-hover:text-white transition" size={18} />
                </a>
              ))}

            </div>
          </motion.div>

        </div>

        {/* DIVIDER */}
        <div className="mt-12 mb-8 h-[1px] bg-[#5a7a4a]/20" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#6b705c] gap-4">

          <p>© {new Date().getFullYear()} MEPFE BIM. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#1a1f16] transition">Privacy</Link>
            <Link href="#" className="hover:text-[#1a1f16] transition">Terms</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}