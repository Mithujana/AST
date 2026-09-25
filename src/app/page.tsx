import HeroSection from "@/components/home/hero-section";
import DestinationsSection from "@/components/home/destinations-section";
import WhyStudyAbroadSection from "@/components/home/why-study-abroad-section";
import ServicesSection from "@/components/home/services-section";
import JourneyTimeline from "@/components/home/journey-timeline";
import FeaturedUniversities from "@/components/home/featured-universities";
import WhyChooseAst from "@/components/home/why-choose-ast";
import TestimonialsSection from "@/components/home/testimonials-section";
import CTASection from "@/components/home/cta-section";
import ContactSection from "@/components/home/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DestinationsSection />
      <WhyStudyAbroadSection />
      <ServicesSection />
      <JourneyTimeline />
      <FeaturedUniversities />
      <WhyChooseAst />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
