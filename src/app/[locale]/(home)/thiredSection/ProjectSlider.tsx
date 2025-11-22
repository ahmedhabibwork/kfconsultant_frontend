"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "./projectsData";

interface ProjectSliderProps {
  projects: Project[];
  activeId: number;
  onSelect: (id: number) => void;
}

const ProjectSlider = ({
  projects,
  activeId,
  onSelect,
}: ProjectSliderProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (scrollContainerRef.current) {
      setWidth(
        scrollContainerRef.current.scrollWidth -
          scrollContainerRef.current.offsetWidth
      );
    }
  }, []);

  const handlePrev = () => {
    const currentIndex = projects.findIndex((p) => p.id === activeId);
    if (currentIndex > 0) {
      onSelect(projects[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    const currentIndex = projects.findIndex((p) => p.id === activeId);
    if (currentIndex < projects.length - 1) {
      onSelect(projects[currentIndex + 1].id);
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <motion.div
        ref={scrollContainerRef}
        className="cursor-grab overflow-hidden"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => onSelect(project.id)}
              className={`relative min-w-[170px] h-[170px] md:min-w-[211px] md:h-[211px] rounded-2xl cursor-pointer transition-all duration-300 ${
                activeId === project.id
                  ? "scale-110 shadow-[10px_0px_5px_rgba(0,0,0,0.3)] z-10 border-2 border-white"
                  : "scale-100 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-2xl"
              />
              <div
                className={`absolute inset-0 rounded-2xl transition-colors duration-300 ${
                  activeId === project.id ? "bg-transparent" : "bg-black/30"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-9 mt-4">
        <div className="flex-1 h-[0.5px] bg-[#696969] relative">
          <div
            className="absolute top-0 left-0 h-px bg-[#D9D9D9] transition-all duration-300"
            style={{
              width: `${
                ((projects.findIndex((p) => p.id === activeId) + 1) /
                  projects.length) *
                100
              }%`,
            }}
          ></div>
        </div>
        <div className="flex items-center justify-end rtl:flex-row-reverse gap-[20px]">
          <button
            onClick={handlePrev}
            disabled={projects[0].id === activeId}
            className="bg-white/20 backdrop-blur-[5px] w-[40px] h-[40px] rounded-full border border-white cursor-pointer flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            onClick={handleNext}
            disabled={projects[projects.length - 1].id === activeId}
            className="bg-white/20 backdrop-blur-[5px] w-[40px] h-[40px] rounded-full border border-white cursor-pointer flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
