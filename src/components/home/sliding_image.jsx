"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import cola from "../../images/cola.png";
import burger from "../../images/bbq_burger.png";
import designer from "../../images/designer.jpg";

export const SlidingImage = ({ children }) => {
  const images = [
    { src: cola.src, alt: "image 1" },
    { src: burger.src, alt: "image 2" },
    { src: designer.src, alt: "image 3" },
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
          backgroundColor: "rgb(85, 92, 99)",
          objectFit: "cover",
        }}
      />

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
      <div className="relative flex flex-col justify-center items-start h-full text-white p-20">
        {children}
      </div>
    </div>
  );
};
