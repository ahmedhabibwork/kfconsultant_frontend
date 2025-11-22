"use client";
import React from "react";
import { motion } from "motion/react";
import PartnerLogo from "./PartnerLogo";
import { partners } from "./data";

const Marquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="flex w-full">
        <motion.div
          className="flex gap-10 pr-10"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 90,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "fit-content" }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <PartnerLogo
              key={`${partner.name}-${index}`}
              src={partner.src}
              alt={partner.name}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
