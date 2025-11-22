import React from "react";
import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  title: string;
  imageUrl: string;
  department?: string;
}

const TeamMemberCard = ({
  name,
  title,
  imageUrl,
  department,
}: TeamMemberCardProps) => {
  return (
    <div className="w-[280px] max-w-full duration-300 grayscale-30 contrast-80 hover:grayscale-0 hover:contrast-100 cursor-pointer hover:scale-105 hover:-translate-y-2">
      <div className="w-[340px] h-[300px] max-w-full relative">
        <Image
          alt={name}
          src={imageUrl}
          fill
          className="size-full object-cover object-top"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-primary text-[15px] font-bold mt-4 max-sm:text-sm">
          {name}
        </p>
        <p className="text-primary text-[12px] text-center max-sm:text-sm">
          {title}
        </p>
        {department && (
          <p className="text-primary text-[12px] text-center max-sm:text-sm">
            {department}
          </p>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;
