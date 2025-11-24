"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Input from "@/components/cors/Input";
import PhoneInput from "@/components/cors/PhoneInput";
import SelectInput from "@/components/cors/SelectInput";
import Button from "@/components/button";
import { submitContactForm } from "@/actions/contact";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const t = useTranslations("forms.contact");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+20",
    enquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const enquiryOptions = [
    { value: "general", label: t("options.general") },
    { value: "project", label: t("options.project") },
    { value: "career", label: t("options.career") },
    { value: "partnership", label: t("options.partnership") },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setStatus({ type: "success", message: t("success") });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "+20",
          enquiryType: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: t("error"),
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({ type: "error", message: t("error") });
    } finally {
      setIsSubmitting(false);
    }
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
          {t("title")}
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
              placeholder={t("firstName")}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1 w-full">
            <Input
              placeholder={t("lastName")}
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
              placeholder={t("email")}
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
            placeholder={t("enquiryType")}
          />
        </div>

        {/* Message */}
        <div className="w-full">
          <textarea
            placeholder={t("message")}
            rows={3}
            className="flex-1 w-full px-4 py-[20px] border border-[#EAEAEA] focus:outline-none resize-none rounded bg-white"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Status Message */}
        {status.message && (
          <div
            className={`w-full text-center p-2 rounded ${
              status.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )}

        {/* Submit Button */}
        <Button
          text={isSubmitting ? t("submitting") : t("submit")}
          className=" text-primary!"
          svgClassName="!fill-primary"
          disabled={isSubmitting}
          onClick={(e) => handleSubmit(e)}
        />
      </form>
    </div>
  );
};

export default ContactForm;
