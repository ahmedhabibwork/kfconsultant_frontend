"use client";
import React, { useState } from "react";
import PhoneInput from "@/components/cors/PhoneInput";
import { submitContactForm } from "@/actions/contact";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

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

  const enquiryOptions = [
    { value: "general", label: t("options.general") },
    { value: "project", label: t("options.project") },
    { value: "career", label: t("options.career") },
    { value: "partnership", label: t("options.partnership") },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        toast.success(t("success"));
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "+20",
          enquiryType: "",
          message: "",
        });
      } else {
        toast.error(t("error"));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(t("error"));
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

  return (
    <div
      className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 uppercase tracking-tight">
          {t("title")}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full space-y-2">
            <label
              htmlFor="firstName"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
            >
              {t("firstName")}
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder={t("firstName")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="w-full space-y-2">
            <label
              htmlFor="lastName"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
            >
              {t("lastName")}
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={t("lastName")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
        </div>

        {/* Email & Phone Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
            >
              {t("email")}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("email")}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="w-full space-y-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
            >
              {t("phone")}
            </label>
            <div className="[&_.react-international-phone-input]:!h-10 [&_.react-international-phone-input]:!w-full [&_.react-international-phone-input]:!rounded-r-md [&_.react-international-phone-input]:!border-input [&_.react-international-phone-input]:!bg-background [&_.react-international-phone-country-selector-button]:!h-10 [&_.react-international-phone-country-selector-button]:!border-input [&_.react-international-phone-country-selector-button]:!bg-background">
              <PhoneInput
                value={formData.phone}
                onChange={handlePhoneChange}
                className="!w-full"
              />
            </div>
          </div>
        </div>

        {/* Enquiry Type */}
        <div className="w-full space-y-2">
          <label
            htmlFor="enquiryType"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
          >
            {t("enquiryType")}
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="" disabled>
              {t("enquiryType")}
            </option>
            {enquiryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="w-full space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
          >
            {t("message")}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("message")}
            rows={4}
            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-[280px] h-[56px] bg-primary hover:bg-primary/90 text-white font-medium text-[15px] rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t("submitting") : t("submit")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
