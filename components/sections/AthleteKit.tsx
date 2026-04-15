"use client";

import SectionReveal from "../ui/SectionReveal";
import GlassCard from "../ui/GlassCard";

export default function AthleteKit() {
    return (
        <section className="py-32 bg-obsidian-950 relative overflow-hidden" id="kits">
            {/* Massive blur glowing backdrop */}
            <div className="absolute top-[40%] left-[20%] w-[800px] h-[800px] bg-coral-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
                    <SectionReveal yOffset={40}>
                        <span className="inline-block text-gold-400 font-mono text-xs tracking-[0.2em] uppercase mb-6 px-3 py-1 rounded-full border border-gold-400/20 bg-gold-400/5">
                            Premium Gear
                        </span>
                        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight leading-tight">
                            The Obsidian <br/> Kit
                        </h2>
                        <p className="text-gray-400 font-sans text-lg md:text-xl mb-12 leading-relaxed font-light">
                            Every participant receives our signature race kit. Crafted with cutting-edge breathable materials and designed for high performance in the Moroccan climate, it sets a new standard for race day apparel.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <SectionReveal delay={0.1}>
                                <GlassCard glowColor="coral" className="h-full">
                                    <h4 className="text-white font-sans text-lg font-medium mb-3">Performance Jersey</h4>
                                    <p className="text-sm text-gray-400 font-light leading-relaxed">Moisture-wicking, UV-resistant fabric with gold accents.</p>
                                </GlassCard>
                            </SectionReveal>
                            <SectionReveal delay={0.2}>
                                <GlassCard glowColor="gold" className="h-full">
                                    <h4 className="text-white font-sans text-lg font-medium mb-3">Finisher Medal</h4>
                                    <p className="text-sm text-gray-400 font-light leading-relaxed">Exclusive obsidian-inspired design forged from heavy metal.</p>
                                </GlassCard>
                            </SectionReveal>
                            <SectionReveal delay={0.3}>
                                <GlassCard glowColor="cyan" className="h-full">
                                    <h4 className="text-white font-sans text-lg font-medium mb-3">RFID Bib</h4>
                                    <p className="text-sm text-gray-400 font-light leading-relaxed">Precision timing chip integrated cleanly into aesthetic bib.</p>
                                </GlassCard>
                            </SectionReveal>
                            <SectionReveal delay={0.4}>
                                <GlassCard glowColor="none" className="h-full">
                                    <h4 className="text-white font-sans text-lg font-medium mb-3">VIP Gift</h4>
                                    <p className="text-sm text-gray-400 font-light leading-relaxed">A mysterious premium sponsor gift included in your pack.</p>
                                </GlassCard>
                            </SectionReveal>
                        </div>
                    </SectionReveal>
                    
                    <SectionReveal delay={0.4} yOffset={60} className="relative h-[700px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-obsidian-900 group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-obsidian-950 via-obsidian-900 to-coral-500/10 z-10 transition-colors duration-1000 group-hover:to-coral-500/20" />
                        
                        {/* Fake 3D render placeholder skeleton */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                            <div className="w-32 h-32 rounded-full border border-white/5 bg-white/5 backdrop-blur-md flex items-center justify-center mb-6 shadow-glass animate-float">
                                <span className="text-white/40">3D</span>
                            </div>
                            <span className="text-gray-400 font-mono text-sm tracking-widest uppercase">Render Coming Soon</span>
                        </div>

                        {/* Geometric Texture */}
                        <div className="absolute inset-0 opacity-[0.03] z-0 mix-blend-overlay" />
                        
                        {/* Dynamic Sweep Light */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover:animate-draw-line" />
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
}
