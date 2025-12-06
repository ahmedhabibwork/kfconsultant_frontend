import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";

interface SocialIconProps {
  href: string;
  platform: "facebook" | "linkedin" | "instagram";
  className?: string;
}

const SocialIcon = ({ href, platform, className = "" }: SocialIconProps) => {
  const platformConfig = {
    facebook: {
      icon: Facebook,
      bgColor: "bg-[#1877F2] hover:bg-[#0C63D4]",
      label: "Facebook",
    },
    linkedin: {
      icon: Linkedin,
      bgColor: "bg-[#0A66C2] hover:bg-[#004182]",
      label: "LinkedIn",
    },
    instagram: {
      icon: Instagram,
      bgColor:
        "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90",
      label: "Instagram",
    },
  };

  const config = platformConfig[platform];
  const Icon = config.icon;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${config.bgColor} p-2.5 rounded-full flex items-center justify-center transition-all duration-300 ${className}`}
      aria-label={config.label}
    >
      <Icon className="w-5 h-5 text-white" />
    </Link>
  );
};

export default SocialIcon;
