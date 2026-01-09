"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const beliefs = [
  { number: "01", title: "Real talk", text: "No perfect people. Just real conversations about faith, doubt, and everything in between." },
  { number: "02", title: "Community first", text: "We believe life's better together. Find your people here." },
  { number: "03", title: "Rooted & relevant", text: "Ancient truths for modern questions. Timeless faith for today's challenges." },
];

export function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const xRight = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="py-16 sm:py-24 md:py-40 bg-[#FAF7F2] relative overflow-hidden" ref={containerRef}>
      {/* Moving background text - editorial style */}
      <motion.div 
        style={{ x: xLeft }}
        className="absolute top-20 left-0 right-0 hidden sm:flex whitespace-nowrap text-[80px] sm:text-[120px] md:text-[200px] font-bold text-foreground/[0.03] leading-none pointer-events-none select-none"
      >
        <span className="mx-8">COMMUNITY</span>
        <span className="mx-8">COMMUNITY</span>
        <span className="mx-8">COMMUNITY</span>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Broken grid layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4">
          {/* Left text column - offset */}
          <div className="lg:col-span-5 lg:pt-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block bg-foreground text-white px-3 py-1 text-xs uppercase tracking-wider mb-4 sm:mb-6">
                Who we are
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[0.95] mb-4 sm:mb-6">
                A place that
                <span className="font-editorial block ml-2 sm:ml-4 md:ml-8"> feels like</span>
                home<span className="text-accent">.</span>
              </h2>
              <p className="text-foreground-muted text-base sm:text-lg leading-relaxed max-w-md">
                More than just a church—we&apos;re family. A warm, welcoming community where everyone belongs and no one walks alone.
              </p>
            </motion.div>
          </div>

          {/* Middle - stacked images with overlap */}
          <div className="lg:col-span-4 relative mt-6 sm:mt-8 lg:mt-0 mb-16 sm:mb-20 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 60, rotate: -3 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: -3 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 max-w-[280px] sm:max-w-none mx-auto sm:mx-0"
            >
              <div className="bg-white p-2 shadow-xl">
                <div 
                  className="aspect-[3/4] bg-cover bg-center"
                  style={{ backgroundImage: `url('/aboutus/about-1.png')` }}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 60, rotate: 5 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 5 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-16 -right-2 sm:top-20 sm:-right-8 lg:top-40 lg:-right-16 w-2/3 sm:w-3/4 z-20"
            >
              <div className="bg-white p-2 shadow-xl">
                <div 
                  className="aspect-square bg-cover bg-center"
                  style={{ backgroundImage: `url('/aboutus/about-2.png')` }}
                />
              </div>
            </motion.div>
            {/* Handwritten annotation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-8 sm:-bottom-4 left-4 font-editorial text-base sm:text-lg text-foreground-muted rotate-[-8deg]"
            >
              ← that&apos;s us!
            </motion.div>
          </div>

          {/* Right column - beliefs with brutalist treatment */}
          <div className="lg:col-span-3 lg:pt-40 space-y-6 sm:space-y-8 mt-8 sm:mt-12 lg:mt-0">
            {beliefs.map((belief, index) => (
              <motion.div
                key={belief.number}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-4xl sm:text-5xl font-bold text-foreground/10 group-hover:text-accent transition-colors duration-300">
                    {belief.number}
                  </span>
                  <div>
                    <h4 className="font-bold text-foreground mb-1 group-hover:marker transition-all">
                      {belief.title}
                    </h4>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {belief.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom marquee of values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-24 md:mt-32 py-6 sm:py-8 border-y-2 border-foreground/10 overflow-hidden"
        >
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 sm:gap-12 whitespace-nowrap"
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-6 sm:gap-12 items-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Authentic worship</span>
                <span className="text-accent text-2xl sm:text-3xl">✦</span>
                <span className="text-xl sm:text-2xl md:text-3xl font-editorial text-foreground">Genuine community</span>
                <span className="text-accent text-2xl sm:text-3xl">✦</span>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Spiritual growth</span>
                <span className="text-accent text-2xl sm:text-3xl">✦</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
