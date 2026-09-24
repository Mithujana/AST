import { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, Heart, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | AST Abroad Study & Travel",
  description: "Learn more about AST Abroad Study and Travel, your trusted partner for overseas education. Discover our mission, vision, and core values.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Your Trusted Partner for Overseas Education</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Helping students achieve their dreams through global education opportunities with expert guidance and personalized support.
          </p>
        </div>
      </section>

      <div className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7 mt-20">
        {/* Who We Are */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-bright-gold" />
              <span className="text-bright-gold font-medium tracking-wider text-sm uppercase">Who We Are</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Empowering Students Worldwide</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              AST (Abroad Study and Travel) is a premier overseas education consultancy dedicated to guiding students through their international education journey. With years of experience and a vast network of partner universities globally, we simplify the complex process of studying abroad.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              From the initial counselling session to the moment you step onto your new campus, our expert team provides comprehensive support in university selection, application processing, visa assistance, and pre-departure planning.
            </p>
            <Link 
              href="#consultation"
              className="inline-flex items-center justify-center bg-navy hover:bg-royal-blue text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg"
            >
              Talk to an Expert
            </Link>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2049&auto=format&fit=crop" 
              alt="AST Team collaborating" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/10" />
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-bright-gold/30 transition-all">
              <div className="w-14 h-14 bg-light-blue rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-royal-blue" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide honest, transparent, and expert guidance to students, enabling them to make informed decisions about their global education and career pathways.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-bright-gold/30 transition-all transform md:-translate-y-4">
              <div className="w-14 h-14 bg-light-blue rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-royal-blue" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and preferred overseas education consultancy, recognized for our commitment to student success and excellence in service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-bright-gold/30 transition-all">
              <div className="w-14 h-14 bg-light-blue rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-royal-blue" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrity, transparency, student-centricity, and excellence form the core of everything we do. We put our students' best interests first.
              </p>
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="bg-gray-50 rounded-3xl p-8 md:p-16 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Students Trust Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We take pride in our high success rates and the positive impact we've had on countless student lives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "100% Transparent Process",
              "Expert Certified Counsellors",
              "High Visa Success Rate",
              "End-to-End Support",
              "Direct University Tie-ups",
              "Pre-Departure Briefings",
              "Post-Arrival Support",
              "Financial Guidance"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-bright-gold flex-shrink-0" />
                <span className="font-medium text-navy">{feature}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
