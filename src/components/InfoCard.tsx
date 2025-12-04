"use client";
import React from "react";
import { Link } from "@/i18n/navigation";
import Button from "@/components/button";
import TextEditorReader from "@/components/TextReader";

interface InfoCardProps {
  title: string;
  subTitle: string;
  description: string;
  linkHref: string;
  buttonText: string;
  rtl?: boolean;
}

const InfoCard = ({
  title,
  subTitle,
  description,
  linkHref,
  buttonText,
  rtl = false,
}: InfoCardProps) => {
  return (
    <div className="relative w-[525px] h-[420px] bg-primary/30 backdrop-blur-sm leading-5 flex flex-col justify-center gap-[18px] px-6 lg:px-[40px] py-[18px] max-md:w-full max-md:h-fit">
      <div className="flex flex-col gap-[14px] uppercase w-fit">
        <div className="text-gray-200 w-fit gap-2 flex items-center max-md:w-full">
          <div className="w-max text-center text-[13px]">{subTitle}</div>
          <div className="w-[60px] max-w-full h-px bg-gray-200/50"></div>
        </div>
        <h1 className="text-[23px] max-md:text-2xl w-full leading-[25px] ltr:tracking-[2px] text-white">
          {title}
        </h1>
      </div>
      <div className="text-gray-100 font-medium line-clamp-6 text-justify text-[13px] leading-relaxed max-md:text-sm">
        <TextEditorReader value={description} />
      </div>
      <div className="max-sm:scale-75 max-xs:scale-[.69] max-sm:-translate-x-11 max-xs:-translate-x-6 flex justify-end pe-4">
        <Link href={linkHref}>
          <Button text={buttonText} />
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
