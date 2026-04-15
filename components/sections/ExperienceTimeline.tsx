"use client";

import SectionReveal from "../ui/SectionReveal";

export default function ExperienceTimeline() {
    const events = [
        { time: "06:00", title: "Obsidian Base Camp", desc: "Arrive early. Premium Moroccan tea and gear check in the VIP lounge.", highlight: false },
        { time: "07:30", title: "Warm-Up Session", desc: "Professional trainers lead dynamic stretching under the Marrakech sunrise.", highlight: false },
        { time: "08:00", title: "The NKHL 10K Start", desc: "The elite wave begins the journey through the ancient Palmeraie.", highlight: true },
        { time: "09:30", title: "Finish Line & Recovery", desc: "Cross the obsidian finish, collect your medal, and enter the recovery zone.", highlight: false },
        { time: "11:00", title: "Podium Ceremony", desc: "Crowning the champions with gold-accented trophies.", highlight: false },
    ];

    return (
        <section className="py-40 bg-[#080808] border-t border-white/5 relative overflow-hidden" id="experience">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <SectionReveal className="mb-24" yOffset={20}>
                    <span className="block text-gold-400 font-mono text-[10px] tracking-[0.22em] uppercase mb-5">Race Day</span>
                    <h2 className="font-display text-5xl md:text-6xl text-white tracking-tight max-w-lg uppercase">The <br/> Experience</h2>
                </SectionReveal>

                <div className="relative">
                    {/* Vertical timeline spine */}
                    <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-white/8" />

                    <div className="space-y-0">
                        {events.map((event, i) => (
                            <SectionReveal key={i} delay={i * 0.12} yOffset={16}
                                className="relative flex flex-col md:flex-row gap-0 group border-b border-white/5 last:border-b-0"
                            >
                                {/* Time stamp */}
                                <div className="md:w-[200px] flex-shrink-0 pt-8 pr-10 pb-8 text-right">
                                    <span className={`font-mono text-sm tracking-wider ${event.highlight ? "text-gold-400" : "text-gray-500"}`}>
                                        {event.time}
                                    </span>
                                </div>

                                {/* Dot on spine */}
                                <div className="absolute left-0 md:left-[200px] top-11 w-[9px] h-[9px] rounded-full -translate-x-1/2 border border-white/30 bg-black transition-all duration-500 group-hover:bg-coral-500 group-hover:border-coral-500 group-hover:shadow-glow-coral" />

                                {/* Content */}
                                <div className="md:pl-10 pt-0 md:pt-8 pb-8">
                                    <h3 className={`font-display text-2xl mb-3 tracking-tight transition-colors duration-300 uppercase ${event.highlight ? "text-gold-300" : "text-white"}`}>
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-500 font-sans text-[11px] uppercase tracking-widest leading-relaxed max-w-lg group-hover:text-gray-400 transition-colors duration-300 opacity-70">
                                        {event.desc}
                                    </p>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
