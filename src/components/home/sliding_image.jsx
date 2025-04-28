"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import cola from "../../images/cola.png";
import burger from "../../images/bbq_burger.png";

export const SlidingImage = () => {
  const images = [
    { src: cola, alt: "image 1" },
    { src: burger, alt: "image 2" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="w-full max-h-170"
      />
    </div>
  );
};
