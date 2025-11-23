"use client";
import Image from "next/image";
import { Eye, Target, Medal } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Vision",
    icon: Eye,
    description:
      "Leadership with a strongly rooted organization, building iconic landmarks, & serving as a guiding light of prosperity, taking pride in both our present accomplishments and the legacy we secure for future generations.",
    delay: 0,
  },
  {
    title: "Mission",
    icon: Target,
    description:
      "Together we bring life to land & improve living communities, And also to garner respect from our stakeholders, and become their ultimate choice.",
    delay: 0.3,
  },
  {
    title: "Values",
    icon: Medal,
    description:
      "We embrace respect, fostering strong familial bonds, upholding integrity, prioritizing safety, and maintaining a passionate drive for both creation and growth.",
    delay: 0.6,
  },
];

const ThiredSectionBg = () => {
  return (
    <section className="panel w-full min-h-screen xl:h-screen snap-start relative overflow-hidden">
      <Image
        alt="Background"
        src="/aboutthiredbg.webp"
        fill
        className="bg-image object-cover"
        priority={false}
      />
      <div className="bg-overlay bg-black/20 absolute inset-0"></div>

      <div className="relative z-10 h-screen w-full flex items-center justify-center">
        <div className="max-md:h-full flex justify-evenly  max-lg:flex-wrap max-md:items-center w-full max-w-[1400px] px-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: card.delay }}
              className="flex gap-5 max-md:gap-1 flex-col items-center justify-center text-white w-[340px] max-md:w-[90%] h-fit p-4"
            >
              <div className="flex items-center justify-center w-[93px] h-[72px] max-md:size-14 bg-primary/80 rounded-xl backdrop-blur-sm">
                <card.icon className="text-white w-10 h-10 max-md:w-6 max-md:h-6" />
              </div>
              <div className="flex flex-col gap-2 max-md:gap-1">
                <h1 className="text-xl text-center uppercase max-md:text-[16px] font-bold">
                  {card.title}
                </h1>
                <p className="text-[13px] leading-relaxed max-md:leading-5 text-center font-medium opacity-90">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThiredSectionBg;
