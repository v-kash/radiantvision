// src/app/contact/page.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Link from "next/link";

const whyPoints = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Experienced MEPFP Engineers",
    desc: "A team with deep technical expertise across all building systems.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    ),
    title: "Fast & Reliable Communication",
    desc: "We respond quickly and keep you informed at every stage.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
    ),
    title: "BIM Driven Accuracy",
    desc: "Advanced modeling ensures precision and reduces costly rework.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "End to End Project Support",
    desc: "From concept to handover we stay committed throughout.",
  },
];

export default function ContactPage() {
  const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);

const [success, setSuccess] = useState("");
const [serverError, setServerError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

const validate = () => {
  const newErrors = {};

  if (!form.name.trim()) {
    newErrors.name = "Full name is required";
  } else if (form.name.trim().length < 3) {
    newErrors.name = "Enter a valid name";
  }

  if (!form.email.trim()) {
    newErrors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
  ) {
    newErrors.email = "Invalid email address";
  }

  if (!form.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
    newErrors.phone = "Enter valid 10 digit mobile number";
  }

  if (!form.projectType) {
    newErrors.projectType = "Select project type";
  }

  if (!form.message.trim()) {
    newErrors.message = "Message is required";
  } else if (form.message.trim().length < 20) {
    newErrors.message =
      "Message should contain at least 20 characters";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};


const handleSubmit = async (e) => {
  e.preventDefault();

  setSuccess("");
  setServerError("");

  if (!validate()) return;

  try {
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    setSuccess(
      "Thank you! Your message has been sent successfully."
    );

    setForm({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
  } catch (err) {
    setServerError(
      err.message || "Something went wrong."
    );
  } finally {
    setLoading(false);
  }
};

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass = `
    w-full bg-transparent border-b border-[#d6d2cc] focus:border-[#5a7a4a]
    outline-none py-3 text-sm text-[#1a1a1a] placeholder-[#aaa]
    transition-colors duration-300
  `;

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full z-30">
          <Header />
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/contact-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm tracking-[0.2em] uppercase text-[#c8d5b9]"
          >
            Contact Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl text-white mb-6 leading-tight max-w-4xl"
          >
            Let's Start Your <br className="hidden md:block" />
            Next Project
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-body text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          >
            Have a project in mind or need expert MEPFP solutions? Get in touch we're here to help.
          </motion.p>

          
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="bg-[#f8f4ef] py-24 px-[8%]">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* LEFT — info */}
          <div className="md:sticky md:top-28">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.25em] uppercase text-[#5a7a4a] mb-4"
            >
              Get in Touch
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-heading text-[#1a1a1a] leading-snug mb-10"
            >
              We'd Love to Hear <br />
              About Your Project
            </motion.h2>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-5 mb-10"
            >
              {[
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  ),
                  label: "Location",
                  value: "Ashirwad Dev, Nr Satva 4, Hanspura, Ahmedabad, Gujarat, India-382330",
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+91 87348 31221",
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+91 99786 99284",
                },
                
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  ),
                  label: "Email",
                  value: "radiantvisionrdv1@gmail.com",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#eef2eb] flex items-center justify-center text-[#5a7a4a] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[#aaa] mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-[#333]">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-[#5a7a4a] mb-4">
              Send a Message
            </p>
            <h3 className="text-xl font-heading text-[#1a1a1a] mb-10">
              Send Us a Message
            </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] tracking-[0.15em] uppercase text-[#aaa] block mb-2">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.15em] uppercase text-[#aaa] block mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    className={inputClass}
                  />

                  {errors.name && (
<p className="mt-2 text-sm text-red-500">
    {errors.name}
</p>
)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] tracking-[0.15em] uppercase text-[#aaa] block mb-2">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={inputClass}
                  />
                  {errors.name && (
<p className="mt-2 text-sm text-red-500">
    {errors.name}
</p>
)}
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.15em] uppercase text-[#aaa] block mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className={inputClass + " cursor-pointer"}
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    <option value="commercial">Commercial</option>
                    <option value="residential">Residential</option>
                    <option value="industrial">Industrial</option>
                    <option value="healthcare">Healthcare</option>
                  </select>
                  {errors.name && (
<p className="mt-2 text-sm text-red-500">
    {errors.name}
</p>
)}
                </div>
              </div>

              <div>
                <label className="text-[10px] tracking-[0.15em] uppercase text-[#aaa] block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className={inputClass + " resize-none"}
                />
                {errors.name && (
<p className="mt-2 text-sm text-red-500">
    {errors.name}
</p>
)}
              </div>

              {success && (
<div className="rounded bg-green-50 border border-green-200 p-4 text-green-700">
    {success}
</div>
)}

{serverError && (
<div className="rounded bg-red-50 border border-red-200 p-4 text-red-700">
    {serverError}
</div>
)}

              <button
                type="submit"
                disabled={loading}
                className="group relative self-start px-8 py-3.5 rounded-[2px] overflow-hidden text-sm tracking-wide text-white font-medium"
              >
                
                <span className="absolute inset-0 bg-gradient-to-r from-[#4f6f52] to-[#739072] transition-all duration-300 group-hover:scale-105" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[#739072]/30 blur-xl" />
                <span className="relative z-10">{loading
? "Sending..."
: "Request Consultation"}
</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── WHY WORK WITH US ── */}
      <section className="bg-white py-20 px-[8%]">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.25em] uppercase text-[#5a7a4a] mb-4"
          >
            Our Promise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-heading text-[#1a1a1a]"
          >
            Why Work With Us
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group p-7 rounded-2xl border border-[#ece8e2] bg-[#faf8f5] hover:border-[#c8d5b9] hover:shadow-sm transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-11 h-11 rounded-xl bg-[#eef2eb] group-hover:bg-[#5a7a4a] flex items-center justify-center text-[#5a7a4a] group-hover:text-white transition-colors duration-300 mb-5">
                {point.icon}
              </div>
              <h3 className="text-sm font-heading text-[#1a1a1a] mb-2 leading-snug">
                {point.title}
              </h3>
              <p className="text-xs text-[#888] leading-relaxed">
                {point.desc}
              </p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-[#5a7a4a] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-[#1a1f16] px-[8%] py-20 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(90,122,74,0.15) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.25em] uppercase text-[#5a7a4a] mb-4"
            >
              Let's Collaborate
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-heading text-white leading-snug mb-4"
            >
              Let's Build Your{" "}
              <span className="text-[#a8c090]">Next Project Together</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-[#a0a89a] text-sm leading-relaxed"
            >
              Every project starts with a conversation. Share your requirements
              with us, and let's deliver engineering solutions that fit your
              project's needs.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4 flex-wrap shrink-0"
          >
            <a
              href="tel:+918734831221"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-[2px] px-7 py-3.5 text-sm tracking-wide text-white font-medium"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#4f6f52] to-[#739072] transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[#739072]/30 blur-xl" />
              <span className="relative z-10">Call Now</span>
            </a>

            <a
              href="mailto:radiantvisionrdv1@gmail.com"
              className="inline-flex items-center gap-2 rounded-[2px] border border-white/20 px-7 py-3.5 text-sm tracking-wide text-white/70 hover:text-white hover:border-white/40 transition-all duration-300"
            >
              Email Us
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-6 right-8 opacity-10 pointer-events-none">
          <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
            <path d="M32 0H20V3H29V12H32V0Z" fill="white" />
            <path d="M0 32H12V29H3V20H0V32Z" fill="white" />
          </svg>
        </div>
      </section>
    </>
  );
}
