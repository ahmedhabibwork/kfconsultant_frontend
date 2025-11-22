import React from "react";
import ContactDetails from "./components/ContactDetails";
import ContactForm from "./components/ContactForm";
import ContactMap from "./components/ContactMap";

const MainContactContent = () => {
  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto gap-16 max-md:gap-4 shadow-lg max-md:flex-col h-max max-md:p-[30px] my-8 max-md:mt-2">
      <div className="flex flex-col gap-4 flex-1">
        <ContactDetails />
        <ContactForm />
      </div>
      <ContactMap />
    </div>
  );
};

export default MainContactContent;
