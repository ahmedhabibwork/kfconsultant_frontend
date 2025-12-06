"use client";

import { motion } from "motion/react";
import ServicesHeader from "./ServicesHeader";
import ServicesList from "./ServicesList";
import { Service } from "@/types/servicesTypes";

interface ServicesPageClientProps {
  services: Service[];
}

const ServicesPageClient = ({ services }: ServicesPageClientProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ServicesHeader />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <ServicesList services={services} />
      </motion.div>
    </div>
  );
};

export default ServicesPageClient;
