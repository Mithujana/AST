"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="bg-navy py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
      <div className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          We&apos;re here to answer all your questions and help you start your study abroad journey.
        </motion.p>
      </div>
    </section>
  );
}
