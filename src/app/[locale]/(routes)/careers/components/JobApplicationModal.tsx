import React from "react";
import Button from "@/components/button";
import { useModal } from "@/hooks/useModal";
import JobApplicationForm from "./JobApplicationForm";
import { MapPin, Clock, Laptop } from "lucide-react";

interface JobApplicationModalProps {
  job: {
    title: string;
    responsibilities: string[];
    requirements: string[];
    location: string;
    type: string;
    workplace: string;
  };
}

const JobApplicationModal = ({ job }: JobApplicationModalProps) => {
  const { openModal } = useModal();

  return (
    <div className="flex-1 rounded-lg bg-primary flex flex-col gap-4 max-w-[800px] w-full">
      <div className="p-12 max-sm:p-6 text-left">
        <h3
          className="text-white text-[30px] font-bold mb-6 max-md:text-2xl"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          {job.title}
        </h3>
        <div
          className="text-white/80 text-[15px] mb-12 max-md:text-xs"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <p>
            <strong>Responsibilities:</strong>
            <br />
            {job.responsibilities.map((resp, index) => (
              <React.Fragment key={index}>
                • {resp}
                <br />
              </React.Fragment>
            ))}
            <strong>Job Requirements:</strong>
            <br />
            {job.requirements.map((req, index) => (
              <React.Fragment key={index}>
                • {req}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
        <div className="flex justify-between items-center gap-4 flex-wrap flex-col max-md:justify-start">
          <div className="flex gap-4 items-center flex-wrap w-full">
            <div
              className="border-[0.4px] border-white flex items-center gap-3 py-[9px] px-[23px] flex-wrap max-sm:p-2"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <MapPin className="size-4 text-white" />
              <p className="text-white text-[13px]">{job.location}</p>
            </div>
            <div
              className="border-[0.4px] border-white flex items-center gap-3 py-[9px] px-[23px] flex-wrap max-sm:p-2"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1100"
            >
              <Clock className="size-4 text-white" />
              <p className="text-white text-[13px] capitalize">{job.type}</p>
            </div>
            <div
              className="border-[0.4px] border-white flex items-center gap-3 py-[9px] px-[23px] flex-wrap max-sm:p-2"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1200"
            >
              <Laptop className="size-4 text-white" />
              <p className="text-white text-[13px] capitalize">
                {job.workplace}
              </p>
            </div>
          </div>
          <div
            className="relative w-full h-12 mt-6"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Button
                text="Apply Now"
                textColor="text-white"
                hoverColor="hover:text-secondry"
                width="w-[130px]"
                height="h-[60px]"
                textSize="text-[13px]"
                svgClassName="!fill-white group-hover/parent:fill-secondry"
                arrowSize="w-4 h-4"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  openModal({
                    view: <JobApplicationForm jobTitle={job.title} />,
                    customSize: "620px",
                    origin: {
                      x: rect.left + rect.width / 2,
                      y: rect.top + rect.height / 2,
                    },
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationModal;
