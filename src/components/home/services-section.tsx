"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-28 bg-gradient-to-b from-[#f8fbff] via-white to-[#f4f9ff] relative overflow-hidden">
      {/* Background Soft Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Static S-Curve Flight Trail & Travel Accents */}
      <div className="absolute top-12 left-4 md:left-12 w-64 md:w-80 pointer-events-none select-none z-0 opacity-25">
        <img
          src="/images/plane-trail-4.png"
          alt=""
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-10 right-6 md:right-16 w-20 md:w-28 pointer-events-none select-none z-0 opacity-20 -rotate-12 hidden md:block">
        <img
          src="/images/travel-suitcase.png"
          alt=""
          className="w-full h-auto"
        />
      </div>
      
      <div className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-3.5"
          >
            <div className="h-[1.5px] w-10 sm:w-14 bg-[#F4A51C] rounded-full" />
            <span className="text-[#F4A51C] font-bold uppercase tracking-[0.25em] text-xs sm:text-[13px]">
              END-TO-END SUPPORT
            </span>
            <div className="h-[1.5px] w-10 sm:w-14 bg-[#F4A51C] rounded-full" />
          </motion.div>

          {/* Heading with theme orange accent */}
          <motion.h2 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#062B68] tracking-tight leading-[1.14] mb-4 font-serif"
          >
            We Make It <span className="text-[#F4A51C]">Easy For You</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-normal"
          >
            Our comprehensive services cover every step of your international education journey, ensuring a seamless, worry-free experience from your first consultation to graduation.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* 6 MODERN & PROFESSIONAL SERVICE CARDS                                     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-white p-7 sm:p-8 rounded-[28px] border border-slate-100/90 shadow-[0_4px_24px_rgba(0,18,60,0.04)] hover:shadow-[0_20px_44px_rgba(0,18,60,0.10)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle top border gradient accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F4A51C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Icon Badge + Sleek Watermark Step Number */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#062B68] to-[#0A4EA3] text-white flex items-center justify-center shadow-md shadow-blue-900/15 group-hover:scale-105 group-hover:from-[#F4A51C] group-hover:to-[#EA580C] group-hover:shadow-amber-500/20 transition-all duration-300">
                      <Icon className="w-7 h-7 stroke-[1.8] text-white" />
                    </div>
                    
                    <span className="text-3xl sm:text-4xl font-black text-slate-100 group-hover:text-slate-200/80 transition-colors font-mono select-none tracking-tighter">
                      {service.number}
                    </span>
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#062B68] mb-3 group-hover:text-[#0B4EA2] transition-colors font-serif tracking-tight leading-snug">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>
                </div>
                
                {/* Bottom Action Row */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <Link 
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2563EB] group-hover:text-[#F4A51C] transition-colors group/btn"
                  >
                    <span>Learn More</span>
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover/btn:bg-[#F4A51C] group-hover/btn:text-white transition-all duration-200 shadow-2xs">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                    </span>
                  </Link>

                  <span className="text-[10.5px] font-semibold text-slate-400 bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-100">
                    AST Support
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM CALL TO ACTION BUTTONS                                             */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 sm:mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#062B68] hover:bg-[#0B4EA2] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <span>Explore All Services in Detail</span>
            <ArrowRight className="w-4 h-4 text-[#F4A51C]" />
          </Link>

          <Link
            href="#consultation"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#062B68] text-xs sm:text-sm font-bold border border-slate-200 shadow-2xs hover:shadow-xs transition-all duration-200"
          >
            <span>Book a Free 1-on-1 Consultation</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
