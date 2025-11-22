"use client";
import React from "react";
import PartnerLogo from "./PartnerLogo";
import { partners } from "./data";

const Marquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="flex w-full">
        <div className="flex gap-10 pr-10 animate-marquee w-max">
          {[...partners, ...partners].map((partner, index) => (
            <PartnerLogo
              key={`${partner.name}-${index}`}
              src={partner.src}
              alt={partner.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
