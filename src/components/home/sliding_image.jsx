"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "@/images/image1.jpg";
import image2 from "@/images/image2.jpg";
import image3 from "@/images/image3.jpg";
import image4 from "@/images/image4.jpg";
import image5 from "@/images/image5.jpg";

export const SlidingImage = ({ children }) => {
  const images = [
    { src: image1.src, alt: "image 1" },
    { src: image2.src, alt: "image 2" },
    { src: image3.src, alt: "image 3" },
    { src: image4.src, alt: "image 4" },
    { src: image5.src, alt: "image 5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="relative w-full h-[800px] overflow-hidden group">
      {/* Backward Button */}
      <button
        onClick={() => {
          setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        }}
        className="hidden lg:block absolute top-1/2 left-4 transform -translate-y-20 bg-green text-white px-2 py-2 rounded-full shadow-lg hover:bg-purple transition duration-300 z-10 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover  brightness-50"
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
          // backgroundColor: "rgb(85, 92, 99)",
          objectFit: "cover",
        }}
      />
      <div className="absolute inset-0 bg-[#0a1a3a]/50"></div>

      {/* Forward Button */}
      <button
        onClick={() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
        }}
        className="hidden lg:block absolute top-1/2 right-4 transform -translate-y-20 bg-green text-white px-2 py-2 rounded-full shadow-lg hover:bg-purple transition duration-300 z-10 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-start h-full text-white font-bold p-20">
        {children}
      </div>
    </div>
  );
};
