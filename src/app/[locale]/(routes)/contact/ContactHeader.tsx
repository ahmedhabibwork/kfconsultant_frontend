import React from "react";
import HeaderComponent from "@/components/HeaderComponent";

const ContactHeader = () => {
  return (
    <HeaderComponent background="/contactBg.webp">
      <h1 className="uppercase font-medium text-[60px] max-md:text-[35px]">
        Contact Us
      </h1>
    </HeaderComponent>
  );
};

export default ContactHeader;
