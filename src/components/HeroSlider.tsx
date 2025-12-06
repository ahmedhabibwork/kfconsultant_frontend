"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Banner } from "@/types/homeTypes";
import Link from "next/link";

interface HeroSliderProps {
  banner: Banner[];
  whatsappNumber?: string;
}

const HeroSlider = ({ banner, whatsappNumber }: HeroSliderProps) => {
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

      {/* WhatsApp Icon - Bottom Left */}
      {whatsappNumber && (
        <div className="absolute bottom-10 left-10 z-20">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
          <Link
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex bg-[#25D366] hover:bg-[#128C7E] p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Contact us on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </Link>
        </div>
      )}

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
