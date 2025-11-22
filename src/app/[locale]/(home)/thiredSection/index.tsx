"use client";
import React, { useState } from "react";
import Image from "next/image";
import InfoCard from "@/components/InfoCard";
import ProjectSlider from "./ProjectSlider";
import { projects } from "./projectsData";

const ThirdSection = () => {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const activeProject =
    projects.find((p) => p.id === activeProjectId) || projects[0];

  return (
    <section className="panel w-full min-h-screen xl:h-screen snap-start relative overflow-hidden">
      {/* Background Image */}
      <Image
        alt="Projects Background"
        src="/home-thired-section.webp"
        fill
        className="bg-image object-cover"
        priority={false}
      />
      <div className="bg-overlay bg-black/20 absolute inset-0"></div>

      <div className="flex flex-col justify-between h-full pt-[40px] pb-[92px] relative z-10">
        {/* Header */}
        <div className="w-full flex justify-center px-4 max-lg:scale-75">
          <div className="flex flex-col gap-[14px] uppercase w-fit items-center text-center">
            <div className="text-gray-200 w-fit gap-2 flex items-center max-md:w-full justify-center">
              <div className="w-max text-center text-[13px]">
                Look Around You
              </div>
            </div>
            <h1 className="text-[38px] max-md:text-4xl text-white font-bold tracking-widest">
              PROJECTS
            </h1>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-end gap-[67px] text-white px-4 mt-[10px]">
          {/* Info Card */}
          <div className="w-[527px] max-md:w-full">
            <InfoCard
              title={activeProject.title}
              subTitle={activeProject.subTitle}
              description={activeProject.description}
              linkHref={activeProject.link}
              buttonText="Discover More"
              rtl={false}
            />
          </div>

          {/* Slider */}
          <div className="w-[45%] max-md:w-full">
            <ProjectSlider
              projects={projects}
              activeId={activeProjectId}
              onSelect={setActiveProjectId}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
