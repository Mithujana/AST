"use client";

import { motion } from "framer-motion";

const STEPS = [
  { number: "01", title: "Free Consultation" },
  { number: "02", title: "Course & University Selection" },
  { number: "03", title: "Application Assistance" },
  { number: "04", title: "Offer & Admission" },
  { number: "05", title: "Visa Assistance" },
  { number: "06", title: "Pre-Departure Support" },
  { number: "07", title: "Begin Your Global Journey" },
];

export default function JourneyTimeline() {
  return (
    <section className="py-24 bg-navy text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
      
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Your Journey Starts Here
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            A clear, step-by-step roadmap to achieving your international education dreams.
          </motion.p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative mt-24 pb-12">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 w-full h-[2px] bg-white/20">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-0 left-0 h-full bg-bright-gold"
            />
          </div>

          <div className="grid grid-cols-7 gap-4 relative">
            {STEPS.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-navy border-4 border-bright-gold flex items-center justify-center text-xl font-bold text-bright-gold z-10 shadow-xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-sm font-semibold text-gray-200 px-2">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden mt-12 relative pl-8">
          {/* Connecting Line */}
          <div className="absolute top-0 left-[31px] w-[2px] h-full bg-white/20">
             <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-0 left-0 w-full bg-bright-gold"
            />
          </div>

          <div className="space-y-12 relative">
            {STEPS.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-6 relative"
              >
                <div className="w-14 h-14 rounded-full bg-navy border-4 border-bright-gold flex items-center justify-center text-lg font-bold text-bright-gold z-10 flex-shrink-0 shadow-lg absolute -left-[59px]">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-200 bg-white/5 border border-white/10 px-6 py-4 rounded-xl w-full">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
