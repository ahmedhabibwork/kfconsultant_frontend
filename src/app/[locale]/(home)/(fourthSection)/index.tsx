"use client";
import React from "react";
import ServiceCard from "./ServiceCard";
import ServiceSlider from "./ServiceSlider";
import { services } from "./servicesData";

const FourthSection = () => {
  return (
    <section className="panel h-screen max-md:h-fit xl:h-screen snap-start flex min-w-0 relative bg-white">
      {/* Header */}
      <div className="absolute top-[80px] max-md:top-10 left-[50%] translate-x-[-50%] z-50 max-lg:scale-75">
        <div className="flex flex-col gap-[14px] uppercase w-fit items-center text-center">
          <div className="text-gray-500 w-fit gap-2 flex items-center max-md:w-full justify-center">
            <div className="w-max text-center text-[13px]">More About Us</div>
          </div>
          <h1 className="text-[38px] max-md:text-4xl text-primary font-bold tracking-widest">
            SERVICES
          </h1>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-6 w-full h-full">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden w-full mt-32 pb-10">
        <ServiceSlider services={services} />
      </div>
    </section>
  );
};

export default FourthSection;
