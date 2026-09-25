"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#041D47]">
      {/* Deep Navy / Royal Blue Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#041D47] via-[#062B68] to-[#031533] z-0" />
      
      {/* Subtle Radial Blue Atmosphere Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(11,78,162,0.4),transparent_75%)] z-0 pointer-events-none" />

      {/* Dotted Flat World Map matching the blue theme */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-30 md:opacity-40">
        <img
          src="/images/dotted-world-map.svg"
          alt="Dotted Flat World Map"
          className="w-full max-w-[1520px] h-auto object-contain filter drop-shadow-[0_0_15px_rgba(56,189,248,0.25)] scale-105"
        />
      </div>

      {/* Subtle Vertical Blending Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#031533]/85 via-transparent to-[#041D47]/85 z-0 pointer-events-none" />

      {/* Static Plane Trail Accent */}
      <div className="absolute top-8 left-8 sm:left-16 md:left-24 w-64 md:w-80 pointer-events-none select-none z-10 hidden sm:block opacity-30">
        <img
          src="/images/plane-trail-3.png"
          alt="Flight Trail"
          className="w-full h-auto drop-shadow-lg filter brightness-150"
        />
      </div>

      <div className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white/[0.08] backdrop-blur-xl border border-white/15 rounded-3xl p-8 sm:p-12 md:p-16 shadow-[0_24px_60px_rgba(0,18,60,0.45)]"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-[#F4A51C] uppercase tracking-wider mb-4">
            <span>AST • Overseas Education & Travel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight font-serif">
            Let&apos;s Plan Your Success Story
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-blue-100/90 mb-9 leading-relaxed max-w-2xl mx-auto font-normal">
            Take the first step toward your international education journey. Talk to our expert counsellors today and discover the limitless possibilities waiting for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="#consultation"
              className="w-full sm:w-auto bg-[#F4A51C] hover:bg-[#E09410] text-[#062B68] px-8 py-4 rounded-xl font-bold text-sm sm:text-[15px] transition-all shadow-[0_8px_24px_rgba(244,165,28,0.45)] hover:shadow-[0_12px_28px_rgba(244,165,28,0.6)] hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              Book Free Consultation
            </Link>
            
            <a 
              href="tel:+94760344695"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 border-2 border-white/25 hover:border-white/40 text-white px-8 py-4 rounded-xl font-bold text-sm sm:text-[15px] transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#38bdf8]" />
              <span>Call Us Today</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
