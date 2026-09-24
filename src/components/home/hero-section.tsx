"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useInView, animate } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Building2, Users, Clock, Calendar } from "lucide-react";

const STATS = [
  {
    id: 1,
    value: 10,
    suffix: "+",
    label: "Study Destinations",
    icon: Globe,
  },
  {
    id: 2,
    value: 100,
    suffix: "+",
    label: "University Options",
    icon: Building2,
  },
  {
    id: 3,
    value: 500,
    suffix: "+",
    label: "Students Guided",
    icon: Users,
  },
  {
    id: 4,
    value: 24,
    suffix: "/7",
    label: "Student Support",
    icon: Clock,
  },
];

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [isInView, value, duration, delay, count]);

  useEffect(() => {
    return count.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.floor(latest)}${suffix}`;
      }
    });
  }, [count, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function HeroSection() {
  const pathRef = useRef<SVGPathElement>(null);
  const planeRef = useRef<SVGGElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const trailGlowRef = useRef<SVGPathElement>(null);
  const [isSettled, setIsSettled] = useState(false);

  useEffect(() => {
    if (!pathRef.current || !planeRef.current || !trailRef.current) return;
    const path = pathRef.current;
    const len = path.getTotalLength();

    // Initialize trail hidden
    trailRef.current.style.strokeDasharray = `${len}`;
    trailRef.current.style.strokeDashoffset = `${len}`;
    if (trailGlowRef.current) {
      trailGlowRef.current.style.strokeDasharray = `${len}`;
      trailGlowRef.current.style.strokeDashoffset = `${len}`;
    }

    let start: number | null = null;
    const duration = 2400; // 2.4s cinematic flight along the route
    let rafId: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);

      // Quintic ease-out: swift entry along the curve, gently decelerating into landing position
      const ease = 1 - Math.pow(1 - progress, 3.5);
      const currentDist = ease * len;

      // Central difference for exact smooth tangent angle everywhere
      const sampleBack = Math.max(currentDist - 2, 0);
      const sampleFront = Math.min(currentDist + 2, len);
      const ptBack = path.getPointAtLength(sampleBack);
      const ptFront = path.getPointAtLength(sampleFront);

      const dx = ptFront.x - ptBack.x;
      const dy = ptFront.y - ptBack.y;
      const rawTangent = Math.atan2(dy, dx) * (180 / Math.PI);

      // hero-airplane.png natural nose orientation is ~4.5°
      const finalAngle = rawTangent - 4.5;
      const currentPt = path.getPointAtLength(currentDist);

      // Direct DOM attribute manipulation: buttery smooth 60/120fps with 0 React re-renders
      if (planeRef.current) {
        planeRef.current.setAttribute(
          "transform",
          `translate(${currentPt.x.toFixed(1)}, ${currentPt.y.toFixed(1)}) rotate(${finalAngle.toFixed(2)})`
        );
        const opacity = Math.min(progress * 6, 1);
        planeRef.current.style.opacity = opacity.toFixed(2);
      }

      const offset = (len * (1 - ease)).toFixed(1);
      if (trailRef.current) {
        trailRef.current.style.strokeDashoffset = offset;
      }
      if (trailGlowRef.current) {
        trailGlowRef.current.style.strokeDashoffset = offset;
      }

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        // SETTLED! Strictly run once on initial load, do NOT loop
        setIsSettled(true);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="relative bg-[#02183b] pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-24 md:pb-28 overflow-visible">
      {/* Background Graphic Container: Deep Space, High-Resolution Globe, Stars & Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Full-resolution pristine original asthero-bg.png shifted down so airplane is clearly below the floating header */}
        <div
          className="absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/images/hero/asthero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 48px",
          }}
        />

        {/* Left-side dark cosmic gradient to ensure razor-sharp text readability without obscuring globe details */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#02183b]/95 via-[#02183b]/55 to-transparent lg:from-[#02183b]/80 lg:via-transparent z-0 pointer-events-none" />

        {/* Initial Flight Animation along the Route: Mathematically locked 1:1 with asthero background */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible hidden sm:block"
          style={{ top: "48px" }}
          viewBox="0 0 2039 771"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="heroTrailGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="heroFlightGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="80%" stopColor="#60a5fa" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
            </linearGradient>
            <filter id="planeShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Master Flight Route: from left along dotted trail directly to final settled position */}
          <path
            ref={pathRef}
            d="M 800 355 C 920 350, 1000 335, 1070 305 C 1140 275, 1220 235, 1315 200"
            fill="none"
            stroke="transparent"
          />

          {/* Glowing Trail drawn synchronously behind the entering aircraft */}
          <path
            ref={trailGlowRef}
            d="M 800 355 C 920 350, 1000 335, 1070 305 C 1140 275, 1220 235, 1315 200"
            fill="none"
            stroke="url(#heroFlightGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="9 7"
            filter="url(#heroTrailGlow)"
            opacity="0.85"
          />

          {/* Sharp Foreground Dotted Flight Trail */}
          <path
            ref={trailRef}
            d="M 800 355 C 920 350, 1000 335, 1070 305 C 1140 275, 1220 235, 1315 200"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="9 7"
            opacity="0.95"
          />

          {/* Initial Entering & Settled Airplane (Runs once, does NOT loop) */}
          <g
            ref={planeRef}
            transform="translate(800, 355) rotate(-5)"
            style={{ opacity: 0 }}
          >
            <image
              href="/images/hero/hero-airplane.png"
              x="-53"
              y="-18.4"
              width="106"
              height="36.8"
              filter="url(#planeShadow)"
            />
          </g>

          {/* Subtle Beacon pulse once settled in position */}
          {isSettled && (
            <circle cx="1315" cy="200" r="14" fill="none" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6">
              <animate attributeName="r" values="6;20" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0" dur="2.4s" repeatCount="indefinite" />
            </circle>
          )}
        </svg>
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7 w-full">
        <div className="max-w-xl lg:max-w-2xl mb-12 sm:mb-16 md:mb-20">
          {/* Eyebrow Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2.5 mb-3.5 sm:mb-4"
          >
            <div className="h-[2px] w-8 sm:w-10 bg-[#F4A51C] rounded-full" />
            <span className="text-[#F4A51C] font-bold uppercase tracking-[0.2em] text-xs sm:text-[13px]">
              AST • ABROAD STUDY & TRAVEL
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.08] mb-3 sm:mb-4"
          >
            <span className="text-white">STUDY </span>
            <span className="text-[#F4A51C]">ABROAD</span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-white font-medium tracking-tight mb-3"
          >
            Dream Big. Study Global. Succeed Everywhere.
          </motion.h2>

          {/* Body Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xs sm:text-sm md:text-[15px] text-gray-300/90 mb-7 sm:mb-8 max-w-lg leading-relaxed font-normal"
          >
            AST (Abroad Study and Travel) is your dedicated overseas education partner. We guide you step-by-step from university selection and scholarships to visas and seamless international travel.
          </motion.p>

          {/* Call-To-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3.5 sm:gap-4"
          >
            <Link
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 bg-[#F4A51C] hover:bg-[#E09410] text-[#062B68] font-bold text-sm sm:text-[15px] px-6 py-3.5 rounded-xl transition-all shadow-[0_8px_22px_-4px_rgba(244,165,28,0.5)] hover:shadow-[0_12px_28px_-4px_rgba(244,165,28,0.65)] hover:-translate-y-0.5 group"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/destinations"
              className="inline-flex items-center justify-center gap-2 bg-[#062B68]/35 hover:bg-[#062B68]/65 text-white font-medium text-sm sm:text-[15px] px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-md transition-all hover:-translate-y-0.5 group"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Smooth Curved Wave Shape of the Hero Section */}
      <div className="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-11 md:h-14 fill-white block"
        >
          <path d="M 0,26 Q 720,0 1440,26 L 1440,64 L 0,64 Z" />
        </svg>
      </div>

      {/* Floating White Stats Card Overlapping the Bottom Boundary Exactly */}
      <div className="relative z-30 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 -mb-28 sm:-mb-32 md:-mb-36">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[32px] shadow-[0_20px_50px_rgba(0,18,60,0.11),0_2px_12px_rgba(0,0,0,0.03)] border border-slate-100/90 py-7 sm:py-8 px-6 sm:px-10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className={`flex flex-col items-center text-center ${
                    index !== 0 ? "lg:border-l lg:border-gray-100 lg:px-6" : "lg:pr-6"
                  }`}
                >
                  {/* Circular Gold Icon Badge */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FFF8EB] text-[#F4A51C] flex items-center justify-center mb-3 shadow-sm border border-[#FFE8BF]/70">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                  </div>

                  {/* Value */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B68] tracking-tight leading-none mb-1.5">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      delay={0.1 * index}
                    />
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




