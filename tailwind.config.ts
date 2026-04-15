// tailwind.config.ts
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                obsidian: {
                    900: "#0B0F19",
                    800: "#111827",
                    700: "#1F2937",
                    950: "#050811",
                },
                coral: {
                    400: "#FB923C",
                    500: "#F97316",
                    600: "#EA580C",
                    950: "#2A1510",
                },
                gold: {
                    300: "#FCD34D",
                    400: "#FBBF24",
                    500: "#F59E0B",
                },
                data: {
                    cyan: "#22D3EE",
                    green: "#34D399",
                },
            },
            fontFamily: {
                // DrukWide — big titles, stats, H1 (font-display class)
                display: ["var(--font-druk)", "Impact", "sans-serif"],
                // Gilroy — sub-headings, body copy, UI labels (font-sans class)
                sans:    ["var(--font-gilroy)", "system-ui", "sans-serif"],
                // Kill the default serif stack by pointing it to Gilroy as well
                serif:   ["var(--font-gilroy)", "Georgia", "serif"],
                mono:    ["'Roboto Mono'", "monospace"],
            },
            backdropBlur: {
                glass: "16px",
            },
            backgroundImage: {
                "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
            },
            boxShadow: {
                "glow-coral": "0 0 20px rgba(249, 115, 22, 0.3)",
                "glow-gold": "0 0 15px rgba(251, 191, 36, 0.2)",
                "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
            },
            animation: {
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "float": "float 6s ease-in-out infinite",
                "glow-pulse": "glowPulse 2s ease-in-out infinite alternate",
                "draw-line": "drawLine 2s ease-out forwards",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                glowPulse: {
                    "0%": { boxShadow: "0 0 5px rgba(249, 115, 22, 0.2)" },
                    "100%": { boxShadow: "0 0 20px rgba(249, 115, 22, 0.4), 0 0 40px rgba(249, 115, 22, 0.2)" },
                },
                drawLine: {
                    "0%": { strokeDashoffset: "1000" },
                    "100%": { strokeDashoffset: "0" },
                },
            },
        },
    },
    plugins: [tailwindcssAnimate],
};

export default config;
