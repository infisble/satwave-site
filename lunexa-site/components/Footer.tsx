"use client";

import { motion } from "framer-motion";
import { TwitterLogo, DiscordLogo, GithubLogo, LinkedinLogo } from "phosphor-react";
import { siteContent } from "@/lib/content";

const socialIcons = {
  TwitterLogo,
  DiscordLogo,
  GithubLogo,
  LinkedinLogo,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-dark-card/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
              Lunexa
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {siteContent.footer.description}
            </p>
            <div className="flex gap-4">
              {siteContent.footer.social.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="text-white/40 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={24} weight="light" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-3">
              {siteContent.footer.links.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              {siteContent.footer.links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-3">
              {siteContent.footer.links.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Lunexa. All rights reserved.
          </p>
          <p className="text-white/40 text-xs max-w-md text-center md:text-right">
            Trading cryptocurrencies carries risk. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
