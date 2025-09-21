"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  dx: number;
  dy: number;
  color: string;
};

export default function MagicalCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: Particle[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#ffffff", "#e0f2fe", "#93c5fd", "#38bdf8"]; // white → bluish
    const maxParticles = 200;

    const createParticle = (x: number, y: number) => {
      if (particles.length > maxParticles) particles.shift();

      const size = Math.random() * 3 + 1;
      const dx = (Math.random() - 0.5) * 1.5; // horizontal drift
      const dy = (Math.random() - 0.5) * 1.5; // vertical drift
      const color = colors[Math.floor(Math.random() * colors.length)];

      particles.push({ x, y, size, alpha: 1, dx, dy, color });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `${p.color}`);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // update particle
        p.x += p.dx;
        p.y += p.dy;
        p.alpha -= 0.02;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
        }
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(drawParticles);
    };

    drawParticles();

    const handleMouseMove = (e: MouseEvent) => {
      for (let i = 0; i < 8; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}
