import React from "react";
import ServicesCardTwo from "./ServicesCardTwo";
import { Globe, Layers } from "lucide-react";

const ServicesListTwo = () => {
  return (
    <div className="flex gap-3">
      <ServicesCardTwo
        MyIcon={require("lucide-react").Globe}
        title="Fabric Development"
        description="There are many variations of passages of lorem ipsum available."
      />

      <ServicesCardTwo
        MyIcon={require("lucide-react").Layers}
        title="Design & Patterning"
        description="Helping you go from concept to production with precision."
      />
      <ServicesCardTwo
        MyIcon={require("lucide-react").Globe}
        title="Fabric Development"
        description="There are many variations of passages of lorem ipsum available."
      />

      <ServicesCardTwo
        MyIcon={require("lucide-react").Layers}
        title="Design & Patterning"
        description="Helping you go from concept to production with precision."
      />
    </div>
  );
};

export default ServicesListTwo;
