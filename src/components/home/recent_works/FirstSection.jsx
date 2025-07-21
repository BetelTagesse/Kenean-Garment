import React from "react";
import Slider from "../Slider";

const FirstSection = () => {
  return (
    <div className="relative top-10  h-full w-full  ">
      <p className="text-green text-center text-[16px] font-semibold">
        Recent Works
      </p>
      <h2 className="text-4xl text-white font-semibold text-center mt-4">
        Experience Our Recent <span className="text-green">Works</span>
      </h2>
      <p className="text-gray-200 text-base w-3/4 md:w-1/3 mx-auto mt-4 text-center ">
        Every fabric we craft is a reflection of precision, care, and creativity
        driven by a passion for quality results.
      </p>
      <Slider />
    </div>
  );
};

export default FirstSection;
