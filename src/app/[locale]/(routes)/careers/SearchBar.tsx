import React from "react";
import { Search } from "lucide-react";
import Button from "@/components/button";

const SearchBar = () => {
  return (
    <div className="flex flex-1 items-center gap-8 max-w-full w-full max-md:gap-4 max-md:flex-col max-sm:w-full max-sm:px-0 border-y border-text-gray-200 py-2">
      <div className="flex flex-1 w-full items-center bg-[#F8F8F8] px-5 py-4 h-[45px] max-md:p-2 max-w-[40%]">
        <Search className="size-[26px] me-4 max-md:hidden text-gray-400" />
        <input
          placeholder="Job Title"
          className="flex-1 w-full bg-transparent focus:border-none focus:outline-none text-sm"
        />
      </div>
      <div className="relative w-fit max-md:w-full flex justify-center">
        <Button
          text="FIND JOBS"
          textColor="text-primary"
          hoverColor="hover:text-secondry"
          width="w-[140px]"
          height="h-[45px]"
          textSize="text-[12px]"
          svgClassName="!fill-transparent stroke-primary group-hover/parent:stroke-secondry"
        />
      </div>
    </div>
  );
};

export default SearchBar;
