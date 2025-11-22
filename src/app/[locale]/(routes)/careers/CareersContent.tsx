import React from "react";
import Button from "@/components/button";

const jobs = [
  {
    title: "Urban & Landscape Team Leader",
  },
  {
    title: "Structure Engineer",
  },
  {
    title: "Sr. Structure Engineer",
  },
];

const CareersContent = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 px-[30px] pb-16">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="w-full px-[40px] py-[72px] flex justify-between flex-wrap items-center gap-4 bg-[#EDEDED] hover:bg-primary group/parent max-md:px-4 max-md:py-6 group-[.search]:flex-col transition-colors duration-300"
        >
          <p className="flex-1 text-base font-medium w-[-webkit-fill-available] max-md:text-center text-primary group-hover/parent:text-white max-xl:text-xs transition-colors duration-300">
            {job.title}
          </p>
          <div className="w-full flex-1 flex max-md:items-center max-md:justify-center max-md:mx-auto justify-end">
            <Button
              text="Apply Now"
              textColor="text-primary"
              hoverColor="hover:text-secondry"
              width="w-[120px]"
              height="h-[36px]"
              textSize="text-[11.5px]"
              svgClassName="!fill-primary group-hover/parent:fill-secondry"
              arrowSize="w-4 h-4"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareersContent;
