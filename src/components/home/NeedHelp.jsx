"use client";
import Image from "next/image";
import sewing from "../../images/sewing.jpg";

export const NeedHelp = () => {
  return (
    <div className=" container bg-green-500 p-12 w-4/5">
      <p className="text-white text-2xl font-bold ">
        Need Any Helpppp? Feel Free To Call Us.
      </p>
      <p className="text-gray-400">(+1) 123 654 7894, (+1) 123 654 7895</p>
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
      <style jsx>{`
        .clip-triangle-right {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%, 25% 50%);
        }
      `}</style>
    </div>
  );
};
