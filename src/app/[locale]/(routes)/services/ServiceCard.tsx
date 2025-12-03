"use client";
import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <div className="flex flex-col gap-4 p-6 hover:bg-gray-50 transition-colors rounded-lg group">
      <div className="flex items-start gap-4">
        <div className="relative w-12 h-12 flex-shrink-0">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium text-gray-800 group-hover:text-indigo-900 transition-colors">
            {title}
          </h3>
          <div
            className="text-gray-500 text-sm leading-relaxed text-justify prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
