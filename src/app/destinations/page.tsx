import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Study Destinations | AST Abroad Study & Travel",
  description: "Explore top study destinations including the UK, Australia, Canada, Europe, Japan, and Asia. Find the perfect country for your international education.",
};

export default function DestinationsPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      {/* Page Header */}
      <section className="bg-navy py-20 relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2130&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Study Destinations</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose from world-class education destinations and discover opportunities around the globe.
          </p>
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 space-y-24">
        {DESTINATIONS.map((dest, index) => (
          <div key={dest.id} id={dest.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} scroll-mt-32`}>
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center gap-3 shadow-lg">
                  <span className="text-3xl">{dest.flag}</span>
                  <span className="font-bold text-navy text-lg">{dest.name}</span>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Study in {dest.name}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {dest.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-navy mb-4 text-lg border-b border-gray-200 pb-2">Popular Courses</h3>
                  <ul className="space-y-3">
                    {dest.popularCourses.map((course, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-bright-gold" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-4 text-lg border-b border-gray-200 pb-2">Study Levels</h3>
                  <ul className="space-y-3">
                    {dest.studyLevels.map((level, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-royal-blue" />
                        {level}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Link 
                href="#consultation"
                className="inline-flex items-center gap-2 bg-navy hover:bg-royal-blue text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg group"
              >
                Talk to an Expert
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
