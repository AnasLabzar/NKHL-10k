"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function JoinTheElite() {
    const sectionRef = useRef<HTMLDivElement>(null);
    
    // Magnetic effect logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (rect) {
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            x.set((e.clientX - centerX) * 0.1);
            y.set((e.clientY - centerY) * 0.1);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section 
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative py-48 bg-black overflow-hidden flex items-center justify-center"
        >
            {/* Background Glow */}
            <motion.div 
                style={{ x: mouseXSpring, y: mouseYSpring }}
                className="absolute w-[600px] h-[600px] bg-coral-500/10 blur-[120px] rounded-full pointer-events-none"
            />

            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-coral-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-6 block">Elite Access</span>
                    <h2 className="font-display text-[clamp(2.5rem,8vw,8rem)] leading-none uppercase mb-12 tracking-tighter">
                        Join the <br/> <span className="text-outline text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>vanguard</span>
                    </h2>
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-12 py-6 bg-white text-black font-display text-xl uppercase tracking-widest overflow-hidden transition-all duration-300 hover:bg-coral-500 hover:text-white"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        Register Now
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                    
                    {/* Button sweep animation */}
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                </motion.button>

                <p className="mt-12 text-gray-500 font-mono text-[10px] uppercase tracking-widest opacity-40">
                    Strictly Limited to 300 Global Athletes
                </p>
            </div>

            {/* Side decorations */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
                <div className="h-64 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
                <div className="h-64 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
        </section>
    );
}
