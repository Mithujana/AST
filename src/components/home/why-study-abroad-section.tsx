"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe, Briefcase, TrendingUp } from "lucide-react";

const BENEFITS = [
  {
    title: "World-Class Education",
    description: "Access top-ranked universities, modern facilities, and leading academic programs tailored to your goals.",
    icon: GraduationCap
  },
  {
    title: "Global Exposure",
    description: "Experience diverse cultures, build a worldwide network, and gain an international perspective.",
    icon: Globe
  },
  {
    title: "International Career Opportunities",
    description: "Enhance your employability with degrees recognized by employers globally and post-study work options.",
    icon: Briefcase
  },
  {
    title: "Personal & Professional Growth",
    description: "Develop independence, adaptability, and cross-cultural communication skills.",
    icon: TrendingUp
  }
];

export default function WhyStudyAbroadSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-navy/10 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1525921472402-364b4510b507?q=80&w=2070&auto=format&fit=crop" 
                alt="Students walking on campus" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-bright-gold" />
                </div>
                <div>
                  <p className="font-bold text-navy text-xl">100%</p>
                  <p className="text-sm text-gray-600 font-medium">Global Recognition</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                Build Your Future <span className="text-bright-gold">Beyond Borders</span>
              </h2>
              <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                Studying abroad is more than just earning a degree. It's a life-changing experience that shapes your future, broadens your horizons, and opens doors to limitless possibilities.
              </p>
            </motion.div>

            <div className="space-y-8">
              {BENEFITS.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-light-blue flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-royal-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
