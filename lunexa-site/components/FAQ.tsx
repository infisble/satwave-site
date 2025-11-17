"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "phosphor-react";
import { siteContent } from "@/lib/content";
import { getInitialMotionState } from "@/lib/motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
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
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={getInitialMotionState(
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0 }
          )}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-white/60 text-lg mb-16"
          suppressHydrationWarning
        >
          Everything you need to know about SatWave
        </motion.p>

        <div className="space-y-4">
          {siteContent.faq.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={getInitialMotionState(
                  { opacity: 0, y: 20 },
                  { opacity: 1, y: 0 }
                )}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card overflow-hidden"
                suppressHydrationWarning
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-start justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg text-white font-normal pr-8">{item.question}</span>
                  {isOpen ? (
                    <Minus size={24} weight="light" className="text-accent-cyan flex-shrink-0" />
                  ) : (
                    <Plus size={24} weight="light" className="text-white/50 flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-white/70 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
