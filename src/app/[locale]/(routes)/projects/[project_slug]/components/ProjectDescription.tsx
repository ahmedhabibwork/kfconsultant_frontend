"use client";
import React from "react";
import { motion } from "motion/react";

interface ProjectDescriptionProps {
  description: string;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  description,
}) => {
  return (
    <div className="flex-1">
      <motion.p
        className="text-primary text-[13px] font-medium leading-[25px] mb-8 h-fit w-full wrap-break-word text-justify"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default ProjectDescription;
