"use client";
import React from "react";
import Image from "next/image";

const Vision = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white snap-start">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image - Left Side */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
            <Image
              src="/aboutthiredbg.webp"
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
            <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify">
              Our vision is to establish ourselves as one of the pioneers in
              structural design across Africa. We are confident in our rapidly
              expanding experiences that we deliver to our unique clients,
              aiming to extend our reach into Africa and the MENA regions with
              our Economic Design Engineering and Consultancy packages. We are
              fully confident and poised to exceed expectations by aligning both
              individual and collective efforts, which is central to our
              strategy for penetrating the global market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
