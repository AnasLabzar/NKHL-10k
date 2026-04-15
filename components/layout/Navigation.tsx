"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Detect if logo file exists by trying to load it
const LOGO_PATH = "/images/logo.svg";

export default function Navigation() {
    const [scrolled, setScrolled]       = useState(false);
    const [logoError, setLogoError]     = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 w-full z-50 transition-all duration-700 ${
                scrolled ? "bg-black/75 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* ── Wordmark or Logo ── */}
                    <div className="flex-shrink-0">
                        {!logoError ? (
                            <Image
                                src={LOGO_PATH}
                                alt="NKHL 10K"
                                width={120}
                                height={40}
                                className="h-8 w-auto object-contain"
                                onError={() => setLogoError(true)}
                                priority
                            />
                        ) : (
                            <span className="font-display text-2xl text-white tracking-wider">
                                NKHL <span className="text-coral-500">10K</span>
                            </span>
                        )}
                    </div>

                    {/* ── Links ── */}
                    <div className="hidden md:flex items-center gap-10">
                        {[
                            { label: "Route",     href: "#the-route" },
                            { label: "Events",    href: "#events" },
                            { label: "Experience",href: "#experience" },
                            { label: "Kits",      href: "#kits" },
                            { label: "Corporate", href: "#corporate" },
                            { label: "Partners",  href: "#partners" },
                        ].map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="text-gray-400 hover:text-white font-sans text-[10px] font-bold uppercase tracking-[0.15em] transition-colors duration-200"
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* ── CTA ── */}
                    <div className="hidden md:block">
                        <motion.a
                            href="#events"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-6 py-2.5 bg-white text-black font-sans text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-gold-300 transition-colors duration-300"
                        >
                            Register
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
