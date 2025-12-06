"use client";
import React from "react";
import Image from "next/image";
import { AboutUs } from "@/types/aboutTypes";
import TextEditorReader from "@/components/TextReader";

interface OurPurposeProps {
  aboutUs: AboutUs;
}

const OurPurpose = ({ aboutUs }: OurPurposeProps) => {
  return (
    <section className="w-full py-16 md:py-24 bg-white snap-start">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 uppercase tracking-widest mb-2">
            Our
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-widest">
            Purpose
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl md:text-4xl font-normal text-gray-900">
              {aboutUs.title}
            </h3>
            <div className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
              <TextEditorReader value={aboutUs.mission} />
            </div>
            {aboutUs.experience_years > 0 && (
              <div className="flex items-center gap-4 mt-4">
                <div className="flex flex-col">
                  <span className="text-5xl font-bold text-primary">
                    {aboutUs.experience_years}
                  </span>
                  <span className="text-gray-600 text-sm uppercase tracking-wider">
                    Years of Experience
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Image */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={aboutUs.mission_image || "/aboutseconedbg.webp"}
              alt={aboutUs.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPurpose;
