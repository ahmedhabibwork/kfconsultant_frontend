"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types/homeTypes";
import { motion } from "motion/react";

interface ProjectsAndServicesProps {
  projects: Project[];
  whatsappNumber: string;
  phoneNumber: string;
}

const ProjectsAndServices = ({ projects }: ProjectsAndServicesProps) => {
  const featuredProjects = projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <motion.span
                variants={itemVariants}
                className="text-xs font-semibold tracking-widest text-[#666666] uppercase mb-2 block"
              >
                SHOWCASE
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="text-3xl lg:text-4xl font-bold text-black tracking-tight"
              >
                Featured Projects
              </motion.h2>
            </div>

            <motion.div variants={itemVariants}>
              <Link
                href="/projects"
                className="group inline-flex items-center text-sm font-bold text-black hover:text-[#666666] transition-colors"
              >
                Show All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block w-full h-full"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.cover_image})` }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-1 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-medium line-clamp-1">
                      {[project.category.title, project.location]
                        .filter(Boolean)
                        .join(", ")}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsAndServices;
