"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UNIVERSITIES } from "@/data/universities";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function FeaturedUniversities() {
  const [activeFilter, setActiveFilter] = useState("All");

  const countries = ["All", ...Array.from(new Set(UNIVERSITIES.map(u => u.country)))];

  const filteredUniversities = activeFilter === "All" 
    ? UNIVERSITIES 
    : UNIVERSITIES.filter(u => u.country === activeFilter);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-navy mb-4"
            >
              Find Your Perfect University
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 max-w-2xl text-lg"
            >
              Discover world-class institutions and programs tailored to your academic journey.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {countries.map(country => (
              <button
                key={country}
                onClick={() => setActiveFilter(country)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === country 
                    ? "bg-navy text-white" 
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {country}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredUniversities.map((uni) => (
              <motion.div
                key={uni.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={uni.image} 
                    alt={uni.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-navy shadow-sm">
                    {uni.level}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-1 text-gray-500 mb-2 text-sm font-medium">
                    <MapPin className="w-4 h-4" />
                    {uni.country}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">{uni.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {uni.popularAreas.map(area => (
                      <span key={area} className="px-3 py-1 bg-light-blue text-royal-blue text-xs rounded-md font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link href={`/universities#${uni.id}`} className="block text-center w-full py-2.5 bg-gray-50 hover:bg-navy hover:text-white rounded-xl text-navy font-semibold transition-colors">
                      View University
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
