"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PhoneInput from "@/components/cors/PhoneInput";
import { submitContactForm } from "@/actions/contact";
import { toast } from "sonner";

const ContactForm = () => {
  const contactSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    phone: z.string().min(1, { message: "Phone number is required" }),
    subject: z.string().min(1, { message: "Subject is required" }),
    message: z.string().min(1, { message: "Message is required" }),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "+20",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const result: any = await submitContactForm(data);

      if (result.success) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        if (result.errors) {
          // Map backend errors to form fields
          const fieldMap: Record<string, keyof ContactFormData> = {
            name: "firstName", // Map general name error to firstName
            email: "email",
            phone: "phone",
            subject: "subject",
            notes: "message",
          };

          Object.entries(result.errors).forEach(([backendKey, messages]) => {
            const fieldName = fieldMap[backendKey];
            if (fieldName) {
              setError(fieldName, {
                type: "server",
                message: (messages as string[])[0],
              });
            } else {
              toast.error((messages as string[])[0]);
            }
          });
        } else {
          toast.error(result.message || "Something went wrong.");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong.");
    }
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
          Get In Touch
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full space-y-2">
            <label
              htmlFor="firstName"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              {...register("firstName")}
              className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                errors.firstName ? "border-red-500" : "border-input"
              }`}
            />
            {errors.firstName && (
              <span className="text-red-500 text-xs">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="w-full space-y-2">
            <label
              htmlFor="lastName"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
              className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                errors.lastName ? "border-red-500" : "border-input"
              }`}
            />
            {errors.lastName && (
              <span className="text-red-500 text-xs">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>

        {/* Email & Phone Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              {...register("email")}
              className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                errors.email ? "border-red-500" : "border-input"
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="w-full space-y-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
            >
              Phone Number
            </label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <div
                  className={`[&_.react-international-phone-input]:!h-10 [&_.react-international-phone-input]:!w-full [&_.react-international-phone-input]:!rounded-r-md [&_.react-international-phone-input]:!bg-background [&_.react-international-phone-country-selector-button]:!h-10 [&_.react-international-phone-country-selector-button]:!bg-background ${
                    errors.phone
                      ? "[&_.react-international-phone-input]:!border-red-500 [&_.react-international-phone-country-selector-button]:!border-red-500"
                      : "[&_.react-international-phone-input]:!border-input [&_.react-international-phone-country-selector-button]:!border-input"
                  }`}
                >
                  <PhoneInput
                    value={field.value}
                    onChange={field.onChange}
                    className="!w-full"
                  />
                </div>
              )}
            />
            {errors.phone && (
              <span className="text-red-500 text-xs">
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="w-full space-y-2">
          <label
            htmlFor="subject"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Subject"
            {...register("subject")}
            className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
              errors.subject ? "border-red-500" : "border-input"
            }`}
          />
          {errors.subject && (
            <span className="text-red-500 text-xs">
              {errors.subject.message}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="w-full space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Tell us about your project or inquiry..."
            rows={4}
            {...register("message")}
            className={`flex min-h-[120px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y ${
              errors.message ? "border-red-500" : "border-input"
            }`}
          />
          {errors.message && (
            <span className="text-red-500 text-xs">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-[280px] h-[56px] bg-primary hover:bg-primary/90 text-white font-medium text-[15px] rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
