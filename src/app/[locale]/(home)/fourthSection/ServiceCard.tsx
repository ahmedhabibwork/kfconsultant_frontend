"use client";
import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "motion/react";
import { Service } from "./servicesData";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="relative overflow-hidden group h-full w-full">
      <Link href={service.link} className="block w-full h-full relative">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="translate-y-[200px] group-hover:translate-y-0 transition-transform duration-500 p-6">
            <h3 className="text-white text-[55px] font-bold uppercase leading-tight -rotate-90 text-center">
              {service.title.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </h3>
          </div>
        </div>
        {/* Default Overlay (Always visible on desktop until hover?) - The user's HTML had a rotated text. Let's replicate that style. */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
          <div className="absolute bottom-20 -left-10 origin-bottom-left -rotate-90 translate-y-20 group-hover:translate-y-full transition-transform duration-500 opacity-100 group-hover:opacity-0">
            <h3 className="text-white text-4xl font-bold uppercase whitespace-nowrap">
              {service.title}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
