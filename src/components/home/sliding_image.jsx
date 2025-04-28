"use client";
import { useEffect, useState } from "react";
import cola from "../../images/cola.png";
import burger from "../../images/bbq_burger.png";

export const SlidingImage = ({ children }) => {
  const images = [
    { src: cola.src, alt: "image 1" },
    { src: burger.src, alt: "image 2" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* background image */}
      <div
        className="absolute inset-0 bg-center bg-cover brightness-50"
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
      />

      {/* bluish filter */}
      <div className="absolute inset-0 bg-blue-900 opacity-20 mix-blend-multiply" />

      {/* Content */}
      <div className="relative flex flex-col justify-center items-start h-full text-white p-20">
        {children}
      </div>
    </div>
  );
};
