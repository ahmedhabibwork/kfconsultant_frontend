import HeroSlider from "@/components/HeroSlider";
import FourthSection from "./(home)/(fourthSection)";
import SeconedSection from "./(home)/seconedSection";
import ThirdSection from "./(home)/(thiredSection)";
import PartnersSection from "./(home)/(partners)";
import Footer from "@/components/cors/footer";

const page = () => {
  return (
    <div className="h-screen w-full">
      <HeroSlider />
      <SeconedSection />
      <ThirdSection />
      <FourthSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default page;
