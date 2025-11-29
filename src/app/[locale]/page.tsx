import HeroSlider from "@/components/HeroSlider";
import FourthSection from "./(home)/(fourthSection)";
import SeconedSection from "./(home)/seconedSection";
import ProjectsAndServices from "./(home)/(projects-and-services)";
import PartnersSection from "./(home)/(partners)";
import Footer from "@/components/cors/footer";

const page = () => {
  return (
    <div className="h-screen w-full">
      <HeroSlider />
      <SeconedSection />
      <ProjectsAndServices />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default page;
