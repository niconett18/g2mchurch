"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Youtube, ArrowUp } from "lucide-react";

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/g2m_church/", icon: Instagram },
  { name: "YouTube", href: "https://www.youtube.com/@gospelgenerationministry", icon: Youtube },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[120px] sm:text-[180px] md:text-[280px] lg:text-[350px] font-bold text-white/[0.03] whitespace-nowrap">
          G2M
        </span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer - split design */}
        <div className="py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-end">
            {/* Left - big CTA */}
            <div className="lg:col-span-8">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.95] mb-6 sm:mb-8"
              >
                Ready to <span className="font-editorial text-white/70">find</span>
                <br />your people?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/50 text-base sm:text-lg max-w-md mb-6 sm:mb-8"
              >
                Join us this Sunday. Doors open at 9:30am, service at 10am. Bring yourself—that&apos;s all you need.
              </motion.p>
              <motion.a
                href="#visit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02, rotate: -1 }}
                className="inline-block bg-accent text-white px-6 sm:px-8 py-3 sm:py-4 font-medium text-base sm:text-lg sticker"
              >
                Plan your visit →
              </motion.a>
            </div>

            {/* Right - links */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-4 space-y-6 sm:space-y-8"
            >
              {/* Social */}
              <div>
                <span className="text-white/30 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 block">Connect</span>
                <div className="flex gap-2 sm:gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4, rotate: 5 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 flex items-center justify-center text-white hover:bg-accent transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <span className="text-white/30 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 block">Contact</span>
                <a href="mailto:hello@g2mchurch.com" className="text-white hover:text-accent transition-colors text-sm sm:text-base break-all">
                  hello@g2mchurch.com
                </a>
              </div>

              {/* Back to top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -4 }}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
              >
                <span className="text-sm">Back to top</span>
                <div className="w-8 h-8 border border-white/30 flex items-center justify-center">
                  <ArrowUp className="h-4 w-4" />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar - brutalist */}
        <div className="border-t border-white/10 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/30">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
              <div className="relative h-6 w-12 sm:h-8 sm:w-16">
                <Image
                  src="/g2m-logo.svg"
                  alt="G2M Church"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="leading-relaxed">© {currentYear} G2M Church. Building a generation rooted in truth.</p>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
