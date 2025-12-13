"use client";

import { motion } from "motion/react";
import CountUp from "react-countup";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";

const stats = [
  { value: 25, label: "YEARS OF REGIONAL EXPERIENCE", suffix: "+" },
  { value: 100, label: "SQM LAND SPACE", suffix: "k+" },
  { value: 8, label: "COMMERCIAL & RESIDENTIAL PROJECTS", suffix: "" },
  { value: 2000, label: "PROPERTY UNITS", suffix: "+" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const SecondSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column - Title & CTA */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div variants={itemVariants}>
              <span className="text-sm font-medium tracking-widest text-[#666666] uppercase">
                IT&apos;S UPWYDE
              </span>
              <h2 className="mt-4 text-4xl lg:text-6xl font-bold leading-[1.1] text-black tracking-tight">
                A Guiding Light In The Dynamic Real Estate Environment
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                variant="outline"
                className="group rounded-none border-2 border-black bg-transparent px-8 py-6 text-sm font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all duration-300"
              >
                More About Upwyde
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Content & Stats */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Top Divider */}
            <motion.div variants={itemVariants} className="w-full">
              <Separator className="bg-gray-300 h-px w-full" />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#4a4a4a] leading-relaxed"
            >
              <p>
                Upwyde Developments is a coruscating fusion of a strong vision,
                a clear mission, and a team built on a foundation of ardor
                souls.
              </p>
              <p>
                Set to ascend as a leader in the real estate industry, Upwyde
                attends to the yearnings of the community with an ever-evolving
                ethos.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center md:items-start text-center md:text-left"
                >
                  <span className="text-4xl lg:text-5xl font-bold text-[#E57B70] mb-2 font-mono">
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {stat.suffix}
                  </span>
                  <span className="text-[10px] lg:text-xs font-bold tracking-wider text-gray-500 uppercase max-w-[120px] leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecondSection;
