"use client";
import { useState, useEffect } from "react";

const Services = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev === 0 ? 100 : 0));
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative top-10">
      <p className="text-green text-center text-[16px]  font-semibold ">
        SERVICES
      </p>
      <h2 className="text-4xl text-black font-semibold text-center mt-4">
        Experience Best <span className="text-green"> Services </span>
      </h2>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        class="w-30 h-2 bg-green rounded-lg appearance-none cursor-pointer accent-green-600 "
      />
    </div>
  );
};

export default Services;
