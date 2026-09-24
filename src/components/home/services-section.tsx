"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-light-blue relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/40 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Floating S-Curve Flight Trail */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.75, x: 0 }}
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
        className="absolute top-12 left-4 md:left-12 w-64 md:w-80 pointer-events-none select-none z-0"
      >
        <img
          src="/images/plane-trail-4.png"
          alt="Flight Wave Trail"
          className="w-full h-auto opacity-75"
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
            We Make It Easy For You
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Our comprehensive services cover every step of your international education journey, ensuring a seamless experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-bright-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center group-hover:bg-navy transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-royal-blue group-hover:text-bright-gold transition-colors duration-300" />
                </div>
                <span className="text-4xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                  {service.number}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-royal-blue transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <Link 
                href={`/services#${service.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-bright-gold transition-colors mt-auto group/btn"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
