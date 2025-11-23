import Image from "next/image";
import Link from "next/link";
import React from "react";

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
            <div className="flex justify-between items-center text-[12px]">
              <p>Client</p>
              <p>{client}</p>
            </div>
            <div className="flex justify-between items-center text-[12px]">
              <p>Location</p>
              <p>{location}</p>
            </div>
            <div className="flex justify-between items-center text-[12px]">
              <p>Area</p>
              <p>{area}</p>
            </div>
            <div className="flex justify-between items-center text-[12px]">
              <p>Sectors</p>
              <p>{sectors}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
