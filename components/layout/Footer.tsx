"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = {
  Race: ["The Route", "Experience", "The Kit", "Stats"],
  Register: ["General Entry", "Corporate Package", "Group Booking", "FAQ"],
  Company: ["About NKHL", "Partners", "Press", "Contact"],
};

// Moroccan-inspired SVG pattern (zellige-style)
const MoroccanPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <pattern id="moroccan" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M20 0 L40 10 L40 30 L20 40 L0 30 L0 10 Z" fill="none" stroke="white" strokeWidth="0.5"/>
        <path d="M20 8 L32 14 L32 26 L20 32 L8 26 L8 14 Z" fill="none" stroke="white" strokeWidth="0.3"/>
        <circle cx="20" cy="20" r="3" fill="none" stroke="white" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#moroccan)"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <footer className="relative bg-[#020205] border-t border-white/5 overflow-hidden">
      {/* Moroccan pattern background */}
      <MoroccanPattern />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      {/* Ambient glow bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-coral-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Upper hero area of the footer */}
        <div className="pt-24 pb-20 md:pt-32 md:pb-28 border-b border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="font-mono text-[9px] text-coral-500/60 uppercase tracking-[0.3em] mb-4 block">2026 Edition · Marrakech</span>
                <h2 className="font-display text-[clamp(3.5rem,8vw,6.5rem)] text-white tracking-tight leading-none uppercase mb-8">
                  NKHL<br /><span className="text-coral-500">10K</span>
                </h2>
                <p className="text-gray-600 font-sans text-sm font-light max-w-sm leading-relaxed">
                  Beyond the Obsidian Palm. An ultra-premium endurance experience in the heart of the Palmeraie.
                </p>
              </motion.div>
            </div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="self-end"
            >
              <p className="font-sans font-semibold text-white/80 text-sm uppercase tracking-[0.15em] mb-2">Stay in the Loop</p>
              <p className="text-gray-600 text-xs font-sans mb-6 tracking-wide">Race updates, kit drops, and exclusive early access.</p>
              {submitted ? (
                <div className="py-4 border-b border-coral-500/30">
                  <span className="font-mono text-[10px] text-coral-400 uppercase tracking-widest">✓ You&apos;re on the list.</span>
                </div>
              ) : (
                <form className="flex gap-0" onSubmit={onSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-white/[0.04] border border-white/10 py-3.5 px-5 text-white text-sm font-sans focus:outline-none focus:border-coral-500/40 transition-colors placeholder:text-gray-700 rounded-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-coral-500 text-black font-mono text-[10px] uppercase tracking-widest hover:bg-white transition-colors duration-300 flex-shrink-0"
                  >
                    →
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        {/* Middle nav area */}
        <div className="py-16 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-white/5">
          {Object.entries(NAV_LINKS).map(([category, links]) => (
            <div key={category}>
              <p className="font-sans text-[9px] font-semibold text-white/30 uppercase tracking-[0.25em] mb-6">{category}</p>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-white transition-colors font-sans text-xs tracking-wide">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="font-sans text-[9px] font-semibold text-white/30 uppercase tracking-[0.25em] mb-6">Follow</p>
            <ul className="space-y-4">
              {["Instagram", "Strava", "LinkedIn", "YouTube"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-gray-600 hover:text-coral-400 transition-colors font-sans text-xs tracking-wide">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-gray-700 font-sans text-[10px] tracking-wide">
            © {new Date().getFullYear()} NKHL 10K · All rights reserved · Palmeraie Marrakech
          </p>
          <div className="flex gap-8">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-gray-700 hover:text-white transition-colors text-[10px] font-sans tracking-wide">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
