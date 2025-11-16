"use client";

import { motion } from "framer-motion";
import { EnvelopeSimple, MapPin, TwitterLogo, DiscordLogo } from "phosphor-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import NeumorphButton from "@/components/NeumorphButton";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <GlassCard>
              <h2 className="text-2xl mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/70 mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-accent-cyan/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/70 mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-accent-cyan/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/70 mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-accent-cyan/50 transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <NeumorphButton variant="primary" className="w-full justify-center">
                  Send Message
                </NeumorphButton>
              </form>
            </GlassCard>

            {/* Contact Info */}
            <div className="space-y-6">
              <GlassCard>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-xl">
                    <EnvelopeSimple size={24} weight="light" className="text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Email</h3>
                    <a
                      href="mailto:support@satwave.com"
                      className="text-white/70 hover:text-accent-cyan transition-colors"
                    >
                      support@satwave.com
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-xl">
                    <MapPin size={24} weight="light" className="text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Office</h3>
                    <p className="text-white/70">
                      1234 Innovation Drive<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-lg mb-4">Social</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    aria-label="Twitter"
                  >
                    <TwitterLogo size={24} weight="light" className="text-white/70" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    aria-label="Discord"
                  >
                    <DiscordLogo size={24} weight="light" className="text-white/70" />
                  </a>
                </div>
              </GlassCard>

              <div className="glass-card p-4 border border-white/20">
                <p className="text-white/60 text-sm leading-relaxed">
                  <strong className="text-white">Note:</strong> For support inquiries, please include your account email and a detailed description of your issue for faster assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
