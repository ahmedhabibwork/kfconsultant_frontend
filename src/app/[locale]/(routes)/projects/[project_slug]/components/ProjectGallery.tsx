"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface ProjectGalleryProps {
  images: string[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="w-full mx-auto flex gap-8 max-lg:flex-col max-lg:gap-4">
      {/* Main Image */}
      <motion.div
        className="w-3/4 max-lg:w-full relative"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image
          alt={`Project image ${currentImageIndex + 1}`}
          src={images[currentImageIndex]}
          width={600}
          height={400}
          className="w-full h-auto cursor-pointer max-lg:border border-[#ccc] transition-opacity duration-300"
        />

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between rtl:flex-row-reverse gap-[20px] mt-4 w-full absolute left-0 top-[50%] translate-y-[-50%]">
          <button
            aria-label="Previous image"
            onClick={handlePrevious}
            className="bg-white/15 mx-12 p-4 backdrop-blur-sm w-[72px] h-[72px] md:w-[50px] md:h-[50px] rounded-[50%] cursor-pointer flex items-center justify-center max-md:scale-50 max-md:p-2 max-md:mx-0 hover:bg-white/25 transition-all"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9999 19.9995C11.9999 18.8329 12.4499 17.6662 13.3333 16.7829L24.1999 5.91621C24.6833 5.43288 25.4833 5.43288 25.9666 5.91621C26.4499 6.39954 26.4499 7.19954 25.9666 7.68288L15.0999 18.5495C14.2999 19.3495 14.2999 20.6495 15.0999 21.4495L25.9666 32.3162C26.4499 32.7995 26.4499 33.5995 25.9666 34.0829C25.4833 34.5662 24.6833 34.5662 24.1999 34.0829L13.3333 23.2162C12.4499 22.3329 11.9999 21.1662 11.9999 19.9995Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            aria-label="Next image"
            onClick={handleNext}
            className="bg-white/15 mx-12 p-4 backdrop-blur-sm w-[72px] h-[72px] md:w-[50px] md:h-[50px] rounded-[50%] cursor-pointer flex items-center justify-center max-md:scale-50 max-md:p-2 max-md:mx-0 hover:bg-white/25 transition-all"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.0001 19.9995C28.0001 18.8329 27.5501 17.6662 26.6667 16.7829L15.8001 5.91621C15.3167 5.43288 14.5167 5.43288 14.0334 5.91621C13.5501 6.39954 13.5501 7.19954 14.0334 7.68288L24.9001 18.5495C25.7001 19.3495 25.7001 20.6495 24.9001 21.4495L14.0334 32.3162C13.5501 32.7995 13.5501 33.5995 14.0334 34.0829C14.5167 34.5662 15.3167 34.5662 15.8001 34.0829L26.6667 23.2162C27.5501 22.3329 28.0001 21.1662 28.0001 19.9995Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-3 max-lg:gap-4 w-1/4 h-fit max-lg:grid-cols-1 max-lg:w-full">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <Image
              alt={`Thumbnail ${index + 1}`}
              src={image}
              width={1200}
              height={800}
              onClick={() => handleThumbnailClick(index)}
              className={`size-20 max-lg:w-full max-lg:h-auto object-cover cursor-pointer max-lg:border max-lg:border-[#ccc] transition-opacity duration-300 ${
                currentImageIndex === index
                  ? "opacity-100 border-2 border-primary"
                  : "opacity-70 hover:opacity-100"
              }`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
