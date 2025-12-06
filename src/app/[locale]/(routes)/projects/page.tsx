import ProjectsHeader from "./projectsHeader";
import SeconedSection from "./(SeconedSection)";
import { getProjects } from "@/actions/projects";

interface PageProps {
  searchParams: Promise<{
    category?: string;
    scale?: string;
    scope?: string;
    status?: string;
    year?: string;
    search?: string;
    page?: string;
  }>;
}

const page = async ({ searchParams }: PageProps) => {
  const params = await searchParams;
  const data = await getProjects({
    category: params.category,
    scale: params.scale,
    scope: params.scope,
    status: params.status,
    year: params.year,
    search: params.search,
    page: params.page ? parseInt(params.page) : undefined,
  });
  const { data: projects, filters } = data.msg_data;
  const { pagination } = data;

  return (
    <div>
      <ProjectsHeader />
      <SeconedSection
        projects={projects}
        filters={filters}
        pagination={pagination}
      />
    </div>
  );
};

export default page;
