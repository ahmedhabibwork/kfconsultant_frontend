import HeaderComponent from "@/components/HeaderComponent";
import React from "react";

const CareersHeader = () => {
  return (
    <HeaderComponent background="/newsBg.webp">
      <h1 className="uppercase font-medium text-[60px] max-md:text-[35px]">
        Careers
      </h1>
    </HeaderComponent>
  );
};

export default CareersHeader;
