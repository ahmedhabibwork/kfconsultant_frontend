import React from "react";
import Image from "next/image";

interface PartnerLogoProps {
  src: string;
  alt: string;
}

const PartnerLogo = ({ src, alt }: PartnerLogoProps) => {
  return (
    <div className="relative w-[130px] h-[130px] flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={130}
        height={130}
        className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
};

export default PartnerLogo;
