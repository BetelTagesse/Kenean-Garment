import React from "react";

const ServicesCardTwo = ({ MyIcon, title, description, className = "" }) => {
  return (
    <div
      className={`w-1/2 flex flex-col items-center justify-center text-center p-6 group ${className}`}
    >
      <MyIcon className="w-16 h-16 text-green mb-4 animate-rotate-once" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4 w-1/2">{description}</p>
    </div>
  );
};

export default ServicesCardTwo;
