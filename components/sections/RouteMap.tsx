"use client";

import SectionReveal from "../ui/SectionReveal";
import MapContainer from "../map/MapContainer";

export default function RouteMapSection() {
    return (
        <section className="py-32 bg-obsidian-950 relative overflow-hidden" id="the-route">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-coral-500/5 blur-[150px] -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionReveal className="text-center mb-16 max-w-3xl mx-auto" yOffset={30}>
                    <span className="inline-block text-coral-500 font-mono text-xs tracking-[0.2em] uppercase mb-4 px-3 py-1 rounded-full border border-coral-500/20 bg-coral-500/5">
                        The Course
                    </span>
                    <h2 className="font-serif text-5xl md:text-6xl text-white mb-6 tracking-tight">Interactive Route Map</h2>
                    <p className="text-gray-400 font-sans text-lg md:text-xl font-light">
                        Explore the challenging 10K circuit spanning through the historic palm groves.
                    </p>
                </SectionReveal>

                <SectionReveal delay={0.2} yOffset={40} className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-coral-500/30 via-gold-400/20 to-coral-500/30 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                    <MapContainer />
                </SectionReveal>
            </div>
        </section>
    );
}
