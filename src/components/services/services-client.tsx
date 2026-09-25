"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ChevronDown, 
  ChevronRight,
  PhoneCall, 
  Compass, 
  GraduationCap, 
  FileCheck, 
  Plane, 
  Home, 
  CalendarCheck,
  Check,
  Building2,
  Clock,
  HelpCircle
} from "lucide-react";

// 6 Core Services data tailored for simple, professional, user-friendly readability
const SERVICES = [
  {
    id: "expert-counselling",
    number: "01",
    title: "Expert Counselling",
    category: "Academic Strategy",
    badge: "100% Free Consultation",
    icon: Compass,
    summary: "Personalized one-on-one mentoring to evaluate your academic profile, understand your career goals, and recommend the best global study pathways.",
    deliverable: "Personalized Study Abroad Roadmap & Budget Plan",
    features: [
      "In-depth 360° academic & career profile assessment",
      "Unbiased country feasibility (UK, Australia, Canada, Europe, USA)",
      "Realistic budgeting for tuition, living costs & financial planning",
      "Identification of early scholarship opportunities"
    ]
  },
  {
    id: "university-selection",
    number: "02",
    title: "University & Course Selection",
    category: "Admissions Support",
    badge: "300+ Partner Universities",
    icon: GraduationCap,
    summary: "Data-driven matching with internationally recognized universities and accredited degree programs tailored to your GPA, budget, and ambitions.",
    deliverable: "Curated 6-University Shortlist & Direct Application Dossier",
    features: [
      "Balanced 3-tier shortlist (Dream, Target, and Guaranteed Safety)",
      "Direct university liaison for fast-tracked conditional offers",
      "SOP (Statement of Purpose) and academic reference refinement",
      "Proactive targeting of department scholarships and fee waivers"
    ]
  },
  {
    id: "visa-assistance",
    number: "03",
    title: "Visa Assistance & Compliance",
    category: "Immigration Guidance",
    badge: "99.2% Visa Approval Rate",
    icon: FileCheck,
    summary: "End-to-end guidance through the student visa application process, ensuring airtight documentation and total interview readiness.",
    deliverable: "Certified Visa File & One-on-One Mock Interview Prep",
    features: [
      "Multi-stage document verification meeting strict immigration rules",
      "Genuine Student (GS / GTE) statement drafting & coaching",
      "Financial solvency and bank statement compliance audits",
      "Realistic simulated embassy mock interviews with expert feedback"
    ]
  },
  {
    id: "travel-support",
    number: "04",
    title: "Travel & Flight Support",
    category: "Logistics Coordination",
    badge: "Student Baggage Perks",
    icon: Plane,
    summary: "Stress-free travel planning with student airline discounts, excess baggage allowances, and seamless airport reception.",
    deliverable: "Discounted Flight Itinerary & Airport Transfer Voucher",
    features: [
      "Exclusive student flight fares via authorized travel partners",
      "Up to 40kg to 45kg student luggage concessions on major airlines",
      "Transit visa and layover advisory for hassle-free connections",
      "Pre-arranged university airport shuttle or private transport"
    ]
  },
  {
    id: "accommodation",
    number: "05",
    title: "Accommodation Guidance",
    category: "Housing & Living",
    badge: "100% Verified Housing",
    icon: Home,
    summary: "Help securing safe, comfortable, and affordable student housing near your university campus before you board your flight.",
    deliverable: "Confirmed Tenancy Agreement & Neighborhood Guide",
    features: [
      "Priority bookings for university halls and accredited student residences (PBSA)",
      "All-inclusive utility contracts (water, electricity, heating & Wi-Fi included)",
      "Prime locations within walking distance or direct transit to class",
      "Transparent lease agreements checked for fair student terms"
    ]
  },
  {
    id: "pre-departure",
    number: "06",
    title: "Pre-Departure & Briefing",
    category: "Orientation & Settlement",
    badge: "Complete Onboarding Kit",
    icon: ShieldCheck,
    summary: "A comprehensive briefing session for students and parents covering foreign banking, health insurance, campus life, and cultural adaptation.",
    deliverable: "Pre-Departure Handbook, International SIM & Senior Peer Contact",
    features: [
      "Overseas bank account opening & zero-fee multi-currency Forex cards",
      "Mandatory student health insurance (NHS/IHS, OSHC) setup",
      "Clear guidance on legal part-time working hours and student CV tips",
      "Direct introduction to senior AST students already on your campus"
    ]
  }
];

// Simple 4-Step Process
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Free Profile Audit",
    desc: "We analyze your academic background, career goals, and budget to design your custom roadmap."
  },
  {
    step: "02",
    title: "University Offers",
    desc: "We shortlist ideal universities, polish your documents, and secure your admission letters."
  },
  {
    step: "03",
    title: "Visa Lodgement",
    desc: "We audit your financial documents, refine your SOP, and prepare you for embassy interviews."
  },
  {
    step: "04",
    title: "Housing & Departure",
    desc: "We lock in your campus housing, book discounted student flights, and prepare your arrival."
  }
];

// Simple, clear FAQs
const FAQS = [
  {
    q: "Is the initial consultation session really 100% free?",
    a: "Yes. Our initial profile evaluation and advisory session is completely free with no obligation. We review your transcripts, budget, and goals to provide honest, realistic guidance on your study options."
  },
  {
    q: "When should I begin my study abroad application?",
    a: "Ideally 8 to 12 months before your planned intake. This allows comfortable time for English tests (IELTS/PTE), university applications, scholarship deadlines, and stress-free visa processing."
  },
  {
    q: "What makes AST's visa success rate so high (99.2%)?",
    a: "We do not use generic templates. Every application undergoes a strict multi-tier audit to ensure financial proofs meet embassy rules, Statements of Purpose satisfy genuine student criteria, and students are prepared with realistic mock interviews."
  },
  {
    q: "Can you help me get a scholarship?",
    a: "Yes. We actively check all active merit, departmental, and international student scholarships at partner universities to help reduce your tuition costs."
  },
  {
    q: "Do you help after my visa is granted?",
    a: "Yes, our support continues until you are settled. We assist with flight bookings, extra luggage allowances, student accommodation, foreign bank accounts, and connecting you with senior students on campus."
  }
];

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Smooth scroll spy tracking active service
  useEffect(() => {
    const handleScroll = () => {
      const trigger = 250;
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
    <div className="bg-[#F8FAFC] text-slate-800">
      
      {/* ========================================================================= */}
      {/* 1. CLEAN & PROFESSIONAL HERO                                              */}
      {/* ========================================================================= */}
      <section className="bg-[#062B68] text-white pt-32 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        {/* Soft background accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,78,162,0.5),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#F4A51C] text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Overseas Education Guidance</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 font-serif max-w-4xl mx-auto">
            Our Services
          </h1>

          {/* Clean Subtitle */}
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8">
            From your very first counselling session to your first day on campus, AST provides personalized, step-by-step guidance to make studying abroad simple and stress-free.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
            <Link
              href="#consultation"
              className="inline-flex items-center gap-2 bg-[#F4A51C] hover:bg-[#E08A0A] text-[#062B68] font-bold px-7 py-3.5 rounded-xl transition-all shadow-md text-sm sm:text-base"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              type="button"
              onClick={() => scrollToSection("expert-counselling")}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-6 py-3.5 rounded-xl border border-white/20 transition-all text-sm sm:text-base"
            >
              <span>View All 6 Services</span>
              <ChevronDown className="w-4 h-4 text-slate-300" />
            </button>
          </div>

          {/* Trust Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 border-t border-white/10">
            <div className="p-3 text-center">
              <div className="text-2xl font-bold text-[#F4A51C] font-mono">99.2%</div>
              <div className="text-xs text-slate-300 mt-0.5">Visa Approval Rate</div>
            </div>
            <div className="p-3 text-center">
              <div className="text-2xl font-bold text-white font-mono">300+</div>
              <div className="text-xs text-slate-300 mt-0.5">Partner Universities</div>
            </div>
            <div className="p-3 text-center">
              <div className="text-2xl font-bold text-[#F4A51C] font-mono">1,500+</div>
              <div className="text-xs text-slate-300 mt-0.5">Students Guided</div>
            </div>
            <div className="p-3 text-center">
              <div className="text-2xl font-bold text-white font-mono">100%</div>
              <div className="text-xs text-slate-300 mt-0.5">Free Initial Session</div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* MOBILE STICKY NAV BAR (< lg)                                              */}
      {/* ========================================================================= */}
      <div className="lg:hidden sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
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
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN LAYOUT: SIDE NAVIGATION + SERVICES CONTENT                        */}
      {/* ========================================================================= */}
      <div className="py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-10 items-start">
            
            {/* =================================================================== */}
            {/* DESKTOP SIDE NAVIGATION (Clean, Professional, Easy to Read)         */}
            {/* =================================================================== */}
            <aside className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-28 self-start z-30">
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Services Navigation
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#062B68] bg-slate-100 px-2 py-0.5 rounded-md">
                    6 Pillars
                  </span>
                </div>

                {/* Service List */}
                <nav className="space-y-1">
                  {SERVICES.map((s) => {
                    const isActive = activeTab === s.id;
                    const Icon = s.icon;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => scrollToSection(s.id)}
                        className={`w-full text-left p-3 rounded-xl transition-all duration-150 flex items-center justify-between group ${
                          isActive
                            ? "bg-[#062B68] text-white font-medium shadow-xs"
                            : "text-slate-600 hover:text-[#062B68] hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold ${
                              isActive
                                ? "bg-[#F4A51C] text-[#062B68]"
                                : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                            }`}
                          >
                            {s.number}
                          </span>
                          <span className="text-sm truncate">
                            {s.title}
                          </span>
                        </div>

                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isActive
                              ? "text-[#F4A51C]"
                              : "text-slate-300 opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </button>
                    );
                  })}
                </nav>

                {/* Free Consultation Prompt */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 text-center">
                    <p className="text-xs text-slate-600 font-medium mb-2.5">
                      Need help choosing the right program?
                    </p>
                    <Link
                      href="#consultation"
                      className="inline-flex items-center justify-center gap-1.5 w-full bg-[#062B68] hover:bg-[#0B4EA2] text-white text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors"
                    >
                      <CalendarCheck className="w-3.5 h-3.5 text-[#F4A51C]" />
                      <span>Book Free 1-on-1 Call</span>
                    </Link>
                  </div>
                </div>

              </div>
            </aside>

            {/* =================================================================== */}
            {/* RIGHT COLUMN: 6 CLEAN SERVICE CARDS                                 */}
            {/* =================================================================== */}
            <main className="flex-1 min-w-0 space-y-8 sm:space-y-10">
              {SERVICES.map((service) => {
                const Icon = service.icon;

                return (
                  <section
                    key={service.id}
                    id={service.id}
                    className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-slate-300 transition-colors"
                  >
                    {/* Top Bar: Icon, Step Number, Category & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-5 border-b border-slate-100">
                      
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#062B68] flex items-center justify-center shrink-0 border border-blue-100">
                          <Icon className="w-6 h-6 text-[#062B68]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-[#F4A51C]">
                              STEP {service.number}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                              {service.category}
                            </span>
                          </div>
                          <h2 className="text-xl sm:text-2xl font-bold text-[#062B68] mt-0.5">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50/70 border border-blue-100 text-xs font-semibold text-[#0B4EA2]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#F4A51C]" />
                        <span>{service.badge}</span>
                      </span>

                    </div>

                    {/* Summary Description */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {service.summary}
                    </p>

                    {/* What's Included (Clean Bullet Grid) */}
                    <div className="mb-6">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        What’s Included:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2.5 bg-slate-50/80 p-3 rounded-xl border border-slate-100"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#062B68] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Outcome / Deliverable Banner */}
                    <div className="bg-[#FAFBFD] p-3.5 rounded-xl border border-slate-200/80 flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 mb-6">
                      <Sparkles className="w-4 h-4 text-[#F4A51C] shrink-0" />
                      <div>
                        <span className="font-bold text-[#062B68]">Key Deliverable: </span>
                        <span>{service.deliverable}</span>
                      </div>
                    </div>

                    {/* Action Row */}
                    <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100">
                      <Link
                        href="#consultation"
                        className="inline-flex items-center gap-2 bg-[#062B68] hover:bg-[#0B4EA2] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-xs"
                      >
                        <span>Book This Service</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#F4A51C]" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#062B68] text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
                        <span>Have a Question?</span>
                      </Link>
                    </div>

                  </section>
                );
              })}
            </main>

          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. SIMPLE 4-STEP TIMELINE                                                 */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F4A51C] mb-2 block">
              Clear & Transparent Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#062B68]">
              How Your Journey Works
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              A straightforward 4-stage process designed to guide you from initial planning to campus arrival.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_STEPS.map((p, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-5 rounded-2xl border border-slate-100 relative"
              >
                <div className="w-8 h-8 rounded-lg bg-[#062B68] text-white flex items-center justify-center font-mono font-bold text-xs mb-3">
                  {p.step}
                </div>
                <h3 className="font-bold text-sm text-[#062B68] mb-1.5">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SIMPLE FAQS ACCORDION                                                  */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#062B68]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Common questions about our services, process, and free consultations.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#062B68] hover:text-[#0B4EA2] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#062B68]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PROFESSIONAL CLOSING CTA                                               */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#062B68] text-white text-center">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 font-serif">
            Ready to Take the Next Step?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Speak with one of our certified overseas education advisors today. We'll help you explore courses, universities, and visa pathways at zero cost.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="#consultation"
              className="inline-flex items-center gap-2 bg-[#F4A51C] hover:bg-[#E08A0A] text-[#062B68] font-bold px-7 py-3.5 rounded-xl transition-colors shadow-md text-sm sm:text-base"
            >
              <span>Schedule Free Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-6 py-3.5 rounded-xl border border-white/20 transition-colors text-sm sm:text-base"
            >
              <span>Explore Study Destinations</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#F4A51C]" />
              100% Free Initial Assessment
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#F4A51C]" />
              Dedicated 1-on-1 Advisor
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#F4A51C]" />
              No Hidden Charges
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}
