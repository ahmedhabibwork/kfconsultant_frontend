import React from "react";
import ServicesHeader from "./ServicesHeader";
import ServicesList from "./ServicesList";
import Footer from "@/components/cors/footer";

const page = () => {
  return (
    <div className="">
      <ServicesHeader />
      <ServicesList />
    </div>
  );
};

export default page;
