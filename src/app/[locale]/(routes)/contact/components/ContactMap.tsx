import React from "react";

const ContactMap = () => {
  return (
    <div className="flex-1 max-md:flex-none flex h-[630px] max-md:h-[300px] flex-col max-sm:pt-[10px] max-sm:pb-[25px] w-full justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.0863369597278!2d31.372571999999998!3d30.091713600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581617417fd291%3A0xe18cbd92fe54c0be!2zODcg2KfZhNmF2LTZitixINij2K3ZhdivINil2LPZhdin2LnZitmE2Iwg2LTZitix2KfYqtmI2YYg2KfZhNmF2LfYp9ix2Iwg2YLYs9mFINin2YTZhtiy2YfYqdiMINmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArCA0NDcxMzIz!5e0!3m2!1sar!2seg!4v1724337321055!5m2!1sar!2seg"
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
