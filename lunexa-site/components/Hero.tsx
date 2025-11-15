"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import NeumorphButton from "./NeumorphButton";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-60 md:pt-80">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center mt-20 md:mt-32">
        {/* suppressHydrationWarning needed: Framer Motion components may have different
            initial states during hydration due to animations and event listeners */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          suppressHydrationWarning
        >
          <h1 className="text-white mb-6">
            {siteContent.hero.title}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
            suppressHydrationWarning
          >
            {siteContent.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            suppressHydrationWarning
          >
            <NeumorphButton variant="primary">
              {siteContent.hero.cta}
            </NeumorphButton>
            <NeumorphButton variant="secondary">
              {siteContent.hero.secondaryCta}
            </NeumorphButton>
          </motion.div>
        </motion.div>

        {/* UI Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 relative"
          suppressHydrationWarning
        >
          <div className="glass-card p-1 max-w-5xl mx-auto">
            <div className="bg-dark-card rounded-xl p-8 md:p-12">
              {/* Mockup Dashboard */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="h-4 w-32 bg-white/10 rounded animate-pulse" />
                    <div className="h-8 w-48 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 rounded" />
                  </div>
                  <div className="h-10 w-24 bg-accent-green/20 rounded-lg" />
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-4 space-y-2">
                      <div className="h-3 w-20 bg-white/20 rounded" />
                      <div className="h-6 w-28 bg-accent-cyan/30 rounded" />
                      <div className="h-16 bg-gradient-to-t from-accent-purple/20 to-transparent rounded" />
                    </div>
                  ))}
                </div>

                {/* Performance Table */}
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <div className="h-4 w-32 bg-white/20 rounded" />
                      <div className="h-4 w-24 bg-accent-green/30 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-20 bg-gradient-to-r from-accent-cyan/10 via-accent-purple/10 to-accent-green/10 blur-3xl -z-10" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        suppressHydrationWarning
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          suppressHydrationWarning
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
