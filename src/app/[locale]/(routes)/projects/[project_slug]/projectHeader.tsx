import HeaderComponent from "@/components/HeaderComponent";
import { Project } from "@/types/projectDetailesTypes";

interface ProjectHeaderProps {
  project: Project;
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <HeaderComponent background={project.cover_image || "/newsBg.webp"}>
      <h1 className="uppercase font-medium text-[60px] max-md:text-[35px]">
        {project.title}
      </h1>
    </HeaderComponent>
  );
};

export default ProjectHeader;
