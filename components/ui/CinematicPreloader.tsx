"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function CinematicPreloader() {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setComplete(true), 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Tech Grid */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          <div className="relative z-10 w-full max-w-md px-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-between items-end mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-coral-500/80"
            >
              <span>NKHL Protocol 2026</span>
              <span>{Math.min(percent, 100)}%</span>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="h-px w-full bg-white/5 relative overflow-hidden">
                <motion.div 
                    className="absolute inset-y-0 left-0 bg-coral-500 shadow-[0_0_15px_rgba(255,100,80,0.5)]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${percent}%` }}
                    transition={{ duration: 0.2 }}
                />
            </div>

            <div className="mt-8 space-y-2">
                {[
                    "Initializing Neural Link...",
                    "Mapping Palmeraie Sectors...",
                    "Authenticating Athlete Data...",
                    "Activating 3D Atlas Terrain..."
                ].map((text, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: percent > (i + 1) * 20 ? 0.4 : 0 }}
                        className="font-sans text-[9px] uppercase tracking-widest text-white/40 flex items-center gap-2"
                    >
                        <span className="w-1 h-1 rounded-full bg-coral-500/40" />
                        {text}
                    </motion.div>
                ))}
            </div>

            <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed bottom-12 left-1/2 -translate-x-1/2 font-display text-2xl text-white tracking-[0.3em] opacity-10"
            >
                NKHL 10K
            </motion.h1>
          </div>

          {/* Scanning Line overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/[0.03] to-transparent h-40 w-full animate-scan" style={{ top: '-40px' }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
