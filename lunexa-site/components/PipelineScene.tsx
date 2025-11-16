"use client";

import { Suspense, lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";

// Lazy load Spline to improve initial load time
const Spline = lazy(() => import("@splinetool/react-spline"));

export default function PipelineScene() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative w-full h-full"
      suppressHydrationWarning
    >
      {isMounted ? (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center bg-dark-bg" suppressHydrationWarning>
              <div className="text-white/30 text-lg animate-pulse">Loading 3D Scene...</div>
            </div>
          }
        >
          <div suppressHydrationWarning>
            <Spline
              scene="/spline/holographic-earth.splinecode"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "120vh",
              }}
            />
          </div>
        </Suspense>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-dark-bg" suppressHydrationWarning>
          <div className="text-white/30 text-lg animate-pulse">Loading 3D Scene...</div>
        </div>
      )}

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/30 via-transparent to-dark-bg/60 pointer-events-none" suppressHydrationWarning />
    </motion.div>
  );
}
