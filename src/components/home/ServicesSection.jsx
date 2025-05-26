import { Globe, Layers, Cpu } from "lucide-react";
import { ServicesCard } from "./ServicesCard";

export const ServicesSection = () => {
  return (
    <div
      className="container mx-auto w-10/12 bg-white  
    flex flex-col md:flex-row md:justify-around items-center gap-10 
    relative z-10  shadow-2xl -translate-y-40 py-10"
    >
      <ServicesCard
        MyIcon={Globe}
        title="Fabric Development"
        description="There are many variations of passages of lorem ipsum available."
        link="/fabric-development"
      />
      <ServicesCard
        MyIcon={Layers}
        title="Design & Patterning"
        description="Helping you go from concept to production with precision."
        link="/design-patterning"
      />
      <ServicesCard
        MyIcon={Cpu}
        title="Tech Integration"
        description="Smart manufacturing with real-time tracking and automation."
        link="/tech-integration"
      />
    </div>
  );
};
