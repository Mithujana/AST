import { Metadata } from "next";
import FeaturedUniversities from "@/components/home/featured-universities";

export const metadata: Metadata = {
  title: "Universities | AST Abroad Study & Travel",
  description: "Browse our network of partner universities globally. Find the perfect institution for your academic goals.",
};

export default function UniversitiesPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Partner Universities</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore world-class institutions and discover programs tailored to your academic journey.
          </p>
        </div>
      </section>

      {/* Reusing the FeaturedUniversities component but it will act as the full list here */}
      <div className="-mt-12">
        <FeaturedUniversities />
      </div>
    </div>
  );
}
