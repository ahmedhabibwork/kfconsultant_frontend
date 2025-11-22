"use client";
import React, { useState } from "react";
import TeamTabs from "./components/TeamTabs";
import TeamMemberCard from "./components/TeamMemberCard";
import { leadershipData, teamData } from "./data";
import SelectInput from "@/components/cors/SelectInput"; // Reusing the SelectInput we made earlier

const TeamContent = () => {
  const [activeTab, setActiveTab] = useState<"leadership" | "team">(
    "leadership"
  );
  const [departmentFilter, setDepartmentFilter] = useState(
    "Architecture Design"
  );
  const [countryFilter, setCountryFilter] = useState("Egypt");

  const departmentOptions = [
    { value: "Architecture Design", label: "Architecture Design" },
    // Add more options if needed based on data
  ];

  const countryOptions = [
    { value: "Egypt", label: "Egypt" },
    // Add more options if needed
  ];

  return (
    <div className="px-[30px] py-16" id="Team">
      <TeamTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-16">
        {activeTab === "leadership" && (
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {leadershipData.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                title={member.title}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        )}

        {activeTab === "team" && (
          <div>
            {/* Filters */}
            <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
              <div className="flex w-full flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 lg:w-[450px]">
                <SelectInput
                  options={departmentOptions}
                  value={departmentFilter}
                  onChange={setDepartmentFilter}
                  className="flex-1"
                />
                <SelectInput
                  options={countryOptions}
                  value={countryFilter}
                  onChange={setCountryFilter}
                  className="flex-1"
                />
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 mt-16">
              {teamData.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  title={member.title}
                  imageUrl={member.imageUrl}
                  department={member.department}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamContent;
