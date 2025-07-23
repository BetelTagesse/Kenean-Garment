import Image from "next/image";
import Link from "next/link";
import backgroundImage from "@/images/image1.jpg";

const PageBanner = () => {
  return (
    <div className="relative h-60 w-full flex items-center justify-center text-center text-white mb-60">
      {/* Background */}
      <Image
        src={backgroundImage}
        alt="Page banner"
        fill
        className="object-cover opacity-60"
        priority
      />
      <div className="absolute inset-0 bg-[#0a1a3a]/70 z-10"></div>

      {/* Overlay content */}
      <div className="relative z-10 ">
        <div className="mt-2 text-sm space-x-2">
          <Link
            href="/services"
            className="hover:underline text-2xl text-white"
          >
            Services
          </Link>
          {/* <span className="text-green text-3xl">•</span> */}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
