"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CinematicGallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="relative bg-black min-h-[150vh] flex flex-col items-center py-32 overflow-hidden">
            <motion.div style={{ opacity }} className="max-w-4xl text-center mb-32 px-6">
                <span className="text-coral-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">Visual Narrative</span>
                <h2 className="font-display text-5xl md:text-8xl tracking-tight uppercase mb-8">
                    The Spirit <br /> of the <span className="text-coral-500">Palmeraie</span>
                </h2>
                <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed max-w-2xl mx-auto uppercase tracking-widest opacity-60">
                    A dialogue between athletic engineering and raw natural elegance. 
                    Where the trail meets the ancestral obsidian sands.
                </p>
            </motion.div>

            <div className="relative w-full max-w-7xl px-6 grid grid-cols-12 gap-4">
                {/* Large Featured Image */}
                <motion.div 
                    style={{ y: y1 }}
                    className="col-span-12 md:col-span-7 h-[400px] md:h-[600px] relative overflow-hidden group border border-white/5"
                >
                    <Image 
                        src="/assets/palmeraie_cinematic_1.png" 
                        alt="Cinematic Palmeraie"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-10 left-10">
                        <p className="font-display text-2xl text-white uppercase tracking-wider">Atmospheric <br/> Endurance</p>
                    </div>
                </motion.div>

                {/* Secondary Image / Empty Space for offset */}
                <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
                    <motion.div 
                        style={{ y: y2 }}
                        className="h-[300px] md:h-[450px] relative overflow-hidden group border border-white/5 bg-obsidian-900"
                    >
                        {/* If we had a second image, it would go here. Using a high-end gradient for now */}
                        <div className="absolute inset-0 bg-gradient-to-br from-obsidian-800 to-black flex items-center justify-center p-12">
                             <div className="border border-coral-500/20 w-full h-full flex flex-col items-center justify-center text-center">
                                <span className="text-coral-500 font-mono text-[10px] mb-2 uppercase tracking-widest">Tech Detail</span>
                                <h3 className="font-display text-xl uppercase text-white/40">Obsidian <br/> Trail Matrix</h3>
                             </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="p-10 border border-white/5 bg-white/[0.02] backdrop-blur-3xl"
                    >
                        <h4 className="font-display text-lg mb-4 text-coral-500 uppercase tracking-widest">Heritage</h4>
                        <p className="text-gray-500 text-xs font-sans leading-relaxed">
                            Every palm tree in the grove is a silent witness to centuries of endurance. 
                            We honor the land by leaving only footprints of excellence.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Floating text background */}
            <div className="absolute top-1/2 left-0 w-full whitespace-nowrap overflow-hidden pointer-events-none opacity-[0.03] select-none font-display text-[30vw] uppercase -translate-y-1/2">
                Palmeraie Palmeraie Palmeraie
            </div>
        </section>
    );
}
