"use client";
import React, { useState } from "react";
import Filters from "./Filters";
import Tabs from "./Tabs";
import ProjectsList from "./ProjectsList";

const SeconedSection = () => {
  const [activeTab, setActiveTab] = useState("Educational");

  return (
    <div className="p-[30px] pt-16">
      <div className="flex gap-5 justify-between xl:border-y border-t border-gray-200 items-center max-xl:flex-col max-xl:gap-4">
        <Filters />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <ProjectsList />
    </div>
  );
};

export default SeconedSection;
