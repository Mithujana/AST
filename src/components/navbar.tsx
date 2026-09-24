"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Study Destinations", href: "/destinations" },
  { name: "Universities", href: "/universities" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      <div className="max-w-[1560px] mx-auto px-2 sm:px-4 lg:px-6">
        <div
          className={`pointer-events-auto bg-white rounded-b-2xl sm:rounded-b-[28px] border-b border-x border-slate-100/90 px-4 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "shadow-[0_16px_36px_rgba(0,18,60,0.15),0_2px_10px_rgba(0,0,0,0.04)]"
              : "shadow-[0_10px_30px_rgba(0,18,60,0.11),0_2px_8px_rgba(0,0,0,0.03)]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group py-0.5">
            <Image
              src="/ast-logo.png"
              alt="AST Abroad Study & Travel"
              width={160}
              height={45}
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-[14px] font-semibold text-[#062B68] hover:text-[#062B68] transition-colors py-1 group"
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#F4A51C] rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#F4A51C] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="#consultation"
              className="inline-flex items-center gap-1.5 bg-[#F4A51C] hover:bg-[#E09410] text-[#062B68] font-bold text-xs sm:text-[13px] px-4 sm:px-5 py-2.5 rounded-xl transition-all shadow-[0_4px_14px_rgba(244,165,28,0.35)] hover:shadow-[0_6px_18px_rgba(244,165,28,0.5)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#062B68] rounded-lg hover:bg-slate-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto lg:hidden mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
            >
              <nav className="flex flex-col px-4 py-5 space-y-2">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-[#FFF8EB] text-[#F4A51C]"
                          : "text-[#062B68] hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="pt-3 border-t border-gray-100">
                  <Link
                    href="#consultation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-[#F4A51C] hover:bg-[#E09410] text-[#062B68] px-5 py-3 rounded-xl font-bold text-sm shadow-md transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

