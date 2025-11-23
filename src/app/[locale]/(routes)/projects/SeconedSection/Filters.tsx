"use client";
import React from "react";
import Select from "react-select";

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

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const Filters = () => {
  return (
    <div className="flex flex-1 gap-[18px] w-full max-xl:border-b border-gray-200 py-3">
      <div
        className="w-full flex justify-center max-xl:gap-4 items-center"
        style={{ gap: "18px" }}
      >
        {/* Client */}
        <div className="relative w-full flex-1">
          <label htmlFor="client" className="sr-only hidden">
            Client
          </label>
          <Select
            instanceId="client-select"
            options={options}
            styles={customStyles}
            placeholder="Client"
            className="w-full"
          />
        </div>

        {/* Service */}
        <div className="relative w-full flex-1">
          <label htmlFor="service" className="sr-only hidden">
            Service
          </label>
          <Select
            instanceId="service-select"
            options={options}
            styles={customStyles}
            placeholder="Service"
            className="w-full"
          />
        </div>

        {/* Location */}
        <div className="relative w-full flex-1">
          <label htmlFor="location" className="sr-only hidden">
            Location
          </label>
          <Select
            instanceId="location-select"
            options={options}
            styles={customStyles}
            placeholder="Location"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
