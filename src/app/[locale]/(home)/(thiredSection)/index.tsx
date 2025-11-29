"use client";
import React from "react";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import ProjectSlider from "./ProjectSlider";
import { projects } from "./projectsData";

const ThirdSection = () => {
  return (
    <section
      id="colorlib-project"
      className="w-full min-h-screen snap-start py-16 lg:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
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
      </div>
    </section>
  );
};

export default ThirdSection;
