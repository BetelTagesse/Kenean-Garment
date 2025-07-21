import { NotepadTextDashed, Scissors, Globe, Globe2Icon } from "lucide-react";
import { ServicesCard } from "./ServicesCard";

export const ServicesSection = () => {
  return (
    <div
      className="container mx-auto w-10/12 bg-white  
    flex flex-col md:flex-row md:justify-around items-center gap-10 
    relative z-10  shadow-2xl -translate-y-40 py-10"
    >
      <ServicesCard
        MyIcon={NotepadTextDashed}
        title="Fabric Development"
        description="We help businesses create custom fabric solutions tailored to their product needs."
        link="/projects"
      />
      <ServicesCard
        MyIcon={Scissors}
        title="Design & Patterning"
        description="Helping you go from concept to production with precision."
        link="/projects"
      />
      <ServicesCard
        MyIcon={Globe2Icon}
        title="Tech Integration"
        description="Smart manufacturing with real-time tracking and automation."
        link="/projects"
      />
    </div>
  );
};
