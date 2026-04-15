"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    yOffset?: number;
}

export default function SectionReveal({ children, className = "", delay = 0, yOffset = 24 }: SectionRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: yOffset }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
            transition={{
                duration: 0.9,
                delay,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
