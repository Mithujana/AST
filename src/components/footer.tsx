import Link from "next/link";
import { PlaneTakeoff, Globe, Camera, Briefcase, MessageCircle } from "lucide-react"; // Placeholders for social media

const FOOTER_LINKS = {
  quick: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Study Destinations", href: "/destinations" },
    { name: "Services", href: "/services" },
    { name: "Universities", href: "/universities" },
    { name: "Contact", href: "/contact" },
  ],
  destinations: [
    { name: "United Kingdom", href: "/destinations#uk" },
    { name: "Australia", href: "/destinations#australia" },
    { name: "Canada", href: "/destinations#canada" },
    { name: "Europe", href: "/destinations#europe" },
    { name: "Japan", href: "/destinations#japan" },
    { name: "Asia", href: "/destinations#asia" },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300 pt-16 pb-8">
      <div className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Description */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group inline-flex">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <PlaneTakeoff className="w-6 h-6 text-bright-gold group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">AST</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Helping students achieve their dreams through global education opportunities with expert guidance and personalized support.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bright-gold hover:text-navy transition-colors text-white">
                <Globe className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bright-gold hover:text-navy transition-colors text-white">
                <Camera className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bright-gold hover:text-navy transition-colors text-white">
                <Briefcase className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bright-gold hover:text-navy transition-colors text-white">
                <MessageCircle className="w-5 h-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.quick.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-bright-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Study Destinations</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.destinations.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-bright-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="text-gray-400 mb-1">Phone</span>
                <a href="tel:+94760344695" className="text-white font-medium hover:text-bright-gold transition-colors">
                  +94 76 034 4695
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-400 mb-1">Email</span>
                <a href="mailto:info@astabroadstudy.com" className="text-white font-medium hover:text-bright-gold transition-colors">
                  info@astabroadstudy.com
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-400 mb-1">Address</span>
                <span className="text-white">
                  123 Education Boulevard,<br />
                  Colombo, Sri Lanka
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} AST Abroad Study and Travel. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
