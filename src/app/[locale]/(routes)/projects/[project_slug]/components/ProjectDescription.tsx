"use client";
import React from "react";
import { motion } from "motion/react";

import TextEditorReader from "@/components/TextReader";
import WhatsAppButton from "@/components/WhatsAppButton";
import PhoneNumber from "@/components/PhoneNumber";

interface ProjectDescriptionProps {
  description: string;
  whatsappNumber: string;
  phoneNumber: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  description,
  whatsappNumber,
  phoneNumber,
}) => {
  return (
    <div className="flex-1">
      <motion.div
        className="text-primary text-[13px] font-medium leading-[25px] mb-8 h-fit w-full wrap-break-word text-justify"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <TextEditorReader value={description} />
        <div className="mt-6 flex flex-col gap-3">
          <WhatsAppButton phoneNumber={whatsappNumber} />
          <PhoneNumber phoneNumber={phoneNumber} />
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDescription;
