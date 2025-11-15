"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";

export default function Featured() {
  return (
    <section className="py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* suppressHydrationWarning needed: Framer Motion's whileInView uses IntersectionObserver
            which is client-only and causes different initial states between server and client */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/40 text-sm uppercase tracking-wider mb-12"
          suppressHydrationWarning
        >
          {siteContent.featured.title}
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {siteContent.featured.logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-white/30 text-2xl font-light hover:text-white/50 transition-colors"
              suppressHydrationWarning
            >
              {logo.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
