import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface NewsCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

const NewsCard = ({ id, title, date, description, image }: NewsCardProps) => {
  return (
    <Link
      href={`/news/${id}`}
      className="text-white h-full max-md:w-full group z-1 flex flex-col overflow-hidden"
    >
      <div className="relative w-full h-[280px]">
        <Image
          alt={title}
          src={image}
          fill
          className="object-cover duration-300 grayscale-30 contrast-80 hover:grayscale-0 hover:contrast-100"
        />
      </div>
      <div className="flex-1 bg-primary backdrop-blur-[13px]">
        <div className="h-full w-full px-6 py-5 flex flex-col gap-2">
          <h3 className="text-xl max-sm:text-base font-bold">{title}</h3>
          <p>{date}</p>
          <p className="line-clamp-2 text-xs">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
