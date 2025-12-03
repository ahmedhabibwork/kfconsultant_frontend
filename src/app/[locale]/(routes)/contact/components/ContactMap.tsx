import React from "react";

interface ContactMapProps {
  mapLink: string;
}

const ContactMap = ({ mapLink }: ContactMapProps) => {
  return (
    <div className="flex-1 max-md:flex-none flex h-[630px] max-md:h-[300px] flex-col max-sm:pt-[10px] max-sm:pb-[25px] w-full justify-center">
      <iframe
        src={mapLink}
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        title="Google Maps location"
        className="border-0"
      />
    </div>
  );
};

export default ContactMap;
