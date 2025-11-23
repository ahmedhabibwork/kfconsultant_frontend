import HeaderComponent from "@/components/HeaderComponent";

const ProjectsHeader = () => {
  return (
    <HeaderComponent background="/projects.webp">
      <h1 className="uppercase font-medium text-[60px] max-md:text-[35px]">
        Projects
      </h1>
    </HeaderComponent>
  );
};

export default ProjectsHeader;
