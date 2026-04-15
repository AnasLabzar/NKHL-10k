"use client";

import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export default function Footer() {
    const [email, setEmail] = useState("");

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // form logic
    };

    return (
        <footer className="bg-black border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
            {/* Terracotta light streak along the top edge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-coral-500/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
                    {/* Brand col */}
                    <div className="md:col-span-5">
                        <span className="font-display text-4xl text-white tracking-tighter mb-6 block uppercase">
                            NKHL <span className="text-coral-500 italic">10K</span>
                        </span>
                        <p className="text-gray-500 font-sans max-w-xs mb-8 leading-relaxed font-light text-sm">
                            Beyond the Obsidian Palm. An ultra-premium endurance experience in the Marrakech Palmeraie.
                        </p>
                    </div>

                    {/* Nav col */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-sans font-semibold mb-6 uppercase tracking-[0.16em] text-[10px]">Explore</h4>
                        <ul className="space-y-4">
                            {["The Route", "Experience", "Kits", "Corporate"].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-gray-500 hover:text-white transition-colors font-sans text-sm font-light"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter col */}
                    <div className="md:col-span-4">
                        <h4 className="text-white font-sans font-semibold mb-6 uppercase tracking-[0.16em] text-[10px]">Stay Informed</h4>
                        <form className="relative" onSubmit={onSubmit}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                className="w-full bg-white/5 border border-white/10 py-3 px-4 text-white focus:outline-none focus:border-coral-500/50 transition-colors font-sans text-sm font-light rounded-none"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-0 h-full px-4 bg-coral-500 text-white hover:bg-coral-600 transition-colors"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs font-sans font-light tracking-wide">
                        &copy; {new Date().getFullYear()} NKHL 10K. All rights reserved.
                    </p>
                    <div className="flex space-x-8">
                        {["Terms", "Privacy", "Cookies"].map((item) => (
                            <a key={item} href="#" className="text-gray-600 hover:text-white transition-colors text-xs font-sans font-light tracking-wide">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
