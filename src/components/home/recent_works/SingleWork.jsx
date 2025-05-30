import { Search, Shuffle } from "lucide-react";
import Image from "next/image";
import First from "../../../images/sewing.jpg";

const HoverCard = () => {
  return (
    <div className="relative group w-[300px] h-[400px] overflow-hidden rounded-xl shadow-lg">
      {/* Image */}
      <Image src={First} alt="Fabric" className="object-cover w-full h-full" />

      {/* Overlay on hover */}
      <div className="absolute inset-0  bg-opacity-60 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Icons */}
        <div className="flex gap-4">
          <div className="bg-white p-3 rounded shadow cursor-pointer hover:scale-110 transition-transform">
            <Search className="w-5 h-5 text-black font-bold" />
          </div>
          <div className="bg-white p-3 rounded shadow cursor-pointer hover:scale-110 transition-transform">
            <Shuffle className="w-5 h-5 text-black font-extrabold" />
          </div>
        </div>

        {/* Description */}
        <p className="absolute text-black  bg-white *:text-lg font-semibold -bottom-0 ">
          Chiffon Fabric
        </p>
      </div>
    </div>
  );
};

export default HoverCard;
