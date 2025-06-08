import React from "react";
import ServicesCardTwo from "./ServicesCardTwo";
import { Globe, Layers } from "lucide-react";

const ServicesListTwo = () => {
  return (
    <div className=" grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  sm:gap-6 md:gap-3 w-full md:w-10/12 mx-auto">
      <ServicesCardTwo
        MyIcon={require("lucide-react").Globe}
        title="Fabric Development"
        description="There are many variations of passages of lorem ipsum available."
      />
      <div className="lg:relative lg:top-[45px]">
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

      <div className="lg:relative lg:top-[45px]">
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
