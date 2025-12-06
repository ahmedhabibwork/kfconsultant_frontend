import React from "react";
import { getServices } from "@/actions/services";
import ServicesPageClient from "./ServicesPageClient";

const page = async () => {
  const servicesData = await getServices();

  return <ServicesPageClient services={servicesData.msg_data} />;
};

export default page;
