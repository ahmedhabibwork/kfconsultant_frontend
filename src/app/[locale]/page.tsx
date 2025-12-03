import HeroSlider from "@/components/HeroSlider";
import FourthSection from "./(home)/(fourthSection)";
import SeconedSection from "./(home)/seconedSection";
import ProjectsAndServices from "./(home)/(projects-and-services)";
import PartnersSection from "./(home)/(partners)";
import Footer from "@/components/cors/footer";
import { getHome } from "@/actions/get_home";

const page = async () => {
  const data = await getHome();
  const { banner, whyUs, project, services, clients } = data.msg_data;

  return (
    <div className="h-screen w-full">
      <HeroSlider banner={banner} />
      <SeconedSection whyUs={whyUs} />
      <ProjectsAndServices projects={project} services={services} />
      <PartnersSection clients={clients} />
      <Footer />
    </div>
  );
};

export default page;
