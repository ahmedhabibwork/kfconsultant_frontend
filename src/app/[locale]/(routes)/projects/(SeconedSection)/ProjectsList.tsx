"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/projectsTypes";

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div id="projects-list" className="py-[60px] text-white max-md:pt-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-fit mx-auto place-items-center gap-[16px] px-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            slug={project.slug || ""}
            title={project.title}
            client={project.owner}
            location={project.location}
            area={project.scale?.title || "N/A"}
            sectors={project.category?.title || "N/A"}
            image={project.cover_image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
