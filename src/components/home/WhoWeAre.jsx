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
      <div className="w-full md:w-1/2 flex flex-col justify-start px-3 py-10 max-w-xl">
        <p className="text-green pb-4 font-bold"> WHO WE ARE</p>
        <p className="text-gray-900 text-3xl md:text-4xl capitalize leading-snug">
          The Best Textile <span className="text-green">Company</span> In{" "}
          <br className="hidden md:block" />
          The Country.
        </p>

        <p className="pt-6 text-sm md:text-base">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <div className="flex pt-6 gap-5 items-center">
          <FontAwesomeIcon icon={faCheck} className="text-green text-2xl  " />
          <p> Sed ut perspiciatis unde omnis</p>
        </div>
        <div className="flex pt-6 gap-5 items-center">
          <FontAwesomeIcon icon={faCheck} className="text-green text-2xl  " />
          <p>At vero eos et accusamus et iusto</p>
        </div>
        <div className="flex pt-6 gap-5 items-center">
          <FontAwesomeIcon icon={faCheck} className="text-green text-2xl  " />
          <p>Natus error sit voluptatem accusantium</p>
        </div>
        <Button className=" mt-12 bg-green  font-bold px-8 py-2 hover:from-blue-900 hover:to-blue-950">
          LEARN MORE
        </Button>
      </div>
    </div>
  );
};
