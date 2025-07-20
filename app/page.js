import BlogWholePart from "@/components/home/blog/BlogWholePart";
import { CallUsBanner } from "@/components/home/CallUsBanner";
import FirstPart from "@/components/home/choose_us/FirstPart";
import WholePart from "@/components/home/choose_us/WholePart";
import { NeedHelp } from "@/components/home/NeedHelp";
import ProcedureSection from "@/components/home/procedure/ProcedureSection";
import RecentWorks from "@/components/home/recent_works/RecentWorks";
import ServicesListTwo from "@/components/home/services/ServicesListTwo";
import Services from "@/components/home/services/ServicesSection";
import { ServicesCard } from "@/components/home/ServicesCard.jsx";
import { ServicesSection } from "@/components/home/ServicesSection.jsx";
import { SlidingImage } from "@/components/home/sliding_image.jsx";
import StatisticsSection from "@/components/home/statistics/StatisticsSection";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import TestIconPage from "@/components/TestIcon";
import { Button } from "@/shared/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SlidingImage>
        <div className="mx-auto w-11/12 justify-items-stretch ">
          <h2 className="text-3xl text-gray-400 font-bold mb-4">
            We Are From - 2019
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-200 mb-6">
            Get Quality Fabric For <br /> Your Business
          </h2>
          <Link
            href="/about"
            className="relative inline-block overflow-hidden bg-green text-white  py-3 px-6 rounded-full  shadow group"
          >
            {/* Animated purple background */}
            <span className="absolute inset-0 bg-purple w-0 group-hover:w-full transition-all duration-500 ease-out left-0 top-0 z-0 origin-left"></span>

            {/* Link text stays on top */}

            <span
              className={`relative z-10 px-8   group-hover:text-white transition-colors duration-300 capitalize ${className}`}
            >
              {children}
            </span>
          </Link>
        </div>
      </SlidingImage>
      <ServicesSection />
      <WhoWeAre />
      {/* <NeedHelp /> */}
      <CallUsBanner />
      <Services />
      <StatisticsSection />
      <ProcedureSection />
      <RecentWorks />
      <WholePart />
      <BlogWholePart />
    </>
  );
}
