"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";

export default function DestinationsSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative Plane Trail with Map Pin */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 0.8, x: 0 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -8, 0],
          x: [0, 4, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-6 right-4 sm:right-16 md:right-28 w-60 sm:w-72 md:w-80 pointer-events-none select-none z-0"
      >
        <img
          src="/images/plane-trail-3.png"
          alt="Flight Destination Trail"
          className="w-full h-auto drop-shadow-sm opacity-80"
        />
      </motion.div>

      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-navy mb-4"
          >
            Explore Your Study Destinations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Choose from world-class education destinations and discover opportunities around the globe.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-bright-gold/50 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={dest.image} 
                  alt={`${dest.name} campus`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg z-20 flex items-center gap-2 shadow-sm">
                  <span className="text-xl">{dest.flag}</span>
                  <span className="font-semibold text-navy">{dest.name}</span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {dest.description}
                </p>
                <Link 
                  href={`/destinations#${dest.id}`}
                  className="inline-flex items-center gap-2 text-royal-blue font-semibold hover:text-bright-gold transition-colors mt-auto group/btn"
                >
                  Explore {dest.name}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
