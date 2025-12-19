"use client";
import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Service } from "./servicesData";

interface ServiceSliderProps {
  services: Service[];
}

const ServiceSlider = ({ services }: ServiceSliderProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
      {services.map((service, index) => {
        return (
          <Link key={index} href={service.link} className="block w-full h-full">
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 h-full">
              {/* Icon Container */}
              <div className="mb-6 relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#001f3f] to-[#003366] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-10 h-10 object-contain invert brightness-0 filter"
                  />
                </div>
                {/* Decorative background circle */}
                <div className="absolute inset-0 w-20 h-20 mx-auto bg-[#001f3f] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-[#001f3f] text-center leading-tight text-balance">
                {service.title}
              </h3>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#001f3f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ServiceSlider;
