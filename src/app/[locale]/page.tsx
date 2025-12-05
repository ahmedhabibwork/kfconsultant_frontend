import { Metadata } from "next";
import HeroSlider from "@/components/HeroSlider";
import FourthSection from "./(home)/(fourthSection)";
import SeconedSection from "./(home)/seconedSection";
import ProjectsAndServices from "./(home)/(projects-and-services)";
import PartnersSection from "./(home)/(partners)";
import { getHome } from "@/actions/get_home";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description:
    "Leading design and engineering consultancy firm with over 30 years of experience in architectural design, master planning, and infrastructure development across Egypt and the Middle East.",
  keywords: [
    "architecture",
    "engineering",
    "design consultancy",
    "master planning",
    "infrastructure",
    "Egypt",
    "Middle East",
    "KFconsultant",
  ],
  url: "/",
});

const page = async () => {
  const data = await getHome();
  const { banner, about_us, project, services, clients } = data.msg_data;

  return (
    <div className="w-full">
      <HeroSlider banner={banner} />
      <SeconedSection aboutUs={about_us} />
      <FourthSection services={services} />
      <ProjectsAndServices projects={project} />
      <PartnersSection clients={clients} />
    </div>
  );
};

export default page;
