"use client";
import React from "react";
import { motion } from "motion/react";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  "all",
  "Residential",
  "Hospitality",
  "Offices",
  "Commercial",
  "Healthcare",
  "Educational",
];

const Tabs = ({ activeTab, setActiveTab }: TabsProps) => {
  return (
    <div className="flex flex-1 max-w-full overflow-x-auto" id="projects">
      <div className="flex uppercase py-3 px-[18px] text-sm w-full gap-8 items-center">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative cursor-pointer whitespace-nowrap pb-1"
          >
            <span
              className={`transition-colors duration-300 ${
                activeTab === tab
                  ? "text-black font-medium"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </span>
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
