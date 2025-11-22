import React from "react";
import { MapPin, Mail } from "lucide-react";
import SocialLinks from "./SocialLinks";

const ContactDetails = () => {
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
                87, El-Mosheer Ahmed Ismail st., Sheraton, Heliopolis, Cairo,
                Egypt.
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-6">
            <Mail className="size-6 text-primary" />
            <a
              className="text-primary text-xs hover:underline"
              href="mailto:info@dma-mea.com"
            >
              info@dma-mea.com
            </a>
          </div>
        </div>

        {/* Social Links */}
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactDetails;
