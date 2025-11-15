"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function PipelineSceneCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    interface Particle {
      x: number;
      y: number;
      z: number;
      angle: number;
      radius: number;
      speed: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    const particleCount = 150;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: 0,
        y: 0,
        z: Math.random() * 500,
        angle: Math.random() * Math.PI * 2,
        radius: 150 + Math.random() * 200,
        speed: 0.0005 + Math.random() * 0.001,
        opacity: 0.3 + Math.random() * 0.7,
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "rgba(11, 15, 20, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      particles.forEach((particle) => {
        // Update angle
        particle.angle += particle.speed;

        // Calculate 3D position
        const x = Math.cos(particle.angle) * particle.radius;
        const z = Math.sin(particle.angle) * particle.radius;
        const y = particle.z - 250;

        // Perspective projection
        const scale = 300 / (300 + z);

        // Skip particles behind camera or with invalid scale
        if (scale <= 0) return;

        const projX = x * scale + centerX;
        const projY = y * scale + centerY;

        // Draw particle
        const size = Math.max(0.1, scale * 2);
        const opacity = Math.max(0, Math.min(1, particle.opacity * scale));

        const gradientRadius = Math.max(0.1, size * 2);
        const gradient = ctx.createRadialGradient(projX, projY, 0, projX, projY, gradientRadius);
        gradient.addColorStop(0, `rgba(0, 224, 255, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(122, 92, 255, ${opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(0, 255, 163, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(projX, projY, size, 0, Math.PI * 2);
        ctx.fill();

        // Update z for wave effect
        particle.z = ((particle.z + 1) % 500);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative w-full h-full"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "#0b0f14" }}
      />

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/30 via-transparent to-dark-bg/60 pointer-events-none" />
    </motion.div>
  );
}
