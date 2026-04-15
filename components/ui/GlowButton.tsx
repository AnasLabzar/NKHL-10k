import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlowButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "glass";
    className?: string;
    onClick?: () => void;
}

export default function GlowButton({ children, variant = "primary", className = "", onClick }: GlowButtonProps) {
    const baseClasses = "relative px-8 py-4 font-sans font-medium rounded-xl overflow-hidden transition-all duration-500 flex items-center justify-center gap-2 group";
    
    const variants = {
        primary: "bg-coral-500 hover:bg-coral-600 text-white shadow-glow-coral hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] border border-coral-400/50",
        secondary: "bg-transparent border border-coral-500 text-coral-400 hover:bg-coral-500/10 shadow-glow-coral",
        glass: "bg-white/5 hover:bg-white/10 backdrop-blur-glass border border-white/10 hover:border-white/20 text-white",
    };

    return (
        <button onClick={onClick} className={cn(baseClasses, variants[variant], className)}>
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
            {/* Apple-style light sweep effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-[-30deg] group-hover:animate-draw-line transition-transform duration-1000 ease-out" />
        </button>
    );
}
