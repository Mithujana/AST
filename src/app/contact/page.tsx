import { Metadata } from "next";
import ContactSection from "@/components/home/contact-section";

export const metadata: Metadata = {
  title: "Contact AST | Abroad Study & Travel",
  description: "Get in touch with AST Abroad Study and Travel. Book a free consultation with our expert education counsellors today.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're here to answer all your questions and help you start your study abroad journey.
          </p>
        </div>
      </section>

      {/* Reusing ContactSection from the home page */}
      <div className="-mt-12">
        <ContactSection />
      </div>
    </div>
  );
}
