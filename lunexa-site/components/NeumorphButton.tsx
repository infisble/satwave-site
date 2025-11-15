"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NeumorphButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
}

export default function NeumorphButton({
  children,
  onClick,
  variant = "primary",
  href,
  className = "",
}: NeumorphButtonProps) {
  const baseStyles = "px-8 py-4 font-medium neumorphic-btn";
  const variantStyles =
    variant === "primary"
      ? "bg-gradient-to-r from-accent-cyan to-accent-purple text-white"
      : "bg-white/5 text-white/90 border border-white/20";

  const Component = href ? "a" : "button";

  return (
    // suppressHydrationWarning needed: Framer Motion's whileHover/whileTap may add
    // event listeners and attributes during hydration that differ from server HTML
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} suppressHydrationWarning>
      <Component
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${variantStyles} ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
}
