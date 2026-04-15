"use client";

import { motion } from "framer-motion";
import SectionReveal from "../ui/SectionReveal";
import GlassCard from "../ui/GlassCard";

const packages = [
    {
        name: "Executive Pass",
        price: "Contact Us",
        glow: "coral" as const,
        features: ["VIP Lounge Access", "Dedicated Concierge", "Premium Starting Block", "Post-Race Gala Dinner", "Custom Branded Kits"]
    },
    {
        name: "Team Challenge",
        price: "From 10 runners",
        glow: "none" as const,
        features: ["Private Hub Tent", "Team Scoring", "Networking Breakfast", "Team Photography", "Recovery Zone Access"]
    },
    {
        name: "Title Partnership",
        price: "Bespoke Pricing",
        glow: "gold" as const,
        features: ["Route Brand Placement", "Finish Line Activation", "Media Coverage", "C-Suite Networking", "Ultimate VIP Access"]
    }
];

export default function CorporatePackages() {
    return (
        <section className="py-40 bg-black border-t border-white/5 relative overflow-hidden" id="corporate">
            {/* Subtle grain texture accent */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-overlay bg-[url('/assets/palmeraie_cinematic_1.png')] bg-cover bg-center" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <SectionReveal className="mb-24 text-center max-w-2xl mx-auto" yOffset={20}>
                    <span className="inline-block text-coral-500 font-mono text-[10px] tracking-[0.22em] uppercase mb-5">
                        Corporate Experiences
                    </span>
                    <h2 className="font-display text-5xl md:text-6xl text-white mb-6 uppercase tracking-tight">Elevate <br/> Your Team</h2>
                    <p className="text-gray-400 font-sans text-base font-light leading-relaxed max-w-lg mx-auto uppercase tracking-widest text-[11px] opacity-60">
                        Exclusive B2B packages designed for team building, networking, and unparalleled hospitality.
                    </p>
                </SectionReveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5">
                    {packages.map((pkg, index) => (
                        <SectionReveal key={pkg.name} delay={index * 0.1} className="h-full">
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="h-full"
                            >
                                <GlassCard glowColor={pkg.glow} className="h-full rounded-none flex flex-col group p-12">
                                    <p className={`text-[10px] font-mono tracking-[0.2em] uppercase mb-4 ${pkg.glow === "gold" ? "text-gold-400" : "text-coral-400"}`}>{pkg.price}</p>
                                    <h3 className="font-display text-4xl text-white mb-8 uppercase tracking-wide group-hover:text-coral-500 transition-colors">{pkg.name}</h3>

                                    <ul className="space-y-4 mb-14 flex-grow border-t border-white/5 pt-10">
                                        {pkg.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-4 text-gray-500 font-sans text-xs uppercase tracking-wider group-hover:text-gray-300 transition-colors">
                                                <span className={`w-1 h-1 rounded-full ${pkg.glow === "gold" ? "bg-gold-400" : "bg-coral-500"} flex-shrink-0 animate-pulse`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="w-full mt-auto py-5 bg-transparent border border-white/10 text-white font-sans text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-500">
                                        Inquire Now
                                    </button>
                                </GlassCard>
                            </motion.div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
