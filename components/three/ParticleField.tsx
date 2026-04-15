"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseX: number;
  baseY: number;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef   = useRef<number>(0);
  const particles = useRef<Particle[]>([]);
  const mouse     = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      resize();
      particles.current = [];
      const count = Math.floor((canvas.width * canvas.height) / 14000); 
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.current.push({
          x,
          y,
          baseX: x,
          baseY: y,
          z: Math.random(),
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          size: Math.random() * 1.5 + 0.3,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.active = true;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        // Subtle drift
        p.x += p.vx;
        p.y += p.vy;

        // Interaction with mouse
        if (mouse.current.active) {
            const dx = mouse.current.x - p.x;
            const dy = mouse.current.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const force = (120 - dist) / 120; // 120px influence radius

            if (dist < 120) {
                p.x -= dx * force * 0.03;
                p.y -= dy * force * 0.03;
            }
        }

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.7})`;
        ctx.fill();
      });

      // Draw connecting lines between close particles
      const pts = particles.current;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx   = pts[i].x - pts[j].x;
          const dy   = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.08;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(249, 115, 22, ${alpha})`;
            ctx.lineWidth   = 0.5;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    init();
    draw();

    window.addEventListener("resize", init);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", () => mouse.current.active = false);
    
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      aria-hidden
    />
  );
}
