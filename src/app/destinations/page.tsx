"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, Calendar, Clock, DollarSign, Award, ChevronRight, Compass } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";
import CountryFlag from "@/components/ui/country-flag";

export default function DestinationsPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-slate-50/50 min-h-screen">
      {/* ========================================================================= */}
      {/* 1. HERO / OVERVIEW SECTION — EXACT MATCH TO REFERENCE DESIGN              */}
      {/* ========================================================================= */}
      <section className="relative pt-10 sm:pt-14 md:pt-16 pb-16 sm:pb-20 overflow-hidden bg-white border-b border-slate-100">
        {/* Decorative Dotted Flight Trail with Blue Airplane */}
        <svg
          className="absolute top-4 sm:top-8 right-3 sm:right-10 md:right-16 w-60 sm:w-80 md:w-96 pointer-events-none select-none z-0"
          viewBox="0 0 340 120"
          fill="none"
        >
          <path
            d="M 10 110 C 130 105, 220 70, 310 25"
            stroke="#3b82f6"
            strokeWidth="1.75"
            strokeDasharray="5 5"
            opacity="0.55"
          />
          <g transform="translate(310, 25) rotate(-28)">
            <path d="M 0 -8 L 5 6 L 0 3.5 L -5 6 Z" fill="#2563eb" />
          </g>
        </svg>

        {/* Static Subtle Travel Compass in Corner */}
        <div className="absolute top-24 left-6 w-20 sm:w-28 pointer-events-none select-none z-0 opacity-15 rotate-12 hidden lg:block">
          <img src="/images/travel-compass.png" alt="" className="w-full h-auto" />
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#062B68] tracking-tight mb-4">
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
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-[16px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Choose from world-class education destinations and discover opportunities around the globe.
            </p>
          </div>

          {/* 6 Country Cards Grid (Exact reference matching with landmark art) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {DESTINATIONS.map((dest) => (
              <div
                key={dest.id}
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
                <a
                  href={`#${dest.id}`}
                  className="relative z-10 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2563EB] group-hover:text-[#1D4ED8] transition-colors mt-auto w-fit"
                >
                  <span>Explore {dest.name}</span>
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-200 shadow-2xs">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STICKY QUICK NAVIGATION BAR WITH COUNTRY FLAGS                         */}
      {/* ========================================================================= */}
      <nav className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3 hidden md:block">
        <div className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7 flex items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-blue-600" />
            Quick Jump:
          </span>
          <div className="flex items-center gap-2 lg:gap-3 overflow-x-auto no-scrollbar py-1">
            {DESTINATIONS.map((dest) => (
              <a
                key={dest.id}
                href={`#${dest.id}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 border border-slate-200 hover:border-blue-200 transition-all shrink-0"
              >
                <div className="w-4 h-4 rounded-full overflow-hidden shrink-0 shadow-xs">
                  <CountryFlag code={dest.code || dest.name} />
                </div>
                <span>{dest.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 3. DETAILED COUNTRY PROFILES                                              */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7 space-y-20 sm:space-y-28">
          {DESTINATIONS.map((dest, index) => (
            <div
              key={dest.id}
              id={dest.id}
              className="scroll-mt-32 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-[0_8px_30px_rgba(0,18,60,0.05)]"
            >
              <div
                className={`flex flex-col lg:flex-row gap-8 lg:gap-14 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Media Column */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Official Library Flag Badge */}
                    <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2.5 shadow-lg border border-white/80">
                      <div className="w-6 h-6 rounded-full overflow-hidden shadow-xs flex items-center justify-center bg-slate-100">
                        <CountryFlag code={dest.code || dest.name} />
                      </div>
                      {dest.code && (
                        <span className="text-xs font-bold text-slate-500 tracking-wider">
                          {dest.code}
                        </span>
                      )}
                      <span className="font-bold text-[#062B68] text-sm sm:text-base">
                        {dest.name}
                      </span>
                    </div>

                    {/* Highlights tags inside image */}
                    {dest.highlights && (
                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                        {dest.highlights.slice(0, 2).map((hl, i) => (
                          <span
                            key={i}
                            className="bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full border border-white/20"
                          >
                            ✓ {hl}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Country Details Column */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">
                      Study Destination Profile
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#062B68] mb-4">
                    Study in {dest.name}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {dest.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {/* Popular Courses */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h3 className="font-bold text-[#062B68] text-xs sm:text-sm uppercase tracking-wide mb-3 flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-blue-600" />
                        Popular Fields
                      </h3>
                      <ul className="space-y-1.5">
                        {dest.popularCourses.map((course, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-xs sm:text-sm text-slate-700"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Study Levels */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h3 className="font-bold text-[#062B68] text-xs sm:text-sm uppercase tracking-wide mb-3 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-blue-600" />
                        Degree Levels
                      </h3>
                      <ul className="space-y-1.5">
                        {dest.studyLevels.map((level, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-xs sm:text-sm text-slate-700"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                            <span>{level}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Fast Facts Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-blue-50/60 border border-blue-100/70 mb-6 text-xs">
                    {dest.intakes && (
                      <div>
                        <span className="text-slate-500 block font-medium flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-blue-600" /> Intakes:
                        </span>
                        <span className="font-bold text-[#062B68]">{dest.intakes}</span>
                      </div>
                    )}
                    {dest.avgTuition && (
                      <div>
                        <span className="text-slate-500 block font-medium flex items-center gap-1">
                          <DollarSign className="w-3 h-3 text-blue-600" /> Avg Tuition:
                        </span>
                        <span className="font-bold text-[#062B68]">{dest.avgTuition}</span>
                      </div>
                    )}
                    {dest.workRights && (
                      <div className="col-span-2 sm:col-span-1">
                        <span className="text-slate-500 block font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3 text-blue-600" /> Work Rights:
                        </span>
                        <span className="font-bold text-[#062B68] line-clamp-1" title={dest.workRights}>
                          {dest.workRights}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CTA Actions */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/#contact-form"
                      className="inline-flex items-center gap-2 bg-[#062B68] hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md group"
                    >
                      <span>Apply for {dest.name}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/#consultation"
                      className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-600 text-xs sm:text-sm font-semibold px-4 py-3 rounded-xl hover:bg-slate-100 transition-colors"
                    >
                      <span>Talk with Country Specialist</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. READY TO EXPLORE BANNER                                                */}
      {/* ========================================================================= */}
      <section className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7 mt-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#062B68] to-[#1e40af] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Static Plane Trail Decorative Background */}
          <div className="absolute top-0 right-0 w-80 pointer-events-none select-none opacity-20">
            <img src="/images/plane-trail-3.png" alt="" className="w-full h-auto" />
          </div>

          <div className="relative z-10 max-w-xl">
            <span className="text-amber-400 font-bold tracking-wider text-xs uppercase mb-2 block">
              Start Your Journey Today
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Unsure which country matches your profile?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Book a free 1-on-1 counseling session with our certified education experts. We evaluate your academic background, career goals, and budget to find your ideal destination.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href="/#contact-form"
              className="inline-flex items-center gap-2.5 bg-white text-[#062B68] hover:bg-blue-50 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
