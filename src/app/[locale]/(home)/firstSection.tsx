"use client";
import React from "react";
import Image from "next/image";
import { Search, Globe } from "lucide-react";
import { motion } from "motion/react";
import MenuButton from "@/components/cors/MenuButton";
import { Link } from "@/i18n/navigation";

const FirstSection = () => {
  return (
    <section
      id="first-section"
      className="panel w-screen h-screen snap-start overflow-y-auto relative text-white"
    >
      <Image
        alt="Background"
        src="/home-first-section.webp"
        fill
        className="bg-image object-cover -z-20"
        priority
      />
      <div className="bg-overlay bg-black/30 absolute inset-0"></div>

      <div
        className="z-10 flex flex-col h-[calc(100vh-270px)] justify-center items-center px-4 mt-[136px]"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="300"
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            src="/logohome.webp"
            alt="DMA Logo"
            width={622}
            height={156}
            className="max-w-[466.5px] max-sm:max-w-[200px] z-10"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSection;
