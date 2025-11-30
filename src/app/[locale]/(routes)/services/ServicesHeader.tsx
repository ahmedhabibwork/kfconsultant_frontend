"use client";
import React from "react";
import HeaderComponent from "@/components/HeaderComponent";

const ServicesHeader = () => {
  return (
    <HeaderComponent background="/aboutbg.webp">
      <h1 className="uppercase font-bold text-[45px] md:text-[60px] tracking-widest">
        Services
      </h1>
    </HeaderComponent>
  );
};

export default ServicesHeader;
