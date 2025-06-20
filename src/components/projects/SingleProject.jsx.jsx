// import Image from "next/image";

// import designer from "../../images/designer.jpg";
// import sewing from "../../images/sewing.jpg";

// const images = [designer, sewing, designer, sewing, designer, sewing];

// export default function Projects() {
//   return (
//     <section className="px-6 py-12 max-w-7xl  mx-auto">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// {images.map((src, index) => (
//   <div key={index} className="overflow-hidden rounded-lg shadow-md">
//             <Image
//               src={src}
//               alt={`Sewing project ${index + 1}`}
//               className="w-full h-[450px] object-cover transition-transform duration-300 hover:scale-105"
//             />
//                 {/* Overlay on hover */}
//                   <div className="absolute inset-0  bg-opacity-60 flex flex-col justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     {/* Icons */}
//                     <div className="flex gap-4 items-center justify-center">
//                       <div className="bg-white hover:bg-green p-3 rounded shadow cursor-pointer hover:scale-110 transition-transform">
//                         <Link href="/">
//                           {" "}
//                           <Search className="w-5 h-5 text-black font-bold" />{" "}
//                         </Link>
//                       </div>
//                       <div className="bg-white hover:bg-green p-3 rounded shadow cursor-pointer hover:scale-110 transition-transform">
//                         <Link href="/">
//                           {" "}
//                           <Shuffle className="w-5 h-5 text-black font-extrabold" />
//                         </Link>{" "}
//                       </div>
//                     </div>

//                     {/* Description */}
//                     <p className="absolute text-black w-full py-3 text-center bg-white *:text-lg font-semibold -bottom-0 ">
//                       {name}
//                     </p>
//                   </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { Search, Shuffle } from "lucide-react";
import Image from "next/image";
import First from "../../../images/sewing.jpg";
import Link from "next/link";

import designer from "../../images/designer.jpg";
import sewing from "../../images/sewing.jpg";

const images = [designer, sewing, designer, sewing, designer, sewing];

const SingleProject = ({ src, alt, name }) => {
  return (
    <div className="relative group w-3/4 md:w-full  h-[300px] overflow-hidden rounded-2xl shadow-lg hover:scale-110 duration-300 ">
      {/* Image */}

      <Image
        src={src}
        alt={alt}
        className="object-cover w-full h-full  overflow-hidden hover:scale-105 transition-transform duration-700"
      />

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

export default SingleProject;
