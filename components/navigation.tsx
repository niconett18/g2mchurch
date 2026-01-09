"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#sermons", label: "Sermons" },
  { href: "#visit", label: "Visit" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#FAF7F2]/90 backdrop-blur-md"
            : "bg-[#1a1a1a]/95 backdrop-blur-sm"
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - using custom G2M logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center group"
            >
              <motion.div
                whileHover={{ rotate: -3 }}
                className="relative h-20 w-36 sm:h-24 sm:w-44 md:h-32 md:w-60"
              >
                <Image
                  src="/g2m-logo.svg"
                  alt="G2M Church"
                  fill
                  className={cn(
                    "object-contain transition-all duration-300",
                    isScrolled && "invert"
                  )}
                  priority
                />
              </motion.div>
            </a>

            {/* Desktop Navigation - pill style */}
            <div className="hidden md:flex items-center">
              <div className={cn(
                "flex items-center gap-1 p-1.5 rounded-full transition-colors duration-300",
                isScrolled ? "bg-foreground/5" : "bg-white/10"
              )}>
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors rounded-full",
                      isScrolled 
                        ? "text-foreground-muted hover:text-foreground hover:bg-white" 
                        : "text-white/80 hover:text-white hover:bg-white/20"
                    )}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              
              <motion.a
                href="#visit"
                onClick={(e) => handleNavClick(e, "#visit")}
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "ml-4 px-5 py-2.5 text-sm font-medium transition-colors duration-300",
                  isScrolled 
                    ? "bg-foreground text-white" 
                    : "bg-white text-foreground"
                )}
              >
                Plan a Visit
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "md:hidden w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-colors rounded-lg",
                isScrolled 
                  ? "text-foreground bg-foreground/5" 
                  : "text-white bg-white/10"
              )}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu - full screen takeover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#FAF7F2]"
            />

            {/* Content */}
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6">
                <div className="relative h-14 w-32 sm:h-16 sm:w-36">
                  <Image
                    src="/g2m-logo.svg"
                    alt="G2M Church"
                    fill
                    className="object-contain invert"
                  />
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ rotate: 90 }}
                  className="w-12 h-12 bg-foreground text-white flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Nav Links - big and bold */}
              <div className="flex-1 flex flex-col justify-center px-4 sm:px-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold py-3 sm:py-4 text-foreground hover:text-accent transition-colors border-b border-foreground/10"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="p-4 sm:p-6 pb-8"
              >
                <a
                  href="#visit"
                  onClick={(e) => handleNavClick(e, "#visit")}
                  className="block w-full bg-accent text-white text-center py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg"
                >
                  Plan Your Visit →
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
