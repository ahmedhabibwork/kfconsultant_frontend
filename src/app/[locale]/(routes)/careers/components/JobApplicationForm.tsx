import React, { useState } from "react";
import Input from "@/components/cors/Input";
import PhoneInput from "@/components/cors/PhoneInput";
import Button from "@/components/button";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    attachment: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (phone: string) => {
    setFormData((prev) => ({ ...prev, phone }));
  };

  return (
    <div
      className="p-[30px] flex-1 max-sm:py-[10px] w-full max-w-3xl mx-auto bg-white"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div className="group-[.contact]:backdrop-blur-[10px] group-[.contact]:rounded-lg group-[.contact]:p-4">
        <h1 className="uppercase text-primary font-bold text-[24px] mb-[40px] max-sm:text-[24px] max-xs:text-lg">
          Apply for this position
        </h1>
        <form className="relative flex flex-col gap-4 max-sm:gap-3">
          <div className="flex w-full items-center gap-6 max-sm:gap-3">
            <div className="flex-1 w-full">
              <Input
                placeholder="FIRST NAME"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-[#8f9194] bg-opacity-10"
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

          <div className="flex w-full items-center gap-6 flex-wrap max-md:flex-col max-sm:gap-3 flex-col !gap-4">
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

          <div>
            <p className="uppercase text-[#898989] text-[18px] max-sm:text-[12px] mb-2">
              Attachment (if available)
            </p>
            <label
              htmlFor="attachment"
              className="border border-dashed border-[#EAEAEA] flex items-start justify-center p-8 uppercase text-[#898989] cursor-pointer max-sm:text-sm hover:border-primary transition-colors"
            >
              <p className="max-md:text-sm">
                Drag & Drop or<span className="ms-1 text-secondry">browse</span>
              </p>
            </label>
            <input id="attachment" hidden type="file" name="attachment" />
          </div>

          <div className="w-full">
            <textarea
              placeholder="YOUR MESSAGE"
              rows={3}
              className="ant-input css-tcy7ai ant-input-outlined flex-1 w-full px-4 py-[20px] border border-[#EAEAEA] focus:outline-none resize-none rounded bg-white"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="h-[60px] mt-4">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 max-md:scale-[.95] h-fit mx-auto">
              <Button
                text="Send The Application"
                textColor="text-primary"
                hoverColor="hover:text-secondry"
                width="w-[200px]"
                height="h-[60px]"
                textSize="text-[13px]"
                svgClassName="!fill-primary group-hover/parent:fill-secondry"
                arrowSize="w-4 h-4"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
