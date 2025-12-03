import React from "react";
import ServicesHeader from "./ServicesHeader";
import ServicesList from "./ServicesList";
import Footer from "@/components/cors/footer";
import { getServices } from "@/actions/services";

const page = async () => {
  const servicesData = await getServices();

  return (
    <div className="min-h-screen flex flex-col">
      <ServicesHeader />
      <ServicesList services={servicesData.msg_data} />
      <Footer />
    </div>
  );
};

export default page;
