import React from "react";
import AboutHeader from "./AboutHeader";
import SecondSection from "./seconedSection";
import ThiredSectionBg from "./ThiredSectionBg";
import Sectors from "./sectors";
import AwardsSection from "./AwardsSection";

const page = () => {
  return (
    <div>
      <AboutHeader />
      <SecondSection />
      <ThiredSectionBg />
      <Sectors />
      <AwardsSection />
    </div>
  );
};

export default page;
