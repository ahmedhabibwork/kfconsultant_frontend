"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Banner } from "@/types/homeTypes";
import Link from "next/link";

interface HeroSliderProps {
  banner: Banner[];
}

const HeroSlider = ({ banner }: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // If we only have one banner, we can treat it as a single slide
  const slides = banner;

  // useEffect(() => {
  //   if (slides.length <= 1) return;
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 6000);
  //   return () => clearInterval(timer);
  // }, [slides.length]);

  return (
    <aside
      id="colorlib-hero"
      className="relative h-screen max-h-[700px] w-full overflow-hidden snap-start"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-bottom"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundPosition: "bottom center",
          }}
        >
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]" />{" "}
          {/* Overlay */}
          <div className="container  h-full flex items-center justify-center relative z-10">
            <div className="text-center text-white">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-[20px] font-normal mb-4 text-[#ffffffb3] leading-1.5"
              >
                {slides[currentSlide].title}
              </motion.h2>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation - Only show if more than one slide */}
      {slides.length > 1 && (
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </aside>
  );
};

export default HeroSlider;
