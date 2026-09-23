"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Listen to hash changes to open/close modal
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#consultation") {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const closeModal = () => {
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
    setIsOpen(false);
    setTimeout(() => setIsSubmitted(false), 300); // Reset after close animation
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
              <h2 id="modal-title" className="text-2xl font-bold text-navy">
                Book Free Consultation
              </h2>
              <button
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-gray-200 text-gray-500 hover:text-navy transition-colors focus:outline-none focus:ring-2 focus:ring-navy"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Thank You!</h3>
                  <p className="text-gray-600 max-w-md">
                    Our education counsellor will contact you shortly to confirm your consultation time.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-8 px-6 py-3 bg-navy text-white rounded-xl font-medium hover:bg-royal-blue transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                      <input required type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                      <input required type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                      <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all" placeholder="+1 234 567 8900" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="country" className="text-sm font-medium text-gray-700">Preferred Country</label>
                      <select required id="country" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all bg-white">
                        <option value="">Select a country</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                        <option value="Europe">Europe</option>
                        <option value="Japan">Japan</option>
                        <option value="Asia">Asia</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="level" className="text-sm font-medium text-gray-700">Study Level</label>
                      <select required id="level" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all bg-white">
                        <option value="">Select a level</option>
                        <option value="Undergraduate">Undergraduate (Bachelors)</option>
                        <option value="Postgraduate">Postgraduate (Masters)</option>
                        <option value="PhD">PhD / Doctorate</option>
                        <option value="Diploma">Diploma / Foundation</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="course" className="text-sm font-medium text-gray-700">Preferred Course (Optional)</label>
                      <input type="text" id="course" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all" placeholder="e.g. Business Administration" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-sm font-medium text-gray-700">Preferred Date</label>
                      <input required type="date" id="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="time" className="text-sm font-medium text-gray-700">Preferred Time</label>
                      <input required type="time" id="time" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Additional Message (Optional)</label>
                    <textarea id="message" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all resize-none" placeholder="Tell us more about your requirements..."></textarea>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <button type="submit" className="w-full bg-navy hover:bg-royal-blue text-white py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-navy/20 flex items-center justify-center gap-2 text-lg">
                      Book My Free Consultation
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
