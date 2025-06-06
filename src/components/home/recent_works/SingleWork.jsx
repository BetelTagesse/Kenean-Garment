import { Search, Shuffle } from "lucide-react";
import Image from "next/image";
import First from "../../../images/sewing.jpg";
import Link from "next/link";

const SingleWork = ({ src, alt, name }) => {
  return (
    <div className="relative group w-3/4  md:w-[280px] h-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-110 duration-300 ">
      {/* Image */}
      <Image src={src} alt={alt} className="object-cover w-full h-full " />

      {/* Overlay on hover */}
      <div className="absolute inset-0  bg-opacity-60 flex flex-col justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Icons */}
        <div className="flex gap-4 items-center justify-center">
          <div className="bg-white hover:bg-green p-3 rounded shadow cursor-pointer hover:scale-110 transition-transform">
            <Link href="/">
              {" "}
              <Search className="w-5 h-5 text-black font-bold" />{" "}
            </Link>
          </div>
          <div className="bg-white hover:bg-green p-3 rounded shadow cursor-pointer hover:scale-110 transition-transform">
            <Link href="/">
              {" "}
              <Shuffle className="w-5 h-5 text-black font-extrabold" />
            </Link>{" "}
          </div>
        </div>

        {/* Description */}
        <p className="absolute text-black w-full py-3 text-center bg-white *:text-lg font-semibold -bottom-0 ">
          {name}
        </p>
      </div>
    </div>
  );
};

export default SingleWork;
