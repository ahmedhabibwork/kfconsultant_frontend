"use client";
import { motion } from "motion/react";

const SecondSection = () => {
  return (
    <section id="colorlib-intro" className="w-full snap-start py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left Column - Years Experience Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 flex justify-center md:justify-start"
          >
            <div className="bg-[#00006c] w-[280px] h-[280px] flex flex-col items-center justify-center text-white shrink-0 p-4">
              <span className="text-8xl font-bold leading-none mb-2">25</span>
              <span className="text-3xl tracking-widest font-light mb-1">
                YEARS
              </span>
              <span className="text-sm tracking-[0.3em] font-light text-gray-300 uppercase">
                Experience
              </span>
            </div>
          </motion.div>

          {/* Center Column - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 text-center md:text-left"
          >
            <span className="text-[#00006c] text-sm tracking-[1.5em] uppercase font-normal block mb-4">
              Welcome!
            </span>
            <h2 className="text-4xl lg:text-5xl leading-tight text-gray-900">
              <span className="font-light block">SUCCESS</span>
              <span className="font-light block mb-2">SECRETS</span>
              <span className="font-bold block">OF OUR</span>
              <span className="font-bold block">PROJECTS</span>
            </h2>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-4"
          >
            <p className="text-gray-500 leading-relaxed text-sm lg:text-base text-justify w-full max-w-[563px] pl-[100px]">
              Since 1999, we have been building on this pioneering role in
              design and construction under the name of KFconsultant in
              Structural Design, Engineering Supervision, and Project
              Construction Management Services. A solid number of contracts with
              numerous distinctive clients in a mega scale design helped us pass
              through the outstanding challenges and beyond. We introduced our
              outstanding experience earlier than others and continuously
              expanded our business in a solution-oriented manner, considering
              special aspects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
