"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Plane } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-navy">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40 z-10" />
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
          alt="International students at university campus"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-12 bg-bright-gold" />
            <span className="text-bright-gold font-medium uppercase tracking-wider text-sm">
              Your Journey. Our Guidance.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            STUDY <span className="text-bright-gold">ABROAD</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-200 font-light mb-6"
          >
            Dream Big. Study Global. Succeed Everywhere.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed"
          >
            Your trusted partner for overseas education. Helping students turn their global education dreams into reality with limitless possibilities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#consultation"
              className="inline-flex items-center justify-center bg-bright-gold hover:bg-golden-orange text-navy font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-colors border border-white/20"
            >
              Explore Destinations
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative floating airplane */}
      <motion.div
        initial={{ opacity: 0, x: -100, y: 50 }}
        animate={{ opacity: 0.3, x: 0, y: 0 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-20 right-20 hidden lg:block z-10"
      >
        <Plane className="w-48 h-48 text-white rotate-[-15deg] opacity-20" />
      </motion.div>
    </section>
  );
}
