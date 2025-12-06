import React from "react";
import { MapPin, Mail } from "lucide-react";
import SocialLinks from "./SocialLinks";
import { ContactInfo } from "@/types/contactTypes";
import WhatsAppButton from "@/components/WhatsAppButton";
import PhoneNumber from "@/components/PhoneNumber";

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

        <div className="flex flex-col gap-4 my-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">Address</span>
              <p className="text-primary text-sm leading-relaxed">
                {contactInfo.address}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1">Email</span>
              <a
                className="text-primary text-sm hover:text-blue-600 transition-colors"
                href={`mailto:${contactInfo.email}`}
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="flex flex-col gap-3">
            {contactInfo.phone1 && (
              <PhoneNumber
                phoneNumber={contactInfo.phone1}
                className="items-start"
              />
            )}
            {contactInfo.phone2 &&
              contactInfo.phone2 !== contactInfo.phone1 && (
                <PhoneNumber
                  phoneNumber={contactInfo.phone2}
                  className="items-start"
                />
              )}
          </div>

          {/* WhatsApp */}
          {contactInfo.whatsapp_number && (
            <WhatsAppButton
              phoneNumber={contactInfo.whatsapp_number}
              className="items-start"
            />
          )}
        </div>

        {/* Social Links */}
        <SocialLinks contactInfo={contactInfo} />
      </div>
    </div>
  );
};

export default ContactDetails;
