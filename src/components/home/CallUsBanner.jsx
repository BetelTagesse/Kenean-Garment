"use client";
import Image from "next/image";
import sewing from "../../images/sewing.jpg";

export const CallUsBanner = () => {
  return (
    <div className="relative w-full flex items-center overflow-hidden h-52">
      {/* Left green block */}
      <div className="bg-green-600 text-white w-2/3 h-full flex flex-col justify-center pl-10 relative z-10">
        <h2 className="text-2xl font-bold">
          Need Any Help? Feel Free To Call Us.
        </h2>
        <p className="text-lg pt-2">(+1) 123 654 7894, (+1) 123 654 7895</p>
      </div>

      {/* Right image with angled green overlay */}
      <div className="absolute right-0 top-0 h-full w-1/3">
        <Image
          src={sewing}
          alt="Sewing Machine"
          fill
          className="object-cover z-0"
        />
        {/* Green angled overlay */}
        <div className="absolute top-0 right-0 h-full w-full bg-green-600 clip-triangle-right z-10" />
      </div>

      {/* Custom Tailwind Plugin or inline style for the triangle clip */}
      <style jsx>{`
        .clip-triangle-right {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%, 25% 50%);
        }
      `}</style>
    </div>
  );
};
