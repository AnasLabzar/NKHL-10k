"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Target, Cpu } from "lucide-react";

const features = [
    {
        title: "NEURAL PACING",
        desc: "Real-time biometric data sync with the obsidian palm network.",
        icon: Cpu,
        color: "text-cyan-400"
    },
    {
        title: "ELITE GEAR",
        desc: "Custom race kit engineered for the Palmeraie climate.",
        icon: Shield,
        color: "text-gold-400"
    },
    {
        title: "ACTIVE RECOVERY",
        desc: "Post-race cryo-therapy and local holistic treatment.",
        icon: Zap,
        color: "text-coral-500"
    },
    {
        title: "PRECISION COURSE",
        desc: "Millimeter-accurate GPS tracking through ancient groves.",
        icon: Target,
        color: "text-white"
    }
];

export default function RaceExperienceGrid() {
    return (
        <section className="py-24 bg-black border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 overflow-hidden border border-white/10">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="bg-black p-10 group hover:bg-obsidian-950 transition-colors duration-500"
                        >
                            <f.icon className={`w-10 h-10 mb-8 ${f.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`} />
                            <h3 className="font-display text-2xl mb-4 tracking-wider">{f.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-sans group-hover:text-gray-300 transition-colors">
                                {f.desc}
                            </p>
                            
                            <div className="mt-8 overflow-hidden">
                                <motion.div 
                                    className="h-px bg-coral-500/50 w-full"
                                    initial={{ x: "-100%" }}
                                    whileInView={{ x: "100%" }}
                                    transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity, repeatDelay: 3 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
