"use client";

import SectionReveal from "../ui/SectionReveal";
import AnimatedNumber from "../ui/AnimatedNumber";

const stats = [
  { value: 1200, suffix: "+", label: "Registered Athletes", desc: "from 28 countries" },
  { value: 10,   suffix: "K", label: "Race Distance",       desc: "through the Palmeraie" },
  { value: 5,    suffix: "",  label: "Checkpoints",          desc: "fully manned stations" },
  { value: 3,    suffix: "",  label: "Obstacle Zones",       desc: "designed by elite trainers" },
  { value: 142,  suffix: "m", prefix: "+", label: "Elevation Gain", desc: "net positive" },
];

export default function StatsBar() {
  return (
    <section className="py-0 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Ultra-thin coral top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-coral-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/5">
          {stats.map((stat, i) => (
            <SectionReveal key={i} delay={i * 0.08} yOffset={16}>
              <div className="py-8 md:py-12 px-4 md:px-6 flex flex-col items-center text-center group cursor-default select-none">
                <span className="font-display text-5xl md:text-6xl text-white mb-2 tracking-tight group-hover:text-coral-400 transition-colors duration-500">
                  {stat.prefix}
                  <AnimatedNumber value={stat.value} />
                  {stat.suffix}
                </span>
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.18em] text-white/50 mb-1">
                  {stat.label}
                </span>
                <span className="text-[10px] font-sans text-white/25 tracking-wide">
                  {stat.desc}
                </span>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Ultra-thin coral bottom accent line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-coral-500/40 to-transparent" />
    </section>
  );
}
