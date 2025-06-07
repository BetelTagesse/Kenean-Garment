import React from "react";
import Slider from "../Slider";
import ProcedureList from "./ProcedureList";

const ProcedureSection = () => {
  return (
    <div className="relative top-10 p-6  bg-background h-full w-full ">
      <p className="text-green text-center text-[16px] font-semibold">
        WORKING PROCESS
      </p>
      <h2 className=" text-4xl text-black font-semibold text-center mt-4 ">
        Four Step Working <span className="text-green">Process</span>
      </h2>
      <Slider />
      <ProcedureList />
    </div>
  );
};

export default ProcedureSection;
