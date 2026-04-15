"use client";

import { motion } from "framer-motion";
import { Thermometer, Wind, Mountain, Activity } from "lucide-react";

const bentoItems = [
    {
        title: "Thermal Stress",
        value: "32°C",
        subtitle: "Avg. Morning Peak",
        desc: "Extreme heat management protocols in effect through the palm corridor.",
        icon: Thermometer,
        size: "md:col-span-2 col-span-1 row-span-1",
        color: "text-coral-500",
        bg: "bg-obsidian-950/50"
    },
    {
        title: "Elevation",
        value: "+142m",
        subtitle: "Cumulative Gain",
        desc: "Sharp technical climbs across the Tensift riverbed.",
        icon: Mountain,
        size: "col-span-1 row-span-1",
        color: "text-gold-400",
        bg: "bg-obsidian-900/40"
    },
    {
        title: "Surface Tech",
        value: "Hybrid",
        subtitle: "Sand / Gravel / Palmier",
        desc: "Varied terrain requiring adaptive footwear precision.",
        icon: Wind,
        size: "col-span-1 md:row-span-2 row-span-1",
        color: "text-cyan-400",
        bg: "bg-obsidian-950/80"
    },
    {
        title: "Vitals Sync",
        value: "Active",
        subtitle: "Neural Monitoring",
        desc: "Real-time telemetry tracked via the 2026 athlete backbone.",
        icon: Activity,
        size: "md:col-span-2 col-span-1 row-span-1",
        color: "text-white",
        bg: "bg-black"
    }
];

export default function RaceBentoGrid() {
    return (
        <section className="py-32 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <span className="text-coral-500 font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Engineered Performance</span>
                    <h2 className="font-display text-4xl md:text-6xl tracking-tight uppercase">Technical <br/>Specifications</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
                    {bentoItems.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className={`${item.size} ${item.bg} border border-white/10 p-8 flex flex-col justify-between group overflow-hidden relative backdrop-blur-md`}
                        >
                            {/* Decorative background glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150" />

                            <div className="flex justify-between items-start z-10">
                                <div>
                                    <item.icon className={`w-6 h-6 ${item.color} mb-4`} />
                                    <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">{item.title}</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-3xl md:text-5xl font-display leading-none">{item.value}</span>
                                    <p className="text-gray-400 text-[10px] mt-1 uppercase">{item.subtitle}</p>
                                </div>
                            </div>

                            <div className="mt-auto z-10">
                                <p className="text-gray-500 text-xs leading-relaxed max-w-[200px] font-sans group-hover:text-gray-300 transition-colors">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Corner dash decoration */}
                            <div className="absolute bottom-4 right-4 opacity-20">
                                <div className="w-8 h-[1px] bg-white translate-x-2" />
                                <div className="h-8 w-[1px] bg-white translate-y-2 translate-x-[32px] -mt-[32px]" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
