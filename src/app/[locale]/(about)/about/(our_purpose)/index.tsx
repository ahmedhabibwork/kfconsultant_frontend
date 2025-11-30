"use client";
import React from "react";
import Image from "next/image";

const OurPurpose = () => {
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
              Mission
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
              Our focus extends beyond construction; we are committed to
              delivering efficient solutions that are both economically viable
              and environmentally responsible, ensuring we meet our clients'
              needs promptly. We are committed to integrating research and
              expertise within the civil engineering industry, delivering
              structural design solutions for a diverse range of structures by
              thoroughly examining construction challenges both on-site and
              off-site.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/aboutseconedbg.webp"
              alt="Mission - Civil Engineering"
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
