import React from "react";
import ServicesCardTwo from "./ServicesCardTwo";
import {
  NotepadTextDashed,
  Paintbrush,
  Layers,
  Scissors,
  Globe,
} from "lucide-react";

const ServicesListTwo = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-6 md:gap-3 w-full md:w-10/12 mx-auto">
      {/* Fabric Development */}
      <ServicesCardTwo
        MyIcon={NotepadTextDashed}
        title="Fabric Development"
        description="We work with clients to create custom fabrics tailored to their project goals and material requirements."
      />

      {/* Digital Printing */}
      <div className="lg:relative lg:top-[45px]">
        <ServicesCardTwo
          MyIcon={Layers}
          title="Digital Printing"
          description="State-of-the-art digital printing delivering sharp details and long-lasting colors across all textiles."
        />
      </div>

      {/* Fabric Dyeing */}
      <ServicesCardTwo
        MyIcon={Paintbrush}
        title="Fabric Dyeing"
        description="Our dyeing process ensures color consistency, fastness, and eco-friendly standards for every batch."
      />

      {/* Design & Patterning */}
      <div className="lg:relative lg:top-[45px]">
        <ServicesCardTwo
          MyIcon={Scissors}
          title="Design & Patterning"
          description="From pattern creation to final design, our experts help visualize and prepare fabrics for production."
        />
      </div>
    </div>
  );
};

export default ServicesListTwo;
