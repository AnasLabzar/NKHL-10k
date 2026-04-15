"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedNumber({ value, suffix = "", prefix = "", duration = 2000 }: AnimatedNumberProps) {
  const ref       = useRef<HTMLSpanElement>(null);
  const isInView  = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{current.toLocaleString()}{suffix}
    </span>
  );
}
