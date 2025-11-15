"use client";

import { motion } from "framer-motion";
import { Eye, ShieldCheck, Brain, User } from "phosphor-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { aboutContent } from "@/lib/content";

const valueIcons = {
  Eye,
  ShieldCheck,
  Brain,
  User,
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            {aboutContent.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 leading-relaxed"
          >
            {aboutContent.subtitle}
          </motion.p>
        </section>

        {/* Mission */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-20">
          <GlassCard>
            <h2 className="text-3xl mb-6">Our Mission</h2>
            <p className="text-white/70 leading-relaxed mb-4">{aboutContent.mission}</p>
            <p className="text-white/70 leading-relaxed">{aboutContent.story}</p>
          </GlassCard>
        </section>

        {/* Values */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-20">
          <h2 className="text-3xl text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutContent.values.map((value, index) => {
              const Icon = valueIcons[value.icon as keyof typeof valueIcons];
              return (
                <GlassCard key={value.title} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-xl">
                      <Icon size={28} weight="light" className="text-accent-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">{value.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Team */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-20">
          <h2 className="text-3xl text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.team.map((member, index) => (
              <GlassCard key={member.name} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-white text-2xl font-semibold">
                    {member.avatar}
                  </div>
                  <h3 className="text-lg mb-1">{member.name}</h3>
                  <p className="text-accent-cyan text-sm mb-3">{member.role}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Technology */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-20">
          <GlassCard>
            <h2 className="text-3xl mb-4">{aboutContent.tech.title}</h2>
            <p className="text-white/70 mb-6">{aboutContent.tech.description}</p>
            <ul className="space-y-3">
              {aboutContent.tech.stack.map((item) => (
                <li key={item} className="text-white/60 text-sm flex items-start gap-3">
                  <span className="text-accent-green">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </section>

        {/* Compliance */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="glass-card p-6 border border-white/20">
            <p className="text-white/60 text-sm leading-relaxed">
              <strong className="text-white">Compliance Notice:</strong> {aboutContent.compliance}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
