import { Metadata } from "next";
import AboutContent from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "About Us | AST Abroad Study & Travel",
  description: "Learn more about AST Abroad Study and Travel, your trusted partner for overseas education. Discover our mission, vision, and core values.",
};

export default function AboutPage() {
  return <AboutContent />;
}
