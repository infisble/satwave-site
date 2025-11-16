"use client";

import { motion } from "framer-motion";
import {
  Planet,
  MapPinLine,
  StackSimple,
  ArrowsLeftRight,
  TrendUp,
} from "phosphor-react";
import { siteContent } from "@/lib/content";
import GlassCard from "./GlassCard";

const iconMap = {
  Planet,
  MapPinLine,
  StackSimple,
  ArrowsLeftRight,
  TrendUp,
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32">
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
          How SatWave Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-white/60 text-lg max-w-2xl mx-auto mb-16"
          suppressHydrationWarning
        >
          From orbital detection to measurable climate impact in five connected stages
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8">
          {siteContent.howItWorks.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <GlassCard key={step.title} delay={index * 0.1}>
                <div className="flex flex-col items-center text-center" suppressHydrationWarning>
                  <div className="mb-6 p-4 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-2xl" suppressHydrationWarning>
                    <Icon size={48} weight="light" className="text-accent-cyan" />
                  </div>
                  <h3 className="text-2xl mb-4">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
