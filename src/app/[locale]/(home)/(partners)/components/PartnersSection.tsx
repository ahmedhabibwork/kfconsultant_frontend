import React from "react";
import Marquee from "./Marquee";

const PartnersSection = () => {
  return (
    <div
      id="partners"
      className="pt-[30px] justify-evenly lg:pt-[60px] group-[.careers]:lg:pt-[60px] flex flex-col items-center max-md:h-[400px] group-[.about]:snap-start panel relative bg-white"
    >
      <div className="max-lg:scale-[68%]">
        <div className="flex flex-col gap-[14px] uppercase w-fit items-center text-center">
          <div className="text-text-gray-200 w-fit gap-2 flex items-center max-md:w-full justify-center">
            <div className="w-max text-center text-[13px] text-gray-500">
              Success Partners
            </div>
          </div>
          <h1 className="text-[38px] max-md:text-4xl w-full leading-[25px] ltr:tracking-[2px] text-primary rtl:mb-2 font-bold">
            Trusted By
          </h1>
        </div>
      </div>
      <div dir="ltr" className="w-full">
        <Marquee />
      </div>
    </div>
  );
};

export default PartnersSection;
