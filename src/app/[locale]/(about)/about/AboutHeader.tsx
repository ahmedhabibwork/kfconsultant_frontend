import HeaderComponent from "@/components/HeaderComponent";
import React from "react";

const AboutHeader = () => {
  return (
    <HeaderComponent background="/aboutbg.webp">
      <h1 className="uppercase font-medium text-[60px] max-md:text-[35px]">
        About Us
      </h1>
    </HeaderComponent>
  );
};

export default AboutHeader;
