"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { useSmoothScrollTo } from "@/components/providers/smooth-scroll";

const posterImages = [
  "/posters/poster-1.webp",
  "/posters/poster-2.webp",
  "/posters/poster-3.webp",
  "/posters/poster-4.webp",
];

const FLIP_MS = 300;
const AUTO_ADVANCE_MS = 4000;

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const flipTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prefersReducedMotion = useReducedMotion();
  const scrollTo = useSmoothScrollTo();

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Motion values, not state: pointer movement drives the blobs without
  // re-rendering the whole section on every mousemove event.
  const pointerX = useMotionValue(0);
  const blobX = useSpring(pointerX, { stiffness: 60, damping: 20, mass: 0.6 });
  const blobXInverse = useTransform(blobX, (value) => -value);

  const goToImage = useCallback((next: number | ((prev: number) => number)) => {
    if (flipTimer.current) clearTimeout(flipTimer.current);
    setIsFlipping(true);
    flipTimer.current = setTimeout(() => {
      setCurrentImageIndex((prev) =>
        typeof next === "function" ? next(prev) : next
      );
      setIsFlipping(false);
    }, FLIP_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (flipTimer.current) clearTimeout(flipTimer.current);
    };
  }, []);

  // Auto-advance, paused while the tab is hidden so we don't burn battery.
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    const start = () => {
      if (interval) return;
      interval = setInterval(() => {
        goToImage((prev) => (prev + 1) % posterImages.length);
      }, AUTO_ADVANCE_MS);
    };
    const stop = () => {
      if (interval) clearInterval(interval);
      interval = null;
    };

    const onVisibility = () => (document.hidden ? stop() : start());

    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [goToImage]);

  useEffect(() => {
    // Fine pointers only: this effect is decorative and irrelevant on touch.
    if (prefersReducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    const handleMouseMove = (event: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        pointerX.set((event.clientX / window.innerWidth - 0.5) * 20);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pointerX, prefersReducedMotion]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FAF7F2]"
    >
      {/* Decorative organic shapes */}
      <motion.div
        style={{ y: y1, x: blobX }}
        className="absolute top-20 -left-20 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] blob bg-orange-200/40 blur-3xl"
      />
      <motion.div
        style={{ y: y2, x: blobXInverse }}
        className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] blob-2 bg-amber-100/50 blur-2xl"
      />

      {/* Main content - Asymmetric layout */}
      <motion.div style={{ opacity }} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center pt-20 sm:pt-24 lg:pt-0">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-end">
          {/* Left column - main text */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quirky tagline with sticker */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 bg-foreground text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm rotate-slight"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>West Jakarta&apos;s home for seekers</span>
            </motion.div>

            {/* Main heading - mixed typography */}
            <div className="space-y-1 sm:space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground leading-[0.9]"
              >
                Gospel
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-editorial text-foreground leading-[0.9] ml-4 sm:ml-8 lg:ml-16"
              >
                Generation
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground leading-[0.9]"
              >
                Ministry<span className="text-accent">.</span>
              </motion.h1>
            </div>

            {/* Subtext with marker highlight */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base sm:text-lg md:text-xl text-foreground-muted max-w-md leading-relaxed pt-2 sm:pt-4"
            >
              We&apos;re not your typical church. We&apos;re a <span className="marker">community of real people</span> figuring out faith together.
            </motion.p>
          </div>

          {/* Right column - image + CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end mt-8 sm:mt-12 lg:mt-16"
          >
            {/* Polaroid-style image with flip effect */}
            <motion.div
              className="bg-white p-2 sm:p-3 pb-12 sm:pb-14 shadow-2xl rotate-slight-right relative cursor-pointer w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
              onClick={() => goToImage((prev) => (prev + 1) % posterImages.length)}
              animate={{
                rotateY: isFlipping ? 90 : 0,
              }}
              transition={{ duration: FLIP_MS / 1000, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <div className="aspect-[4/5] relative overflow-hidden w-full">
                {posterImages.map((src, idx) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`G2M Church Poster ${idx + 1}`}
                    fill
                    // Rendered at most 420px CSS wide; cap the download accordingly.
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
                    className="object-cover"
                    // Only the first poster blocks LCP; the others load quietly so
                    // flipping never shows an empty frame.
                    priority={idx === 0}
                    style={{
                      opacity: idx === currentImageIndex ? 1 : 0,
                      visibility: idx === currentImageIndex ? "visible" : "hidden",
                    }}
                  />
                ))}
              </div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-center">
                <p className="font-editorial text-foreground-muted text-xs sm:text-sm">Sunday mornings, 10am</p>
                {/* Dots indicator */}
                <div className="flex gap-1.5">
                  {posterImages.map((src, idx) => (
                    <button
                      key={src}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToImage(idx);
                      }}
                      aria-label={`Show poster ${idx + 1}`}
                      aria-current={idx === currentImageIndex}
                      className={`tap-target w-2 h-2 rounded-full transition-colors ${
                        idx === currentImageIndex ? "bg-foreground" : "bg-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating sticker CTA */}
            <motion.button
              onClick={() => scrollTo("#visit")}
              whileHover={{ scale: 1.05, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-[-16px] bg-accent text-white px-4 sm:px-6 py-3 sm:py-4 sticker font-medium text-sm sm:text-lg z-10 whitespace-nowrap"
            >
              Come say hi →
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom scroll indicator - playful */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-8 left-4 sm:left-6 lg:left-8 flex items-center gap-2 sm:gap-3 text-foreground-muted"
        >
          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDownRight className="w-5 h-5" />
          </motion.div>
          <span className="text-sm">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
