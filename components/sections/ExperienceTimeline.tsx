"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionReveal from "../ui/SectionReveal";

const days = [
  {
    day: "Day 1",
    label: "Race Day",
    events: [
      { time: "06:00", title: "Obsidian Base Camp Open", desc: "Premium Moroccan tea, gear check & VIP briefing.", accent: false },
      { time: "07:30", title: "Elite Warm-Up Session", desc: "Professional trainers lead the squad under the Marrakech sunrise.", accent: false },
      { time: "08:00", title: "The NKHL 10K — Start", desc: "The elite wave launches into the ancient Palmeraie trail.", accent: true },
      { time: "09:30", title: "Finish & Recovery Field", desc: "Cross the obsidian finish. Medal ceremony begins immediately.", accent: false },
      { time: "11:00", title: "Podium & Trophy Ceremony", desc: "Champions crowned with gold-accented trophies.", accent: false },
    ],
  },
  {
    day: "Day 2",
    label: "Retreat",
    events: [
      { time: "08:00", title: "Sunrise Wellness Session", desc: "Guided yoga and breathwork in the palm grove.", accent: false },
      { time: "10:00", title: "Atlas Brunch", desc: "Exclusive Moroccan brunch with partner brands and fellow athletes.", accent: false },
      { time: "12:00", title: "Workshops & Panel", desc: "Nutrition, recovery science, and 2027 season planning.", accent: false },
      { time: "15:00", title: "Departure Transfers", desc: "Shuttle service to Marrakech airport and city hotels.", accent: false },
    ],
  },
];

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]); // reserved for future parallax

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-black border-t border-white/5 relative overflow-hidden" id="experience">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionReveal className="mb-24">
          <span className="block text-gold-400 font-mono text-[10px] tracking-[0.3em] uppercase mb-4">The 2-Day Experience</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] text-white tracking-tight leading-none uppercase">
              Beyond The<br /><span className="text-white/20">Finish Line</span>
            </h2>
            <p className="text-gray-600 font-sans text-xs max-w-xs tracking-widest uppercase leading-relaxed">
              An immersive 2-day athletic and cultural experience in the heart of the Palmeraie.
            </p>
          </div>
        </SectionReveal>

        {/* Day tabs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {days.map((d, di) => (
            <div key={d.day} className="bg-black p-8 md:p-12">
              <div className="flex items-center gap-4 mb-12">
                <span className={`font-display text-5xl ${di === 0 ? "text-coral-500" : "text-white/20"}`}>{d.day}</span>
                <div>
                  <div className="h-px w-12 bg-white/10 mb-1.5" />
                  <span className="font-mono text-[9px] text-gray-600 uppercase tracking-widest">{d.label}</span>
                </div>
              </div>

              <div className="relative pl-4 border-l border-white/[0.06] space-y-0">
                {d.events.map((ev, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`group relative py-6 border-b border-white/[0.04] last:border-0 transition-all duration-300 hover:pl-2`}
                  >
                    <div className={`absolute -left-[17px] top-7 w-2 h-2 rounded-full border transition-all duration-500 ${
                      ev.accent ? "bg-coral-500 border-coral-400 shadow-[0_0_10px_rgba(249,115,22,0.5)]" : "bg-black border-white/20 group-hover:border-white/50"
                    }`} />
                    <span className={`font-mono text-[9px] tracking-[0.2em] mb-2 block ${ev.accent ? "text-coral-400" : "text-gray-600"}`}>
                      {ev.time}
                    </span>
                    <h4 className={`font-display text-lg md:text-xl tracking-wide mb-1.5 transition-colors duration-300 uppercase ${
                      ev.accent ? "text-coral-300" : "text-white/80 group-hover:text-white"
                    }`}>
                      {ev.title}
                    </h4>
                    <p className="text-gray-600 font-sans text-xs tracking-wide leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                      {ev.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-px bg-coral-500/5 border border-coral-500/10 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div>
            <p className="font-mono text-[9px] text-coral-500/60 uppercase tracking-[0.3em] mb-3">Exclusive Access</p>
            <h3 className="font-display text-3xl md:text-4xl text-white uppercase tracking-tight leading-none">
              This is <span className="text-coral-400">your</span> race.
            </h3>
          </div>
          <motion.a
            href="#register"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group flex-shrink-0 inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-coral-400 transition-colors duration-300"
          >
            Register Now
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
