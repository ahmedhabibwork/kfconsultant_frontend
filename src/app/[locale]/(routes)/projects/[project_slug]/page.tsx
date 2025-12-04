import React from "react";
import ProjectHeader from "./projectHeader";
import ProjectDetailsSection from "./components/ProjectDetailsSection";
import MoreProjects from "./components/MoreProjects";
import { getProjectDetails } from "@/actions/project-details";
import { Project } from "@/types/projectDetailesTypes";

interface PageProps {
  params: Promise<{
    project_slug: string;
  }>;
}

// Helper function to map API project to component format
function mapProjectToComponentData(project: Project) {
  return {
    title: project.title,
    description: project.description,
    client: project.owner,
    type: project.category.title,
    services: [
      project.scope.title,
      project.scale.title,
      project.status.title,
    ].filter(Boolean),
    location: project.location,
    images: project.images,
  };
}

const page = async ({ params }: PageProps) => {
  const { project_slug } = await params;
  const projectData = await getProjectDetails(project_slug);
  const { project } = projectData.msg_data;

  const componentData = mapProjectToComponentData(project);

  return (
    <>
      <ProjectHeader project={project} />
      <ProjectDetailsSection project={componentData} />
      <MoreProjects />
    </>
  );
};

export default page;
