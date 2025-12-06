import React from "react";
import ProjectHeader from "./projectHeader";
import ProjectDetailsSection from "./components/ProjectDetailsSection";
import MoreProjects from "./components/MoreProjects";
import { getProjectDetails } from "@/actions/project-details";
import { getContactInfo } from "@/actions/contact";
import { Project } from "@/types/projectDetailesTypes";
import { Metadata } from "next";
import { createMetadata, createProjectSchema } from "@/lib/metadata";

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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { project_slug } = await params;
  const projectData = await getProjectDetails(project_slug);
  const { project } = projectData.msg_data;

  return createMetadata({
    title: project.meta_title || project.title,
    description: project.meta_description || project.short_description,
    image: project.cover_image,
    url: `/projects/${project.slug}`,
    type: "article",
    publishedTime: project.created_at,
  });
}

const page = async ({ params }: PageProps) => {
  const { project_slug } = await params;
  const projectData = await getProjectDetails(project_slug);
  const contactData = await getContactInfo();
  const { project } = projectData.msg_data;

  const componentData = mapProjectToComponentData(project);

  const jsonLd = createProjectSchema({
    title: project.meta_title || project.title,
    description: project.meta_description || project.short_description,
    image: project.cover_image,
    url: `${process.env.API_SITE_URL}/projects/${project.slug}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectHeader project={project} />
      <ProjectDetailsSection project={componentData} />
      <MoreProjects />
    </>
  );
};

export default page;
