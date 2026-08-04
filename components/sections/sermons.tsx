"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Play, Youtube, ArrowRight, ExternalLink } from "lucide-react";

const videos = [
  {
    id: "nWufsmJ7TcM",
    title: "Is Spirituality Still Relevant In This Generation?",
    series: "G2M Podcast",
    color: "bg-amber-100",
  },
  {
    id: "V9XKqwUyLJA",
    title: "Overthinking, Is It A Struggle?",
    series: "G2M Podcast",
    color: "bg-rose-100",
  },
  {
    id: "fyqaj_HnF0E",
    title: "God Deserves The Best!",
    series: "G2M Podcast",
    color: "bg-sky-100",
  },
  {
    id: "WLzDgbbqfjo",
    title: "Is It Okay Being Offended?",
    series: "G2M Podcast",
    color: "bg-emerald-100",
  },
  {
    id: "-XwMt2LlgWk",
    title: "Responding to God's Call",
    series: "G2M Podcast",
    color: "bg-violet-100",
  },
  {
    id: "whhlKPDLzU8",
    title: "Who's Holding Your Life?",
    series: "G2M Podcast",
    color: "bg-orange-100",
  },
  {
    id: "62-IX6n5g40",
    title: "Rest, Walk, and Work with God!",
    series: "G2M Podcast",
    color: "bg-teal-100",
  },
];

export function Sermons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="sermons" className="py-16 sm:py-24 md:py-40 bg-foreground text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 blob bg-accent/20 blur-3xl" />
      <div className="absolute bottom-20 left-5 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 blob-2 bg-white/5 blur-2xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" ref={containerRef}>
        {/* Header - playful asymmetric */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <span className="inline-flex items-center gap-2 border border-white/30 text-white/70 px-3 py-1 text-xs uppercase tracking-wider mb-4 sm:mb-6">
              <Youtube className="w-4 h-4" />
              Our YouTube Channel
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
              Podcast &<br />
              <span className="font-editorial text-white/80">conversations</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end"
          >
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Dive into our podcast talks exploring faith, spirituality, and the goodness of God. Real conversations for real life.
            </p>
            <motion.a
              href="https://www.youtube.com/@gospelgenerationministry"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="flex items-center gap-2 text-accent font-medium group"
            >
              <span>Visit our channel</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>

        {/* Featured Video - large embed */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10 sm:mb-16"
        >
          <a 
            href="https://www.youtube.com/watch?v=-XwMt2LlgWk"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative aspect-video bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden group"
          >
            {/* Routed through next/image: re-encodes the 249KB JPEG to AVIF/WebP. */}
            <Image
              src="https://img.youtube.com/vi/-XwMt2LlgWk/maxresdefault.jpg"
              alt="G2M Featured Podcast"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            
            {/* Play button - oversized */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white text-foreground flex items-center justify-center shadow-2xl"
            >
              <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ml-1 group-hover:scale-110 transition-transform" />
            </motion.div>

            {/* Featured badge */}
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6">
              <span className="bg-accent text-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium">
                ★ Latest Episode
              </span>
            </div>

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">
                Gospel Generation Ministry
              </h3>
              <p className="text-white/70 text-sm sm:text-base">
                Podcast talks about the goodness of God
              </p>
            </div>
          </a>
        </motion.div>

        {/* Video grid - magazine style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, rotate: index % 2 === 0 ? 1 : -1 }}
              className={`${video.color} cursor-pointer group relative overflow-hidden block ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              {/* Thumbnail */}
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  width={320}
                  height={180}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors" />
                
                {/* Play icon on hover */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="w-16 h-16 rounded-full bg-white/90 text-foreground flex items-center justify-center">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4">
                <span className="inline-block bg-foreground/10 text-foreground px-2 py-1 text-xs uppercase tracking-wider mb-1.5 sm:mb-2">
                  {video.series}
                </span>
                
                <h4 className={`font-bold text-foreground ${index === 0 ? 'text-lg sm:text-xl md:text-2xl' : 'text-sm sm:text-base'}`}>
                  {video.title}
                </h4>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-foreground/5 rounded-full" />
            </motion.a>
          ))}
        </div>

        {/* Subscribe CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 sm:mt-16 text-center"
        >
          <motion.a
            href="https://www.youtube.com/@gospelgenerationministry?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 sm:gap-3 bg-red-600 hover:bg-red-700 text-white px-5 sm:px-8 py-3 sm:py-4 font-medium text-sm sm:text-lg transition-colors"
          >
            <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
            Subscribe on YouTube
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
