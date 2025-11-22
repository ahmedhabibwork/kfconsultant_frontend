"use client";
import React from "react";
import { motion } from "motion/react";

interface TeamTabsProps {
  activeTab: "leadership" | "team";
  setActiveTab: (tab: "leadership" | "team") => void;
}

const TeamTabs = ({ activeTab, setActiveTab }: TeamTabsProps) => {
  return (
    <div className="w-full text-center mb-10">
      <div className="flex justify-center items-center border-b border-gray-200 relative">
        <div className="flex relative">
          <button
            onClick={() => setActiveTab("leadership")}
            className={`px-6 py-4 text-sm font-medium transition-colors relative z-10 ${
              activeTab === "leadership"
                ? "text-primary"
                : "text-gray-500 hover:text-primary"
            }`}
          >
            LEADERSHIP
          </button>
          <button
            onClick={() => setActiveTab("team")}
            className={`px-6 py-4 text-sm font-medium transition-colors relative z-10 ${
              activeTab === "team"
                ? "text-primary"
                : "text-gray-500 hover:text-primary"
            }`}
          >
            TEAM
          </button>

          {/* Animated Underline */}
          <motion.div
            className="absolute bottom-0 h-[2px] bg-primary"
            initial={false}
            animate={{
              left: activeTab === "leadership" ? 0 : "50%",
              width: "50%",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamTabs;
