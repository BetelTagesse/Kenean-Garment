import React from "react";
import ServicesCardTwo from "./ServicesCardTwo";
import { Globe, Layers } from "lucide-react";

const ServicesListTwo = () => {
  return (
    <div className=" flex flex-col gap-4 lg:flex-row lg:gap-1 w-10/12 mx-auto ">
      <ServicesCardTwo
        MyIcon={require("lucide-react").Globe}
        title="Fabric Development"
        description="There are many variations of passages of lorem ipsum available."
      />
      <div className="relative top-[45px]">
        <ServicesCardTwo
          MyIcon={require("lucide-react").Layers}
          title="Design & Patterning"
          description="Helping you go from concept to production with precision."
        />
      </div>

      <ServicesCardTwo
        MyIcon={require("lucide-react").Globe}
        title="Fabric Development"
        description="There are many variations of passages of lorem ipsum available."
      />

      <div className="relative top-[45px]">
        <ServicesCardTwo
          MyIcon={require("lucide-react").Layers}
          title="Design & Patterning"
          description="Helping you go from concept to production with precision."
        />
      </div>
    </div>
  );
};

export default ServicesListTwo;
