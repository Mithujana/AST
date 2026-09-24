"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PlaneTakeoff } from "lucide-react";
import GooeyNav from "./ui/GooeyNav";
import SpecularButton from "./ui/SpecularButton";

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
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center">
            <PlaneTakeoff className="w-6 h-6 text-bright-gold group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-2xl font-bold text-navy tracking-tight">AST</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <GooeyNav
            items={NAV_LINKS.map(link => ({ label: link.name, href: link.href }))}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={NAV_LINKS.findIndex(link => pathname === link.href) >= 0 ? NAV_LINKS.findIndex(link => pathname === link.href) : 0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/* CTA Button Desktop */}
        <div className="hidden lg:block">
          <SpecularButton
            size="sm"
            radius={12}
            tint="#1a365d"
            tintOpacity={1}
            blur={0}
            textColor="#ffffff"
            lineColor="#ffffff"
            baseColor="#0f172a"
            intensity={1.2}
            shineSize={15}
            onClick={() => router.push('#consultation')}
          >
            Book Free Consultation
          </SpecularButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 space-y-4 shadow-xl">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-light-blue text-royal-blue"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="px-4 pt-4">
                <Link href="#consultation" onClick={() => setMobileMenuOpen(false)} className="block text-center w-full bg-navy hover:bg-royal-blue text-white px-6 py-3.5 rounded-xl font-semibold transition-colors shadow-sm">
                  Book Free Consultation
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
