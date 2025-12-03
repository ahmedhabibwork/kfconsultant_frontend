import React from "react";
import ServicesHeader from "./ServicesHeader";
import ServicesList from "./ServicesList";
import Footer from "@/components/cors/footer";
import { getServices } from "@/actions/services";

const page = async () => {
  const servicesData = await getServices();

  return (
    <div className="">
      <ServicesHeader />
      <ServicesList services={servicesData.msg_data} />
    </div>
  );
};

export default page;
