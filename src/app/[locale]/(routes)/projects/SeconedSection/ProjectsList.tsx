import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "21",
    title: "The Loft",
    client: "Living Yards",
    location: "New Capital, Egypt",
    area: "23 Acres",
    sectors: "Residential",
    image: "https://admin.dma-mea.com/storage/01J9P6J11AV6GYJ05CTTT372SR.jpg",
  },
  {
    id: "15",
    title: "B5 Boutique Village",
    client: "Merak Real Estate",
    location: "New Cairo, Egypt",
    area: "5 Acres",
    sectors: "Residential",
    image: "https://admin.dma-mea.com/storage/01J9RE778X0GWS7BWWG125P8QG.jpg",
  },
];

const ProjectsList = () => {
  return (
    <div id="projects-list" className="py-[60px] text-white max-md:pt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-fit mx-auto place-items-center gap-[16px] px-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
