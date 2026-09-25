"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";
import CountryFlag from "@/components/ui/country-flag";

export default function DestinationsSection() {
  return (
    <section className="pt-36 sm:pt-40 md:pt-44 pb-20 bg-white relative overflow-hidden">
      {/* Decorative Subtle Travel Accent in Bottom Left */}
      <div className="absolute bottom-10 left-6 sm:left-12 w-24 sm:w-32 pointer-events-none select-none z-0 opacity-20 rotate-12 hidden md:block">
        <img
          src="/images/travel-compass.png"
          alt=""
          className="w-full h-auto"
        />
      </div>

      <div className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-3.5">
            <div className="h-[1.5px] w-10 sm:w-14 bg-[#F59E0B] rounded-full" />
            <span className="text-[#F59E0B] font-bold uppercase tracking-[0.25em] text-xs sm:text-[13px]">
              Destinations
            </span>
            <div className="h-[1.5px] w-10 sm:w-14 bg-[#F59E0B] rounded-full" />
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#062B68] tracking-tight mb-4"
          >
            Explore Your{" "}
            <span className="relative inline-block text-[#2563EB]">
              Study
              <svg
                className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-2.5 overflow-visible"
                viewBox="0 0 100 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 2 8 C 30 2, 70 2, 98 8"
                  stroke="#F59E0B"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Destinations
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base md:text-[16px] text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Choose from world-class education destinations and discover opportunities around the globe.
          </motion.p>
        </div>

        {/* 6 Country Cards Grid Matching Reference Design Exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {DESTINATIONS.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="group bg-gradient-to-br from-white via-white to-blue-50/20 rounded-2xl sm:rounded-[24px] p-6 sm:p-7 border border-slate-100 shadow-[0_4px_24px_rgba(0,18,60,0.05)] hover:shadow-[0_16px_36px_rgba(0,18,60,0.10)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Soft Blue Round Decorative Circle in Bottom-Right Corner */}
              <div className="absolute -bottom-10 -right-10 w-36 sm:w-40 h-36 sm:h-40 rounded-full bg-gradient-to-tl from-[#93C5FD]/45 via-[#BFDBFE]/25 to-transparent pointer-events-none select-none z-0" />

              {/* Card Header Row: Code Pill + Country Name & Landmark Art */}
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3">
                  <div className="pt-0.5">
                    {/* Only Flag - Prominent, Good Visible Style */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shadow-[0_2px_8px_rgba(0,18,60,0.12)] border-2 border-white ring-1 ring-slate-200/90 mb-2.5 flex items-center justify-center bg-white shrink-0">
                      <CountryFlag code={dest.code || dest.name} />
                    </div>

                    {/* Small Amber Accent Underline (Europe, Japan, Asia) */}
                    {dest.hasAmberDash && (
                      <div className="h-[2px] w-6 bg-[#F59E0B] rounded-full mb-1.5" />
                    )}

                    {/* Country Title */}
                    <h3 className="text-xl sm:text-[22px] font-extrabold text-[#062B68] tracking-tight leading-snug">
                      {dest.name}
                    </h3>
                  </div>

                  {/* Landmark Art from public/images/destinations/ */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 -mt-2 -mr-2">
                    <img
                      src={dest.iconImage}
                      alt={dest.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Country Description */}
                <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-normal my-4 line-clamp-3">
                  {dest.description}
                </p>
              </div>

              {/* Bottom Action Link with Circular Arrow */}
              <Link
                href={`/destinations#${dest.id}`}
                className="relative z-10 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2563EB] group-hover:text-[#1D4ED8] transition-colors mt-auto w-fit"
              >
                <span>Explore {dest.name}</span>
                <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-200 shadow-2xs">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
