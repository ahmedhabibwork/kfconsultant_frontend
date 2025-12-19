import ServiceSlider from "./ServiceSlider";
import { Service as ApiService } from "@/types/homeTypes";
import { Service as sliderService } from "./servicesData";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

interface FourthSectionProps {
  services: ApiService[];
}

export default function FourthSection({ services }: FourthSectionProps) {
  // Transform API services to Slider services format
  const sliderServices: sliderService[] = services.map((service) => ({
    id: service.id,
    title: service.title,
    image: service.image,
    link: `/projects?serviceId=${service.id}`,
  }));

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white">
      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="block text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">
                What We Do
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-black tracking-tight">
                Our Services
              </h2>
            </div>

            <Link
              href="/services"
              className="group inline-flex items-center text-sm font-bold text-black hover:text-[#666666] transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Services Slider */}
          <ServiceSlider services={sliderServices} />
        </div>
      </section>
    </main>
  );
}
