import React from "react";

const ServicesCardTwo = ({ MyIcon, title, description, className = "" }) => {
  return (
    <div
      className={` bg-white  mx-auto  my-3 w-96  md:w-80 lg:w-90 max-w-full   
    flex flex-col  items-start  rounded-3xl 
     z-10 shadow-2xl   -translate-y-40 py-10 px-3 ${className}`}
    >
      <MyIcon className="w-16 h-16 text-green mb-4 " />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4 w-full">{description}</p>
    </div>
  );
};

export default ServicesCardTwo;
