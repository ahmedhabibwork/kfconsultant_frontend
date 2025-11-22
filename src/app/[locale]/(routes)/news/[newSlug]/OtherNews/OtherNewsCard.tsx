import React from "react";
import Image from "next/image";
import Link from "next/link";

interface OtherNewsCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

const OtherNewsCard = ({
  id,
  title,
  date,
  description,
  image,
}: OtherNewsCardProps) => {
  return (
    <Link
      href={`/news/${id}`}
      className="text-white flex-1 w-[300px] h-fit group max-md:w-full z-1"
    >
      <div className="relative w-full h-[280px]">
        <Image
          alt={title}
          src={image}
          fill
          className="object-cover duration-300 grayscale-30 contrast-80 hover:grayscale-0 hover:contrast-100"
        />
      </div>
      <div className="relative">
        <div className="bg-primary backdrop-blur-[13px] px-6 py-8 flex flex-col gap-2">
          <p className="opacity-60 text-white text-sm uppercase leading-[33.12px] max-md:text-sm">
            {date}
          </p>
          <h3 className="text-lg font-bold line-clamp-1 max-md:text-lg">
            {title}
          </h3>
          <p className="opacity-60 text-white line-clamp-1 text-xs uppercase leading-[33.12px] max-h-[200px] max-md:text-sm">
            {description}
          </p>
          <div className="flex items-end justify-end gap-2 group/parent">
            <p className="text-[14px] font-bold hover:text-secondry max-md:text-sm">
              Read More
            </p>
            <div className="rtl:rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g id="arrow-right">
                  <path
                    id="Icon"
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    className="stroke-white group-hover/parent:stroke-amber-500"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OtherNewsCard;
