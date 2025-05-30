import React from "react";
import Slider from "../Slider";

const FirstSection = () => {
  return (
    <div className="relative top-10  bg-background h-full w-full  ">
      <p className="text-green text-center text-[16px] font-semibold">
        Recent Works
      </p>
      <h2 className="text-4xl text-white font-semibold text-center mt-4">
        Experience Our Recent <span className="text-green">Works</span>
      </h2>
      <p className="text-white w-3/4 md:w-1/3 mx-auto mt-4 ">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <Slider />
    </div>
  );
};

export default FirstSection;
