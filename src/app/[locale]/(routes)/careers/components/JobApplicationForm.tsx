import React, { useState } from "react";
import PhoneInput from "@/components/cors/PhoneInput";
import Button from "@/components/button";
import { submitJobApplication } from "@/actions/job-application";
import { toast } from "sonner";
import { Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface JobApplicationFormProps {
  jobTitle: string;
}

const JobApplicationForm = ({ jobTitle }: JobApplicationFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    job_title: jobTitle || "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [imageName, setImageName] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (phone: string) => {
    setFormData((prev) => ({ ...prev, phone }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImageName(file.name);
    }
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.preventDefault();
    setImage(null);
    setImageName("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.job_title
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("job_title", formData.job_title);

      if (image) {
        data.append("image", image);
      }

      const result = await submitJobApplication(data);

      if (result.success) {
        toast.success(result.message);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          job_title: jobTitle || "",
        });
        setImage(null);
        setImageName("");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error(error);
    } finally {
      setIsLoading(false);
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

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="w-full space-y-2">
            <label
              htmlFor="job_title"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
            >
              Job Title
            </label>
            <input
              id="job_title"
              type="text"
              name="job_title"
              value={formData.job_title}
              onChange={handleChange}
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="w-full space-y-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary"
            >
              Phone Number
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

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary">
            CV/Resume
          </label>
          <label
            htmlFor="image"
            className={cn(
              "relative group flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300",
              imageName
                ? "border-primary/50 bg-primary/5"
                : "border-input hover:border-primary hover:bg-accent"
            )}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
              {imageName ? (
                <div className="flex items-center gap-3 text-primary font-medium">
                  <Upload className="w-8 h-8 mb-2" />
                  <span className="text-sm break-all">{imageName}</span>
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
                  <Upload className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors mb-3" />
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
        </div>

        <div className="flex justify-center mt-8">
          <Button
            text={isLoading ? "Submitting..." : "Submit Application"}
            textColor="text-primary-foreground"
            hoverColor="hover:opacity-90"
            width="w-full md:w-[240px]"
            height="h-[56px]"
            textSize="text-[15px] font-medium"
            svgClassName="!fill-primary-foreground group-hover/parent:!fill-primary-foreground"
            arrowSize="w-5 h-5"
            disabled={isLoading}
            className="bg-primary hover:bg-primary/90"
          />
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
