"use client";
import React from "react";
import Image from "next/image";

import { AboutUs } from "@/types/aboutTypes";
import TextEditorReader from "@/components/TextReader";

interface OurFounderProps {
  aboutUs: AboutUs;
}

const OurFounder = ({ aboutUs }: OurFounderProps) => {
  return (
    <section className="w-full py-16 md:py-24 bg-white snap-start">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 uppercase tracking-widest mb-2">
            Our
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-widest">
            Founder
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-normal text-gray-900">
              The Founder&apos;s Biography
            </h3>
            <div className="text-gray-600 text-[13px] md:text-sm leading-relaxed text-justify flex flex-col gap-4">
              <TextEditorReader value={aboutUs.our_founder} />
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={aboutUs.our_founder_image || "/aboutseconedbg.webp"}
              alt="Dr. Amr A. Abdelrahman - Founder"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFounder;
