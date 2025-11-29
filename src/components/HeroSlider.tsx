"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const slides = [
  {
    image:
      "https://aaceconsultants.com/wp-content/uploads/2022/05/Islamic-Culture-Construction3-scaled.jpg",
    title: "Amr Abdelrahman",
    subtitle: "Consultant Engineers",
  },
  {
    image:
      "https://aaceconsultants.com/wp-content/uploads/2022/05/ceece474-818f-4399-95b5-67c471f03586-e1681652894970.jpg",
    title: "Amr Abdelrahman",
    subtitle: "Consultant Engineers",
  },
  {
    image:
      "https://aaceconsultants.com/wp-content/uploads/2022/05/WhatsApp-Image-2023-08-29-at-5.20.57-PM.jpeg",
    title: "Amr Abdelrahman",
    subtitle: "Consultant Engineers",
  },
  {
    image: "https://aaceconsultants.com/wp-content/uploads/2022/08/Image2.jpeg",
    title: "Amr Abdelrahman",
    subtitle: "Consultant Engineers",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
          <div className="container mx-auto h-full flex items-center justify-center relative z-10">
            <div className="text-center text-white">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                {slides[currentSlide].title} <br />{" "}
                {slides[currentSlide].subtitle}
              </motion.h2>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
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
    </aside>
  );
};

export default HeroSlider;
