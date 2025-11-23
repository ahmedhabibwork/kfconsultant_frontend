"use client";
import React from "react";
import ServiceCard from "@/app/[locale]/(home)/(fourthSection)/ServiceCard";
import ServiceSlider from "@/app/[locale]/(home)/(fourthSection)/ServiceSlider";

const sectors = [
  {
    id: 1,
    title: "Residential",
    image: "/sectors/one.webp",
    link: "#",
  },
  {
    id: 2,
    title: "Hospitality",
    image: "/sectors/tow.webp",
    link: "#",
  },
  {
    id: 3,
    title: "Offices",
    image: "/sectors/three.webp",
    link: "#",
  },
  {
    id: 4,
    title: "Commercial",
    image: "/sectors/four.webp",
    link: "#",
  },
  {
    id: 5,
    title: "Healthcare",
    image: "/sectors/five.webp",
    link: "#",
  },
  {
    id: 6,
    title: "Educational",
    image: "/sectors/6.webp",
    link: "#",
  },
];

const Sectors = () => {
  return (
    <section className="panel w-screen h-screen max-md:h-auto xl:h-screen snap-start flex min-w-0 relative">
      {/* Header */}
      <div className="absolute top-[80px] max-md:top-10 left-[50%] translate-x-[-50%] z-50 max-lg:scale-75">
        <div className="flex flex-col gap-[14px] uppercase w-fit items-center text-center">
          <div className="text-gray-500 w-fit gap-2 flex items-center max-md:w-full justify-center">
            <div className="w-max text-center text-[13px]">More About Us</div>
          </div>
          <h1 className="text-[38px] max-md:text-4xl text-white font-bold tracking-widest">
            SECTORS
          </h1>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-6 w-full h-full">
        {sectors.map((sector) => (
          <ServiceCard key={sector.id} service={sector} />
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden w-full mt-32 pb-10">
        <ServiceSlider services={sectors} />
      </div>
    </section>
  );
};

export default Sectors;
