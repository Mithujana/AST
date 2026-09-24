"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Building2, Users, Clock } from "lucide-react";

const STATS = [
  {
    id: 1,
    value: "10+",
    label: "Study Destinations",
    icon: Globe,
  },
  {
    id: 2,
    value: "100+",
    label: "University Options",
    icon: Building2,
  },
  {
    id: 3,
    value: "500+",
    label: "Students Guided",
    icon: Users,
  },
  {
    id: 4,
    value: "24/7",
    label: "Student Support",
    icon: Clock,
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#031333] pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16 md:pb-24">
      {/* Background Graphic using asthero.png */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat pointer-events-none z-0"
        style={{
          backgroundImage: "url('/images/hero/asthero.png')",
          backgroundPosition: "right 20% center",
        }}
      />

      {/* Subtle left-side dark gradient to ensure text contrast on all viewports */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031333]/90 via-[#031333]/60 to-transparent lg:from-[#031333]/70 lg:via-transparent z-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Content Area */}
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-4 sm:mb-5"
          >
            <div className="h-[2.5px] w-8 sm:w-10 bg-[#F4A51C] rounded-full" />
            <span className="text-[#F4A51C] font-bold uppercase tracking-[0.2em] text-xs sm:text-[13px]">
              Your Journey. Our Guidance.
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[1.05] mb-4 sm:mb-5"
          >
            <span className="text-white">STUDY </span>
            <span className="text-[#F4A51C]">ABROAD</span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/95 font-medium tracking-tight mb-4"
          >
            Dream Big. Study Global. Succeed Everywhere.
          </motion.h2>

          {/* Body Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-sm sm:text-base md:text-[17px] text-gray-300/90 mb-8 sm:mb-10 max-w-xl leading-relaxed font-normal"
          >
            Your trusted partner for overseas education. Helping students turn their global education dreams into reality with limitless possibilities.
          </motion.p>

          {/* Call-To-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-24"
          >
            <Link
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 bg-[#F4A51C] hover:bg-[#E09410] text-[#062B68] font-bold text-sm sm:text-base px-7 py-4 rounded-xl transition-all shadow-[0_10px_25px_-5px_rgba(244,165,28,0.5)] hover:shadow-[0_15px_30px_-5px_rgba(244,165,28,0.65)] hover:-translate-y-0.5 group"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/destinations"
              className="inline-flex items-center justify-center gap-2 bg-[#062B68]/40 hover:bg-[#062B68]/70 text-white font-medium text-sm sm:text-base px-7 py-4 rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-md transition-all hover:-translate-y-0.5 group"
            >
              Explore Destinations
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Floating White Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 p-6 sm:p-8 md:p-9 relative z-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-100">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className={`flex flex-col items-center text-center ${
                    index !== 0 ? "lg:px-6" : "lg:pr-6"
                  }`}
                >
                  {/* Circular Gold Icon Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#FFF7E8] text-[#F4A51C] flex items-center justify-center mb-3 shadow-sm border border-[#FFE8BF]/60">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Value */}
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[#062B68] tracking-tight leading-none mb-1.5">
                    {stat.value}
                  </h3>

                  {/* Label */}
                  <p className="text-xs sm:text-sm font-medium text-gray-500">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

