"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PhoneInput from "@/components/cors/PhoneInput";
import { submitJobApplication, getJobTitles } from "@/actions/job-application";
import { toast } from "sonner";
import { Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface JobApplicationFormProps {
  jobTitle: string;
}

const JobApplicationForm = ({ jobTitle }: JobApplicationFormProps) => {
  const [jobTitles, setJobTitles] = useState<Record<string, string>>({});
  const [error] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobTitles = async () => {
      const titles = await getJobTitles();
      setJobTitles(titles);
    };
    fetchJobTitles();
  }, []);

  const jobApplicationSchema = z.object({
    name: z.string().min(1, { message: "Full Name is required" }),
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .min(1, { message: "Email Address is required" }),
    phone: z.string().min(1, { message: "Phone Number is required" }),
    job_title: z.string().min(1, { message: "Job Title is required" }),
    image: z
      .any()
      .refine((file) => file instanceof File, "CV/Resume is required"),
  });

  type JobApplicationFormData = z.infer<typeof jobApplicationSchema>;

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JobApplicationFormData>({
    resolver: zodResolver(jobApplicationSchema as any), // Type assertion needed for file validation in some versions
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      job_title: jobTitle || "",
      image: undefined,
    },
  });

  const selectedImage = watch("image");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file, { shouldValidate: true });
    }
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.preventDefault();
    setValue("image", undefined, { shouldValidate: true });
  };

  const onSubmit = async (data: JobApplicationFormData) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("job_title", data.job_title);
      formData.append("image", data.image);

      const result = await submitJobApplication(formData);

      if (result.success) {
        toast.success(result.message);
        reset({
          name: "",
          email: "",
          phone: "",
          job_title: "",
          image: undefined,
        });
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("An unexpected error occurred");
      console.error(err);
    }
  };

  return (
    <div
      className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 uppercase tracking-tight">
          Join Our Team
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
          We are always looking for talented individuals to join us. Fill out
          the form below to apply.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              {...register("name")}
              autoComplete="name"
              className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                errors.name ? "border-red-500" : "border-input"
              }`}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="w-full space-y-2">
            <label
              htmlFor="job_title"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
            >
              Job Title
            </label>
            <select
              id="job_title"
              {...register("job_title")}
              className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                errors.job_title ? "border-red-500" : "border-input"
              }`}
            >
              <option value="">Select Job Title</option>
              {Object.entries(jobTitles).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
            {error && <span className="text-red-500 text-xs">{error}</span>}
            {errors.job_title && (
              <span className="text-red-500 text-xs">
                {errors.job_title.message}
              </span>
            )}
          </div>
        </div>

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
              autoComplete="email"
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
                  className={`[&_.react-international-phone-input]:h-10! [&_.react-international-phone-input]:w-full! [&_.react-international-phone-input]:rounded-r-md! [&_.react-international-phone-input]:bg-background! [&_.react-international-phone-country-selector-button]:h-10! [&_.react-international-phone-country-selector-button]:bg-background! ${
                    errors.phone
                      ? "[&_.react-international-phone-input]:border-red-500! [&_.react-international-phone-country-selector-button]:border-red-500!"
                      : "[&_.react-international-phone-input]:border-input! [&_.react-international-phone-country-selector-button]:border-input!"
                  }`}
                >
                  <PhoneInput
                    value={field.value}
                    onChange={field.onChange}
                    className="w-full!"
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

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary">
            CV/Resume
          </label>
          <label
            htmlFor="image"
            className={cn(
              "relative group flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300",
              selectedImage
                ? "border-primary/50 bg-primary/5"
                : `hover:border-primary hover:bg-accent ${
                    errors.image ? "border-red-500" : "border-input"
                  }`
            )}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
              {selectedImage ? (
                <div className="flex items-center gap-3 text-primary font-medium">
                  <Upload className="w-8 h-8 mb-2" />
                  <span className="text-sm break-all">
                    {selectedImage.name}
                  </span>
                  <button
                    onClick={handleRemoveFile}
                    className="p-1 hover:bg-destructive/10 rounded-full text-destructive transition-colors z-10"
                    title="Remove file"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <>
                  <Upload
                    className={`w-10 h-10 transition-colors mb-3 ${
                      errors.image
                        ? "text-red-500"
                        : "text-muted-foreground group-hover:text-primary"
                    }`}
                  />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PDF, DOC, DOCX, JPG (MAX. 5MB)
                  </p>
                </>
              )}
            </div>
            <input
              id="image"
              type="file"
              name="image"
              accept="image/*,.pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          {errors.image && (
            <span className="text-red-500 text-xs">
              {errors.image.message as string}
            </span>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-[280px] h-[56px] bg-primary hover:bg-primary/90 text-white font-medium text-[15px] rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
