"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      {/* 3D Floating Travel Compass */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -8, 0],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-6 right-6 sm:right-16 md:right-28 w-28 sm:w-36 md:w-44 pointer-events-none select-none z-0 hidden sm:block drop-shadow-2xl"
      >
        <img
          src="/images/travel-compass.png"
          alt="Travel Navigation Compass"
          className="w-full h-auto drop-shadow-xl opacity-90"
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
            Success Stories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Hear from students who have successfully transformed their lives with our guidance.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors focus:outline-none"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative">
            <Quote className="absolute top-8 right-12 w-24 h-24 text-gray-50 opacity-50" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10"
              >
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <img 
                      src={TESTIMONIALS[currentIndex].image} 
                      alt={TESTIMONIALS[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-grow text-center md:text-left">
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-6">
                    <span className="px-3 py-1 bg-light-blue text-royal-blue text-xs font-bold uppercase rounded-full tracking-wider">
                      {TESTIMONIALS[currentIndex].destination}
                    </span>
                  </div>
                  
                  <p className="text-xl md:text-2xl text-navy font-medium italic mb-8 leading-relaxed">
                    "{TESTIMONIALS[currentIndex].quote}"
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-bold text-navy">{TESTIMONIALS[currentIndex].name}</h4>
                    <p className="text-gray-500">{TESTIMONIALS[currentIndex].university}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-bright-gold w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
