import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Overseas Education Services | AST Abroad Study & Travel",
  description: "AST provides comprehensive services including expert counselling, university selection, application assistance, visa guidance, and pre-departure support.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Page Header */}
      <section className="bg-navy py-20 relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2049&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive support tailored to your unique journey, ensuring a seamless transition to studying abroad.
          </p>
        </div>
      </section>

      <div className="max-w-[1560px] mx-auto px-3 sm:px-5 lg:px-7 space-y-24">
        {SERVICES.map((service, index) => (
          <div key={service.id} id={service.id} className="scroll-mt-32">
            <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Icon/Number Visual */}
              <div className="w-full lg:w-5/12">
                <div className="aspect-square rounded-3xl bg-light-blue flex flex-col items-center justify-center p-12 relative overflow-hidden border border-gray-100 shadow-sm">
                  <div className="absolute -top-12 -right-12 text-[15rem] font-bold text-white opacity-40 select-none">
                    {service.number}
                  </div>
                  <service.icon className="w-32 h-32 text-royal-blue mb-8 relative z-10" />
                  <h3 className="text-3xl font-bold text-navy text-center relative z-10">{service.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-7/12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-bright-gold font-bold text-xl">{service.number}</span>
                  <div className="h-[2px] w-12 bg-bright-gold" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="bg-gray-50 rounded-2xl p-8 mb-8 border border-gray-100">
                  <h4 className="font-bold text-navy mb-4 text-lg">Key Benefits</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((_, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-royal-blue flex-shrink-0 mt-0.5" />
                        <span>Benefit {i + 1} related to {service.title.toLowerCase()}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href="#consultation"
                  className="inline-flex items-center gap-2 bg-navy hover:bg-royal-blue text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg group"
                >
                  Book this Service
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
