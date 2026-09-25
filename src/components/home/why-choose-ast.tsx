"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const FEATURES = [
  "Personalized Student Guidance",
  "Trusted Education Consultancy",
  "Wide Range of Global Destinations",
  "University Selection Support",
  "Visa Assistance",
  "Travel & Accommodation Support",
  "Pre-Departure Guidance",
  "Student-Focused Service"
];

export default function WhyChooseAst() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-royal-blue/20 via-navy to-navy pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-bright-gold" />
              <span className="text-bright-gold font-medium tracking-wider text-sm uppercase">The AST Advantage</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Why Students Choose AST
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              {FEATURES.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-6 h-6 text-bright-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <p className="text-gray-300 italic">
                  "Our goal is not just to send students abroad, but to ensure they thrive in their chosen environment and build a foundation for a successful global career."
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center" />
                  <div>
                    <p className="text-white font-bold">James Peterson</p>
                    <p className="text-bright-gold text-sm">Lead Education Director</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-navy/20 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2049&auto=format&fit=crop" 
              alt="Students collaborating"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
