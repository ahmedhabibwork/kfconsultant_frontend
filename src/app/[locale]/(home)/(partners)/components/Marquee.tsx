"use client";
import React from "react";
import PartnerLogo from "./PartnerLogo";
import { Client } from "@/types/homeTypes";

interface MarqueeProps {
  clients: Client[];
}

const Marquee = ({ clients }: MarqueeProps) => {
  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="flex w-full">
        <div className="flex gap-10 pr-10 animate-marquee w-max">
          {[...clients, ...clients].map((client, index) => (
            <PartnerLogo
              key={`${client.title}-${index}`}
              src={client.image}
              alt={client.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
