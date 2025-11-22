"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Input from "@/components/cors/Input";
import PhoneInput from "@/components/cors/PhoneInput";
import SelectInput from "@/components/cors/SelectInput";
import Button from "@/components/button";

const enquiryOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "project", label: "Project Inquiry" },
  { value: "career", label: "Career Inquiry" },
  { value: "partnership", label: "Partnership Inquiry" },
];

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

  const handlePhoneChange = (phone: string) => {
    setFormData((prev) => ({ ...prev, phone }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, enquiryType: value }));
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
            <PhoneInput value={formData.phone} onChange={handlePhoneChange} />
          </div>
        </div>

        {/* Enquiry Type */}
        <div className="w-full">
          <SelectInput
            options={enquiryOptions}
            value={formData.enquiryType}
            onChange={handleSelectChange}
            placeholder="ENQUIRY TYPE"
          />
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
        <Button text="Send Message" className=" text-primary" />
      </form>
    </div>
  );
};

export default ContactForm;
