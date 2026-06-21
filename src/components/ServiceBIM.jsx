"use client";

import { motion } from "framer-motion";

export default function ServiceBIM() {
  return (
    <section className="py-28 px-[8%] bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* CONTENT SIDE (LEFT) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* TITLE */}
          <h2 className="font-heading text-4xl md:text-5xl text-[#1f2a1f] mb-6">
            BIM Modeling
          </h2>

          {/* DESCRIPTION */}
          <p className="font-body text-[#5a6a5a] leading-relaxed mb-8">
            We develop intelligent and data-rich BIM models that improve
            visualization, enhance design accuracy, and support better
            decision-making throughout the project lifecycle.
          </p>

          {/* GRID DETAILS */}
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            {/* SCOPE */}
            <div>
              <h4 className="font-heading text-lg text-[#1f2a1f] mb-3">
                Scope of Work
              </h4>
              <ul className="font-body text-sm text-[#5a6a5a] space-y-2">
                <li>• 3D MEPFP modeling</li>
                <li>• Shop drawings</li>
                <li>• As-built modeling</li>
                <li>• Parametric families</li>
                <li>• Model validation</li>
              </ul>
            </div>

            {/* DELIVERABLES */}
            <div>
              <h4 className="font-heading text-lg text-[#1f2a1f] mb-3">
                Deliverables
              </h4>
              <ul className="font-body text-sm text-[#5a6a5a] space-y-2">
                <li>• Revit BIM models</li>
                <li>• Shop drawings</li>
                <li>• As-built models</li>
                <li>• Quantity takeoffs</li>
                <li>• Model reports</li>
              </ul>
            </div>
          </div>

          {/* TOOLS + LOD */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div>
              <p className="font-heading text-sm text-[#1f2a1f] mb-1">Tools</p>
              <p className="font-body text-sm text-[#5a6a5a]">
                Revit MEPFP, AutoCAD, Navisworks
              </p>
            </div>

            <div>
              <p className="font-heading text-sm text-[#1f2a1f] mb-1">LOD</p>
              <p className="font-body text-sm text-[#5a6a5a]">LOD 300 – 400</p>
            </div>
            <button className="px-6 py-3 bg-[#5a7a4a] text-white font-body text-sm rounded-full hover:bg-[#4a6a3a] transition">
              Get BIM Modeling Services
            </button>
          </div>

          {/* CTA */}
        </motion.div>

        {/* IMAGE SIDE (RIGHT) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600"
              alt="BIM Modeling"
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* subtle border offset */}
          <div className="absolute -top-6 -right-6 w-full h-full border border-[#e3ebe3] rounded-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
