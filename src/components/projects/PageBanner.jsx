import Image from "next/image";
import Link from "next/link";

const PageBanner = ({ title, backgroundImage }) => {
  return (
    <div className="relative h-60 w-full flex items-center justify-center text-center text-white">
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
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="mt-2 text-sm space-x-2">
          <Link href="/projects" className="hover:underline text-white">
            Projects
          </Link>
          <span className="text-green">•</span>
          <span className="text-white">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
