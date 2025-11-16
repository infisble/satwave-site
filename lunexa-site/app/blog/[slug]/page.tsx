"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { Clock, Tag, ArrowLeft } from "phosphor-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/content";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4">Post Not Found</h1>
            <a href="/blog" className="text-accent-cyan hover:underline">
              ← Back to Blog
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <motion.a
            href="/blog"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} weight="light" />
            Back to Blog
          </motion.a>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 text-sm text-white/50 mb-4">
              <span className="flex items-center gap-1">
                <Clock size={16} weight="light" />
                {post.readTime}
              </span>
              <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>

            <h1 className="mb-6">{post.title}</h1>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-4 py-2 bg-white/5 rounded-full text-sm text-white/60"
                >
                  <Tag size={14} weight="light" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cover Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full h-96 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-2xl mb-12"
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert prose-lg max-w-none"
            style={{
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n")
                  .map((line) => {
                    // Convert markdown-style headers
                    if (line.startsWith("# ")) {
                      return `<h1 class="text-4xl font-normal text-white mt-12 mb-6 tracking-tight">${line.slice(2)}</h1>`;
                    }
                    if (line.startsWith("## ")) {
                      return `<h2 class="text-3xl font-normal text-white mt-10 mb-4 tracking-tight">${line.slice(3)}</h2>`;
                    }
                    if (line.startsWith("### ")) {
                      return `<h3 class="text-2xl font-normal text-white mt-8 mb-3 tracking-tight">${line.slice(4)}</h3>`;
                    }
                    // Convert bold
                    line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
                    // Convert italic
                    line = line.replace(/\*(.*?)\*/g, '<em class="text-white/90">$1</em>');
                    // Convert code blocks
                    if (line.startsWith("```")) {
                      return '<pre class="bg-white/5 p-4 rounded-xl my-6 overflow-x-auto"><code>';
                    }
                    if (line === "```") {
                      return '</code></pre>';
                    }
                    // Convert inline code
                    line = line.replace(/`(.*?)`/g, '<code class="bg-white/10 px-2 py-1 rounded text-accent-cyan text-sm">$1</code>');
                    // Paragraphs
                    if (line.trim() && !line.startsWith("<")) {
                      return `<p class="mb-6 leading-relaxed">${line}</p>`;
                    }
                    return line;
                  })
                  .join("\n"),
              }}
            />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8 mt-16 text-center"
          >
            <h3 className="text-2xl mb-4">Ready to start trading with AI?</h3>
            <p className="text-white/70 mb-6">
              Join thousands of traders using SatWave to automate their crypto strategies
            </p>
            <a
              href="/#pricing"
              className="inline-block px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-2xl text-white font-medium hover:shadow-neumorphism-hover transition-all"
            >
              Get Started
            </a>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  );
}
