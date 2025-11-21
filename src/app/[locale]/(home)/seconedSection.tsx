"use client";
import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import CountUp from "@/components/CountUp";
import Button from "@/components/button";

const SecondSection = () => {
  return (
    <section className="panel w-full min-h-screen xl:h-screen snap-start relative">
      <Image
        alt="Background"
        src="/home-seconed-section.webp"
        fill
        className="bg-image object-cover"
        priority={false}
      />
      <div className="bg-overlay bg-black/20 absolute inset-0"></div>

      <div className="w-full h-full flex flex-col items-center lg:flex-row justify-between gap-[40px] lg:gap-[55px] py-[30px] lg:py-[60px] px-4 lg:px-[120px] relative z-10">
        {/* Stats Section */}
        <div className="max-md:w-full">
          <div
            className="flex-1 mx-auto flex max-md:w-full items-center justify-between max-xl:flex-wrap"
            data-aos="fade-right"
          >
            <div className="flex justify-between items-center flex-1 gap-4 max-md:flex-col">
              <div className="w-max flex flex-col max-sm:gap-2 text-[12px] lg:text-[28px] text-white p-4">
                <p className="text-[15px] max-md:text-xs tracking-wide font-medium">
                  Years
                </p>
                <div className="drop-shadow-lg flex items-center gap-1">
                  <span className="font-medium text-5xl max-md:text-4xl drop-shadow-lg">
                    <CountUp to={35} />
                  </span>
                  <span className="text-5xl max-md:text-4xl">+</span>
                </div>
              </div>
              <div className="w-max flex flex-col max-sm:gap-2 text-[12px] lg:text-[28px] text-white p-4">
                <p className="text-[15px] max-md:text-xs tracking-wide font-medium">
                  Experts
                </p>
                <div className="drop-shadow-lg flex items-center gap-1">
                  <span className="font-medium text-5xl max-md:text-4xl drop-shadow-lg">
                    <CountUp to={700} />
                  </span>
                  <span className="text-5xl max-md:text-4xl drop-shadow-lg">
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center flex-1 gap-4 max-md:flex-col">
              <div className="w-max flex flex-col max-sm:gap-2 text-[12px] lg:text-[28px] text-white p-4">
                <p className="text-[15px] max-md:text-xs tracking-wide font-medium">
                  Clients
                </p>
                <div className="drop-shadow-lg flex items-center gap-1">
                  <span className="font-medium text-5xl max-md:text-4xl drop-shadow-lg">
                    <CountUp to={250} />
                  </span>
                  <span className="text-5xl max-md:text-4xl drop-shadow-lg">
                    +
                  </span>
                </div>
              </div>
              <div className="w-max flex flex-col max-sm:gap-2 text-[12px] lg:text-[28px] text-white p-4">
                <p className="text-[15px] max-md:text-xs tracking-wide font-medium">
                  Projects
                </p>
                <div className="drop-shadow-lg flex items-center gap-1">
                  <span className="font-medium text-5xl max-md:text-4xl drop-shadow-lg">
                    <CountUp to={900} />
                  </span>
                  <span className="text-5xl max-md:text-4xl drop-shadow-lg">
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Text Section */}
        <div className="max-md:w-full">
          <div className="relative w-[525px] h-[420px] bg-primary/30 backdrop-blur-[8px] leading-5 flex flex-col justify-center gap-[18px] px-6 lg:px-[40px] py-[18px] max-md:w-full max-md:h-fit">
            <div className="flex flex-col gap-[14px] uppercase w-fit">
              <div className="text-gray-200 w-fit gap-2 flex items-center max-md:w-full">
                <div className="w-max text-center text-[13px]">
                  More About Us
                </div>
                <div className="w-[60px] max-w-full h-px bg-gray-200/50"></div>
              </div>
              <h1 className="text-[23px] max-md:text-2xl w-full leading-[25px] ltr:tracking-[2px] text-white">
                Who We Are
              </h1>
            </div>
            <p className="text-gray-100 font-medium line-clamp-6 text-justify text-[13px] leading-relaxed max-md:text-sm">
              Founded in 1989, DMA has established itself as a
              multi-disciplinary engineering consulting firm, committed to
              delivering comprehensive solutions that exceed our clients'
              expectations across various engineering sectors, including:
              Architectural and Interior Design, Urban Planning and Landscape,
              Structural Design, Electromechanical Designs and Infrastructure,
              and Construction Supervision Services. Our expertise covers
              various aspects of the industry, including design and engineering
              services in all sectors we operate in, such as: Hospitality,
              Resorts, Residential, Commercial, Educational, Healthcare, and
              Administrative, for both local and international entities. At DMA,
              we approach every project in an innovative and distinctive way,
              leveraging the collaborative efforts of our diverse and highly
              skilled team members. This collaborative approach ensures projects
              transition seamlessly from the design phase to tangible reality.
            </p>
            <div className="max-sm:scale-75 max-xs:scale-[.69] max-sm:-translate-x-11 max-xs:-translate-x-6 flex justify-end pe-4">
              <Link href="/about">
                <Button text="Know More" rtl={true} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
