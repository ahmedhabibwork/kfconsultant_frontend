"use client";
import Image from "next/image";
import CountUp from "@/components/CountUp";
import InfoCard from "@/components/InfoCard";

const SecondSection = () => {
  return (
    <section className="panel w-full min-h-screen xl:h-screen snap-start relative">
      <Image
        alt="Background"
        src="/aboutseconedbg.webp"
        fill
        className="bg-image object-cover"
        priority={false}
      />
      <div className="bg-overlay bg-black/20 absolute inset-0"></div>

      <div className="w-full h-full flex flex-col items-center lg:flex-row justify-between gap-[40px] lg:gap-[55px] py-[30px] lg:py-[60px] px-4 lg:px-[120px] relative z-10">
        <div></div>
        {/* About Text Section */}
        <div className="max-md:w-full">
          <InfoCard
            title="Who We Are"
            subTitle="More About Us"
            description="Established in 1989, KFconsultant has solidified its reputation as a versatile and multi-disciplinary engineering consultancy, committed to delivering comprehensive solutions that exceed client expectations in Architecture, Master Planning, Landscape, Interior, Structural, MEP, Infrastructure, and Construction Supervision. Our expertise spans various facets of the industry, including design and engineering services across all sectors we operate in: Hospitality, Resorts, Residential, Commercial, Educational, Healthcare, and Administrative for both local and international entities. At KFconsultant, we approach each project with an innovative approach, leveraging collaboration among our diverse and skilled team. This collaborative approach ensures that we seamlessly transform projects from conceptual design into reality."
            linkHref="/about"
            buttonText="Know More"
            rtl={true}
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
