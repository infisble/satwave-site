"use client";

import { motion } from "framer-motion";
import {
  Planet,
  Scan,
  ArrowsClockwise,
  ChartLineUp,
} from "phosphor-react";
import { siteContent } from "@/lib/content";
import GlassCard from "./GlassCard";

const iconMap = {
  Planet,
  Scan,
  ArrowsClockwise,
  ChartLineUp,
};

export default function Features() {
  return (
    <section id="features" className="py-32 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* suppressHydrationWarning needed: Framer Motion's whileInView uses IntersectionObserver
            which is client-only and causes different initial states between server and client */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
          suppressHydrationWarning
        >
          Waste Intelligence Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-white/60 text-lg max-w-2xl mx-auto mb-16"
          suppressHydrationWarning
        >
          End-to-end tooling that turns orbital insights into circular action
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteContent.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <GlassCard key={feature.title} delay={index * 0.1}>
                <div className="flex items-start gap-4" suppressHydrationWarning>
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-xl" suppressHydrationWarning>
                    <Icon size={32} weight="light" className="text-accent-cyan" />
                  </div>
                  <div suppressHydrationWarning>
                    <h3 className="text-xl mb-3">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
