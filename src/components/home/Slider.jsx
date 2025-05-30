import React from "react";

const Slider = () => {
  return (
    <div className="relative w-30 h-1 mx-auto mt-8 ">
      <div className="absolute   -bottom-1 w-full h-full bg-green overflow-hidden"></div>
      <div className="animate-slider  bg-green absolute  z-10"></div>
    </div>
  );
};

export default Slider;
