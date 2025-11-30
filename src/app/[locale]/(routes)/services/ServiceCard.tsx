"use client";
import React from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="flex flex-col gap-4 p-6 hover:bg-gray-50 transition-colors rounded-lg group">
      <div className="flex items-start gap-4">
        <div className="text-indigo-900 group-hover:text-indigo-700 transition-colors">
          <Icon size={48} strokeWidth={1.5} />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium text-gray-800 group-hover:text-indigo-900 transition-colors">
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
