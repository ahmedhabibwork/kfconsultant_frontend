"use client";
import React from "react";
import Image from "next/image";

const OurFounder = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white snap-start">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 uppercase tracking-widest mb-2">
            Our
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-widest">
            Founder
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Text Content */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-normal text-gray-900">
              The Founder's Biography
            </h3>
            <div className="text-gray-600 text-[13px] md:text-sm leading-relaxed text-justify flex flex-col gap-4">
              <p>
                Dr. Amr A. Abdelrahman, Professor of Concrete Structures and
                Former Chairman of the Structural Engineering Department, Ain
                Shams University, Cairo, Egypt. Ain Shams University had awarded
                Dr. Amr Abdelrahman an Appreciation Award in Engineering
                Sciences in recognition of the milestones achieved and
                accomplishments resulting from outstanding talent, vision,
                dedication, and inspiration to the future engineers with the
                highest level of passion for achieving excellence. Thanks to his
                experience in the field of reinforced, prestressed concrete
                structures and strengthening with fiber-reinforced polymers, he
                has become one of the pioneers of structural engineering in
                Egypt through his consultancy services.
              </p>
              <p>
                Over his 39 years of experience, Dr. Amr has gained the trust of
                prestigious clients, consultants and contractors in Egypt and
                the Gulf region by becoming knowledgeable about developments in
                the construction industry and significantly contributing to many
                projects alongside experts in the field. Amr Abdelrahman
                Consultant Engineers (AACE) Office was established in 1999 by
                its founder. The office has emerged as one of the pioneers in
                structural design, expanding its expertise over a few years to
                include engineering principles across various disciplines such
                as reinforced concrete, prestressed concrete, steel structures,
                masonry structures, foundation design, strengthening and
                rehabilitation of structures, water structures, bridges and
                tunnels, and building losses.
              </p>
              <p>
                Dr. Amr A. Abdelrahman is a member of the "Presidential
                Consultancy Committee for Egyptian Scientists and Experts." He
                received the "Ain Shams Appreciation Award in Engineering
                Science" in 2022. He is a Fellow of the Egyptian Society of
                Engineers and a member of the following Egyptian Codes: "Design
                and Construction of Concrete Structures," "Design and
                Application of Fiber Reinforced Polymers in Construction" (Vice
                President), "Planning, Design and Construction of Bridges and
                Causeways," and "Design and Construction of Masonry Structures."
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/aboutseconedbg.webp"
              alt="Dr. Amr A. Abdelrahman - Founder"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFounder;
