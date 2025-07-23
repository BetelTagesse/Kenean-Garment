import Image from "next/image";
import designer from "../../images/designer.jpg";
import { Button } from "@/shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const WhoWeAre = () => {
  return (
    <div className="flex flex-col md:flex-row w-10/12 mx-auto py-10 md:gap-10  items-center-safe md:items-stretch relative z-10">
      {/* Image Container */}
      <div className="w-full md:w-1/2  max-h-[600px]">
        <Image
          src={designer}
          alt="image of a garment worker"
          className="rounded-3xl opacity-90 p-3 object-cover h-full w-full"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-start px-3 pt-3 max-w-xl">
        <p className="text-green pb-4 font-bold"> WHO WE ARE</p>
        <p className="text-gray-900 text-3xl md:text-4xl capitalize leading-snug">
          The Best Textile <span className="text-green">Company</span> In{" "}
          <br className="hidden md:block" />
          The Country.
        </p>

        <p className="pt-6 text-sm md:text-base text-gray-600 leading-relaxed">
          We specialize in delivering high-quality fabrics with precision and
          care. Our expert team ensures every thread meets the highest industry
          standards for performance and sustainability.
        </p>

        <div className="flex pt-6 gap-5 items-center text-gray-600 text-base leading-relaxed">
          <FontAwesomeIcon icon={faCheck} className="text-green text-xl" />
          <p> Ethical sourcing and premium craftsmanship</p>
        </div>
        <div className="flex pt-4 text-gray-600 text-base  gap-5 items-center">
          <FontAwesomeIcon icon={faCheck} className="text-green text-xl" />
          <p> Advanced technology and modern equipment</p>
        </div>
        <div className="flex mb-5 pt-4 gap-5  text-gray-600 text-base items-center">
          <FontAwesomeIcon icon={faCheck} className="text-green text-xl" />
          <p> Dedicated support from concept to delivery</p>
        </div>

        <Button className="  font-bold px-8 pt-4 ">LEARN MORE</Button>
      </div>
    </div>
  );
};
