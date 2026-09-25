"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe, Briefcase, TrendingUp } from "lucide-react";

const BENEFITS = [
  {
    title: "World-Class Education",
    description:
      "Access top-ranked universities, modern facilities, and leading academic programs tailored to your goals.",
    icon: GraduationCap,
  },
  {
    title: "Global Exposure",
    description:
      "Experience diverse cultures, build a worldwide network, and gain an international perspective.",
    icon: Globe,
  },
  {
    title: "International Career Opportunities",
    description:
      "Enhance your employability with degrees recognized by employers globally and post-study work options.",
    icon: Briefcase,
  },
  {
    title: "Personal & Professional Growth",
    description:
      "Develop independence, global skills, and a broader mindset that helps you stand out in a competitive world.",
    icon: TrendingUp,
  },
];

export default function WhyStudyAbroadSection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative Fluid Circles & Arcs in Background */}
      <div className="absolute -top-24 -right-24 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-blue-100/40 blur-2xl pointer-events-none select-none z-0" />
      <div className="absolute -bottom-28 -left-28 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-blue-100/35 blur-2xl pointer-events-none select-none z-0" />

      {/* Static Decorative Loop-the-loop Flight Trail SVG */}
      <div className="absolute -top-4 sm:top-2 left-0 sm:left-6 md:left-12 w-64 sm:w-80 md:w-96 lg:w-[480px] pointer-events-none select-none z-0 opacity-40">
        <img
          src="/images/plane-trail-2.svg"
          alt="Flight Trail"
          className="w-full h-auto"
        />
      </div>

      {/* Decorative Dotted Grid Accent (Top Left) */}
      <div className="absolute top-10 sm:top-14 left-6 sm:left-14 pointer-events-none select-none z-0 hidden sm:block">
        <div className="grid grid-cols-4 gap-2.5">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-300/80" />
          ))}
        </div>
      </div>

      {/* Decorative Dotted Grid Accent (Bottom Right) */}
      <div className="absolute bottom-10 sm:bottom-14 right-6 sm:right-14 pointer-events-none select-none z-0 hidden sm:block">
        <div className="grid grid-cols-4 gap-2.5">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-300/80" />
          ))}
        </div>
      </div>

      <div className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ========================================================================= */}
          {/* Left Column: Graduate Photo with Framed Rounded Card & Floating Badge     */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            {/* Soft Ambient Glow Rings Behind Card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100/60 via-sky-50/40 to-transparent rounded-[44px] -z-10 blur-xl pointer-events-none" />

            {/* Stylized Curved Vector Shapes on Top/Left like the mockup */}
            <svg
              className="absolute -top-8 -left-8 w-48 h-48 pointer-events-none select-none -z-10 opacity-70 hidden sm:block"
              viewBox="0 0 200 200"
              fill="none"
            >
              <circle cx="100" cy="100" r="80" stroke="#bfdbfe" strokeWidth="24" strokeOpacity="0.3" />
              <circle cx="100" cy="100" r="50" stroke="#93c5fd" strokeWidth="16" strokeOpacity="0.25" />
            </svg>

            {/* Main Rounded Graduate Photo Frame - Enlarged Size */}
            <div className="relative w-full max-w-[560px] xl:max-w-[620px] aspect-[4/4.2] sm:aspect-square rounded-[36px] sm:rounded-[44px] p-2.5 sm:p-3 bg-white shadow-[0_20px_60px_rgba(6,43,104,0.13)] border border-slate-100">
              <div className="w-full h-full rounded-[28px] sm:rounded-[36px] overflow-hidden relative bg-slate-100">
                <img
                  src="/images/graduate-backside.jpg"
                  alt="Graduate seen from behind looking out at London landmarks"
                  className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating 100% Global Recognition Badge */}
              <div className="absolute -bottom-5 sm:-bottom-6 right-2 sm:-right-4 md:-right-6 bg-white/95 backdrop-blur-md px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl shadow-[0_12px_36px_rgba(6,43,104,0.14)] border border-slate-100/90 flex items-center gap-3.5 z-20">
                <div className="w-12 h-12 rounded-full bg-[#F0F6FF] flex flex-col items-center justify-center shrink-0 border border-blue-100/70">
                  <Globe className="w-5 h-5 text-[#2563EB]" />
                  <div className="h-[2.5px] w-4 bg-[#F59E0B] rounded-full mt-1" />
                </div>
                <div>
                  <p className="font-extrabold text-[#062B68] text-2xl sm:text-[26px] leading-tight">
                    100%
                  </p>
                  <p className="text-xs sm:text-[13px] text-slate-500 font-semibold whitespace-nowrap">
                    Global Recognition
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* Right Column: Title, Subtitle, and 4 Benefit Items                         */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#062B68] tracking-tight leading-[1.18] mb-4">
                Build Your Future <br />
                <span className="text-[#F59E0B]">Beyond Borders</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-xl">
                Studying abroad is more than just earning a degree. It's a life-changing experience that shapes your future, broadens your horizons, and opens doors to limitless possibilities.
              </p>
            </motion.div>

            {/* 4 Benefit Items */}
            <div className="space-y-6 sm:space-y-7">
              {BENEFITS.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="flex items-start gap-4 sm:gap-5 group"
                >
                  {/* Icon Container with Amber Dash Underline */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#F0F6FF] border border-blue-100/70 flex flex-col items-center justify-center shrink-0 shadow-xs group-hover:bg-blue-100/70 group-hover:scale-105 transition-all duration-200">
                    <benefit.icon className="w-6 h-6 text-[#2563EB]" strokeWidth={2.2} />
                    <div className="h-[2.5px] w-4.5 bg-[#F59E0B] rounded-full mt-1.5" />
                  </div>

                  {/* Benefit Text */}
                  <div className="pt-0.5">
                    <h3 className="text-base sm:text-lg font-bold text-[#062B68] mb-1 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal max-w-lg">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

