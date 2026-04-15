import MarqueeStrip from "../ui/MarqueeStrip";
import SectionReveal from "../ui/SectionReveal";

// Replace with real partner logos by providing logo URLs
const partners = [
  { name: "Atlas Sport" },
  { name: "Royal Air Maroc" },
  { name: "CIH Bank" },
  { name: "Meditel" },
  { name: "Salomon" },
  { name: "Suunto" },
  { name: "Garmin" },
  { name: "Decathlon Pro" },
  { name: "Four Seasons" },
  { name: "Amanjena" },
];

export default function Partners() {
  return (
    <section className="py-28 bg-black border-t border-white/5 relative overflow-hidden" id="partners">
      {/* Frosted glass band */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-white/[0.015] to-black pointer-events-none" />

      <div className="relative z-10">
        <SectionReveal className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
          <span className="block text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-gray-600 mb-4">
            Official Partners & Sponsors
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-tighter uppercase leading-[0.9]">
            Backed by the Best
          </h2>
        </SectionReveal>

        {/* Marquee with vignette fade on edges */}
        <div className="relative">
          {/* Left vignette */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          {/* Right vignette */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <MarqueeStrip items={partners} speed="slow" />
        </div>

        {/* CTA to become a partner */}
        <SectionReveal className="max-w-7xl mx-auto px-6 md:px-12 mt-16 text-center" delay={0.2}>
          <p className="text-gray-600 font-sans text-sm font-light mb-6">
            Interested in becoming a title sponsor or official partner?
          </p>
          <a
            href="#corporate"
            className="inline-flex items-center gap-3 px-8 py-3 bg-white text-black font-display text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-coral-500 hover:text-white"
          >
            Partnership Packages
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
