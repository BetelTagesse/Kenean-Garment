"use client";
import Image from "next/image";
import BgImage from "@/images/sewing.jpg";

import {  Play } from "lucide-react";
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
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p>
        </div>

        {/* CTA Button */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30">
          <Link
            href="/contact"
            className="relative inline-block overflow-hidden bg-green text-white font-bold py-3 px-6 rounded-full text-sm shadow group"
          >
            {/* Animated purple background */}
            <span className="absolute inset-0 bg-purple w-0 group-hover:w-full transition-all duration-500 ease-out left-0 top-0 z-0 origin-left"></span>

            {/* Link text stays on top */}
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              CONTACT US
            </span>
          </Link>
        </div>
      </div>
      {/* Green Box with Play Button */}

      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-30 w-[85%] max-w-4xl bg-[#5BA600] text-white p-6 rounded-t-xl flex justify-between items-center shadow-xl">
        <div className="text-lg md:text-xl font-bold">
          The Best Textile Solutions For Your Business.
        </div>

        {/* Animated Play Button */}
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          {/* Outer animation pulse */}
          <span className="absolute inset-0 rounded-full animate-ping bg-white/30 group-hover:scale-110 transition-transform duration-300"></span>

          {/* Actual button */}
          <span className="relative z-10 w-14 h-14 rounded-full bg-white  transition flex items-center justify-center">
            <Play className="fill-green  w-8 h-8 " />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
