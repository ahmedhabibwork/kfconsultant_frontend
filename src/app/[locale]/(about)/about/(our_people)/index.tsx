"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TeamMember } from "@/types/aboutTypes";

interface OurPeopleProps {
  team: TeamMember[];
}

const OurPeople = ({ team }: OurPeopleProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % team.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [team.length]);

  if (!team || team.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-16 md:py-24 bg-white snap-start">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Main Header */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 uppercase tracking-widest mb-2">
            Our
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-widest">
            People
          </h2>
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
          {/* Left Side - Section Title */}
          <div className="flex flex-col gap-2 lg:w-1/3 pt-8">
            <span
              style={{ letterSpacing: "1em" }}
              className="text-[#00006c] text-sm font-semibold uppercase mb-2"
            >
              Team
            </span>
            <h3 className="text-4xl md:text-5xl font-light text-black uppercase leading-tight">
              Key
            </h3>
            <h3 className="text-4xl md:text-5xl font-bold text-black uppercase leading-tight">
              Members
            </h3>
          </div>

          {/* Right Side - Slider Card */}
          <div className="w-full lg:w-2/3 relative bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden">
            {/* Navigation Buttons */}
            {team.length > 1 && (
              <div className="absolute top-0 right-0 z-10 flex">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-indigo-400 hover:bg-indigo-500 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}

            {/* Slide Content */}
            <div className="relative h-[300px] md:h-[250px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row h-full"
                >
                  {/* Image */}
                  <div className="w-full md:w-1/3 h-48 md:h-full relative">
                    <Image
                      src={team[currentIndex].image}
                      alt={team[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="w-full md:w-2/3 p-8 flex flex-col justify-center gap-4 bg-white">
                    <div className="flex flex-col gap-1">
                      <h4 className="text-lg font-bold text-black uppercase">
                        {team[currentIndex].name}
                      </h4>
                    </div>
                    <div className="w-12 h-0.5 bg-gray-200"></div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {team[currentIndex].job_title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
