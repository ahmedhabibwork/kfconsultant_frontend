import React from "react";
import ContactHeader from "./ContactHeader";
import MainContactContent from "./MainContactContent";
import { getContactInfo } from "@/actions/contact";

const page = async () => {
  const contactData = await getContactInfo();

  return (
    <div>
      <ContactHeader />
      <MainContactContent contactInfo={contactData.msg_data} />
    </div>
  );
};

export default page;
