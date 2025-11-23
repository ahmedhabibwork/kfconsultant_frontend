import React from "react";
import AboutHeader from "./AboutHeader";
import SecondSection from "./seconedSection";
import ThiredSectionBg from "./ThiredSectionBg";
import Sectors from "./sectors";
import AwardsSection from "./AwardsSection";
import Footer from "@/components/cors/footer";

const page = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      <AboutHeader />
      <SecondSection />
      <ThiredSectionBg />
      <Sectors />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default page;
