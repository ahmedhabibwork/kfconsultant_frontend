"use client";

import { motion } from "motion/react";
import AboutHeader from "./AboutHeader";
import OurPurpose from "./(our_purpose)";
import Vision from "./(vision)";
import OurFounder from "./(our_founder)";
import OurPeople from "./(our_people)";
import { AboutUs, TeamMember } from "@/types/aboutTypes";

interface AboutPageClientProps {
  aboutUs: AboutUs;
  team: TeamMember[];
}

const AboutPageClient = ({ aboutUs, team }: AboutPageClientProps) => {
  return (
    <div className="">
      <AboutHeader />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <OurPurpose aboutUs={aboutUs} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Vision aboutUs={aboutUs} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <OurFounder aboutUs={aboutUs} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <OurPeople team={team} />
      </motion.div>
    </div>
  );
};

export default AboutPageClient;
