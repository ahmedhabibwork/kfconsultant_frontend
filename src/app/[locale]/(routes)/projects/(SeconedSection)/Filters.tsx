"use client";
import React from "react";
import Select from "react-select";
import { useRouter, useSearchParams } from "next/navigation";
import { Filters as FiltersType } from "@/types/projectsTypes";

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "white",
    borderColor: "#e5e7eb", // gray-200
    borderRadius: "0px",
    height: "42px",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#d1d5db", // gray-300
    },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#9ca3af", // gray-400
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "#9ca3af",
  }),
};

interface FiltersProps {
  filters: FiltersType;
}

// Helper function to convert Record<string, string> to react-select options
const toOptions = (record: Record<string, string>) => {
  return Object.entries(record).map(([key, value]) => ({
    value: key,
    label: value,
  }));
};

const Filters = ({ filters }: FiltersProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`);
  };

  const scaleOptions = toOptions(filters.scale);
  const scopeOptions = toOptions(filters.scope);
  const statusOptions = toOptions(filters.status);
  const yearOptions = toOptions(filters.year);

  return (
    <div className="flex flex-1 gap-[18px] w-full max-xl:border-b border-gray-200 py-3">
      <div
        className="w-full flex justify-center max-xl:gap-4 items-center"
        style={{ gap: "18px" }}
      >
        {/* Scope */}
        <div className="relative w-full flex-1">
          <label htmlFor="scope" className="sr-only hidden">
            Scope
          </label>
          <Select
            instanceId="scope-select"
            options={scopeOptions}
            styles={customStyles}
            placeholder="Scope"
            className="w-full"
            isClearable
            onChange={(option) =>
              handleFilterChange("scope", option?.value || null)
            }
            value={
              scopeOptions.find((o) => o.value === searchParams.get("scope")) ||
              null
            }
          />
        </div>

        {/* Scale */}
        <div className="relative w-full flex-1">
          <label htmlFor="scale" className="sr-only hidden">
            Scale
          </label>
          <Select
            instanceId="scale-select"
            options={scaleOptions}
            styles={customStyles}
            placeholder="Scale"
            className="w-full"
            isClearable
            onChange={(option) =>
              handleFilterChange("scale", option?.value || null)
            }
            value={
              scaleOptions.find((o) => o.value === searchParams.get("scale")) ||
              null
            }
          />
        </div>

        {/* Status */}
        <div className="relative w-full flex-1">
          <label htmlFor="status" className="sr-only hidden">
            Status
          </label>
          <Select
            instanceId="status-select"
            options={statusOptions}
            styles={customStyles}
            placeholder="Status"
            className="w-full"
            isClearable
            onChange={(option) =>
              handleFilterChange("status", option?.value || null)
            }
            value={
              statusOptions.find(
                (o) => o.value === searchParams.get("status")
              ) || null
            }
          />
        </div>

        {/* Year */}
        <div className="relative w-full flex-1">
          <label htmlFor="year" className="sr-only hidden">
            Year
          </label>
          <Select
            instanceId="year-select"
            options={yearOptions}
            styles={customStyles}
            placeholder="Year"
            className="w-full"
            isClearable
            onChange={(option) =>
              handleFilterChange("year", option?.value || null)
            }
            value={
              yearOptions.find((o) => o.value === searchParams.get("year")) ||
              null
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
