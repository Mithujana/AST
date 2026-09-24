"use client";

import { motion } from "framer-motion";
import { GraduationCap, FileText, Mail, Plane, Globe } from "lucide-react";

// Speech bubble icon for Free Consultation
function SpeechBubbleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <circle cx="9.5" cy="11.5" r="1" fill="currentColor" />
      <circle cx="12" cy="11.5" r="1" fill="currentColor" />
      <circle cx="14.5" cy="11.5" r="1" fill="currentColor" />
    </svg>
  );
}

// Passport booklet icon for Visa Assistance
function PassportIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <circle cx="12" cy="10" r="3" />
      <path d="M9 16h6" />
      <path d="M10 18h4" />
    </svg>
  );
}

const STEPS = [
  {
    number: "01",
    title: "Free Consultation",
    description: "Discuss your goals with our experts.",
    numColor: "#0B4EA2",
    bgGradient: "linear-gradient(135deg, #0A4EA3 0%, #062B68 100%)",
    glowColor: "rgba(11, 78, 162, 0.35)",
    ringColor: "rgba(11, 78, 162, 0.2)",
    icon: SpeechBubbleIcon,
  },
  {
    number: "02",
    title: "Course & University Selection",
    description: "Find the right fit for your future.",
    numColor: "#0099FF",
    bgGradient: "linear-gradient(135deg, #00B4D8 0%, #0077B6 100%)",
    glowColor: "rgba(0, 153, 255, 0.35)",
    ringColor: "rgba(0, 153, 255, 0.2)",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Application Assistance",
    description: "Get expert guidance at every step.",
    numColor: "#00BFA5",
    bgGradient: "linear-gradient(135deg, #00DDB3 0%, #009688 100%)",
    glowColor: "rgba(0, 191, 165, 0.35)",
    ringColor: "rgba(0, 191, 165, 0.2)",
    icon: FileText,
  },
  {
    number: "04",
    title: "Offer & Admission",
    description: "Receive your offer letter.",
    numColor: "#F59E0B",
    bgGradient: "linear-gradient(135deg, #FBBF24 0%, #D97706 100%)",
    glowColor: "rgba(245, 158, 11, 0.35)",
    ringColor: "rgba(245, 158, 11, 0.2)",
    icon: Mail,
  },
  {
    number: "05",
    title: "Visa Assistance",
    description: "Complete your visa process smoothly.",
    numColor: "#2563EB",
    bgGradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    glowColor: "rgba(37, 99, 235, 0.35)",
    ringColor: "rgba(37, 99, 235, 0.2)",
    icon: PassportIcon,
  },
  {
    number: "06",
    title: "Pre-Departure Support",
    description: "Get ready for your new journey.",
    numColor: "#7C3AED",
    bgGradient: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
    glowColor: "rgba(124, 58, 237, 0.35)",
    ringColor: "rgba(124, 58, 237, 0.2)",
    icon: Plane,
  },
  {
    number: "07",
    title: "Begin Your Global Journey",
    description: "Step into a brighter future.",
    numColor: "#0284C7",
    bgGradient: "linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)",
    glowColor: "rgba(2, 132, 199, 0.35)",
    ringColor: "rgba(2, 132, 199, 0.2)",
    icon: Globe,
  },
];

export default function JourneyTimeline() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-[#f8fbff] via-white to-[#f0f6ff]">
      {/* Left Corner: Airplane Window */}
      <div className="absolute left-0 top-0 bottom-0 w-[180px] sm:w-[240px] md:w-[320px] lg:w-[380px] xl:w-[440px] pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="/images/journey-window.jpg"
          alt="Airplane Window View"
          className="w-full h-full object-cover object-left mix-blend-multiply opacity-95 [mask-image:linear-gradient(to_right,black_60%,transparent_100%)]"
        />
      </div>

      {/* Right Corner: Earth Globe & World Landmarks */}
      <div className="absolute right-0 bottom-0 top-0 w-[200px] sm:w-[280px] md:w-[360px] lg:w-[440px] xl:w-[500px] pointer-events-none select-none z-0 overflow-hidden flex items-end justify-end">
        <img
          src="/images/journey-globe.jpg"
          alt="Earth Globe with Landmarks"
          className="w-full h-full object-contain object-right-bottom mix-blend-multiply opacity-95 [mask-image:linear-gradient(to_left,black_70%,transparent_100%)]"
        />
      </div>

      {/* Subtle central radial highlight for contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.92)_25%,_rgba(255,255,255,0.6)_65%,_transparent_100%)] pointer-events-none" />

      {/* Subtle top & bottom blending gradients */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-9 md:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.25em] text-[#0284c7] uppercase mb-1.5"
          >
            YOUR GLOBAL EDUCATION JOURNEY
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#062B68] tracking-tight leading-tight"
          >
            <span className="font-serif italic font-medium mr-2 text-[#081e3e]">Your Journey</span>
            <span className="relative inline-block text-[#0284c7]">
              Starts Here
              {/* Decorative wave underline */}
              <svg
                className="absolute -bottom-1.5 left-0 w-full overflow-visible"
                height="7"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M 1 5 Q 50 1 99 5"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-xs sm:text-sm md:text-base mt-2 font-normal"
          >
            A clear, step-by-step roadmap to achieving your international education dreams.
          </motion.p>
        </div>

        {/* Desktop Horizontal Curved Timeline */}
        <div className="hidden lg:block relative mt-4 pb-4">
          {/* Floating Plane Trail above steps 6 & 7 */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            whileInView={{ opacity: 0.85, x: 0, y: 0 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -6, 0],
              x: [0, 3, 0],
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.8 },
            }}
            className="absolute -top-14 right-16 w-64 pointer-events-none z-20 select-none"
          >
            <img
              src="/images/plane-trail-1.png"
              alt="Flight Trail"
              className="w-full h-auto drop-shadow-sm"
            />
          </motion.div>

          {/* Sinuous SVG Wave Line connecting all 7 steps */}
          <div className="absolute top-[30px] left-0 w-full h-[64px] pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1400 100"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="journeyTimelineGrad" x1="100" y1="50" x2="1300" y2="50" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0B4EA2" />
                  <stop offset="16%" stopColor="#00A3FF" />
                  <stop offset="33%" stopColor="#00C9B7" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="67%" stopColor="#2563EB" />
                  <stop offset="84%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#0284C7" />
                </linearGradient>
              </defs>

              {/* Animated wave path */}
              <motion.path
                d="M 100 50 
                   C 145 50, 160 68, 200 68 
                   C 240 68, 255 50, 300 50 
                   C 345 50, 360 32, 400 32 
                   C 440 32, 455 50, 500 50 
                   C 545 50, 560 68, 600 68 
                   C 640 68, 650 50, 700 50 
                   C 750 50, 760 32, 800 32 
                   C 840 32, 850 50, 900 50 
                   C 945 50, 960 68, 1000 68 
                   C 1040 68, 1050 50, 1100 50 
                   C 1145 50, 1160 32, 1200 32 
                   C 1240 32, 1255 50, 1300 50"
                stroke="url(#journeyTimelineGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />

              {/* Dots on the wave peaks and valleys */}
              <motion.circle 
                cx="200" cy="68" r="4" fill="#00A3FF" stroke="#ffffff" strokeWidth="1.5"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              />
              <motion.circle 
                cx="400" cy="32" r="4" fill="#00C9B7" stroke="#ffffff" strokeWidth="1.5"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              />
              <motion.circle 
                cx="600" cy="68" r="4" fill="#F59E0B" stroke="#ffffff" strokeWidth="1.5"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              />
              <motion.circle 
                cx="800" cy="32" r="4" fill="#2563EB" stroke="#ffffff" strokeWidth="1.5"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0 }}
              />
              <motion.circle 
                cx="1000" cy="68" r="4" fill="#7C3AED" stroke="#ffffff" strokeWidth="1.5"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              />
              <motion.circle 
                cx="1200" cy="32" r="4" fill="#0284C7" stroke="#ffffff" strokeWidth="1.5"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.4 }}
              />
            </svg>
          </div>

          {/* 7 Columns Grid */}
          <div className="grid grid-cols-7 gap-2 lg:gap-3 relative z-10">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group flex flex-col items-center text-center cursor-default"
                >
                  {/* Step Number */}
                  <span
                    className="text-[14px] font-bold tracking-tight mb-1.5 transition-transform duration-300 group-hover:-translate-y-0.5"
                    style={{ color: step.numColor }}
                  >
                    {step.number}
                  </span>

                  {/* Icon Circle with Glow & Ring */}
                  <div className="relative my-0.5">
                    {/* Soft ambient glow behind circle */}
                    <div
                      className="absolute inset-0 rounded-full blur-md opacity-40 group-hover:opacity-85 transition-all duration-300 scale-110"
                      style={{ backgroundColor: step.glowColor }}
                    />

                    {/* Outer translucent halo ring */}
                    <div
                      className="w-[62px] h-[62px] rounded-full p-[4px] transition-all duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: step.ringColor,
                        boxShadow: `0 8px 20px -3px ${step.glowColor}`,
                      }}
                    >
                      {/* Inner solid gradient circle */}
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center text-white shadow-md border-2 border-white"
                        style={{
                          background: step.bgGradient,
                        }}
                      >
                        <Icon className="w-5 h-5 text-white transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-[13px] xl:text-[14px] font-bold text-[#071f43] mt-2 leading-snug tracking-tight px-1 group-hover:text-[#0284c7] transition-colors duration-200 min-h-[34px] flex items-center justify-center">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[11px] xl:text-[12px] text-gray-500 leading-normal mt-0.5 px-1 max-w-[145px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Responsive Layout */}
        <div className="lg:hidden mt-4">
          {/* Horizontal scrollable track on small tablets with snap points */}
          <div className="flex md:grid md:grid-cols-4 sm:grid-cols-2 overflow-x-auto pb-4 pt-1 gap-3 snap-x snap-mandatory scrollbar-none px-1">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex-shrink-0 w-[220px] md:w-auto snap-center bg-white/85 backdrop-blur-md p-3.5 rounded-xl border border-blue-50 shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex flex-col items-center text-center relative"
                >
                  {/* Step Number Badge */}
                  <span
                    className="text-[11px] font-bold px-2 py-0.5 rounded-full mb-2 bg-slate-50 border border-slate-100"
                    style={{ color: step.numColor }}
                  >
                    STEP {step.number}
                  </span>

                  {/* Circle Icon */}
                  <div
                    className="w-12 h-12 rounded-full p-[3px] mb-2"
                    style={{
                      backgroundColor: step.ringColor,
                      boxShadow: `0 4px 12px -2px ${step.glowColor}`,
                    }}
                  >
                    <div
                      className="w-full h-full rounded-full flex items-center justify-center text-white border-2 border-white/80"
                      style={{ background: step.bgGradient }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-[#071f43] mb-0.5">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

