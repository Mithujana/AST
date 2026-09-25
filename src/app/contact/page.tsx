import { Metadata } from "next";
import ContactHero from "@/components/contact/contact-hero";
import ContactSection from "@/components/home/contact-section";

export const metadata: Metadata = {
  title: "Contact AST | Abroad Study & Travel",
  description: "Get in touch with AST Abroad Study and Travel. Book a free consultation with our expert education counsellors today.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <ContactHero />

      {/* Reusing ContactSection from the home page */}
      <div className="-mt-12">
        <ContactSection />
      </div>
    </div>
  );
}
