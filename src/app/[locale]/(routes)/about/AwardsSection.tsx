"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const awards = [
  {
    id: 1,
    title: "ISO 9001:2015 Certificate",
    image: "/degree/certificate.webp",
    delay: 0,
  },
  {
    id: 2,
    title: "Top Construction Service Award",
    image: "/degree/topconstructionservice.webp",
    delay: 0.3,
  },
  {
    id: 3,
    title: "International Quality Crown Award London",
    image: "/degree/abccertificate.webp",
    delay: 0.6,
  },
];

const AwardsSection = () => {
  return (
    <section
      className="panel w-full h-[calc(100vh-170px)] max-lg:h-fit mb-6 snap-start overflow-y-auto relative text-white flex flex-col items-center justify-center"
      dir="ltr"
    >
      <div className="flex flex-col items-center gap-3 px-[30px] pt-[30px] max-md:pt-[10px]">
        <div className="max-sm:scale-[66%]">
          <div className="flex flex-col gap-[14px] uppercase w-fit items-center text-center">
            <div className="text-gray-500 w-fit gap-2 flex items-center max-md:w-full justify-center">
              <div className="w-max text-center text-[13px] text-[10px]">
                Take a look around
              </div>
            </div>
            <h1 className="text-[23px] max-md:text-2xl w-full leading-[25px] tracking-[2px] text-primary text-[38px] max-md:text-4xl rtl:mb-2 font-bold">
              Awards
            </h1>
          </div>
        </div>
      </div>

      <div className="flex gap-[18px] mt-8 max-lg:flex-col max-md:items-center justify-center px-[30px] w-full flex-wrap">
        {awards.map((award, index) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: award.delay }}
            className="flex flex-col items-center gap-2"
          >
            <div className="size-[380px] max-sm:size-[220px] relative flex flex-col">
              <Image
                alt={award.title}
                src={award.image}
                fill
                className="w-full h-full object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-primary text-sm max-md:text-base max-md:text-center font-semibold mt-4">
              {award.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
