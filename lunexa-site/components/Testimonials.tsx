"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import GlassCard from "./GlassCard";
import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationFrame: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!isPaused && scroller) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= scroller.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scroller.scrollLeft = scrollPosition;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  const duplicatedTestimonials = [
    ...siteContent.testimonials,
    ...siteContent.testimonials,
  ];

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        {/* suppressHydrationWarning needed: Framer Motion's whileInView uses IntersectionObserver
            which is client-only and causes different initial states between server and client */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
          suppressHydrationWarning
        >
          Trusted by Traders Worldwide
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-white/60 text-lg max-w-2xl mx-auto"
          suppressHydrationWarning
        >
          Real results from real traders using Lunexa's AI-powered strategies
        </motion.p>
      </div>

      <div
        ref={scrollerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-hidden scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            className="flex-shrink-0 w-80 md:w-96"
          >
            <GlassCard className="h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-white/50 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-4 p-4 bg-accent-green/10 border border-accent-green/20 rounded-lg">
                <p className="text-accent-green text-2xl font-semibold">
                  {testimonial.result}
                </p>
                <p className="text-white/50 text-sm">{testimonial.period}</p>
              </div>

              <p className="text-white/70 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
}
