"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Mail, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Where do I park?",
    answer: "We've got you covered! Free parking on-site. Our friendly parking team will point you in the right direction.",
  },
  {
    question: "Is there something for my kids?",
    answer: "Absolutely! G2M Kids (ages 0-12) runs during service. Fun, safe, and age-appropriate. Check in at the Kids Desk—first-timers welcome!",
  },
  {
    question: "What should I wear?",
    answer: "Whatever you're comfortable in. Jeans? Great. Suit? Also great. We care more about you than your outfit.",
  },
  {
    question: "What happens during the service?",
    answer: "About 90 minutes of worship music, a message that actually relates to real life, and time to connect. Zero pressure, lots of warmth.",
  },
  {
    question: "Young adults scene?",
    answer: "G2M Collective meets Friday nights. College students + young professionals connecting, growing, serving. Come find your people.",
  },
];

export function Visit() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="visit" className="py-16 sm:py-24 md:py-40 bg-[#FAF7F2] relative overflow-hidden" ref={containerRef}>
      {/* Decorative tape strips */}
      <div className="absolute top-10 left-4 sm:left-10 w-20 sm:w-32 h-6 sm:h-8 bg-amber-200/60 -rotate-12" />
      <div className="absolute top-20 right-4 sm:right-20 w-16 sm:w-24 h-4 sm:h-6 bg-rose-200/60 rotate-6" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header - handwritten style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16 md:mb-20"
        >
          <span className="inline-block bg-accent text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6 -rotate-2">
            You&apos;re invited
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground">
            Come <span className="font-editorial">worship</span> with us
          </h2>
        </motion.div>

        {/* Main content - asymmetric cards */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24">
          {/* Big info card */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -2 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-white p-5 sm:p-8 md:p-12 border-brutal lg:rotate-[-2deg]"
          >
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {/* When */}
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-foreground text-white flex items-center justify-center">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-xs sm:text-sm uppercase tracking-wider text-foreground-muted">When</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 sm:mb-2">
                  Sundays
                </h3>
                <p className="text-xl sm:text-2xl text-foreground-muted">10:00 AM</p>
                <p className="text-xs sm:text-sm text-foreground-muted mt-1 sm:mt-2">(Doors at 9:30)</p>
              </div>

              {/* Where */}
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent text-white flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-xs sm:text-sm uppercase tracking-wider text-foreground-muted">Where</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">
                  West Jakarta
                </h3>
                <p className="text-foreground-muted text-sm sm:text-base">Kencana Utama III M8 No.32 C, RT.3/RW.7, South Kembangan, Kembangan, West Jakarta City, Jakarta 11610</p>
                <motion.a
                  href="https://www.google.com/maps/place/G2M+(Gospel+Generation+Ministry)/@-6.1901145,106.7519582,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f71c7d36d1c3:0x1af44b2b6903948a!8m2!3d-6.1901145!4d106.7519582!16s%2Fg%2F11b7v6vq31"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-1 text-accent font-medium mt-4"
                >
                  Get directions <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* Contact row */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-foreground/10">
              <p className="text-foreground-muted mb-2 text-sm sm:text-base">Questions? Reach out:</p>
              <a href="mailto:hello@g2mchurch.com" className="text-foreground font-medium flex items-center gap-2 text-sm sm:text-base">
                <Mail className="w-4 h-4" />
                hello@g2mchurch.com
              </a>
            </div>
          </motion.div>

          {/* Map card - tilted */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 3 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 relative lg:rotate-[3deg]"
          >
            <div className="bg-white p-2 shadow-2xl h-full">
              <div className="h-full min-h-[280px] sm:min-h-[350px] md:min-h-[400px] relative overflow-hidden">
                {/* Real Google Map. Lazy-loaded so it costs nothing until it
                    scrolls near, and it renders its own marker for the church. */}
                <iframe
                  title="G2M Church location on Google Maps"
                  src="https://maps.google.com/maps?q=G2M%20(Gospel%20Generation%20Ministry)%2C%20Kencana%20Utama%20III%20M8%20No.32%20C%2C%20Kembangan%2C%20Jakarta%20Barat&z=17&hl=en&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="map-embed absolute inset-0 w-full h-full border-0"
                />
              </div>
            </div>
            {/* Handwritten label */}
            <motion.div
              initial={{ opacity: 0, rotate: 8 }}
              animate={isInView ? { opacity: 1, rotate: 8 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-4 font-editorial text-sm sm:text-lg text-foreground-muted"
            >
              find us here! ↑
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ - accordion style with personality */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">
            Got questions? <span className="font-editorial">We&apos;ve got answers.</span>
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
                  className={`w-full p-4 sm:p-6 text-left flex items-center justify-between group transition-colors ${
                    openFaq === index ? 'bg-foreground text-white' : 'bg-white hover:bg-foreground/5'
                  }`}
                >
                  <span className="font-medium text-base sm:text-lg pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 shrink-0 text-foreground-muted group-hover:text-foreground" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 sm:p-6 bg-foreground/5 text-foreground-muted leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
