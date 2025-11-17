"use client";

import { motion } from "framer-motion";
import { Check } from "phosphor-react";
import { siteContent } from "@/lib/content";
import { getInitialMotionState } from "@/lib/motion";
import GlassCard from "./GlassCard";
import NeumorphButton from "./NeumorphButton";

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* suppressHydrationWarning needed: Framer Motion's whileInView uses IntersectionObserver
            which is client-only and causes different initial states between server and client */}
        <motion.h2
          initial={getInitialMotionState(
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0 }
          )}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
          suppressHydrationWarning
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          initial={getInitialMotionState(
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0 }
          )}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-white/60 text-lg max-w-2xl mx-auto mb-16"
          suppressHydrationWarning
        >
          Choose the plan that fits your trading needs
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {siteContent.pricing.map((plan, index) => (
            <GlassCard
              key={plan.name}
              delay={index * 0.1}
              className={`relative ${plan.highlighted ? "border-2 border-accent-cyan/30" : ""}`}
            >
              {plan.highlighted && plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full text-white text-sm font-medium" suppressHydrationWarning>
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-6" suppressHydrationWarning>
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2" suppressHydrationWarning>
                  <span className="text-4xl font-semibold text-white">{plan.price}</span>
                  {plan.period && <span className="text-white/50">{plan.period}</span>}
                </div>
                <p className="text-white/60 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-white/70 text-sm">
                    <Check size={20} weight="bold" className="text-accent-green flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <NeumorphButton
                variant={plan.highlighted ? "primary" : "secondary"}
                className="w-full justify-center"
              >
                {plan.cta}
              </NeumorphButton>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
