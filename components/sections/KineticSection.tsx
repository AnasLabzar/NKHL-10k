"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function KineticSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const xRight = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-1, 1]);

    return (
        <section 
            ref={containerRef}
            className="relative py-32 bg-black overflow-hidden select-none"
        >
            <div className="flex flex-col gap-8 opacity-10">
                <motion.div 
                    style={{ x: xLeft, rotate }}
                    className="whitespace-nowrap flex gap-12 font-display text-[clamp(4rem,12vw,12rem)] leading-none uppercase"
                >
                    <span>Push Limits</span>
                    <span>Push Limits</span>
                    <span>Push Limits</span>
                </motion.div>
                
                <motion.div 
                    style={{ x: xRight, rotate: -rotate }}
                    className="whitespace-nowrap flex gap-12 font-display text-[clamp(4rem,12vw,12rem)] leading-none uppercase text-coral-500"
                >
                    <span>Beyond 10K</span>
                    <span>Beyond 10K</span>
                    <span>Beyond 10K</span>
                </motion.div>

                <motion.div 
                    style={{ x: xLeft, rotate }}
                    className="whitespace-nowrap flex gap-12 font-display text-[clamp(4rem,12vw,12rem)] leading-none uppercase"
                >
                    <span>Obsidian Palm</span>
                    <span>Obsidian Palm</span>
                    <span>Obsidian Palm</span>
                </motion.div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="max-w-4xl px-6 text-center">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display text-5xl md:text-8xl mb-8 tracking-tighter"
                    >
                        UNCOMPROMISING <br />
                        <span className="text-coral-500">PRECISION.</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-gray-400 text-lg md:text-xl font-light uppercase tracking-widest leading-relaxed max-w-2xl mx-auto"
                    >
                        Every second is a calculated move. Every heartbeat is a performance metric. 
                        The Palmeraie is your laboratory.
                    </motion.p>
                </div>
            </div>

            {/* Gradient vignetting for depth */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent z-20" />
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
        </section>
    );
}
