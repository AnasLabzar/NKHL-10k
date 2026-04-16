"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import SectionReveal from "../ui/SectionReveal";

const phases = [
  {
    id: "01",
    date: "15 JUN 2026",
    title: "Registration Opens",
    description: "General entry begins at 09:00 GMT. Early bird slots limited to 300 athletes — 20% discount for the first wave.",
    status: "upcoming",
    detail: "General + Corporate Packages",
    icon: "◈",
  },
  {
    id: "02",
    date: "15 AUG 2026",
    title: "Early Bird Closes",
    description: "Standard pricing activates. Team registration remains open through late September.",
    status: "upcoming",
    detail: "Pricing Shift",
    icon: "◇",
  },
  {
    id: "03",
    date: "28 SEP 2026",
    title: "Kit Collection Weekend",
    description: "Collect your bib, RFID chip & signature Obsidian Kit at the resort. Welcome ceremony at 19:00.",
    status: "upcoming",
    detail: "Palmeraie — 2 Days",
    icon: "◆",
  },
  {
    id: "04",
    date: "03 OCT 2026",
    title: "Race Day",
    description: "Start gun fires at 08:00 sharp. Podium ceremony and gala dinner as the sun sets over the Palmeraie.",
    status: "main",
    detail: "Palmeraie — Marrakech",
    icon: "★",
  },
  {
    id: "05",
    date: "04 OCT 2026",
    title: "Recovery & Departure",
    description: "Optional guided recovery at 09:00. Airport shuttle from 11:00.",
    status: "upcoming",
    detail: "End of Event",
    icon: "◇",
  },
];

export default function EventsCalendar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineScaleY = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-[#040408] border-t border-white/5 relative overflow-hidden" id="events">
      {/* Warm grid bg */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(rgba(249,115,22,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.4) 1px, transparent 1px)`, backgroundSize: "80px 80px" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <SectionReveal className="mb-20 md:mb-32">
          <span className="block text-coral-500 font-sans text-[10px] tracking-[0.3em] uppercase mb-4">2026 Schedule</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-[clamp(3rem,8vw,6rem)] text-white tracking-tight leading-none uppercase">
              Event<br /><span className="text-white/20">Calendar</span>
            </h2>
            <p className="text-gray-600 font-sans text-xs max-w-xs leading-relaxed tracking-[0.15em] uppercase">
              Every milestone, precisely sequenced for the 2026 Palmeraie edition.
            </p>
          </div>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical spine */}
          <div className="absolute left-[23px] md:left-[30px] top-0 bottom-0 w-px bg-white/5 overflow-hidden">
            <motion.div
              style={{ scaleY: lineScaleY, transformOrigin: "top" }}
              className="w-full h-full bg-gradient-to-b from-coral-500 via-gold-400/40 to-transparent"
            />
          </div>

          <div className="space-y-0">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                onMouseEnter={() => setHovered(phase.id)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative flex items-start gap-6 md:gap-10 py-8 md:py-10 border-b border-white/[0.04] cursor-default transition-all duration-500 ${hovered === phase.id ? "pr-6" : ""}`}
              >
                {/* Timeline Node */}
                <div className="relative flex-shrink-0 w-12 md:w-16 flex items-center justify-center pt-1">
                  <div className={`w-2.5 h-2.5 rounded-full border transition-all duration-500 z-10 ${
                    phase.status === "main"
                      ? "bg-coral-500 border-coral-400 shadow-[0_0_15px_rgba(249,115,22,0.6)]"
                      : hovered === phase.id ? "bg-gold-400 border-gold-300" : "bg-black border-white/20"
                  }`} />
                </div>

                {/* Date */}
                <div className="w-32 flex-shrink-0 pt-0.5">
                  <span className={`font-mono text-[10px] tracking-[0.2em] block ${
                    phase.status === "main" ? "text-coral-400" : "text-gray-600"
                  }`}>
                    {phase.date}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className={`font-display text-xl md:text-2xl tracking-wide transition-colors duration-300 uppercase ${
                      phase.status === "main" ? "text-coral-300" : hovered === phase.id ? "text-white" : "text-white/80"
                    }`}>
                      {phase.title}
                    </h3>
                    {phase.status === "main" && (
                      <span className="hidden md:inline-block px-2.5 py-0.5 text-[8px] font-sans font-bold tracking-widest uppercase bg-coral-500/15 text-coral-400 border border-coral-500/20 rounded-sm">
                        Main Event
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed tracking-wide max-w-lg transition-colors duration-300 group-hover:text-gray-400">
                    {phase.description}
                  </p>
                  <span className="mt-3 inline-block text-[9px] font-mono text-white/15 uppercase tracking-[0.3em]">
                    {phase.detail}
                  </span>
                </div>

                {/* CTA Hover Effect */}
                {phase.status === "main" && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: hovered === phase.id ? 1 : 0, x: hovered === phase.id ? 0 : 10 }}
                    className="hidden md:flex flex-shrink-0 items-center gap-2 pr-4"
                  >
                    <span className="text-coral-400 font-mono text-[9px] uppercase tracking-widest">Register Now</span>
                    <span className="text-coral-400">→</span>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Registration CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-16 border-t border-white/5"
          >
            <div>
              <p className="font-display text-3xl md:text-4xl text-white uppercase tracking-tight mb-2">Ready to Run?</p>
              <p className="text-gray-600 font-sans text-xs tracking-widest uppercase">Limited spots available — NKHL Edition 2026 · Marrakech</p>
            </div>
            <motion.a
              href="#register"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex-shrink-0 inline-flex items-center gap-4 px-10 py-5 bg-coral-500 text-black font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300"
            >
              Secure Your Spot
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
