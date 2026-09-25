"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  ChevronDown, 
  ChevronRight,
  Compass, 
  GraduationCap, 
  FileCheck, 
  Plane, 
  Home, 
  Calendar,
  LayoutGrid,
  Headphones,
  MessageSquare,
  User,
  Globe,
  Coins,
  Award,
  FileText,
  Users,
  CheckCircle2,
  Luggage,
  Building,
  KeyRound,
  FileSpreadsheet,
  HelpCircle,
  BarChart3,
  Lightbulb,
  Handshake,
  Star,
  MapPin
} from "lucide-react";

// 6 Core Services data with specific icons & features matching the reference image exactly
const SERVICES = [
  {
    id: "expert-counselling",
    number: "01",
    title: "Expert Counselling",
    category: "ACADEMIC STRATEGY",
    badge: "100% Free Consultation",
    icon: Compass,
    navIcon: Plane,
    summary: "Personalized one-on-one mentoring to evaluate your academic profile, understand your career goals, and recommend the best global study pathways.",
    deliverable: "Personalized Study Abroad Roadmap & Budget Plan",
    features: [
      {
        icon: User,
        text: "In-depth 360° academic & career profile assessment"
      },
      {
        icon: Globe,
        text: "Unbiased country feasibility (UK, Australia, Canada, Europe, USA)"
      },
      {
        icon: Coins,
        text: "Realistic budgeting for tuition, living costs & financial planning"
      },
      {
        icon: Award,
        text: "Identification of early scholarship opportunities"
      }
    ]
  },
  {
    id: "university-selection",
    number: "02",
    title: "University & Course Selection",
    category: "ADMISSIONS ARCHITECTURE",
    badge: "300+ Partner Universities",
    icon: GraduationCap,
    navIcon: GraduationCap,
    summary: "Data-driven matching with internationally recognized universities and accredited degree programs tailored to your GPA, budget, and ambitions.",
    deliverable: "Curated 6-University Shortlist & Direct Application Dossier",
    features: [
      {
        icon: Building,
        text: "Balanced 3-tier shortlist (Dream, Target, and Guaranteed Safety)"
      },
      {
        icon: FileSpreadsheet,
        text: "Direct university liaison for fast-tracked conditional offers"
      },
      {
        icon: FileText,
        text: "SOP (Statement of Purpose) and academic reference refinement"
      },
      {
        icon: Award,
        text: "Proactive targeting of department scholarships and fee waivers"
      }
    ]
  },
  {
    id: "visa-assistance",
    number: "03",
    title: "Visa Assistance & Compliance",
    category: "IMMIGRATION GUIDANCE",
    badge: "99.2% Visa Approval Rate",
    icon: FileCheck,
    navIcon: FileText,
    summary: "End-to-end guidance through the student visa application process, ensuring airtight documentation and total interview readiness.",
    deliverable: "Certified Visa File & One-on-One Mock Interview Prep",
    features: [
      {
        icon: ShieldCheck,
        text: "Multi-stage document verification meeting strict immigration rules"
      },
      {
        icon: FileText,
        text: "Genuine Student (GS / GTE) statement drafting & coaching"
      },
      {
        icon: Coins,
        text: "Financial solvency and bank statement compliance audits"
      },
      {
        icon: Users,
        text: "Realistic simulated embassy mock interviews with expert feedback"
      }
    ]
  },
  {
    id: "travel-support",
    number: "04",
    title: "Travel & Flight Support",
    category: "LOGISTICS COORDINATION",
    badge: "Student Baggage Perks",
    icon: Plane,
    navIcon: Plane,
    summary: "Stress-free travel planning with student airline discounts, excess baggage allowances, and seamless airport reception.",
    deliverable: "Discounted Flight Itinerary & Airport Transfer Voucher",
    features: [
      {
        icon: Plane,
        text: "Exclusive student flight fares via authorized travel partners"
      },
      {
        icon: Luggage,
        text: "Up to 40kg to 45kg student luggage concessions on major airlines"
      },
      {
        icon: Globe,
        text: "Transit visa and layover advisory for hassle-free connections"
      },
      {
        icon: Users,
        text: "Pre-arranged university airport shuttle or private transport"
      }
    ]
  },
  {
    id: "accommodation",
    number: "05",
    title: "Accommodation Guidance",
    category: "HOUSING & LIVING",
    badge: "100% Verified Housing",
    icon: Home,
    navIcon: Home,
    summary: "Help securing safe, comfortable, and affordable student housing near your university campus before you board your flight.",
    deliverable: "Confirmed Tenancy Agreement & Neighborhood Guide",
    features: [
      {
        icon: Building,
        text: "Priority bookings for university halls and accredited PBSA residences"
      },
      {
        icon: Coins,
        text: "All-inclusive utility contracts (water, electricity, heating & Wi-Fi)"
      },
      {
        icon: Globe,
        text: "Prime locations within walking distance or direct transit to class"
      },
      {
        icon: KeyRound,
        text: "Transparent lease agreements checked for fair student terms"
      }
    ]
  },
  {
    id: "pre-departure",
    number: "06",
    title: "Pre-Departure & Briefing",
    category: "ORIENTATION & SETTLEMENT",
    badge: "Complete Onboarding Kit",
    icon: ShieldCheck,
    navIcon: Users,
    summary: "A comprehensive briefing session for students and parents covering foreign banking, health insurance, campus life, and cultural adaptation.",
    deliverable: "Pre-Departure Handbook, International SIM & Senior Peer Contact",
    features: [
      {
        icon: Coins,
        text: "Overseas bank account opening & zero-fee multi-currency Forex cards"
      },
      {
        icon: ShieldCheck,
        text: "Mandatory student health insurance (NHS/IHS, OSHC) setup"
      },
      {
        icon: FileText,
        text: "Clear guidance on legal part-time working hours and student CV tips"
      },
      {
        icon: Users,
        text: "Direct introduction to senior AST students already on your campus"
      }
    ]
  }
];

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id);

  // Smooth scroll spy tracking active service
  useEffect(() => {
    const handleScroll = () => {
      const trigger = 260;
      let current = SERVICES[0].id;
      for (const s of SERVICES) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= trigger) {
            current = s.id;
          }
        }
      }
      setActiveTab(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#FAFBFD] text-slate-800 relative">
      
      {/* ========================================================================= */}
      {/* 1. HERO COVER SECTION: EXACTLY AS SHOWN IN THE USER'S IMAGE               */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-32 sm:pt-36 sm:pb-40 md:pt-40 md:pb-48 lg:pt-44 lg:pb-52 min-h-[780px] sm:min-h-[840px] md:min-h-[900px] lg:min-h-[940px] bg-[#052A66] text-white overflow-hidden flex flex-col justify-between">
        
        {/* World Map Dotted Pattern on Left */}
        <div 
          className="absolute inset-0 bg-[url('/images/dotted-world-map.svg')] bg-left bg-no-repeat bg-contain opacity-20 pointer-events-none z-0" 
        />

        {/* Full panoramic cover background image with global landmarks */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <img
            src="/images/services-hero-bg.jpg"
            alt="Global Study Landmarks"
            className="w-full h-full object-cover object-right"
          />
          {/* Left gradient enhancement ensuring maximum readability for hero text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#052A66] via-[#052A66]/85 via-42% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#052A66]/35 via-transparent to-transparent" />
        </div>

        {/* Airplane & Dotted Flight Arc Flying toward Top-Left */}
        <div className="absolute top-12 sm:top-14 right-[38%] sm:right-[42%] md:right-[46%] pointer-events-none z-10 hidden sm:block">
          <svg width="240" height="110" viewBox="0 0 240 110" fill="none">
            <path
              d="M 230,100 C 180,90 100,50 30,20"
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
              opacity="0.65"
            />
          </svg>
          <img
            src="/images/hero/hero-airplane.png"
            alt="Airplane"
            className="w-16 h-auto absolute left-2 top-0 -rotate-[15deg] drop-shadow-md"
          />
        </div>

        {/* Cursive Handwriting text on far left: "Your Global Future Starts Here" */}
        <div className="absolute left-6 md:left-12 lg:left-16 top-32 sm:top-40 md:top-44 pointer-events-none z-10 hidden lg:block">
          <div className="font-serif italic text-white/85 text-2xl tracking-wide leading-tight -rotate-[10deg] drop-shadow-sm select-none">
            Your<br />
            Global Future<br />
            Starts Here
            <div className="h-[2px] w-20 bg-[#F4A51C] mt-2 rounded-full" />
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 text-center w-full">
          
          {/* Tag: COMPLETE OVERSEAS EDUCATION GUIDANCE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F4A51C]/70 bg-[#062B68]/70 text-[#F4A51C] text-xs font-semibold uppercase tracking-wider mb-5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F4A51C]" />
            <span>COMPLETE OVERSEAS EDUCATION GUIDANCE</span>
          </motion.div>

          {/* Headline: Our Services */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight mb-5 font-serif"
          >
            Our <span className="text-[#F4A51C]">Services</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            From your <span className="font-semibold text-white">very</span> first counselling session to your first day on campus, AST provides personalized, step-by-step guidance to make studying abroad simple and stress-free.
          </motion.p>

          {/* Two Buttons: Book Free Consultation & View All 6 Services */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Link
              href="#consultation"
              className="inline-flex items-center gap-2 bg-[#F4A51C] hover:bg-[#E08A0A] text-[#062B68] font-bold px-7 py-3 rounded-xl transition-all shadow-md text-sm sm:text-base group"
            >
              <Calendar className="w-4 h-4 text-[#062B68]" />
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#062B68] group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <button
              type="button"
              onClick={() => scrollToSection("expert-counselling")}
              className="inline-flex items-center gap-2 bg-[#0B4EA2]/35 hover:bg-[#0B4EA2]/55 border border-white/20 text-white font-medium px-6 py-3 rounded-xl transition-all text-sm sm:text-base backdrop-blur-xs"
            >
              <span>View All 6 Services</span>
              <ChevronDown className="w-4 h-4 text-slate-300" />
            </button>
          </motion.div>

          {/* 4 Stats Cards Bar with Soft Translucent Boxes */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-5xl lg:max-w-6xl mx-auto mb-6"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-3.5 border border-white/15 text-left">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono leading-none">99.2%</div>
                <div className="text-xs text-slate-300 mt-1">Visa Approval Rate</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-3.5 border border-white/15 text-left">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono leading-none">300+</div>
                <div className="text-xs text-slate-300 mt-1">Partner Universities</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-3.5 border border-white/15 text-left">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono leading-none">1,500+</div>
                <div className="text-xs text-slate-300 mt-1">Students Guided</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl p-3.5 border border-white/15 text-left">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono leading-none">100%</div>
                <div className="text-xs text-slate-300 mt-1">Free Initial Session</div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* ======================================================================= */}
        {/* THE ACCURATE SWEEPING WAVE CURVE WITH GOLD ACCENT RIBBON AT THE BOTTOM  */}
        {/* Starts high on the left, swoops down under stats, scoops up under right */}
        {/* ======================================================================= */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-20 pointer-events-none">
          <svg
            viewBox="0 0 1440 260"
            fill="none"
            preserveAspectRatio="none"
            className="relative block w-full h-32 sm:h-40 md:h-48 lg:h-56"
          >
            {/* White Fill for the area below the wave */}
            <path
              d="M 0,35 C 260,95 480,205 720,205 C 960,205 1200,175 1440,80 L 1440,260 L 0,260 Z"
              fill="#FAFBFD"
            />
            {/* Soft Ambient Gold Glow behind the line */}
            <path
              d="M 0,35 C 260,95 480,205 720,205 C 960,205 1200,175 1440,80"
              stroke="#F4A51C"
              strokeWidth="9"
              strokeOpacity="0.35"
              strokeLinecap="round"
              fill="none"
            />
            {/* Primary Golden Ribbon Stroke along the wave */}
            <path
              d="M 0,35 C 260,95 480,205 720,205 C 960,205 1200,175 1440,80"
              stroke="#F4A51C"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* MOBILE STICKY NAV BAR (< lg)                                              */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:hidden sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs"
      >
        <div className="px-4 py-2.5 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
            Jump to:
          </span>
          {SERVICES.map((s) => {
            const isActive = activeTab === s.id;
            return (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#062B68] text-white"
                    : "text-slate-600 bg-slate-100 hover:bg-slate-200"
                }`}
              >
                <span className={`text-[10px] font-mono ${isActive ? "text-[#F4A51C]" : "text-slate-400"}`}>
                  {s.number}
                </span>
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 2. MAIN LAYOUT: SIDEBAR + SERVICES CONTENT EXACTLY LIKE REFERENCE IMAGE   */}
      {/* ========================================================================= */}
      <div className="-mt-6 sm:-mt-10 md:-mt-14 lg:-mt-16 pb-16 sm:pb-24 relative z-30">
        
        {/* Subtle Dotted Background Pattern */}
        <div 
          className="absolute inset-0 bg-[url('/images/dotted-world-map.svg')] bg-center bg-no-repeat bg-contain opacity-10 pointer-events-none" 
        />

        <div className="max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 xl:gap-8 items-start">
            
            {/* =================================================================== */}
            {/* DESKTOP SIDEBAR: SERVICES NAVIGATION (Matching screenshot)          */}
            {/* =================================================================== */}
            <aside className="hidden lg:block w-68 lg:w-72 xl:w-76 shrink-0 sticky top-28 self-start z-30">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm"
              >
                
                {/* Header: SERVICES NAVIGATION + 6 Pillars badge */}
                <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500">
                    <LayoutGrid className="w-4 h-4 text-[#062B68]" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      SERVICES NAVIGATION
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#062B68] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100/60">
                    6 Pillars
                  </span>
                </div>

                {/* 6 Pillars List */}
                <nav className="space-y-1.5">
                  {SERVICES.map((s) => {
                    const isActive = activeTab === s.id;
                    const NavIcon = s.navIcon;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => scrollToSection(s.id)}
                        className={`w-full text-left p-2.5 rounded-2xl transition-all duration-150 flex items-center justify-between group ${
                          isActive
                            ? "bg-[#062B68] text-white shadow-sm font-semibold"
                            : "text-slate-600 hover:text-[#062B68] hover:bg-slate-50 font-normal"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          {/* Step Number Badge */}
                          <span
                            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold ${
                              isActive
                                ? "bg-[#F4A51C] text-[#062B68]"
                                : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                            }`}
                          >
                            {s.number}
                          </span>
                          
                          {/* Icon */}
                          <NavIcon
                            className={`w-4 h-4 shrink-0 ${
                              isActive ? "text-white" : "text-slate-400 group-hover:text-[#062B68]"
                            }`}
                          />

                          {/* Title */}
                          <span className="text-xs sm:text-[13px] truncate">
                            {s.title}
                          </span>
                        </div>

                        {/* Arrow Right */}
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isActive
                              ? "text-white translate-x-0.5"
                              : "text-slate-300 opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </button>
                    );
                  })}
                </nav>

                {/* Bottom Prompt Card: Need help choosing the right program? */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="bg-[#FAFBFD] rounded-2xl p-4 border border-slate-100 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2 text-slate-700">
                      <Headphones className="w-5 h-5 text-[#062B68]" />
                      <p className="text-xs font-medium">
                        Need help choosing the right program?
                      </p>
                    </div>
                    <Link
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-2 w-full bg-[#062B68] hover:bg-[#0B4EA2] text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-colors shadow-xs"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#F4A51C]" />
                      <span>Book Free 1-on-1 Call</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

              </motion.div>
            </aside>

            {/* =================================================================== */}
            {/* RIGHT COLUMN: SERVICE CARDS EXACTLY LIKE SCREENSHOT                 */}
            {/* =================================================================== */}
            <main className="flex-1 min-w-0 space-y-8 sm:space-y-10">
              {SERVICES.map((service, sIdx) => {
                const isFirst = sIdx === 0;

                // ===================================================================
                // 1ST SERVICE: EXACTLY LIKE THE USER'S REFERENCE IMAGE (2 COLUMNS)
                // ===================================================================
                if (isFirst) {
                  return (
                    <motion.section
                      key={service.id}
                      id={service.id}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5 }}
                      className="scroll-mt-32 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm hover:border-slate-300 transition-colors relative overflow-hidden"
                    >
                      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 xl:gap-10">
                        
                        {/* LEFT COLUMN: Header, Included Grid, Deliverable & Actions */}
                        <div className="flex-1 min-w-0 w-full">
                          
                          {/* Top Row: 01 Badge, Category & Title + Free Consultation Pill */}
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                            <div className="flex items-center gap-3.5">
                              {/* 01 Amber Square Badge */}
                              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#FDE7B3] text-[#062B68] font-bold font-mono text-lg sm:text-xl flex items-center justify-center shrink-0 shadow-2xs">
                                01
                              </div>
                              <div>
                                <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                                  <span className="text-[#F4A51C] text-xs">◊</span>
                                  <span>{service.category}</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#062B68] tracking-tight mt-0.5">
                                  {service.title}
                                </h2>
                              </div>
                            </div>

                            {/* 100% Free Consultation Pill */}
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-xs font-semibold text-[#0B4EA2] shrink-0">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#F4A51C]" />
                              <span>{service.badge}</span>
                            </span>
                          </div>

                          {/* Summary Paragraph */}
                          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal max-w-xl">
                            {service.summary}
                          </p>

                          {/* WHAT'S INCLUDED: 2x2 Grid */}
                          <div className="mb-5">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                              WHAT’S INCLUDED
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {service.features.map((feature, fIdx) => {
                                const FeatureIcon = feature.icon;
                                return (
                                  <div
                                    key={fIdx}
                                    className="flex items-center gap-3.5 bg-[#F8FAFD] p-3.5 sm:p-4 rounded-2xl border border-slate-100 hover:border-blue-100 transition-colors"
                                  >
                                    <div className="w-10 h-10 rounded-full bg-[#EBF3FF] text-[#0B4EA2] flex items-center justify-center shrink-0 border border-blue-100/60">
                                      <FeatureIcon className="w-4 h-4 text-[#0B4EA2]" />
                                    </div>
                                    <span className="text-xs sm:text-[13px] text-slate-700 font-medium leading-snug">
                                      {feature.text}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Key Deliverable Banner with Glowing Lightbulb */}
                          <div className="bg-[#F0F6FD] p-3.5 rounded-2xl border border-blue-100/80 flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 mb-6">
                            <Lightbulb className="w-4 h-4 text-[#F4A51C] fill-[#F4A51C]/30 shrink-0" />
                            <div>
                              <span className="font-bold text-[#062B68]">Key Deliverable: </span>
                              <span className="text-slate-600">{service.deliverable}</span>
                            </div>
                          </div>

                          {/* Bottom Action Row: Book This Service & Have a Question? */}
                          <div className="flex flex-wrap items-center gap-4 pt-1">
                            <Link
                              href="#consultation"
                              className="inline-flex items-center gap-2 bg-[#062B68] hover:bg-[#0B4EA2] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-xs group/btn"
                            >
                              <span>Book This Service</span>
                              <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 transition-transform" />
                            </Link>

                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[#062B68] text-xs sm:text-sm font-semibold transition-colors"
                            >
                              <MessageSquare className="w-4 h-4 text-slate-400" />
                              <span>Have a Question?</span>
                            </Link>
                          </div>

                        </div>

                        {/* RIGHT COLUMN: Photo with Curved Aura, Wireframe Globe & Floating Badges */}
                        <div className="w-full lg:w-[340px] xl:w-[380px] shrink-0 self-center lg:self-stretch flex items-center justify-center relative pt-4 lg:pt-0">
                          <div className="relative w-full max-w-[360px] aspect-4/3 sm:aspect-square rounded-[36px] bg-gradient-to-tr from-sky-100/70 via-blue-50/40 to-transparent p-2.5 flex items-center justify-center overflow-hidden border border-blue-100/50 shadow-2xs">
                            
                            {/* Subtle Faint Wireframe Globe in Top-Right Background */}
                            <svg
                              className="absolute -top-6 -right-6 w-56 h-56 text-blue-300/40 pointer-events-none"
                              viewBox="0 0 100 100"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.2"
                            >
                              <circle cx="50" cy="50" r="44" />
                              <ellipse cx="50" cy="50" rx="44" ry="18" />
                              <ellipse cx="50" cy="50" rx="44" ry="32" />
                              <ellipse cx="50" cy="50" rx="18" ry="44" />
                              <ellipse cx="50" cy="50" rx="32" ry="44" />
                              <line x1="6" y1="50" x2="94" y2="50" />
                              <line x1="50" y1="6" x2="50" y2="94" />
                            </svg>

                            {/* Counsellor Photo with Student */}
                            <div className="relative w-full h-full rounded-[28px] overflow-hidden">
                              <img
                                src="/images/services-counselling-counsellor.jpg"
                                alt="Expert Academic Counselling"
                                className="w-full h-full object-cover object-center"
                              />
                              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[28px] pointer-events-none" />
                            </div>

                            {/* 3 Floating Badges Matching Mockup */}
                            {/* 1. Top Badge: Graduation Cap */}
                            <div className="absolute top-4 left-6 sm:top-5 sm:left-8 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-md border border-white/80 ring-1 ring-blue-100/60 transition-transform duration-300 hover:scale-110 z-20">
                              <GraduationCap className="w-5 h-5 text-[#0066FF]" />
                            </div>

                            {/* 2. Left Badge: Document File */}
                            <div className="absolute top-24 left-2 sm:top-28 sm:left-3 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-2.5 shadow-md border border-white/80 ring-1 ring-blue-100/60 transition-transform duration-300 hover:scale-110 z-20">
                              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066FF]" />
                            </div>

                            {/* 3. Right Badge: Bar Chart */}
                            <div className="absolute top-14 right-3 sm:top-16 sm:right-4 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-2.5 shadow-md border border-white/80 ring-1 ring-blue-100/60 transition-transform duration-300 hover:scale-110 z-20">
                              <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0066FF]" />
                            </div>

                          </div>
                        </div>

                      </div>
                    </motion.section>
                  );
                }

                // ===================================================================
                // 2ND SERVICE: UNIVERSITY & COURSE SELECTION (MATCHING USER MOCKUP)
                // ===================================================================
                if (service.id === "university-selection") {
                  return (
                    <motion.section
                      key={service.id}
                      id={service.id}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5 }}
                      className="scroll-mt-32 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm hover:border-slate-300 transition-colors relative overflow-hidden"
                    >
                      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 xl:gap-10">
                        
                        {/* LEFT COLUMN: Header, 4 Feature Boxes, Key Deliverable & Actions */}
                        <div className="flex-1 min-w-0 w-full">
                          
                          {/* Top Row: Graduation Icon with Amber Bar + Step & Title + Badge */}
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                            <div className="flex items-center gap-3.5">
                              {/* Graduation Icon with Amber Accent Bar */}
                              <div className="flex flex-col items-center shrink-0">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50/90 border border-blue-100/90 text-[#0066FF] flex items-center justify-center shadow-2xs">
                                  <GraduationCap className="w-6 h-6 text-[#0066FF]" />
                                </div>
                                <div className="w-10 h-1 bg-[#F4A51C] rounded-full mt-2" />
                              </div>

                              <div>
                                <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
                                  <span className="text-[#F4A51C] font-mono">STEP 02</span>
                                  <span className="text-slate-300">•</span>
                                  <span className="text-slate-400 font-semibold">{service.category}</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#062B68] tracking-tight mt-0.5">
                                  {service.title}
                                </h2>
                              </div>
                            </div>

                            {/* 300+ Partner Universities Pill Badge */}
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-xs sm:text-sm font-semibold text-[#0B4EA2] shrink-0">
                              <ShieldCheck className="w-4 h-4 text-[#F4A51C]" />
                              <span>{service.badge}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#0B4EA2]" />
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal max-w-xl">
                            {service.summary}
                          </p>

                          {/* WHAT'S INCLUDED: 2x2 Grid with Chevron Right Pills */}
                          <div className="mb-5">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                              WHAT’S INCLUDED
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              
                              {/* 1. Balanced 3-tier shortlist (Blue) */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-blue-50/90 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100/50">
                                    <svg className="w-5 h-5 text-[#0066FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <rect x="4" y="3" width="16" height="18" rx="2" />
                                      <line x1="8" y1="8" x2="16" y2="8" />
                                      <line x1="8" y1="12" x2="16" y2="12" />
                                      <line x1="8" y1="16" x2="13" y2="16" />
                                    </svg>
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Balanced 3-tier shortlist
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Dream, Target, and Guaranteed options for safety.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                              {/* 2. Direct university liaison (Blue) */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-blue-50/90 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100/50">
                                    <Handshake className="w-5 h-5 text-[#0066FF]" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Direct university liaison
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Fast-tracked conditional offers through our global network.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                              {/* 3. SOP & academic refinement (Amber) */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 border border-amber-100">
                                    <FileText className="w-5 h-5 text-amber-500" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      SOP & academic refinement
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Statement of Purpose and academic reference guidance.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                              {/* 4. Scholarships & fee waivers (Amber) */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 border border-amber-100">
                                    <Award className="w-5 h-5 text-amber-500" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Scholarships & fee waivers
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Proactive targeting of department scholarships and funding opportunities.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                            </div>
                          </div>

                          {/* Key Deliverable Banner with Lightbulb and Arrow */}
                          <div className="bg-gradient-to-r from-[#F0F6FD] via-[#F4F9FF] to-transparent p-3.5 sm:p-4 rounded-2xl border border-blue-100/80 flex items-center justify-between gap-4 text-xs sm:text-sm text-slate-700 mb-6 relative overflow-hidden">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <Lightbulb className="w-4 h-4 text-[#F4A51C] fill-[#F4A51C]/30 shrink-0" />
                              <div>
                                <span className="font-bold text-[#062B68]">Key Deliverable: </span>
                                <span className="text-slate-600">{service.deliverable}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 shrink-0 pl-2 border-l border-blue-100/60">
                              <ArrowRight className="w-4 h-4 text-[#0066FF]" />
                            </div>
                          </div>

                          {/* Bottom Action Row: Book This Service & Have a Question? */}
                          <div className="flex flex-wrap items-center gap-4 pt-1">
                            <Link
                              href="#consultation"
                              className="inline-flex items-center gap-2 bg-[#062B68] hover:bg-[#0B4EA2] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-xs group/btn"
                            >
                              <Calendar className="w-4 h-4 text-white" />
                              <span>Book This Service</span>
                              <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 transition-transform" />
                            </Link>

                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[#062B68] text-xs sm:text-sm font-semibold transition-colors"
                            >
                              <MessageSquare className="w-4 h-4 text-slate-400" />
                              <span>Have a Question?</span>
                            </Link>
                          </div>

                        </div>

                        {/* RIGHT COLUMN: Real High-Res Campus Photo with Interactive Floating Cards */}
                        <div className="w-full lg:w-[350px] xl:w-[400px] shrink-0 self-center lg:self-stretch flex items-center justify-center relative pt-4 lg:pt-0">
                          <div className="relative w-full max-w-[380px] aspect-4/3 sm:aspect-square rounded-[36px] bg-gradient-to-tr from-amber-100/60 via-blue-50/40 to-transparent p-2.5 flex items-center justify-center overflow-hidden border border-blue-100/60 shadow-2xs group">
                            
                            {/* Ambient Warm Sun Aura Disc in Background */}
                            <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-gradient-to-br from-[#F4A51C]/25 to-amber-200/10 blur-2xl pointer-events-none" />

                            {/* Real High-Res Gothic University Campus Photo */}
                            <div className="relative w-full h-full rounded-[28px] overflow-hidden">
                              <img
                                src="/images/services-university-campus.jpg"
                                alt="Top Global Universities & Course Selection"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#062B68]/70 via-[#062B68]/15 to-transparent pointer-events-none" />
                              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[28px] pointer-events-none" />
                            </div>

                            {/* Floating Card 1: Top Global Universities with Country Flags */}
                            <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-lg border border-white/80 ring-1 ring-blue-100/60 transition-transform duration-300 hover:scale-[1.02] z-20">
                              <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-1.5">
                                  <GraduationCap className="w-4 h-4 text-[#0066FF]" />
                                  <span className="text-xs font-bold text-[#062B68]">Top Global Universities</span>
                                </div>
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0066FF] border border-blue-100">
                                  Direct Apply
                                </span>
                              </div>
                              <div className="flex items-center gap-1.5 pt-1 flex-wrap">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100/90 text-[11px] font-medium text-slate-700">
                                  🇬🇧 UK
                                </span>
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100/90 text-[11px] font-medium text-slate-700">
                                  🇺🇸 USA
                                </span>
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100/90 text-[11px] font-medium text-slate-700">
                                  🇨🇦 Canada
                                </span>
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100/90 text-[11px] font-medium text-slate-700">
                                  🇦🇺 Australia
                                </span>
                              </div>
                            </div>

                            {/* Floating Card 2: 300+ Partner Campuses */}
                            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/80 ring-1 ring-blue-100/60 z-20 transition-transform duration-300 hover:scale-[1.02]">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-[#F4A51C] flex items-center justify-center shrink-0 border border-amber-500/20">
                                    <Star className="w-4 h-4 fill-[#F4A51C]" />
                                  </div>
                                  <div>
                                    <div className="text-xs font-bold text-[#062B68]">300+ Partner Campuses</div>
                                    <div className="text-[11px] text-slate-500">Fast-Track Offer Letters & Grants</div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>
                    </motion.section>
                  );
                }

                // ===================================================================
                // 3RD SERVICE: VISA ASSISTANCE & COMPLIANCE (MATCHING USER MOCKUP)
                // ===================================================================
                if (service.id === "visa-assistance") {
                  return (
                    <motion.section
                      key={service.id}
                      id={service.id}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5 }}
                      className="scroll-mt-32 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm hover:border-slate-300 transition-colors relative overflow-hidden"
                    >
                      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 xl:gap-10">
                        
                        {/* LEFT COLUMN: Header, 4 Feature Boxes, Key Deliverable & Actions */}
                        <div className="flex-1 min-w-0 w-full">
                          
                          {/* Top Row: FileCheck Icon with Amber Bar + Step & Title + Badge */}
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                            <div className="flex items-center gap-3.5">
                              {/* FileCheck Icon with Amber Accent Bar */}
                              <div className="flex flex-col items-center shrink-0">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50/90 border border-blue-100/90 text-[#0066FF] flex items-center justify-center shadow-2xs">
                                  <FileCheck className="w-6 h-6 text-[#0066FF]" />
                                </div>
                                <div className="w-10 h-1 bg-[#F4A51C] rounded-full mt-2" />
                              </div>

                              <div>
                                <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
                                  <span className="text-[#F4A51C] font-mono">STEP 03</span>
                                  <span className="text-slate-300">•</span>
                                  <span className="text-slate-400 font-semibold">{service.category}</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#062B68] tracking-tight mt-0.5">
                                  {service.title}
                                </h2>
                              </div>
                            </div>

                            {/* 99.2% Visa Approval Rate Pill Badge */}
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-xs sm:text-sm font-semibold text-[#0B4EA2] shrink-0">
                              <ShieldCheck className="w-4 h-4 text-[#F4A51C]" />
                              <span>{service.badge}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#0B4EA2]" />
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal max-w-xl">
                            {service.summary}
                          </p>

                          {/* WHAT'S INCLUDED: 2x2 Grid with Chevron Right Pills */}
                          <div className="mb-5">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                              WHAT’S INCLUDED
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              
                              {/* 1. Multi-stage Document Verification */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-blue-50/90 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100/50">
                                    <ShieldCheck className="w-5 h-5 text-[#0066FF]" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Multi-stage Document Verification
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Complete verification meeting strict immigration rules and guidelines.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                              {/* 2. Genuine Student Statement (GS/GTE) */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-blue-50/90 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100/50">
                                    <FileText className="w-5 h-5 text-[#0066FF]" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Genuine Student Statement (GS/GTE)
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Professional drafting and 1-on-1 coaching for a strong application.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                              {/* 3. Financial Solvency Compliance */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-blue-50/90 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100/50">
                                    <Coins className="w-5 h-5 text-[#0066FF]" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Financial Solvency Compliance
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Guidance on bank statements, sponsorship and financial documents.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                              {/* 4. Mock Interview Preparation */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-blue-50/90 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100/50">
                                    <Users className="w-5 h-5 text-[#0066FF]" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Mock Interview Preparation
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Realistic embassy mock interviews with expert feedback.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                            </div>
                          </div>

                          {/* Key Deliverable Banner with Golden Star */}
                          <div className="bg-[#FFF9EE] p-3.5 sm:p-4 rounded-2xl border border-amber-200/80 flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 mb-6">
                            <Star className="w-5 h-5 text-[#F4A51C] fill-[#F4A51C] shrink-0" />
                            <div>
                              <span className="font-bold text-[#062B68]">Key Deliverable: </span>
                              <span className="text-slate-600">{service.deliverable}</span>
                            </div>
                          </div>

                          {/* Bottom Action Row: Book This Service & Have a Question? */}
                          <div className="flex flex-wrap items-center gap-4 pt-1">
                            <Link
                              href="#consultation"
                              className="inline-flex items-center gap-2 bg-[#062B68] hover:bg-[#0B4EA2] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-xs group/btn"
                            >
                              <Calendar className="w-4 h-4 text-white" />
                              <span>Book This Service</span>
                              <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 transition-transform" />
                            </Link>

                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[#062B68] text-xs sm:text-sm font-semibold transition-colors"
                            >
                              <MessageSquare className="w-4 h-4 text-slate-400" />
                              <span>Have a Question?</span>
                            </Link>
                          </div>

                        </div>

                        {/* RIGHT COLUMN: Real High-Res Visa Student Photo with Floating Verification Badges */}
                        <div className="w-full lg:w-[350px] xl:w-[400px] shrink-0 self-center lg:self-stretch flex items-center justify-center relative pt-4 lg:pt-0">
                          <div className="relative w-full max-w-[380px] aspect-4/3 sm:aspect-square rounded-[36px] bg-gradient-to-tr from-emerald-100/50 via-blue-50/40 to-transparent p-2.5 flex items-center justify-center overflow-hidden border border-blue-100/60 shadow-2xs group">
                            
                            {/* Ambient Soft Glow */}
                            <div className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-emerald-400/15 blur-2xl pointer-events-none" />

                            {/* Real High-Res Student Passport Photo */}
                            <div className="relative w-full h-full rounded-[28px] overflow-hidden">
                              <img
                                src="/images/services-visa-student.jpg"
                                alt="Visa Assistance & Student Passport Verification"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#062B68]/70 via-[#062B68]/15 to-transparent pointer-events-none" />
                              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[28px] pointer-events-none" />
                            </div>

                            {/* Floating Card 1: Visa Approved Success Banner */}
                            <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-lg border border-white/80 ring-1 ring-blue-100/60 transition-transform duration-300 hover:scale-[1.02] z-20">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                                    <CheckCircle2 className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-xs font-bold text-[#062B68]">Visa Approved!</div>
                                    <div className="text-[11px] text-emerald-600 font-semibold">99.8% Success Rate</div>
                                  </div>
                                </div>
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200">
                                  100% Verified
                                </span>
                              </div>
                            </div>

                            {/* Floating Card 2: Compliance Checklist */}
                            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/80 ring-1 ring-blue-100/60 z-20 transition-transform duration-300 hover:scale-[1.02]">
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="text-[11px] font-bold text-[#062B68] uppercase tracking-wider">
                                  Compliance Checklist
                                </span>
                                <span className="text-[10px] text-emerald-600 font-bold">Pass All Checks</span>
                              </div>
                              <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-700">
                                <div className="flex items-center gap-1.5">
                                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                  <span className="truncate">Financial Solvency</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                  <span className="truncate">GTE / GS Coaching</span>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>
                    </motion.section>
                  );
                }

                // ===================================================================
                // 4TH SERVICE: TRAVEL & FLIGHT SUPPORT (MATCHING USER MOCKUP)
                // ===================================================================
                if (service.id === "travel-support") {
                  return (
                    <motion.section
                      key={service.id}
                      id={service.id}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5 }}
                      className="scroll-mt-32 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm hover:border-slate-300 transition-colors relative overflow-hidden"
                    >
                      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 xl:gap-10">
                        
                        {/* LEFT COLUMN: Header, 4 Feature Boxes, Key Deliverable & Actions */}
                        <div className="flex-1 min-w-0 w-full">
                          
                          {/* Top Row: Plane Icon with Amber Bar + Step & Title + Badge */}
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                            <div className="flex items-center gap-3.5">
                              {/* Plane Icon with Amber Accent Bar */}
                              <div className="flex flex-col items-center shrink-0">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50/90 border border-blue-100/90 text-[#0066FF] flex items-center justify-center shadow-2xs">
                                  <Plane className="w-6 h-6 text-[#0066FF]" />
                                </div>
                                <div className="w-10 h-1 bg-[#F4A51C] rounded-full mt-2" />
                              </div>

                              <div>
                                <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
                                  <span className="text-[#F4A51C] font-mono">STEP 04</span>
                                  <span className="text-slate-300">•</span>
                                  <span className="text-slate-400 font-semibold">{service.category}</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#062B68] tracking-tight mt-0.5">
                                  {service.title}
                                </h2>
                              </div>
                            </div>

                            {/* Student Baggage Perks Pill Badge */}
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-xs sm:text-sm font-semibold text-[#0B4EA2] shrink-0">
                              <Luggage className="w-4 h-4 text-[#F4A51C]" />
                              <span>{service.badge}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#0B4EA2]" />
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal max-w-xl">
                            {service.summary}
                          </p>

                          {/* WHAT'S INCLUDED: 2x2 Grid with Chevron Right Pills */}
                          <div className="mb-5">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                              WHAT’S INCLUDED
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              
                              {/* 1. Exclusive Student Flight Fares (Blue) */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-blue-50/90 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100/50">
                                    <Plane className="w-5 h-5 text-[#0066FF]" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Exclusive Student Flight Fares
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Special discounted fares via authorized travel partners.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                              {/* 2. Up to 40kg–45kg Baggage Allowances (Amber) */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 border border-amber-100">
                                    <Luggage className="w-5 h-5 text-amber-500" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Up to 40kg–45kg Baggage Allowances
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Guidance on student luggage concessions across major airlines.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                              {/* 3. Transit Visa & Layover Support (Amber) */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 border border-amber-100">
                                    <Globe className="w-5 h-5 text-amber-500" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Transit Visa & Layover Support
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Expert advisory for hassle-free connections and transit visa requirements.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                              {/* 4. Airport Pickup & Local Transport (Blue) */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-blue-50/90 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100/50">
                                    <Users className="w-5 h-5 text-[#0066FF]" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Airport Pickup & Local Transport
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Pre-arranged university airport shuttle or private transport for a smooth arrival.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                            </div>
                          </div>

                          {/* Key Deliverable Banner with Golden Sparkles */}
                          <div className="bg-[#FFF9EE] p-3.5 sm:p-4 rounded-2xl border border-amber-200/80 flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 mb-6">
                            <Sparkles className="w-5 h-5 text-[#F4A51C] fill-[#F4A51C]/30 shrink-0" />
                            <div>
                              <span className="font-bold text-[#062B68]">Key Deliverable: </span>
                              <span className="text-slate-600">{service.deliverable}</span>
                            </div>
                          </div>

                          {/* Bottom Action Row: Book This Service & Have a Question? */}
                          <div className="flex flex-wrap items-center gap-4 pt-1">
                            <Link
                              href="#consultation"
                              className="inline-flex items-center gap-2 bg-[#062B68] hover:bg-[#0B4EA2] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-xs group/btn"
                            >
                              <Calendar className="w-4 h-4 text-white" />
                              <span>Book This Service</span>
                              <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 transition-transform" />
                            </Link>

                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[#062B68] text-xs sm:text-sm font-semibold transition-colors"
                            >
                              <MessageSquare className="w-4 h-4 text-slate-400" />
                              <span>Have a Question?</span>
                            </Link>
                          </div>

                        </div>

                        {/* RIGHT COLUMN: Real High-Res Airport Travel Photo with Interactive Flight Path Badges */}
                        <div className="w-full lg:w-[350px] xl:w-[400px] shrink-0 self-center lg:self-stretch flex items-center justify-center relative pt-4 lg:pt-0">
                          <div className="relative w-full max-w-[380px] aspect-4/3 sm:aspect-square rounded-[36px] bg-gradient-to-tr from-sky-100/60 via-blue-50/40 to-transparent p-2.5 flex items-center justify-center overflow-hidden border border-blue-100/60 shadow-2xs group">
                            
                            {/* Ambient Aviation Glow */}
                            <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-sky-400/15 blur-2xl pointer-events-none" />

                            {/* Real High-Res Airport Departure Photo */}
                            <div className="relative w-full h-full rounded-[28px] overflow-hidden">
                              <img
                                src="/images/services-travel-student.jpg"
                                alt="Student Airport Travel & Flight Support"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#062B68]/70 via-[#062B68]/15 to-transparent pointer-events-none" />
                              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[28px] pointer-events-none" />
                            </div>

                            {/* Floating Card 1: Flight Route & Student Discount */}
                            <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-lg border border-white/80 ring-1 ring-blue-100/60 transition-transform duration-300 hover:scale-[1.02] z-20">
                              <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-1.5">
                                  <Plane className="w-4 h-4 text-[#0066FF]" />
                                  <span className="text-xs font-bold text-[#062B68]">Flight Confirmed</span>
                                </div>
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                                  Ticket Issued
                                </span>
                              </div>
                              <div className="flex items-center justify-between pt-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-mono font-bold text-slate-800">CMB</span>
                                  <span className="text-slate-400">✈︎</span>
                                  <span className="text-xs font-mono font-bold text-[#0066FF]">LHR / SYD / YVR</span>
                                </div>
                                <span className="text-[11px] font-semibold text-[#F4A51C]">Exclusive Fare</span>
                              </div>
                            </div>

                            {/* Floating Card 2: Student Baggage Allowance */}
                            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/80 ring-1 ring-blue-100/60 z-20 transition-transform duration-300 hover:scale-[1.02]">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-[#F4A51C] flex items-center justify-center shrink-0 border border-amber-500/20">
                                    <Luggage className="w-4 h-4 text-[#F4A51C]" />
                                  </div>
                                  <div>
                                    <div className="text-xs font-bold text-[#062B68]">40kg – 45kg Luggage</div>
                                    <div className="text-[11px] text-slate-500">Student Concession + Airport Shuttle</div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>
                    </motion.section>
                  );
                }

                // ===================================================================
                // 5TH SERVICE: ACCOMMODATION GUIDANCE (MATCHING USER MOCKUP)
                // ===================================================================
                if (service.id === "accommodation" || service.id === "accommodation-guidance") {
                  return (
                    <motion.section
                      key={service.id}
                      id={service.id}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5 }}
                      className="scroll-mt-32 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm hover:border-slate-300 transition-colors relative overflow-hidden"
                    >
                      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 xl:gap-10">
                        
                        {/* LEFT COLUMN: Header, 4 Feature Boxes, Key Deliverable & Actions */}
                        <div className="flex-1 min-w-0 w-full">
                          
                          {/* Top Row: Home Icon with Amber Bar + Step & Title + Badge */}
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                            <div className="flex items-center gap-3.5">
                              {/* Home Icon with Amber Accent Bar */}
                              <div className="flex flex-col items-center shrink-0">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50/90 border border-blue-100/90 text-[#0066FF] flex items-center justify-center shadow-2xs">
                                  <Home className="w-6 h-6 text-[#0066FF]" />
                                </div>
                                <div className="w-10 h-1 bg-[#F4A51C] rounded-full mt-2" />
                              </div>

                              <div>
                                <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
                                  <span className="text-[#F4A51C] font-mono">STEP 05</span>
                                  <span className="text-slate-300">•</span>
                                  <span className="text-slate-400 font-semibold">{service.category}</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#062B68] tracking-tight mt-0.5">
                                  {service.title}
                                </h2>
                              </div>
                            </div>

                            {/* 100% Verified Housing Pill Badge */}
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-xs sm:text-sm font-semibold text-[#0B4EA2] shrink-0">
                              <ShieldCheck className="w-4 h-4 text-[#F4A51C]" />
                              <span>{service.badge}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#0B4EA2]" />
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal max-w-xl">
                            {service.summary}
                          </p>

                          {/* WHAT'S INCLUDED: 2x2 Grid with Chevron Right Pills */}
                          <div className="mb-5">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                              WHAT’S INCLUDED
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              
                              {/* 1. Priority Bookings for University Residences (Blue) */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-blue-50/90 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100/50">
                                    <Building className="w-5 h-5 text-[#0066FF]" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Priority Bookings for University Residences
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Access to university halls and accredited PBSA options.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                              {/* 2. All-Inclusive Utility Support (Amber) */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 border border-amber-100">
                                    <Home className="w-5 h-5 text-amber-500" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      All-Inclusive Utility Support
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Guidance on water, electricity, heating and Wi-Fi contracts.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                              {/* 3. Prime Locations (Amber) */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 border border-amber-100">
                                    <MapPin className="w-5 h-5 text-amber-500" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Prime Locations
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Options within walking distance or direct transit to campus.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                              {/* 4. Transparent Agreements (Blue) */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-blue-50/90 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100/50">
                                    <FileText className="w-5 h-5 text-[#0066FF]" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Transparent Agreements
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Lease agreements checked for fair and student-friendly terms.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                            </div>
                          </div>

                          {/* Key Deliverable Banner with Golden Sparkles */}
                          <div className="bg-[#FFF9EE] p-3.5 sm:p-4 rounded-2xl border border-amber-200/80 flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 mb-6">
                            <Sparkles className="w-5 h-5 text-[#F4A51C] fill-[#F4A51C]/30 shrink-0" />
                            <div>
                              <span className="font-bold text-[#062B68]">Key Deliverable: </span>
                              <span className="text-slate-600">{service.deliverable}</span>
                            </div>
                          </div>

                          {/* Bottom Action Row: Book This Service & Have a Question? */}
                          <div className="flex flex-wrap items-center gap-4 pt-1">
                            <Link
                              href="#consultation"
                              className="inline-flex items-center gap-2 bg-[#062B68] hover:bg-[#0B4EA2] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-xs group/btn"
                            >
                              <Calendar className="w-4 h-4 text-white" />
                              <span>Book This Service</span>
                              <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 transition-transform" />
                            </Link>

                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[#062B68] text-xs sm:text-sm font-semibold transition-colors"
                            >
                              <MessageSquare className="w-4 h-4 text-slate-400" />
                              <span>Have a Question?</span>
                            </Link>
                          </div>

                        </div>

                        {/* RIGHT COLUMN: Real High-Res Student Housing Photo with Floating Property Badges */}
                        <div className="w-full lg:w-[350px] xl:w-[400px] shrink-0 self-center lg:self-stretch flex items-center justify-center relative pt-4 lg:pt-0">
                          <div className="relative w-full max-w-[380px] aspect-4/3 sm:aspect-square rounded-[36px] bg-gradient-to-tr from-amber-100/50 via-blue-50/40 to-transparent p-2.5 flex items-center justify-center overflow-hidden border border-blue-100/60 shadow-2xs group">
                            
                            {/* Ambient Residence Glow */}
                            <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-amber-300/15 blur-2xl pointer-events-none" />

                            {/* Real High-Res Residence Hall Photo */}
                            <div className="relative w-full h-full rounded-[28px] overflow-hidden">
                              <img
                                src="/images/services-accommodation-student.jpg"
                                alt="Student Accommodation & Residence Hall Guidance"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#062B68]/70 via-[#062B68]/15 to-transparent pointer-events-none" />
                              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[28px] pointer-events-none" />
                            </div>

                            {/* Floating Card 1: 100% Verified Housing */}
                            <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-lg border border-white/80 ring-1 ring-blue-100/60 transition-transform duration-300 hover:scale-[1.02] z-20">
                              <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-1.5">
                                  <Building className="w-4 h-4 text-[#0066FF]" />
                                  <span className="text-xs font-bold text-[#062B68]">University Village PBSA</span>
                                </div>
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                                  Verified
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-[11px] text-slate-600">
                                <MapPin className="w-3.5 h-3.5 text-[#F4A51C] shrink-0" />
                                <span>5–10 Mins Walk to Main Campus</span>
                              </div>
                            </div>

                            {/* Floating Card 2: En-Suite Studio & Bills Included */}
                            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/80 ring-1 ring-blue-100/60 z-20 transition-transform duration-300 hover:scale-[1.02]">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-[#F4A51C] flex items-center justify-center shrink-0 border border-amber-500/20">
                                    <KeyRound className="w-4 h-4 text-[#F4A51C]" />
                                  </div>
                                  <div>
                                    <div className="text-xs font-bold text-[#062B68]">All-Inclusive Contracts</div>
                                    <div className="text-[11px] text-slate-500">Water, Heat, Wi-Fi & 24/7 Security</div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>
                    </motion.section>
                  );
                }

                // ===================================================================
                // 6TH SERVICE: PRE-DEPARTURE & BRIEFING (MATCHING 2-COLUMN LAYOUT)
                // ===================================================================
                if (service.id === "pre-departure" || service.id === "predeparture-briefing") {
                  return (
                    <motion.section
                      key={service.id}
                      id={service.id}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5 }}
                      className="scroll-mt-32 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm hover:border-slate-300 transition-colors relative overflow-hidden"
                    >
                      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 xl:gap-10">
                        
                        {/* LEFT COLUMN: Header, 4 Feature Boxes, Key Deliverable & Actions */}
                        <div className="flex-1 min-w-0 w-full">
                          
                          {/* Top Row: Users Icon with Amber Bar + Step & Title + Badge */}
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                            <div className="flex items-center gap-3.5">
                              {/* Users Icon with Amber Accent Bar */}
                              <div className="flex flex-col items-center shrink-0">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50/90 border border-blue-100/90 text-[#0066FF] flex items-center justify-center shadow-2xs">
                                  <Users className="w-6 h-6 text-[#0066FF]" />
                                </div>
                                <div className="w-10 h-1 bg-[#F4A51C] rounded-full mt-2" />
                              </div>

                              <div>
                                <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
                                  <span className="text-[#F4A51C] font-mono">STEP 06</span>
                                  <span className="text-slate-300">•</span>
                                  <span className="text-slate-400 font-semibold">{service.category}</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#062B68] tracking-tight mt-0.5">
                                  {service.title}
                                </h2>
                              </div>
                            </div>

                            {/* Complete Onboarding Kit Pill Badge */}
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-xs sm:text-sm font-semibold text-[#0B4EA2] shrink-0">
                              <ShieldCheck className="w-4 h-4 text-[#F4A51C]" />
                              <span>{service.badge}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#0B4EA2]" />
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal max-w-xl">
                            {service.summary}
                          </p>

                          {/* WHAT'S INCLUDED: 2x2 Grid with Chevron Right Pills */}
                          <div className="mb-5">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                              WHAT’S INCLUDED
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              
                              {/* 1. Overseas Bank & Forex Card (Blue) */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-blue-50/90 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100/50">
                                    <Coins className="w-5 h-5 text-[#0066FF]" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Bank Account & Forex Card
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Zero-fee international multi-currency debit card setup.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                              {/* 2. Mandatory Health Insurance (Amber) */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 border border-amber-100">
                                    <ShieldCheck className="w-5 h-5 text-amber-500" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Health Insurance Setup
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Assistance with NHS surcharge, OSHC and private policies.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                              {/* 3. Part-Time Work Rights (Amber) */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 border border-amber-100">
                                    <FileText className="w-5 h-5 text-amber-500" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Legal Work Rights & CV
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Part-time employment rules, NI number and resume guidance.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                              {/* 4. Senior Campus Alumni Connect (Blue) */}
                              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFD] border border-slate-100 hover:border-blue-100 transition-colors group">
                                <div className="flex items-center gap-3.5 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-blue-50/90 text-[#0066FF] flex items-center justify-center shrink-0 border border-blue-100/50">
                                    <Users className="w-5 h-5 text-[#0066FF]" />
                                  </div>
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-[#062B68]">
                                      Senior Peer Network
                                    </div>
                                    <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                      Direct intro to AST alumni currently studying on your campus.
                                    </div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50/60 flex items-center justify-center shrink-0 ml-2">
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </div>

                            </div>
                          </div>

                          {/* Key Deliverable Banner with Golden Sparkles */}
                          <div className="bg-[#FFF9EE] p-3.5 sm:p-4 rounded-2xl border border-amber-200/80 flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 mb-6">
                            <Sparkles className="w-5 h-5 text-[#F4A51C] fill-[#F4A51C]/30 shrink-0" />
                            <div>
                              <span className="font-bold text-[#062B68]">Key Deliverable: </span>
                              <span className="text-slate-600">{service.deliverable}</span>
                            </div>
                          </div>

                          {/* Bottom Action Row: Book This Service & Have a Question? */}
                          <div className="flex flex-wrap items-center gap-4 pt-1">
                            <Link
                              href="#consultation"
                              className="inline-flex items-center gap-2 bg-[#062B68] hover:bg-[#0B4EA2] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-xs group/btn"
                            >
                              <Calendar className="w-4 h-4 text-white" />
                              <span>Book This Service</span>
                              <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 transition-transform" />
                            </Link>

                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[#062B68] text-xs sm:text-sm font-semibold transition-colors"
                            >
                              <MessageSquare className="w-4 h-4 text-slate-400" />
                              <span>Have a Question?</span>
                            </Link>
                          </div>

                        </div>

                        {/* RIGHT COLUMN: Real High-Res Orientation Photo with Floating Settlement Badges */}
                        <div className="w-full lg:w-[350px] xl:w-[400px] shrink-0 self-center lg:self-stretch flex items-center justify-center relative pt-4 lg:pt-0">
                          <div className="relative w-full max-w-[380px] aspect-4/3 sm:aspect-square rounded-[36px] bg-gradient-to-tr from-sky-100/50 via-blue-50/40 to-transparent p-2.5 flex items-center justify-center overflow-hidden border border-blue-100/60 shadow-2xs group">
                            
                            {/* Ambient Orientation Glow */}
                            <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-sky-300/15 blur-2xl pointer-events-none" />

                            {/* Real High-Res Students Briefing Photo */}
                            <div className="relative w-full h-full rounded-[28px] overflow-hidden">
                              <img
                                src="/images/services-predeparture-students.jpg"
                                alt="Pre-Departure Briefing & International Student Orientation"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#062B68]/70 via-[#062B68]/15 to-transparent pointer-events-none" />
                              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[28px] pointer-events-none" />
                            </div>

                            {/* Floating Card 1: Briefing & Orientation Complete */}
                            <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-lg border border-white/80 ring-1 ring-blue-100/60 transition-transform duration-300 hover:scale-[1.02] z-20">
                              <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-1.5">
                                  <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
                                  <span className="text-xs font-bold text-[#062B68]">Pre-Departure Briefing</span>
                                </div>
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                                  Session Ready
                                </span>
                              </div>
                              <div className="text-[11px] text-slate-600">
                                Students & Parents Orientation Included
                              </div>
                            </div>

                            {/* Floating Card 2: Settlement Kit */}
                            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/80 ring-1 ring-blue-100/60 z-20 transition-transform duration-300 hover:scale-[1.02]">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-[#F4A51C] flex items-center justify-center shrink-0 border border-amber-500/20">
                                    <Star className="w-4 h-4 fill-[#F4A51C]" />
                                  </div>
                                  <div>
                                    <div className="text-xs font-bold text-[#062B68]">Settlement Kit & Forex</div>
                                    <div className="text-[11px] text-slate-500">Intl SIM • Bank Account • Senior Buddy</div>
                                  </div>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>
                    </motion.section>
                  );
                }

                // Fallback for any other services
                const Icon = service.icon;
                return (
                  <motion.section
                    key={service.id}
                    id={service.id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="scroll-mt-32 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-[#0B4EA2]" />
                      <h2 className="text-2xl font-bold text-[#062B68]">{service.title}</h2>
                    </div>
                  </motion.section>
                );
              })}
            </main>

          </div>

        </div>
      </div>

    </div>
  );
}
