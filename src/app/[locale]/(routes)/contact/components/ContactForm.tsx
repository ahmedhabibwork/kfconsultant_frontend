"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Input from "@/components/cors/Input";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+20",
    enquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-[30px] flex-1 max-sm:py-[10px] w-full max-w-3xl mx-auto bg-[#EAEAEA]">
      <div className="flex flex-col gap-3 mt-2 mb-[40px] mx-auto">
        <h2 className="text-2xl text-primary max-sm:text-lg font-bold uppercase">
          Get in Touch
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-4 max-sm:gap-3 items-center"
      >
        {/* Name Fields */}
        <div className="flex w-full items-center gap-6 flex-wrap max-md:flex-col max-sm:gap-3">
          <div className="flex-1 w-full">
            <Input
              placeholder="FIRST NAME"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1 w-full">
            <Input
              placeholder="LAST NAME"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email & Phone Fields */}
        <div className="flex w-full items-center gap-6 flex-wrap max-md:flex-col max-sm:gap-3">
          <div className="w-full flex-1">
            <Input
              placeholder="EMAIL"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex-1">
            <Input
              placeholder="PHONE NUMBER"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Enquiry Type */}
        <div className="w-full">
          <select
            className="w-full h-10 px-4 py-[10px] border border-[#EAEAEA] focus:outline-none max-sm:h-9 rounded bg-white text-primary"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
          >
            <option value="">Enquiry type</option>
            <option value="general">General Inquiry</option>
            <option value="project">Project Inquiry</option>
            <option value="career">Career Inquiry</option>
            <option value="partnership">Partnership Inquiry</option>
          </select>
        </div>

        {/* Message */}
        <div className="w-full">
          <textarea
            placeholder="YOUR MESSAGE"
            rows={3}
            className="flex-1 w-full px-4 py-[20px] border border-[#EAEAEA] focus:outline-none resize-none rounded bg-white"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="h-[60px]">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 max-md:scale-[.95] h-fit mx-auto">
            <button
              type="submit"
              className="group/parent text-primary hover:text-amber-500 w-[200px] h-[60px] relative flex items-center justify-center text-center capitalize transition-colors"
            >
              <p className="text-[13px] text-center z-10">Send Message</p>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="61"
                  viewBox="0 0 277 61"
                  fill="none"
                  className="w-full h-full"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 1H276V13.5986H277V1V0H276H1H0V1V59V60H1H276H277V59V46.4015H276V59H1V1Z"
                    className="fill-primary group-hover/parent:fill-amber-500 transition-colors"
                  />
                </svg>
              </div>
              <div className="z-30 absolute -right-2 group-hover/parent:-right-6 duration-300 top-[50%] -translate-y-1/2 flex items-center">
                <ArrowRight
                  className="stroke-primary group-hover/parent:stroke-amber-500 transition-colors"
                  strokeWidth={1.5}
                />
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
