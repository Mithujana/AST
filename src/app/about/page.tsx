import { Metadata } from "next";
import Link from "next/link";
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
  Plane 
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | AST Abroad Study & Travel",
  description: "Learn more about AST Abroad Study and Travel, your trusted partner for overseas education. Discover our mission, vision, and core values.",
};

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

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-800">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: WESTMINSTER LANDMARK & AIRPLANE TRAIL                    */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#062B68] overflow-hidden">
        
        {/* Background Image: Westminster / Big Ben Landmark fading into Navy Blue */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop"
            alt="London Westminster landmark"
            className="w-full h-full object-cover object-right opacity-45 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062B68] via-[#062B68]/90 to-[#062B68]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062B68] via-transparent to-transparent" />
        </div>

        {/* Airplane with dashed flight trail in sky */}
        <div className="absolute top-16 right-[35%] md:right-[38%] pointer-events-none opacity-60 hidden sm:block z-10">
          <svg width="180" height="90" viewBox="0 0 180 90" fill="none">
            <path
              d="M10 80 Q 90 20 160 30"
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
              opacity="0.6"
            />
          </svg>
          <Plane className="w-5 h-5 text-white/90 absolute right-2 top-5 rotate-45" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            
            {/* Eyebrow with gold dash */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-[2px] w-8 bg-[#F4A51C]" />
              <span className="text-[#F4A51C] font-semibold text-xs sm:text-sm tracking-wider uppercase">
                GLOBAL EDUCATION • BRIGHTER TOMORROWS
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.16] mb-5 font-serif">
              Your Trusted Partner for{" "}
              <span className="text-[#F4A51C]">
                Overseas Education
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal mb-8 max-w-xl">
              Helping students achieve their dreams through global education opportunities with expert guidance and personalized support.
            </p>

            {/* White pill CTA button with navy arrow */}
            <Link
              href="#consultation"
              className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-[#062B68] font-bold pl-6 pr-2.5 py-2.5 rounded-full shadow-lg transition-all text-sm group"
            >
              <span>Talk to an Expert</span>
              <span className="w-8 h-8 rounded-full bg-[#062B68] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHO WE ARE: EMPOWERING STUDENTS WORLDWIDE                              */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6">
              
              <div className="flex items-center gap-2.5 mb-4">
                <div className="h-[2px] w-8 bg-[#F4A51C]" />
                <span className="text-[#F4A51C] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  WHO WE ARE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#062B68] tracking-tight leading-[1.2] mb-6 font-serif">
                Empowering Students<br />Worldwide
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                AST (Abroad Study and Travel) is a premier overseas education consultancy dedicated to guiding students through their international education journey. With years of experience and a vast network of partner universities globally, we simplify the complex process of studying abroad.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                From the initial counselling session to the moment you step onto your new campus, our expert team provides comprehensive support in university selection, application processing, visa assistance, and pre-departure planning.
              </p>

              <Link
                href="#consultation"
                className="inline-flex items-center gap-2.5 bg-[#062B68] hover:bg-[#0B4EA2] text-white font-medium px-7 py-3.5 rounded-full shadow-md transition-all text-sm group"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

            </div>

            {/* Right Photo Column with Decorative Shape & Dots */}
            <div className="lg:col-span-6 relative">
              <div className="relative max-w-lg mx-auto lg:max-w-none">
                
                {/* Decorative soft light-blue background shape */}
                <div className="absolute -top-4 -right-4 w-[85%] h-[85%] bg-[#EBF3FC] rounded-[36px] -z-10" />

                {/* Yellow/Gold Dot Grid (top right) */}
                <div className="absolute -top-6 -right-6 grid grid-cols-6 gap-2 pointer-events-none z-0">
                  {[...Array(18)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#F4A51C]" />
                  ))}
                </div>

                {/* Main Student Group Photo */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-slate-100 z-10 border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2064&auto=format&fit=crop"
                    alt="AST Students group smiling together"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Badge: A Brighter Future Together */}
                <div className="absolute -bottom-5 right-4 sm:right-8 bg-white rounded-2xl p-4 sm:p-4.5 shadow-xl border border-slate-100 flex items-center gap-3.5 z-20">
                  <div className="w-11 h-11 rounded-full bg-[#062B68] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#062B68] leading-tight">
                      A Brighter<br />Future Together
                    </div>
                    <div className="h-[2px] w-6 bg-[#F4A51C] mt-1.5" />
                  </div>
                </div>

              </div>
            </div>

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
            <div className="bg-white p-8 sm:p-9 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0B4EA2] flex items-center justify-center mb-6 border border-blue-100/60">
                <Target className="w-6 h-6 text-[#0B4EA2]" />
              </div>
              <h3 className="text-xl font-bold text-[#062B68] mb-3">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To provide honest, transparent, and expert guidance to students, enabling them to make informed decisions about their global education and career pathways.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white p-8 sm:p-9 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0B4EA2] flex items-center justify-center mb-6 border border-blue-100/60">
                <Eye className="w-6 h-6 text-[#0B4EA2]" />
              </div>
              <h3 className="text-xl font-bold text-[#062B68] mb-3">
                Our Vision
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be the most trusted and preferred overseas education consultancy, recognized for our commitment to student success and excellence in service.
              </p>
            </div>

            {/* Our Values */}
            <div className="bg-white p-8 sm:p-9 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0B4EA2] flex items-center justify-center mb-6 border border-blue-100/60">
                <Heart className="w-6 h-6 text-[#0B4EA2]" />
              </div>
              <h3 className="text-xl font-bold text-[#062B68] mb-3">
                Our Values
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Integrity, transparency, student-centricity, and excellence form the core of everything we do. We put our students&apos; best interests first.
              </p>
            </div>

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
            <div 
              className="absolute inset-0 bg-[url('/images/dotted-world-map.svg')] bg-center bg-no-repeat bg-contain opacity-25 pointer-events-none" 
            />

            {/* Centered Heading */}
            <div className="relative z-10 text-center max-w-2xl mx-auto mb-12">
              <div className="h-1 w-10 bg-[#F4A51C] rounded-full mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#062B68] mb-3 font-serif">
                Why Students Trust Us
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We take pride in our high success rates and the positive impact we&apos;ve had on countless student lives.
              </p>
            </div>

            {/* 8 Feature Cards Grid (4 columns on lg, 2 columns on sm) */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TRUST_FEATURES.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-4 sm:p-4.5 border border-slate-100 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0B4EA2] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#0B4EA2]" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-[#062B68] leading-snug">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
