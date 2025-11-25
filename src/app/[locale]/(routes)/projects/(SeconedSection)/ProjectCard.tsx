import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

interface ProjectCardProps {
  id: string;
  title: string;
  client: string;
  location: string;
  area: string;
  sectors: string;
  image: string;
}

const ProjectCard = ({
  id,
  title,
  client,
  location,
  area,
  sectors,
  image,
}: ProjectCardProps) => {
  return (
    <Link
      className="text-white flex-1 h-fit w-[300px] max-md:w-full group z-1"
      href={`/projects/${id}`}
    >
      <Image
        alt={title}
        loading="lazy"
        width={400}
        height={400}
        decoding="async"
        className="w-full h-[280px] object-cover duration-300 grayscale-30 contrast-80 group-hover:grayscale-0 group-hover:contrast-100"
        src={image}
      />
      <div className="relative">
        <div className="bg-primary h-full backdrop-blur-[20px] w-full px-6 py-5 flex flex-col gap-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex flex-col gap-2">
            <motion.div
              className="flex justify-between items-center text-[12px]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <p>Client</p>
              <p>{client}</p>
            </motion.div>
            <motion.div
              className="flex justify-between items-center text-[12px]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p>Location</p>
              <p>{location}</p>
            </motion.div>
            <motion.div
              className="flex justify-between items-center text-[12px]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p>Area</p>
              <p>{area}</p>
            </motion.div>
            <motion.div
              className="flex justify-between items-center text-[12px]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <p>Sectors</p>
              <p>{sectors}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
