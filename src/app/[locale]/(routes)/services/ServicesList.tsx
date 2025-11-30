"use client";
import React from "react";
import ServiceCard from "./ServiceCard";
import {
  ClipboardList,
  HardHat,
  Layers,
  Minimize2,
  Construction,
  BrickWall,
  Search,
  TrainFront,
  Hammer,
  RefreshCw,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Project Management",
    description:
      "Overseeing all aspects of construction, from planning and budgeting to execution and delivery, to ensure the project meets its goals on time, within scope, and to the highest standards.",
    icon: ClipboardList,
  },
  {
    id: 2,
    title: "Construction Supervision",
    description:
      "Oversight of on-site work progress, advising, and coordinating daily operations.",
    icon: HardHat,
  },
  {
    id: 3,
    title: "Reinforced Concrete Design",
    description:
      "Developing methods for the design of reinforced concrete members such as beams, slabs, footings, and columns.",
    icon: Layers,
  },
  {
    id: 4,
    title: "Prestressed Concrete Design",
    description:
      "Concrete that is placed under a compressive load provides specific advantages over other forms of concrete.",
    icon: Minimize2,
  },
  {
    id: 5,
    title: "Steel Structures",
    description:
      "A metal structure that is made of structural steel components connected to each other to carry loads and provide rigidity.",
    icon: Construction,
  },
  {
    id: 6,
    title: "Masonry Structures",
    description:
      "A construction system in which the walls of the building perform a structural function, using masonry units arranged in a way that is self-supporting and load-bearing.",
    icon: BrickWall,
  },
  {
    id: 7,
    title: "Soil Investigation and Foundation Design",
    description:
      "The investigation aims to provide the necessary information about the geological, physical, and geotechnical properties of soil, which is a prerequisite to the safe and economical construction of all civil engineering works.",
    icon: Search,
  },
  {
    id: 8,
    title: "Bridges and Tunnels",
    description:
      "An over/below-ground structure provides a route for roads, tunnels, pedestrian walkways, and railways, allowing them to pass any obstacles.",
    icon: TrainFront,
  },
  {
    id: 9,
    title: "Repair and Strengthening",
    description:
      "The process involves upgrading structures to improve their performance under existing loads or to increase the strength of structural members to carry additional loads in relation to design codes, defects, or seismic conditions.",
    icon: Hammer,
  },
  {
    id: 10,
    title: "Rehabilitation of Structures",
    description:
      "The goal is to rehabilitate, reconstruct, or complete existing facilities or buildings to improve, replace, or add utilities and to perform site improvement work, while ensuring that the exterior dimensions remain substantially unchanged.",
    icon: RefreshCw,
  },
];

const ServicesList = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white snap-start">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
