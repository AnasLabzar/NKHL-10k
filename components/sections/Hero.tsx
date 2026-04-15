"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import ParticleField to avoid SSR canvas issues
const ParticleField = dynamic(() => import("../three/ParticleField"), { ssr: false });

export default function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black">

            {/* ─── Cinematic background layers ─────────────────────────── */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-[url('/images/palmeraie-dark.jpg')] bg-cover bg-center scale-[1.06]"
                    style={{ transformOrigin: "center bottom" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
                <div className="absolute inset-0 bg-black/35 backdrop-blur-[1.5px]" />
            </div>

            {/* ─── Particle field canvas ────────────────────────────────── */}
            <div className="absolute inset-0 z-10">
                <ParticleField />
            </div>

            {/* ─── Content ─────────────────────────────────────────────── */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center"
                >
                    {/* Badge */}
                    <span className="px-5 py-1.5 mb-10 text-[10px] font-sans font-bold tracking-[0.25em] text-gold-300 uppercase border border-gold-400/25 rounded-full bg-black/30 backdrop-blur-md">
                        NKHL · Edition 2026 · Marrakech
                    </span>

                    {/* Main heading with fluid display font */}
                    <h1 className="font-display text-[clamp(3.5rem,10vw,7.5rem)] text-white tracking-tight leading-[0.9] mb-8 drop-shadow-2xl uppercase">
                        Beyond<br />
                        <span className="italic text-white/75 font-display">the Palm</span>
                    </h1>

                    {/* Sub-heading  */}
                    <p className="max-w-md text-base md:text-lg text-gray-400 font-sans font-light mb-12 leading-relaxed tracking-wide">
                        An ultra-premium 10K endurance event in the heart of<br className="hidden md:block" />
                        Marrakech&apos;s Palmeraie.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-sans font-bold uppercase tracking-[0.15em] text-xs hover:bg-gold-300 transition-colors duration-300"
                        >
                            Secure Your Spot
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                        <motion.a
                            href="#the-route"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 px-10 py-4 bg-transparent text-white border border-white/20 font-sans font-bold uppercase tracking-[0.15em] text-xs hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                        >
                            View Route Map
                        </motion.a>
                    </div>
                </motion.div>

                {/* ─── Floating metrics strip ─────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-14 left-1/2 -translate-x-1/2"
                >
                    <div className="flex items-stretch gap-0 px-8 py-5 bg-black/30 backdrop-blur-xl border border-white/10" style={{ borderRadius: "1px" }}>
                        {[
                            { label: "Distance",  value: "10",    unit: "km" },
                            { label: "Avg Pace",  value: "4:30",  unit: "min/km" },
                            { label: "Elevation", value: "+142",  unit: "m" },
                            { label: "Race Date", value: "Oct",   unit: "2026" },
                        ].map((stat, i, arr) => (
                            <div
                                key={stat.label}
                                className={`flex flex-col items-center justify-center px-8 ${i < arr.length - 1 ? "border-r border-white/8" : ""}`}
                            >
                                <span className="text-[9px] font-sans font-semibold tracking-[0.22em] text-gray-500 uppercase mb-1.5">
                                    {stat.label}
                                </span>
                                <span className="font-display text-2xl md:text-3xl text-white leading-none">
                                    {stat.value}
                                </span>
                                <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest mt-1">
                                    {stat.unit}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Blend into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </section>
    );
}
