"use client";
import React from "react";
import { PhoneInput as ReactPhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface PhoneInputProps {
  value: string;
  onChange: (phone: string) => void;
  className?: string;
}

const PhoneInput = ({ value, onChange, className = "" }: PhoneInputProps) => {
  return (
    <div className={`w-full ${className}`}>
      <ReactPhoneInput
        defaultCountry="eg"
        value={value}
        onChange={onChange}
        inputClassName="!w-full !h-10 !px-4 !py-[20px] !border !border-[#EAEAEA] !focus:outline-none !rounded-r-md !bg-white !text-primary"
        countrySelectorStyleProps={{
          buttonClassName:
            "!h-10 !border !border-[#EAEAEA] !rounded-l-md !bg-white !px-2",
        }}
        style={{
          width: "100%",
        }}
      />
    </div>
  );
};

export default PhoneInput;
