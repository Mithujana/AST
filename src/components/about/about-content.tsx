"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  ArrowRight,
  GraduationCap,
  FileText,
  Users,
  BarChart3,
  Headphones,
  Landmark,
  PlaneTakeoff,
  MapPin,
  Coins,
  Plane,
} from "lucide-react";

const TRUST_FEATURES = [
  {
    icon: FileText,
    title: "100% Transparent Process",
  },
  {
    icon: Users,
    title: "Expert Certified Counsellors",
  },
  {
    icon: BarChart3,
    title: "High Visa Success Rate",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
  },
  {
    icon: Landmark,
    title: "Direct University Tie-ups",
  },
  {
    icon: PlaneTakeoff,
    title: "Pre-Departure Briefings",
  },
  {
    icon: MapPin,
    title: "Post-Arrival Support",
  },
  {
    icon: Coins,
    title: "Financial Guidance",
  },
];

export default function AboutContent() {
  return (
    <div className="bg-white text-slate-800">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: WITH ANGLED SLANT CUT & AIRPLANE TRAIL                   */}
      {/* ========================================================================= */}
      <section className="relative pt-24 pb-14 sm:pt-28 sm:pb-18 md:pt-32 md:pb-20 bg-[#062B68] overflow-hidden">
        {/* Background Image: Westminster Landmark clearly visible on the right */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop"
            alt="London Westminster landmark"
            className="w-full h-full object-cover object-right"
          />
          {/* Deep Navy Gradient on left fading out to reveal the palace on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#062B68] via-[#062B68]/90 via-45% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#062B68]/60 via-transparent to-transparent" />
        </div>

        {/* Airplane with dashed curved flight trail in upper sky */}
        <div className="absolute top-8 sm:top-10 right-[25%] sm:right-[32%] md:right-[38%] pointer-events-none z-10 hidden sm:block">
          <svg width="220" height="90" viewBox="0 0 220 90" fill="none">
            <path
              d="M10 80 C 80 65, 140 20, 200 35"
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
              opacity="0.65"
            />
          </svg>
          <Plane className="w-5 h-5 text-white absolute -right-2 top-6 rotate-45 drop-shadow-sm" />
        </div>

        {/* Hero Text Content */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            {/* Eyebrow with gold dash */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2.5 mb-3.5"
            >
              <div className="h-[2px] w-7 bg-[#F4A51C]" />
              <span className="text-[#F4A51C] font-semibold text-xs sm:text-[13px] tracking-wider uppercase">
                GLOBAL EDUCATION • BRIGHTER TOMORROWS
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-white tracking-tight leading-[1.15] mb-4 font-serif"
            >
              Your Trusted Partner for
              <br />
              <span className="text-[#F4A51C]">Overseas Education</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal mb-6 max-w-xl"
            >
              Helping students achieve their dreams through global education opportunities with expert guidance and personalized support.
            </motion.p>

            {/* White pill CTA button with navy arrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Link
                href="#consultation"
                className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-[#062B68] font-bold pl-6 pr-2.5 py-2 rounded-full shadow-lg transition-all text-sm group"
              >
                <span>Talk to an Expert</span>
                <span className="w-8 h-8 rounded-full bg-[#062B68] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ENHANCED CURVED DIVIDER AT THE BOTTOM (Sweeping curve from left to right) */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10 pointer-events-none">
          <svg viewBox="0 0 1400 90" preserveAspectRatio="none" className="relative block w-full h-10 sm:h-14 md:h-16 text-white fill-current">
            <path d="M0,90 C450,90 850,30 1400,0 L1400,90 L0,90 Z" />
          </svg>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHO WE ARE: WITH ACCURATE SHAPES, PHOTO & FLOATING BADGE               */}
      {/* ========================================================================= */}
      <section className="pt-10 pb-20 md:pt-14 md:pb-28 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="h-[2px] w-7 bg-[#F4A51C]" />
                <span className="text-[#F4A51C] font-semibold text-xs sm:text-[13px] uppercase tracking-wider">
                  WHO WE ARE
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#062B68] tracking-tight leading-[1.16] mb-6 font-serif">
                Empowering Students
                <br />
                Worldwide
              </h2>

              {/* Paragraphs */}
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-5">
                AST (Abroad Study and Travel) is a premier overseas education consultancy dedicated to guiding students through their international education journey. With years of experience and a vast network of partner universities globally, we simplify the complex process of studying abroad.
              </p>

              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-8">
                From the initial counselling session to the moment you step onto your new campus, our expert team provides comprehensive support in university selection, application processing, visa assistance, and pre-departure planning.
              </p>

              {/* Navy Pill Button */}
              <Link
                href="#consultation"
                className="inline-flex items-center gap-2.5 bg-[#062B68] hover:bg-[#0B4EA2] text-white font-medium pl-6 pr-5 py-3 rounded-full shadow-md transition-all text-sm group"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Right Photo Column: Custom Curved Shape, Gold Dots & Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                {/* SVG Definition for the Custom Curved Photo Shape */}
                <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
                  <defs>
                    <clipPath id="student-curve" clipPathUnits="objectBoundingBox">
                      <path d="M 0.06,0 C 0.02,0 0,0.03 0,0.08 L 0,0.92 C 0,0.97 0.02,1 0.06,1 L 0.94,1 C 0.98,1 1,0.97 1,0.92 L 1,0.20 C 1,0.15 0.98,0.12 0.94,0.11 C 0.76,0.07 0.48,0 0.06,0 Z" />
                    </clipPath>
                  </defs>
                </svg>

                {/* Decorative Shape 1: Soft light-blue curved card behind top-right (revealed by the photo's downward slope) */}
                <div className="absolute -top-7 right-8 sm:right-12 w-48 h-36 bg-[#E9F2FC] rounded-[32px] -z-10 hidden sm:block" />

                {/* Decorative Shape 2: Soft light-blue card behind middle-right */}
                <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-20 h-44 bg-[#E9F2FC] rounded-r-[32px] -z-10 hidden sm:block" />

                {/* Decorative Element 3: 6x3 Gold Dot Grid on top right */}
                <div className="absolute -top-7 -right-2 sm:-right-4 grid grid-cols-6 gap-2.5 pointer-events-none z-0">
                  {[...Array(18)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#F4A51C]" />
                  ))}
                </div>

                {/* Main Student Group Photo: With Custom Curved Contour */}
                <div
                  className="relative aspect-[16/10] max-h-[350px] sm:max-h-[380px] w-full z-10"
                  style={{ filter: "drop-shadow(0 20px 35px rgba(0, 18, 60, 0.12))" }}
                >
                  <div
                    className="w-full h-full bg-slate-100 overflow-hidden"
                    style={{ clipPath: "url(#student-curve)" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2064&auto=format&fit=crop"
                      alt="AST Students group smiling together"
                      className="w-full h-full object-cover object-[center_25%]"
                    />
                  </div>
                </div>

                {/* Floating Badge: A Brighter Future Together */}
                <div className="absolute -bottom-5 right-4 sm:right-8 bg-white rounded-2xl px-5 py-3.5 shadow-xl border border-slate-100 flex items-center gap-3.5 z-20">
                  <div className="w-11 h-11 rounded-full bg-[#EBF3FC] text-[#062B68] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-[#062B68]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68] leading-tight">
                      A Brighter
                      <br />
                      Future Together
                    </div>
                    <div className="h-[2px] w-6 bg-[#F4A51C] mt-1.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MISSION, VISION, VALUES (3 CARDS)                                      */}
      {/* ========================================================================= */}
      <section className="py-12 pb-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-white p-8 sm:p-9 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0B4EA2] flex items-center justify-center mb-6 border border-blue-100/60">
                <Target className="w-6 h-6 text-[#0B4EA2]" />
              </div>
              <h3 className="text-xl font-bold text-[#062B68] mb-3">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To provide honest, transparent, and expert guidance to students, enabling them to make informed decisions about their global education and career pathways.
              </p>
            </motion.div>

            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 sm:p-9 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0B4EA2] flex items-center justify-center mb-6 border border-blue-100/60">
                <Eye className="w-6 h-6 text-[#0B4EA2]" />
              </div>
              <h3 className="text-xl font-bold text-[#062B68] mb-3">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be the most trusted and preferred overseas education consultancy, recognized for our commitment to student success and excellence in service.
              </p>
            </motion.div>

            {/* Our Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 sm:p-9 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0B4EA2] flex items-center justify-center mb-6 border border-blue-100/60">
                <Heart className="w-6 h-6 text-[#0B4EA2]" />
              </div>
              <h3 className="text-xl font-bold text-[#062B68] mb-3">Our Values</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Integrity, transparency, student-centricity, and excellence form the core of everything we do. We put our students&apos; best interests first.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY STUDENTS TRUST US (8 FEATURE PILLS & DOTTED WORLD MAP)              */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#EFF5FA]/80 rounded-[32px] p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-slate-100">
            {/* Dotted World Map Background Pattern */}
            <div className="absolute inset-0 bg-[url('/images/dotted-world-map.svg')] bg-center bg-no-repeat bg-contain opacity-25 pointer-events-none" />

            {/* Centered Heading */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-center max-w-2xl mx-auto mb-12"
            >
              <div className="h-1 w-10 bg-[#F4A51C] rounded-full mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#062B68] mb-3 font-serif">
                Why Students Trust Us
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We take pride in our high success rates and the positive impact we&apos;ve had on countless student lives.
              </p>
            </motion.div>

            {/* 8 Feature Cards Grid (4 columns on lg, 2 columns on sm) */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TRUST_FEATURES.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % 4) * 0.08 }}
                    className="bg-white rounded-2xl p-4 sm:p-4.5 border border-slate-100 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0B4EA2] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#0B4EA2]" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-[#062B68] leading-snug">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
