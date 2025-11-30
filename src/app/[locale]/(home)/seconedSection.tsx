"use client";
import { motion } from "motion/react";

const SecondSection = () => {
  return (
    <section id="colorlib-intro" className="w-full snap-start py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Center Column - Heading (appears first on mobile, center on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 md:col-start-5 text-center"
          >
            <span className="text-sm tracking-widest text-gray-600 uppercase">
              WELCOME!
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl">
              <span className="font-light">Success Secrets</span>
              <br />
              <span className="font-bold">of Our Projects</span>
            </h2>
          </motion.div>

          {/* Left Column - Years Experience Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 md:col-start-1 md:row-start-1 flex justify-center"
          >
            <div className="border-4 border-blue-900 bg-blue-900 text-white p-12 text-center min-w-[250px]">
              <div className="text-7xl font-bold mb-2">25</div>
              <div className="text-xl uppercase tracking-wider mb-1">Years</div>
              <div className="text-base font-light">Experience</div>
            </div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-4 md:col-start-9 md:row-start-1"
          >
            <p className="text-gray-700 leading-relaxed">
              Since 1999, we have been building on this pioneering role in
              design and construction under the name of AACE in Structural
              Design, Engineering Supervision, and Project Construction
              Management Services. A solid number of contracts with numerous
              distinctive clients in a mega-scale design helped us pass through
              the outstanding challenges and beyond. We introduced our
              outstanding experience earlier than others and continuously
              expanded our business in a solution-oriented manner, considering
              special aspe
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
