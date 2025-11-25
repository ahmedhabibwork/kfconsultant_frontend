"use client";
import React from "react";
import { motion } from "motion/react";

interface MetadataItemProps {
  label: string;
  value: string | string[];
  delay?: number;
}

const MetadataItem: React.FC<MetadataItemProps> = ({
  label,
  value,
  delay = 0,
}) => {
  const isMultipleValues = Array.isArray(value);

  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: delay / 1000 }}
    >
      <p className="text-sm tracking-[2px] leading-5 my-2">{label}</p>
      <span className="border h-px w-full border-primary"></span>
      {isMultipleValues ? (
        <div className="my-2 flex flex-col gap-1">
          {value.map((item, index) => (
            <p
              key={index}
              className="capitalize font-medium text-[13px] tracking-[1px] leading-4"
            >
              {item}
            </p>
          ))}
        </div>
      ) : (
        <p className="font-medium text-[13px] tracking-[1px] leading-4 my-2">
          {value}
        </p>
      )}
    </motion.div>
  );
};

interface ProjectMetadataProps {
  client: string;
  type: string;
  services: string[];
  location: string;
}

const ProjectMetadata: React.FC<ProjectMetadataProps> = ({
  client,
  type,
  services,
  location,
}) => {
  return (
    <div className="flex-1 flex justify-between items-start gap-10 max-sm:flex-col max-lg:flex-wrap md:px-6 text-primary">
      <MetadataItem label="Client" value={client} delay={0} />
      <MetadataItem label="Type" value={type} delay={300} />
      <MetadataItem label="Services" value={services} delay={600} />
      <MetadataItem label="Location" value={location} delay={900} />
    </div>
  );
};

export default ProjectMetadata;
