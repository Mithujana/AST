"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-navy z-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent z-0" />

      {/* Floating Plane Trail */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        whileInView={{ opacity: 0.6, x: 0, y: 0 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -10, 0],
          x: [0, 6, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-8 left-8 sm:left-16 md:left-24 w-64 md:w-80 pointer-events-none select-none z-10 hidden sm:block"
      >
        <img
          src="/images/plane-trail-3.png"
          alt="Flight Trail"
          className="w-full h-auto drop-shadow-lg filter brightness-150 opacity-60"
        />
      </motion.div>

      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's Plan Your Success Story
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            Take the first step toward your international education journey. Talk to our expert counsellors today and discover the limitless possibilities waiting for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="#consultation"
              className="w-full sm:w-auto bg-bright-gold hover:bg-golden-orange text-navy px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Book Free Consultation
            </Link>
            
            <a 
              href="tel:+94760344695"
              className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              Call Us Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
