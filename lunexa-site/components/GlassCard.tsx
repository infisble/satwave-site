"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { getInitialMotionState } from "@/lib/motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  delay = 0,
}: GlassCardProps) {
  return (
    // suppressHydrationWarning needed: Framer Motion's whileInView uses IntersectionObserver
    // which is client-only and causes different initial states between server and client
    <motion.div
      initial={getInitialMotionState(
        { opacity: 0, y: 20, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)" }
      )}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={`glass-card p-8 shadow-glass ${className}`}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
}
