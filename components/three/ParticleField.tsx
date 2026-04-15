"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  z: number; // Depth simulation
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 120;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.5 + 0.1,
          z: Math.random() * 2 + 1, // Depth factor
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Mouse Parallax Calculation
        const mouseParallaxX = (mouseRef.current.x - canvas.width / 2) * 0.01 * p.z;
        const mouseParallaxY = (mouseRef.current.y - canvas.height / 2) * 0.01 * p.z;

        // Render particle
        ctx.beginPath();
        ctx.arc(p.x + mouseParallaxX, p.y + mouseParallaxY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 100, 80, ${p.opacity})`; // Coral accent
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(255, 100, 80, 0.5)";
        ctx.fill();

        // Very faint lines between close particles
        particles.forEach((p2) => {
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(p.x + mouseParallaxX, p.y + mouseParallaxY);
                ctx.lineTo(p2.x + mouseParallaxX, p2.y + mouseParallaxY);
                ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / 100) * 0.05})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        });
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full pointer-events-none opacity-40 mix-blend-screen"
    />
  );
}
