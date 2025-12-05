"use client";
import Image from "next/image";
import { motion } from "motion/react";
import HeaderComponent from "@/components/HeaderComponent";

const FirstSection = () => {
  return (
    <HeaderComponent background="/home-first-section.webp">
      <Image
        src="/logohome.webp"
        alt="KFconsultant Logo"
        width={622}
        height={156}
        className="max-w-[466.5px] max-sm:max-w-[200px] z-10"
        priority
      />
    </HeaderComponent>
  );
};

export default FirstSection;
