import React from "react";
import { ContactInfo } from "@/types/contactTypes";
import SocialIcon from "@/components/SocialIcon";

interface SocialLinksProps {
  contactInfo: ContactInfo;
}

const SocialLinks = ({ contactInfo }: SocialLinksProps) => {
  const hasAnySocialLink =
    contactInfo.facebook_link ||
    contactInfo.linkedin_link ||
    contactInfo.instagram_link;

  if (!hasAnySocialLink) return null;

  return (
    <div className="flex flex-col gap-3 my-6">
      <p className="font-bold text-primary">Follow us</p>
      <div className="flex gap-4">
        {contactInfo.facebook_link && (
          <SocialIcon href={contactInfo.facebook_link} platform="facebook" />
        )}
        {contactInfo.linkedin_link && (
          <SocialIcon href={contactInfo.linkedin_link} platform="linkedin" />
        )}
        {contactInfo.instagram_link && (
          <SocialIcon href={contactInfo.instagram_link} platform="instagram" />
        )}
      </div>
    </div>
  );
};

export default SocialLinks;
