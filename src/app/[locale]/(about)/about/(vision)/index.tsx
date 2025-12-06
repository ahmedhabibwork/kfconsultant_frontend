"use client";
import React from "react";
import Image from "next/image";

import { AboutUs } from "@/types/aboutTypes";
import TextEditorReader from "@/components/TextReader";

interface VisionProps {
  aboutUs: AboutUs;
}

const Vision = ({ aboutUs }: VisionProps) => {
  return (
    <section className="w-full py-16 md:py-24 bg-white snap-start">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image - Left Side */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
            <Image
              src={aboutUs.vision_image || "/aboutthiredbg.webp"}
              alt="Vision - Team Collaboration"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content - Right Side */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <h3 className="text-3xl md:text-4xl font-normal text-gray-900">
              Vision
            </h3>
            <div className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
              <TextEditorReader value={aboutUs.vision} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
