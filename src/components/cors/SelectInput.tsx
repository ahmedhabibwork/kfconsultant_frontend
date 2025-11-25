"use client";
import React from "react";
import Select, { StylesConfig } from "react-select";

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const customStyles: StylesConfig<Option, false> = {
  control: (provided) => ({
    ...provided,
    height: "40px",
    minHeight: "40px",
    borderColor: "#EAEAEA",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#EAEAEA",
    },
    backgroundColor: "white",
    borderRadius: "0.375rem", // rounded-md
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "40px",
    padding: "0 16px",
  }),
  input: (provided) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "40px",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#9CA3AF", // gray-400
    fontSize: "14px",
    textTransform: "uppercase",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#0b173c", // primary color
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#0b173c"
      : state.isFocused
      ? "#f3f4f6"
      : "white",
    color: state.isSelected ? "white" : "#0b173c",
    cursor: "pointer",
  }),
};

const SelectInput = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
  className = "",
}: SelectInputProps) => {
  const selectedOption = options.find((opt) => opt.value === value) || null;
  const instanceId = React.useId();

  return (
    <div className={`w-full ${className}`}>
      <Select
        instanceId={instanceId}
        options={options}
        value={selectedOption}
        onChange={(option) => onChange(option ? option.value : "")}
        styles={customStyles}
        placeholder={placeholder}
        classNamePrefix="react-select"
        isSearchable={false}
      />
    </div>
  );
};

export default SelectInput;
