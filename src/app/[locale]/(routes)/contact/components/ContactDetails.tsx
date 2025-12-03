import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import SocialLinks from "./SocialLinks";
import { ContactInfo } from "@/types/contactTypes";

interface ContactDetailsProps {
  contactInfo: ContactInfo;
}

const ContactDetails = ({ contactInfo }: ContactDetailsProps) => {
  return (
    <div className="flex-1 flex flex-col w-full h-full items-center">
      <div className="w-full px-[30px]">
        <h3 className="text-2xl font-bold mb-4 uppercase text-primary">
          Contact Details
        </h3>

        <div className="flex flex-col gap-2 my-3">
          {/* Address */}
          <div className="flex items-center gap-6">
            <MapPin className="size-6 text-primary" />
            <div className="flex flex-col">
              <p className="text-primary text-xs cursor-pointer">
                {contactInfo.address}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-6">
            <Mail className="size-6 text-primary" />
            <a
              className="text-primary text-xs hover:underline"
              href={`mailto:${contactInfo.email}`}
            >
              {contactInfo.email}
            </a>
          </div>

          {/* Phone Numbers */}
          {contactInfo.phone1 && (
            <div className="flex items-center gap-6">
              <Phone className="size-6 text-primary" />
              <a
                className="text-primary text-xs hover:underline"
                href={`tel:${contactInfo.phone1}`}
              >
                {contactInfo.phone1}
              </a>
            </div>
          )}
          {contactInfo.phone2 && contactInfo.phone2 !== contactInfo.phone1 && (
            <div className="flex items-center gap-6">
              <Phone className="size-6 text-primary" />
              <a
                className="text-primary text-xs hover:underline"
                href={`tel:${contactInfo.phone2}`}
              >
                {contactInfo.phone2}
              </a>
            </div>
          )}
        </div>

        {/* Social Links */}
        <SocialLinks contactInfo={contactInfo} />
      </div>
    </div>
  );
};

export default ContactDetails;
