"use client";
import Image from "next/image";
import { motion } from "motion/react";

const HeaderComponent = ({
  children,
  background,
}: {
  children: React.ReactNode;
  background: string;
}) => {
  return (
    <section
      id="first-section"
      className="panel w-full min-h-[200px] md:min-h-[300px] h-full snap-start overflow-y-auto relative text-white flex flex-col"
    >
      <Image
        alt="Background"
        src={background}
        fill
        className="bg-image object-cover -z-20"
        priority
      />
      <div className="bg-overlay bg-black/30 absolute inset-0 z-10"></div>

      <div
        className="relative z-20 flex flex-col flex-1 justify-center items-center px-4"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="300"
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HeaderComponent;
