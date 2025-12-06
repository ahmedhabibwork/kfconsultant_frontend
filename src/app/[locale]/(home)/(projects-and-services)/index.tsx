"use client";
import React from "react";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import ProjectSlider from "./ProjectSlider";
import { Project } from "@/types/homeTypes";

interface ProjectsAndServicesProps {
  projects: Project[];
  whatsappNumber: string;
}

const ProjectsAndServices = ({
  projects,
  whatsappNumber,
}: ProjectsAndServicesProps) => {
  console.log(whatsappNumber);
  return (
    <section className="w-full py-12 lg:py-16 bg-gray-50">
      <div className="container">
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
            <span
              style={{ letterSpacing: "1em" }}
              className="text-sm tracking-widest text-[#00006c] uppercase"
            >
              Explore
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl mb-6 flex flex-col">
              <span className="font-light text-[50px] uppercase">Key </span>
              <span className="font-bold text-[50px] uppercase">PROJECTS</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thanks to our experience gained through our mega projects in
              various locations and countless projects, which are reflected in
              our present activities and operations provided by AACE through
              high-quality services. This experience encourages our organization
              to expand globally through more diverse projects.
            </p>
            <div className="flex items-center gap-6 mt-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700 font-medium transition-colors"
              >
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#128C7E] transition-colors hover:scale-110 transform duration-300"
                aria-label="Contact via WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
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
      </div>
    </section>
  );
};

export default ProjectsAndServices;
