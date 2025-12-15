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
      className="w-full py-16 lg:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16"
        >
          {services?.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center gap-6 p-6 rounded-2xl"
            >
              <div className="mb-2 relative">
                <div className="absolute -inset-4 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="relative w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#00006c] group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <div className="text-sm text-gray-500 leading-relaxed max-w-sm">
                <TextEditorReader value={service.description} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FourthSection;
