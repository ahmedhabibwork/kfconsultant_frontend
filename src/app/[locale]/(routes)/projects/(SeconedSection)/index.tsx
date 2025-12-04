"use client";
import React from "react";
import Filters from "./Filters";
import Tabs from "./Tabs";
import ProjectsList from "./ProjectsList";
import Pagination from "./Pagination";
import {
  Project,
  Filters as FiltersType,
  Pagination as PaginationType,
} from "@/types/projectsTypes";

interface SeconedSectionProps {
  projects: Project[];
  filters: FiltersType;
  pagination: PaginationType;
}

const SeconedSection = ({
  projects,
  filters,
  pagination,
}: SeconedSectionProps) => {
  return (
    <div className="p-[30px] pt-16">
      <div className="flex gap-5 justify-between xl:border-y border-t border-gray-200 items-center max-xl:flex-col max-xl:gap-4 relative z-50">
        <Filters filters={filters} />
        <Tabs categories={filters.category} />
      </div>
      <ProjectsList projects={projects} />
      <Pagination pagination={pagination} />
    </div>
  );
};

export default SeconedSection;
