import { Metadata } from "next";
import ServicesClient from "@/components/services/services-client";

export const metadata: Metadata = {
  title: "Comprehensive Study Abroad Services | AST Overseas Education",
  description: "Explore AST's full suite of study abroad services: 1-on-1 expert counselling, university course selection, high-success visa guidance, travel logistics, student accommodation, and pre-departure briefings.",
  keywords: [
    "study abroad services",
    "overseas education counselling",
    "university selection",
    "student visa assistance",
    "student accommodation abroad",
    "pre-departure orientation",
    "AST abroad study and travel"
  ],
  openGraph: {
    title: "Comprehensive Study Abroad Services | AST Overseas Education",
    description: "Personalized guidance, 300+ university partners, and 99.2% visa approval rate. Start your international journey with AST.",
    type: "website",
  }
};

export default function ServicesPage() {
  return <ServicesClient />;
}
