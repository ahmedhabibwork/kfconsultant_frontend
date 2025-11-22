"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Service } from "./servicesData";

interface ServiceSliderProps {
  services: Service[];
}

const ServiceSlider = ({ services }: ServiceSliderProps) => {
  const [activeId, setActiveId] = useState(services[0].id);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    const updateWidth = () => {
      if (scrollContainerRef.current && itemsContainerRef.current) {
        const scrollWidth = itemsContainerRef.current.scrollWidth;
        const offsetWidth = scrollContainerRef.current.offsetWidth;
        setWidth(scrollWidth - offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const scrollToItem = (index: number) => {
    if (itemsContainerRef.current && width > 0) {
      const itemNode = itemsContainerRef.current.children[index] as HTMLElement;
      if (itemNode) {
        // Center the item
        const containerWidth = scrollContainerRef.current?.offsetWidth || 0;
        const itemWidth = itemNode.offsetWidth;
        let targetX = -(
          itemNode.offsetLeft -
          containerWidth / 2 +
          itemWidth / 2
        );

        // Clamp
        if (targetX > 0) targetX = 0;
        if (targetX < -width) targetX = -width;

        animate(x, targetX, {
          type: "spring",
          stiffness: 300,
          damping: 30,
        });
      }
    }
  };

  const handlePrev = () => {
    const currentIndex = services.findIndex((s) => s.id === activeId);
    if (currentIndex > 0) {
      const newId = services[currentIndex - 1].id;
      setActiveId(newId);
      scrollToItem(currentIndex - 1);
    }
  };

  const handleNext = () => {
    const currentIndex = services.findIndex((s) => s.id === activeId);
    if (currentIndex < services.length - 1) {
      const newId = services[currentIndex + 1].id;
      setActiveId(newId);
      scrollToItem(currentIndex + 1);
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <motion.div
        ref={scrollContainerRef}
        className="cursor-grab overflow-hidden"
      >
        <motion.div
          ref={itemsContainerRef}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          style={{ x }}
          className="flex gap-4 px-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => {
                setActiveId(service.id);
                scrollToItem(services.findIndex((s) => s.id === service.id));
              }}
              className={`relative min-w-[260px] h-[350px] rounded-2xl overflow-hidden transition-all duration-300 ${
                activeId === service.id
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-70"
              }`}
            >
              <Link
                href={service.link}
                className="block w-full h-full relative"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold uppercase leading-tight">
                    {service.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="flex-1 h-[0.5px] bg-[#D6D6D6] relative">
        <div
          className="absolute top-0 left-0 h-px bg-primary transition-all duration-300"
          style={{
            width: `${
              ((services.findIndex((s) => s.id === activeId) + 1) /
                services.length) *
              100
            }%`,
          }}
        ></div>
      </div>
      <div className="flex items-center justify-end rtl:flex-row-reverse gap-[20px]">
        <button
          onClick={handlePrev}
          disabled={services[0].id === activeId}
          className="bg-white border-primary size-[40px] rounded-full border cursor-pointer flex items-center justify-center disabled:opacity-50"
        >
          <ChevronLeft className="text-primary" size={16} />
        </button>
        <button
          onClick={handleNext}
          disabled={services[services.length - 1].id === activeId}
          className="bg-primary border-white size-[40px] rounded-full border cursor-pointer flex items-center justify-center disabled:opacity-50"
        >
          <ChevronRight className="text-white" size={16} />
        </button>
      </div>
    </div>
  );
};

export default ServiceSlider;
