"use client";

import { motion } from "framer-motion";
import { Clock, Tag } from "phosphor-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { blogPosts } from "@/lib/content";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70"
          >
            Insights on AI trading, risk management, and crypto markets
          </motion.p>
        </section>

        {/* Blog Posts */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <GlassCard key={post.slug} delay={index * 0.1}>
                <a href={`/blog/${post.slug}`} className="block group">
                  {/* Cover Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-xl mb-6 group-hover:from-accent-cyan/30 group-hover:to-accent-purple/30 transition-all" />

                  <div className="flex items-center gap-4 text-sm text-white/50 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock size={16} weight="light" />
                      {post.readTime}
                    </span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>

                  <h2 className="text-2xl mb-3 group-hover:text-accent-cyan transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-white/70 mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-3 py-1 bg-white/5 rounded-full text-xs text-white/60"
                      >
                        <Tag size={12} weight="light" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </GlassCard>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
