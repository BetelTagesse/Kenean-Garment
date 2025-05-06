import { Globe, Layers, Cpu } from "lucide-react";
import { ServicesCard } from "./ServicesCard";

export const ServicesSection = () => {
  return (
    <div className="container w-5/6 mx-auto bg-white flex  justify-around relative z-50 transform -translate-y-40">
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
