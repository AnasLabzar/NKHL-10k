"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionReveal from "../ui/SectionReveal";

const KIT_ITEMS = [
  { label: "Performance Jersey", detail: "100% Recycled Poly / Aero-Vent Mesh", badge: "Breathable" },
  { label: "Race Bib #345", detail: "RFID Chip Integrated / Marrakech Edition", badge: "Precision" },
  { label: "Obsidian Cap", detail: "5-Panel Structured / UV-Resistant", badge: "Premium" },
  { label: "Elite Pass", detail: "Athlete Access / VIP Zone", badge: "Exclusive" },
  { label: "NKHL Energy Gel", detail: "Coco Date / Citrus Kick / Coffee", badge: "Fuel" },
  { label: "Finisher Medal", detail: "Heavy Zinc Alloy / NKHL Obsidian Motif", badge: "Trophy" },
];

export default function AthleteKit() {
  return (
    <section className="py-32 md:py-48 bg-obsidian-950 relative overflow-hidden" id="kits">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-coral-500/8 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <SectionReveal className="mb-20 md:mb-32">
          <span className="block text-gold-400 font-mono text-[10px] tracking-[0.3em] uppercase mb-4">Athlete Kit</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(3rem,8vw,6rem)] text-white tracking-tight leading-none uppercase">
              The Obsidian<br /><span className="text-white/20">Kit</span>
            </h2>
            <p className="text-gray-600 font-sans text-xs max-w-xs tracking-widest uppercase leading-relaxed">
              Every item engineered for the Moroccan climate and the NKHL standard.
            </p>
          </div>
        </SectionReveal>

        {/* Main Grid — Apple Product Page Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/[0.06]">
          {/* Left: Large Product Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative bg-obsidian-950 min-h-[500px] lg:min-h-[700px] flex items-center justify-center overflow-hidden group"
          >
            {/* Scan line */}
            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-coral-500/40 to-transparent animate-scan" style={{ animationDuration: "4s" }} />
            
            {/* Product image or premium placeholder */}
            <div className="relative w-full h-full">
              <Image
                src="/assets/nkhl-kit.png"
                alt="NKHL Obsidian Kit"
                fill
                className="object-contain p-12 drop-shadow-2xl transition-transform duration-1000 group-hover:scale-[1.03]"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              {/* Fallback tactical display if no image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                <div className="border border-white/5 w-full h-full flex flex-col items-center justify-center gap-4">
                  <span className="font-mono text-[9px] text-coral-500/50 tracking-[0.4em] uppercase">Obsidian Edition</span>
                  <div className="font-display text-6xl text-white/10 uppercase tracking-tight">Kit<br />2026</div>
                  <div className="w-16 h-px bg-coral-500/20" />
                  <span className="font-mono text-[8px] text-white/10 uppercase tracking-widest">NKHL · Marrakech · Palmeraie</span>
                </div>
              </div>
            </div>

            {/* Corner labels */}
            <div className="absolute top-6 left-6 font-mono text-[8px] text-white/15 uppercase tracking-[0.3em]">NKHL 10K</div>
            <div className="absolute bottom-6 right-6 font-mono text-[8px] text-white/15 uppercase tracking-[0.3em]">Edition 2026</div>
          </motion.div>

          {/* Right: Item List */}
          <div className="bg-obsidian-950 divide-y divide-white/[0.04]">
            {KIT_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group flex items-center justify-between px-8 py-6 hover:bg-white/[0.02] transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-5">
                  <span className="font-mono text-[9px] text-white/15">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-sans text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">{item.label}</p>
                    <p className="font-mono text-[9px] text-gray-600 uppercase tracking-wide mt-0.5">{item.detail}</p>
                  </div>
                </div>
                <span className="hidden md:block px-2.5 py-1 text-[8px] font-mono uppercase tracking-widest text-white/20 border border-white/8 group-hover:text-coral-400 group-hover:border-coral-500/20 transition-all duration-300">
                  {item.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Disclaimer row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-6 border-t border-white/5"
        >
          <p className="text-gray-700 font-sans text-[9px] leading-relaxed max-w-lg tracking-wide uppercase">
            * Kit contents subject to final sponsor confirmation. Items shown are for illustration purposes and may vary from final delivery. NKHL guarantees equivalent quality and performance standards for all registered athletes.
          </p>
          <motion.a
            href="#register"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex-shrink-0 inline-flex items-center gap-3 border border-white/10 text-white/60 font-mono text-[9px] uppercase tracking-widest px-6 py-3 hover:border-coral-500/30 hover:text-coral-400 transition-all duration-300"
          >
            Claim Your Kit →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
