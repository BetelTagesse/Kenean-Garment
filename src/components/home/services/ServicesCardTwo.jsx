import React from "react";

const ServicesCardTwo = ({ MyIcon, title, description, className = "" }) => {
  return (
    <div
      className={`  mx-auto w-60 bg-white  
    flex flex-col  items-start  
     z-10  shadow-2xl -translate-y-40 py-10 px-3 ${className}`}
    >
      <MyIcon className="w-16 h-16 text-green mb-4 animate-rotate-once" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4 w-full">{description}</p>
    </div>
  );
};

export default ServicesCardTwo;
