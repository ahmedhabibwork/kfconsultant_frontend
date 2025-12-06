import React from "react";
import ContactDetails from "./components/ContactDetails";
import ContactForm from "./components/ContactForm";
import ContactMap from "./components/ContactMap";
import { ContactInfo } from "@/types/contactTypes";

interface MainContactContentProps {
  contactInfo: ContactInfo;
}

const MainContactContent = ({ contactInfo }: MainContactContentProps) => {
  return (
    <div className="flex items-end justify-center max-w-[1400px] w-full mx-auto gap-16 max-md:gap-4 shadow-lg max-md:flex-col h-max max-md:p-[30px] my-8 max-md:mt-2 flex-1">
      <div className="flex flex-col gap-4 flex-1">
        <ContactDetails contactInfo={contactInfo} />
        <ContactForm />
      </div>
      <ContactMap mapLink={contactInfo.map_link} />
    </div>
  );
};

export default MainContactContent;
