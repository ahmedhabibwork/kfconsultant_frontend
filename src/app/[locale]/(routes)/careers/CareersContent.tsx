"use client";
import React from "react";
import Button from "@/components/button";
import { useModal } from "@/hooks/useModal";
import JobApplicationModal from "./components/JobApplicationModal";

const jobs = [
  {
    title: "Urban & Landscape Team Leader",
    responsibilities: [
      "Develop comprehensive master plans and landscape designs, including all engineering stages.",
      "Prepare detailed construction drawing packages to support the implementation of the master plan and landscape design.",
    ],
    requirements: [
      "Bachelor's Degree in Landscape Architecture or a closely related field.",
      "A minimum of 10 years of experience.",
      "Proficiency in AutoCAD, Civil 3D, and Revit.",
      "Strong understanding of construction documents, specifications, and relevant codes.",
    ],
    location: "Cairo",
    type: "full time",
    workplace: "Office",
  },
  {
    title: "Structure Engineer",
    responsibilities: [
      "Design and analyze structural components.",
      "Collaborate with architects and other engineers.",
    ],
    requirements: [
      "Bachelor's Degree in Civil Engineering.",
      "Experience with structural analysis software.",
    ],
    location: "Cairo",
    type: "full time",
    workplace: "Office",
  },
  {
    title: "Sr. Structure Engineer",
    responsibilities: [
      "Lead structural engineering projects.",
      "Mentor junior engineers.",
    ],
    requirements: [
      "Master's Degree in Structural Engineering.",
      "10+ years of experience.",
    ],
    location: "Cairo",
    type: "full time",
    workplace: "Office",
  },
];

const CareersContent = () => {
  const { openModal } = useModal();

  return (
    <div className="w-full grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 px-[30px] pb-16">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="w-full px-[40px] py-[72px] flex justify-between flex-wrap items-center gap-4 bg-[#EDEDED] hover:bg-primary group/parent max-md:px-4 max-md:py-6 group-[.search]:flex-col transition-colors duration-300"
        >
          <p className="flex-1 text-base font-medium w-[-webkit-fill-available] max-md:text-center text-primary group-hover/parent:text-white max-xl:text-xs transition-colors duration-300">
            {job.title}
          </p>
          <div className="w-full flex-1 flex max-md:items-center max-md:justify-center max-md:mx-auto justify-end">
            <Button
              text="Apply Now"
              hoverColor="hover:text-secondry"
              width="w-[120px]"
              height="h-[36px]"
              textSize="text-[11.5px]"
              svgClassName="!fill-primary group-hover/parent:fill-secondry"
              arrowSize="w-4 h-4"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                openModal({
                  view: <JobApplicationModal job={job} />,
                  customSize: "800px",
                  origin: {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                  },
                });
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareersContent;
