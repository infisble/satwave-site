"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "phosphor-react";

interface MobileTrayProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export default function MobileTray({
  isOpen,
  onClose,
  navLinks,
}: MobileTrayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
          />

          {/* Tray */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-dark-card/95 backdrop-blur-xl border-l border-white/10 z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="text-xl font-semibold text-white">Menu</span>
                <button
                  onClick={onClose}
                  className="text-white/80 hover:text-white transition-colors p-2"
                  aria-label="Close menu"
                >
                  <X size={28} weight="light" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 px-6 py-8 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block text-white/80 hover:text-white transition-colors text-lg font-light"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              {/* Footer Links */}
              <div className="p-6 border-t border-white/10 space-y-4">
                <a
                  href="/about"
                  onClick={onClose}
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  About
                </a>
                <a
                  href="/blog"
                  onClick={onClose}
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  Blog
                </a>
                <a
                  href="/contact"
                  onClick={onClose}
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-xl text-white text-center text-sm font-medium mt-4"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
