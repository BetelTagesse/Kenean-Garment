import Services from "@/components/home/services/ServicesSection";
import StatisticsSection from "@/components/home/statistics/StatisticsSection";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import Image from "next/image";
import First from "@/images/sewing.jpg";
import SkillsSection from "@/components/about/SkillsSection";

export default function About() {
  return (
    <div>
      <Image
        src={First}
        alt="Background"
        objectFit="cover"
        className="brightness-50 z-0"
        priority
      />
      <WhoWeAre />
      <Services />

      <StatisticsSection bgColor="bg-green" className="items-white" />

      <SkillsSection />
    </div>
  );
}
