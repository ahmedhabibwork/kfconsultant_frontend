"use client";
import { motion } from "motion/react";
import { Service } from "@/types/homeTypes";
import TextEditorReader from "@/components/TextReader";

interface FourthSectionProps {
  services: Service[];
}

const FourthSection = ({ services }: FourthSectionProps) => {
  return (
    <section
      id="colorlib-services"
      className="w-full min-h-screen snap-start py-16 lg:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span
              className="text-sm tracking-widest text-[#00006c] uppercase"
              style={{ letterSpacing: "1em" }}
            >
              WHAT WE DO ?
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl mb-6 flex flex-col">
              <span className="font-light text-[50px] uppercase">
                Services{" "}
              </span>
              <span className="font-bold text-[50px] uppercase">Offered</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We have a vast professional team and hands-on experience in
              structural design consultation and site supervision along with
              project development and management. AACE is also involved in the
              supervision of architectural, structural, and MEP-work
              construction projects.
            </p>
          </motion.div>

          {/* Right Column - Services Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services?.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mb-2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-[66px] h-[66px] object-contain"
                    />
                  </div>
                  <h3 className="text-lg text-[rgb(0,0,108)] text-[24px] font-normal">
                    {service.title}
                  </h3>
                  {/* <div className="text-sm text-gray-600 line-clamp-3">
                    <TextEditorReader value={service.description} />
                  </div> */}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
