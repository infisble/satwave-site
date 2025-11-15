"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";

export default function Mission() {
  return (
    <section id="mission" className="py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* suppressHydrationWarning needed: Framer Motion's whileInView uses IntersectionObserver
            which is client-only and causes different initial states between server and client */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
          suppressHydrationWarning
        >
          Our Mission
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/70 leading-relaxed mb-8"
          suppressHydrationWarning
        >
          {siteContent.brand.mission}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/60 leading-relaxed"
          suppressHydrationWarning
        >
          {siteContent.brand.vision}
        </motion.p>
      </div>
    </section>
  );
}
