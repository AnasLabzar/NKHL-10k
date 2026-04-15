import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: "coral" | "gold" | "cyan" | "none";
}

export default function GlassCard({ children, className = "", glowColor = "none" }: GlassCardProps) {
    const glowClasses = {
        coral: "hover:border-coral-500/40 shadow-glass hover:shadow-glow-coral",
        gold: "hover:border-gold-300/40 shadow-glass hover:shadow-glow-gold",
        cyan: "hover:border-data-cyan/40 shadow-glass hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
        none: "shadow-glass",
    };

    const gradientClasses = {
        coral: "bg-coral-500/5",
        gold: "bg-gold-400/5",
        cyan: "bg-data-cyan/5",
        none: "bg-transparent",
    };

    return (
        <div className={cn(
            "relative group rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            "bg-glass-gradient backdrop-blur-glass border border-white/10 hover:border-white/20",
            glowClasses[glowColor],
            className
        )}>
            {/* Soft inner glow on hover */}
            {glowColor !== "none" && (
                <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen",
                    gradientClasses[glowColor]
                )} />
            )}
            
            {/* Top edge highlight highlight */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 w-full h-full p-8">
                {children}
            </div>
        </div>
    );
}
