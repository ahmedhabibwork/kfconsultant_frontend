import React from "react";
import Link from "next/link";
import OtherNewsCard from "./OtherNewsCard";

const otherNewsData = [
  {
    id: "7",
    title: "DMA Contributes to Riyadh's Skyline with Mountain View I",
    date: "Monday, December 9, 2024",
    description:
      "Our dedicated team at DMA had the privilege of attending the highly anticipated launch of Mountain View’s latest project, “Mountain View I,” at Cityscape Global 2024. This monumental 55-acre development, situated in the vibrant North Riyadh City, is poised to redefine the city’s skyline and elevate its urban landscape. As a key partner in this ambitious endeavor, DMA played a pivotal role in the design and master planning of Mountain View I. Our team of expert architects, urban planners, and landscape designers worked tirelessly to create a visionary development that seamlessly blends modern aesthetics with traditional Saudi Arabian culture.",
    image: "/newsCard.webp",
  },
  {
    id: "6",
    title: "DMA and Kandeel Collaborate on Significant New Cairo Development",
    date: "Tuesday, November 26, 2024",
    description:
      "DMA is excited to announce a strategic partnership with Kandeel Developments for the construction supervision of their highly anticipated mixed-use project in the vibrant heart of New Cairo. This ambitious project, spanning an impressive built-up area of 6,200 SQM, will include commercial, administrative, and medical spaces. DMA’s expertise in construction supervision will ensure the project is executed to the highest standards of quality & safety. By utilizing our extensive experience, DMA is committed to delivering a world-class development that will become a landmark in New Cairo.",
    image: "/newsCard.webp",
  },
  {
    id: "2",
    title: "DMA collaboration with Gates Developments",
    date: "Sunday, October 27, 2024",
    description:
      "Gates Developments, a leading real estate development company, has signed a strategic partnership agreement with DMA Design and Engineering Consultants to develop a master plan and designs for the company's new project in New Zayed. This collaboration marks a significant step towards achieving new levels of excellence and uniqueness in the real estate development sector. Gates Developments is known for its distinctive approach and strategies in executing its projects. Hassan Nasr, CEO of Gates Developments, expressed that partnering with DMA is a crucial step. DMA is one of Egypt's leading engineering firms with over 30 years of experience and a portfolio of over 200 projects spanning more than 10,000 acres and 12,000 buildings. This impressive track record was a key factor in selecting DMA to develop the master plan and designs for the new project in New Zayed. All the details were finalized before signing the contracts. Nasr added that the new New Zayed project spans 65 acres, with investments exceeding five billion Egyptian pounds. Its strategic location provides exceptional value and a unique opportunity to develop an integrated community that combines luxury and comfort. The designs for this project will be innovative and distinctive, incorporating the latest design and infrastructure trends to ensure an exceptional living experience that meets the aspirations of customers. The goal is to create a unique living environment that reflects the demands of the modern era and meets the needs of future residents. Additionally, Gates Developments is committed to integrating sustainability concepts and innovative, smart solutions into the design and implementation phases of all its projects.",
    image: "/newsCard.webp",
  },
];

const OtherNews = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-3 px-[30px] mb-[40px] mt-10 max-md:my-10">
        <div
          className="max-sm:scale-[66%]"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <div className="flex flex-col gap-[14px] uppercase w-fit items-center text-center">
            <div className="text-text-gray-200 w-fit gap-2 flex items-center max-md:w-full justify-center">
              <div className="w-max text-center text-[13px]">
                Take a look around
              </div>
            </div>
            <h1 className="w-full leading-[25px] ltr:tracking-[2px] text-primary text-[38px] max-md:text-4xl rtl:mb-2">
              OTHER NEWS
            </h1>
          </div>
        </div>
        <p
          className="text-primary text-[11.5px] text-center w-full max-w-[564px]"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          Our dedicated team is committed to pushing the boundaries of
          innovation and delivering inventive solutions that drive our growth
          and success.
        </p>
      </div>
      <div
        className="grid grid-cols-1 items-center justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-[16px] justify-center max-w-fit mx-auto place-items-center flex-wrap px-[30px]"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        {otherNewsData.map((news) => (
          <OtherNewsCard
            key={news.id}
            id={news.id}
            title={news.title}
            date={news.date}
            description={news.description}
            image={news.image}
          />
        ))}
      </div>
      <div>
        <Link
          className="w-fit flex items-center gap-2 mt-5 text-center mx-auto text-primary duration-300 px-[30px] py-[15px] text-base font-bold transform transition-transform group translate-x-0 max-md:text-sm"
          href="/news"
        >
          View All News
          <span className="group-hover:translate-x-1 group-hover:duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="15"
              viewBox="0 0 42 15"
              fill="none"
            >
              <path
                d="M35.4316 3.85938L39.0901 7.50137L35.4316 11.1434"
                className="stroke-primary group-hover/parent:stroke-amber-500"
                strokeWidth="1.125"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.06787 7.50195L38.9876 7.50196"
                className="stroke-primary group-hover/parent:stroke-amber-500"
                strokeWidth="1.125"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default OtherNews;
