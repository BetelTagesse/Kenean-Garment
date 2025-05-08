import Image from "next/image";
import sewing from "@/images/sewing.jpg"; // Update path accordingly

export const CallUsBanner = () => {
  return (
    <div className="relative w-11/12 h-56 bg-[#5aad00] flex items-center overflow-hidden">
      {/* <i class="flaticon flaticon-yarn-1 absolute top-10 left-10 text-4xl text-button -z-1"></i> */}
      <svg
        class="lucide lucide-yarn absolute top-10 left-10 text-4xl text-red-600 -z-1"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        // stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M6 2v8a4 4 0 0 1 4 4h8a4 4 0 0 1 4 4V2"></path>
      </svg>
      {/* Left Text Content */}

      <div className=" relative w-full md:w-2/3 px-6 z-10">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
          Need Any Help? Feel Free To Call Us.
        </h2>
        <p className="text-white text-base md:text-lg">
          (+1) 123 654 7894, (+1) 123 654 7895
        </p>
      </div>

      {/* Right Image */}
      <div className="absolute right-0 top-0 w-2/5 h-full ">
        <Image
          src={sewing}
          alt="Sewing machine"
          fill
          className="object-cover   "
          priority
        />
      </div>

      {/* Green Triangle Overlay */}
      <div className="absolute right-97 top-0 h-full w-1/8 bg-[#5aad00] clip-left   z-10 " />

      <div className="absolute right-97 top-0 h-full w-1/8 bg-[#5aad00] clip-left-two   z-10 " />

      {/* Right green triangle */}
      <div className="absolute right-0 top-0 h-full w-1/8 bg-[#5aad00] clip-right z-20" />
    </div>
  );
};
