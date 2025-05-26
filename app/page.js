import { CallUsBanner } from "@/components/home/CallUsBanner";
import { NeedHelp } from "@/components/home/NeedHelp";
import Services from "@/components/home/services/ServicesSection";
import { ServicesCard } from "@/components/home/ServicesCard.jsx";
import { ServicesSection } from "@/components/home/ServicesSection.jsx";
import { SlidingImage } from "@/components/home/sliding_image.jsx";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import TestIconPage from "@/components/TestIcon";
import { Button } from "@/shared/button";

export default function Home() {
  return (
    <>
      <SlidingImage>
        <h2 className="text-3xl text-gray-400 font-bold mb-4">
          We Are From - 2019
        </h2>
        <h2 className="text-6xl text-gray-200 mb-6">
          Get Quality Fabric For <br /> Your Business
        </h2>
        <Button className="bg-green-500 font-bold px-10 hover:from-blue-900 hover:to-blue-950">
          LEARN MORE
        </Button>
      </SlidingImage>
      <ServicesSection />
      <WhoWeAre />
      {/* <NeedHelp /> */}
      <CallUsBanner />
      <Services />
    </>
  );
}
