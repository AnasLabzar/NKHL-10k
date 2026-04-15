"use client";

import { motion } from "framer-motion";
import SectionReveal from "../ui/SectionReveal";

const phases = [
  {
    id: "01",
    date: "15 June 2026",
    title: "Registration Opens",
    description: "General entry registration begins at 09:00 GMT. Early bird slots limited to 300 athletes at a 20% discount.",
    status: "upcoming",
    detail: "General + Corporate packages",
  },
  {
    id: "02",
    date: "15 Aug 2026",
    title: "Early Bird Closes",
    description: "Standard pricing takes effect. Team registration remains open through September.",
    status: "upcoming",
    detail: "Pricing change",
  },
  {
    id: "03",
    date: "28 Sep 2026",
    title: "Kit Collection Weekend",
    description: "Collect your race bib, RFID chip, and signature kit at the Palmeraie resort. Welcome ceremony 19:00.",
    status: "upcoming",
    detail: "Marrakech — 2 days",
  },
  {
    id: "04",
    date: "03 Oct 2026",
    title: "Race Day",
    description: "The NKHL 10K starts at 08:00. Podium ceremony and gala dinner in the evening.",
    status: "main",
    detail: "Palmeraie Marrakech",
  },
  {
    id: "05",
    date: "04 Oct 2026",
    title: "Recovery & Departure",
    description: "Optional guided recovery session at 09:00. Shuttle service to airport from 11:00.",
    status: "upcoming",
    detail: "End of event",
  },
];

export default function EventsCalendar() {
  return (
    <section className="py-40 bg-[#050505] border-t border-white/5 relative overflow-hidden" id="events">
      {/* Subtle warm grid texture */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(249,115,22,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.4) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          {/* Left: sticky heading */}
          <div className="md:w-80 flex-shrink-0">
            <SectionReveal>
              <span className="block text-coral-500 font-sans text-[10px] tracking-[0.22em] uppercase mb-5">Schedule</span>
              <h2 className="font-display text-6xl md:text-7xl text-white tracking-tight leading-none mb-6">
                EVENT<br />CALENDAR
              </h2>
              <p className="text-gray-500 font-sans text-sm font-light leading-relaxed uppercase tracking-[0.2em] opacity-60">
                Every milestone, precisely planned for the 2026 edition.
              </p>
            </SectionReveal>
          </div>

          {/* Right: event list */}
          <div className="flex-1 relative">
            {/* Vertical spine */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5" />

            <div className="space-y-0">
              {phases.map((phase, i) => (
                <SectionReveal key={phase.id} delay={i * 0.1} yOffset={20}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`group relative pl-10 pr-6 py-10 border-b border-white/5 cursor-default flex flex-col md:flex-row md:items-start gap-6 ${
                      phase.status === "main" ? "bg-coral-500/4" : ""
                    }`}
                  >
                    {/* Spine dot */}
                    <div className={`absolute left-0 top-[42px] w-2.5 h-2.5 rounded-full -translate-x-1/2 border transition-all duration-500 ${
                      phase.status === "main"
                        ? "bg-coral-500 border-coral-400 shadow-glow-coral"
                        : "bg-black border-white/20 group-hover:border-white/50"
                    }`} />

                    {/* ID */}
                    <span className="font-mono text-[10px] text-white/20 tracking-[0.2em] mt-1 flex-shrink-0 hidden md:block">
                      {phase.id}
                    </span>

                    {/* Date */}
                    <div className="md:w-40 flex-shrink-0">
                      <span className={`font-sans text-sm font-medium tracking-wide ${
                        phase.status === "main" ? "text-coral-400" : "text-gray-500"
                      }`}>
                        {phase.date}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className={`font-display text-2xl tracking-wide ${
                          phase.status === "main" ? "text-coral-300 glow-text" : "text-white"
                        }`}>
                          {phase.title}
                        </h3>
                        {phase.status === "main" && (
                          <span className="px-2.5 py-0.5 text-[9px] font-sans font-bold tracking-widest uppercase bg-coral-500/15 text-coral-400 border border-coral-500/20 rounded-sm">
                            Main Event
                          </span>
                        )}
                      </div>
                      <p className="text-gray-500 font-sans text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300 max-w-lg uppercase tracking-wider opacity-80">
                        {phase.description}
                      </p>
                      <span className="mt-4 inline-block text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
                        {phase.detail}
                      </span>
                    </div>
                  </motion.div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
