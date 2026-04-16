"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STAT_CARDS = [
  {
    label: "Avg Pace",
    value: "4:36",
    unit: "min/km",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 5v5l4 2"/></svg>`,
    sparkData: [50, 60, 45, 80, 55, 70, 48, 65],
    color: "coral",
  },
  {
    label: "Distance",
    value: "9.2",
    unit: "km",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12h18M12 3l9 9-9 9"/></svg>`,
    sparkData: [20, 40, 60, 80, 90, 95, 98, 100],
    color: "gold",
  },
  {
    label: "Elevation",
    value: "+142",
    unit: "m",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 17l4-8 4 4 4-6 4 4"/></svg>`,
    sparkData: [10, 20, 35, 50, 45, 60, 80, 142],
    color: "data-cyan",
  },
];

function SparkLine({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const points = data.map((v, i) => `${(i / (data.length - 1)) * 100},${100 - (v / max) * 100}`).join(" ");
  const strokeColor = color === "coral" ? "#F97316" : color === "gold" ? "#FBBF24" : "#22D3EE";

  return (
    <svg className="w-full h-8 mt-2" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polyline points={points} fill="none" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity={0.6} />
    </svg>
  );
}

export default function DynamicScrollData() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineX = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 md:py-40 bg-[#07070C] border-t border-white/5 relative overflow-hidden">
      {/* Scrolling progress line */}
      <div className="absolute top-0 left-0 h-px w-full bg-white/5">
        <motion.div style={{ width: lineX }} className="h-full bg-gradient-to-r from-coral-500 via-gold-400 to-transparent" />
      </div>

      {/* Giant floating text */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[20vw] text-white/[0.018] uppercase tracking-widest whitespace-nowrap">2026</span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-gold-400/70 uppercase">Performance Data</span>
          <div className="h-px mt-3 bg-gradient-to-r from-gold-500/30 to-transparent w-48" />
        </motion.div>

        {/* Data cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {STAT_CARDS.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="group bg-[#07070C] p-8 md:p-10 hover:bg-white/[0.025] transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-gray-600">{card.label}</span>
                <span className="text-white/10 text-sm font-mono">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className={`font-display text-5xl md:text-6xl tracking-tight ${
                  card.color === "coral" ? "text-white" : card.color === "gold" ? "text-white" : "text-white"
                }`}>
                  {card.value}
                </span>
                <span className="font-mono text-xs text-gray-600 uppercase">{card.unit}</span>
              </div>
              <SparkLine data={card.sparkData} color={card.color} />
              <div className="mt-4 h-px bg-gradient-to-r from-white/5 to-transparent group-hover:from-coral-500/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Separator stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-px bg-white/[0.015] grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5"
        >
          {[
            { label: "Athletes", value: "1,200+" },
            { label: "Checkpoints", value: "5" },
            { label: "Obstacles", value: "3" },
            { label: "Finish Rate", value: "94%" },
          ].map((s) => (
            <div key={s.label} className="px-8 py-6 flex flex-col gap-1">
              <span className="font-mono text-[9px] text-gray-600 uppercase tracking-[0.2em]">{s.label}</span>
              <span className="font-display text-2xl text-white">{s.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
