"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import ProjectCard from "../../(SeconedSection)/ProjectCard";

const projects = [
  {
    id: "2",
    slug: "privado",
    title: "Privado",
    client: "Talaat Moustafa Group",
    location: "New Cairo, Egypt",
    area: "275 Acres",
    sectors: "Residential",
    image: "/projectslug/01J9RHPNX281E7DVKNFS45TR34.webp",
  },
  {
    id: "7",
    slug: "il-bosco-city",
    title: "Il Bosco City",
    client: "Misr Italia",
    location: "New Cairo, Egypt",
    area: "270 Acres",
    sectors: "Residential",
    image: "https://admin.dma-mea.com/storage/01J9NV18G3CX0C5G8SVS48MGA9.jpg",
  },
  {
    id: "4",
    slug: "icity-new-cairo",
    title: "ICity New Cairo",
    client: "Mountain View",
    location: "New Cairo, Egypt",
    area: "500 Acres",
    sectors: "Residential",
    image: "https://admin.dma-mea.com/storage/01J9S4K8308RTWHV16MKRNQND2.jpg",
  },
];

const MoreProjects = () => {
  return (
    <div className="text-center">
      {/* Header Section */}
      <motion.div
        className="flex flex-col items-center gap-3 px-[30px] mb-[40px] mt-10 max-md:my-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-sm:scale-[66%]">
          <div className="flex flex-col gap-[14px] uppercase w-fit items-center text-center">
            <div className="text-text-gray-200 w-fit gap-2 flex items-center max-md:w-full justify-center">
              <div className="w-max text-center text-[10px]">
                Take a look around
              </div>
            </div>
            <h1 className="w-full leading-[25px] ltr:tracking-[2px] text-primary text-[38px] max-md:text-4xl rtl:mb-2">
              More projects
            </h1>
          </div>
        </div>
        <p className="text-primary text-[11.5px] text-center w-full max-w-[564px]">
          Design is not only about being iconic or unique; it is about bringing
          the project to life
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 max-w-fit mx-auto place-content-center items-center justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-[18px] justify-center flex-wrap px-[30px]">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {/* View All Projects Button */}
      <div>
        <Link
          className="w-fit flex items-center gap-2 mt-5 text-center mx-auto text-primary duration-300 px-[30px] py-[15px] text-base font-bold transform transition-transform group translate-x-0"
          href="/projects"
        >
          View All Projects
          <span className="group-hover:translate-x-1 group-hover:duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="15"
              viewBox="0 0 42 15"
              fill="none"
            >
              <path
                d="M35.4316 3.85938L39.0901 7.50137L35.4316 11.1434"
                className="stroke-primary group-hover/parent:stroke-secondry"
                strokeWidth="1.125"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.06787 7.50195L38.9876 7.50196"
                className="stroke-primary group-hover/parent:stroke-secondry"
                strokeWidth="1.125"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MoreProjects;
