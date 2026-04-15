"use client";

import { motion } from "framer-motion";

export default function SVGMapFallback() {
    return (
        <div className="relative w-full h-full bg-obsidian-900 rounded-3xl overflow-hidden flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-[url('/textures/moroccan-geo.svg')] opacity-[0.03] z-0 pointer-events-none" />
            
            <svg 
                viewBox="0 0 800 600" 
                className="w-full h-full max-w-3xl z-10 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]"
            >
                <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EA580C" />
                        <stop offset="50%" stopColor="#F97316" />
                        <stop offset="100%" stopColor="#FB923C" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                {/* Simulated route path */}
                <motion.path
                    d="M 100 500 Q 200 400 300 450 T 450 300 T 600 200 T 700 100"
                    fill="none"
                    stroke="url(#routeGradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                />

                {/* Checkpoints */}
                {[
                    { cx: 100, cy: 500, type: "start" },
                    { cx: 300, cy: 450, type: "checkpoint" },
                    { cx: 450, cy: 300, type: "checkpoint" },
                    { cx: 600, cy: 200, type: "checkpoint" },
                    { cx: 700, cy: 100, type: "finish" },
                ].map((pt, i) => (
                    <motion.circle
                        key={i}
                        cx={pt.cx}
                        cy={pt.cy}
                        r="8"
                        fill={pt.type === "start" || pt.type === "finish" ? "#FCD34D" : "#F97316"}
                        className="cursor-pointer"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1 + i * 0.2 }}
                        whileHover={{ scale: 1.5 }}
                    />
                ))}
            </svg>

            <div className="absolute bottom-6 left-6 z-20">
                <div className="px-4 py-2 bg-obsidian-950/80 backdrop-blur-md rounded-lg border border-white/10 text-xs font-mono text-gray-400">
                    Interactive Map Unavailable
                </div>
            </div>
        </div>
    );
}
