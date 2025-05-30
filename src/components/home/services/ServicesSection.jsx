"use client";
import { useEffect, useState } from "react";
import Slider from "../Slider";
import ServicesListTwo from "./ServicesListTwo";

const Services = () => {
  return (
    <>
      <div className="relative top-10 p-6 bg-background h-full w-full ">
        <p className="text-green text-center text-[16px] font-semibold">
          SERVICES
        </p>
        <h2 className="text-4xl text-black font-semibold text-center mt-4">
          Experience Best <span className="text-green">Services</span>
        </h2>
        <Slider />
      </div>
      <div className=" mt-40 md:mt-80">
        {" "}
        <ServicesListTwo />
      </div>
    </>
  );
};

export default Services;
