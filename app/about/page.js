import Services from "@/components/home/services/ServicesSection";
import StatisticsSection from "@/components/home/statistics/StatisticsSection";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import Image from "next/image";
import First from "@/images/sewing.jpg";
import SkillsSection from "@/components/about/SkillsSection";
import OurTeam from "@/components/about/OurTeam";
import FirstPart from "@/components/about/FirstPart";

export default function About() {
  return (
    <div>
      <Image
        src={First}
        alt="Background"
        objectFit=""
        className=" h-56 w-full brightness-50 z-0"
        priority
      />
      <WhoWeAre />
      <Services />
      <div className="w-5/6 mx-auto">
        <StatisticsSection
          bgColor="bg-green"
          iconColor="text-white"
          textColor="text-white"
        />
      </div>

      <SkillsSection />

      <FirstPart />
      <OurTeam />
    </div>
  );
}
