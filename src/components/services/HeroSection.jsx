"use client";
import Image from "next/image";
import BgImage from "@/images/sewing.jpg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={BgImage}
        alt="HeroSection Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0a1a3a]/90 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Best Textile Manufacturing Industries In The World.
          </h1>

          <p className="mt-4 text-lg text-gray-200 max-w-lg">
            We deliver premium fabrics through modern techniques, ensuring
            quality, durability, and style for all your textile needs.
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <Link
              href="/contact"
              className="relative inline-block overflow-hidden bg-green text-white font-bold py-3 px-6 rounded-full text-sm shadow group"
            >
              <span className="absolute inset-0 bg-purple w-0 group-hover:w-full transition-all duration-500 ease-out left-0 top-0 z-0 origin-left"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                CONTACT US
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
