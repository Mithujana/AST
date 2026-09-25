"use client";

import { motion } from "framer-motion";
import { Globe2, Building2, Users, Clock } from "lucide-react";

const STATS = [
  {
    id: 1,
    value: "10+",
    label: "Study Destinations",
    icon: Globe2,
  },
  {
    id: 2,
    value: "100+",
    label: "University Options",
    icon: Building2,
  },
  {
    id: 3,
    value: "500+",
    label: "Students Guided",
    icon: Users,
  },
  {
    id: 4,
    value: "24/7",
    label: "Student Support",
    icon: Clock,
  }
];

export default function StatsSection() {
  return (
    <section className="relative z-20 -mt-12 mb-16 max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center text-center ${index !== 0 ? 'pl-8' : ''}`}
            >
              <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-bright-gold" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-1">{stat.value}</h3>
              <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
