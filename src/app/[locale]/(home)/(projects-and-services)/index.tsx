"use client";
import React from "react";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import ProjectSlider from "./ProjectSlider";
import { Project, Service } from "@/types/homeTypes";

interface ProjectsAndServicesProps {
  projects: Project[];
  services: Service[];
}

const ProjectsAndServices = ({
  projects,
  services,
}: ProjectsAndServicesProps) => {
  return (
    <section className="w-full min-h-screen snap-start py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Projects Section */}
        <div
          id="colorlib-project"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16"
        >
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="text-sm tracking-widest text-gray-600 uppercase">
              Explore
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl mb-6">
              <span className="font-light">Key </span>
              <span className="font-bold">PROJECTS</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thanks to our experience gained through our mega projects in
              various locations and countless projects, which are reflected in
              our present activities and operations provided by AACE through
              high-quality services. This experience encourages our organization
              to expand globally through more diverse projects.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700 font-medium transition-colors"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right Column - Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 lg:col-start-6"
          >
            <ProjectSlider projects={projects} />
          </motion.div>
        </div>

        {/* Services Section */}
        <div
          id="colorlib-services"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="text-sm tracking-widest text-gray-600 uppercase">
              WHAT WE DO?
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl mb-6">
              <span className="font-light">Services </span>
              <span className="font-bold">Offered</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We have a vast professional team and hands-on experience in
              structural design consultation and site supervision along with
              project development and management. AACE is also involved in the
              supervision of architectural, structural, and MEP-work
              construction projects.
            </p>
          </motion.div>

          {/* Right Column - Services Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 text-blue-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 pt-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsAndServices;
