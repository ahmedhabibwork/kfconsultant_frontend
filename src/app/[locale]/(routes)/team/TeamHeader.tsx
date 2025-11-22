import HeaderComponent from "@/components/HeaderComponent";
import React from "react";

const TeamHeader = () => {
  return (
    <HeaderComponent background="/peopleBg.webp">
      <h1 className="uppercase font-medium text-[60px] max-md:text-[35px]">
        People
      </h1>
    </HeaderComponent>
  );
};

export default TeamHeader;
