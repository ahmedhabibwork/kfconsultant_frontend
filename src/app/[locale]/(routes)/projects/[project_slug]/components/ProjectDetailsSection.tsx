"use client";
import React from "react";
import ProjectDescription from "./ProjectDescription";
import ProjectMetadata from "./ProjectMetadata";
import ProjectGallery from "./ProjectGallery";

export interface ProjectData {
  title: string;
  description: string;
  client: string;
  type: string;
  services: string[];
  location: string;
  status: string;
  images: string[];
}

interface ProjectDetailsSectionProps {
  project: ProjectData;
}

const ProjectDetailsSection: React.FC<ProjectDetailsSectionProps> = ({
  project,
}) => {
  return (
    <div className="max-w-[1114px] px-6 mx-auto mt-[64px] mb-[64px]">
      {/* Description and Metadata */}
      <div className="flex gap-10 max-md:gap-4 mb-4 max-md:mb-10 max-md:flex-col">
        <ProjectDescription description={project.description} />
        <ProjectMetadata
          client={project.client}
          type={project.type}
          services={project.services}
          location={project.location}
          status={project.status}
        />
      </div>

      {/* Gallery */}
      <ProjectGallery images={project.images} />
    </div>
  );
};

export default ProjectDetailsSection;
