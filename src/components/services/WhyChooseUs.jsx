"use client";

import Link from "next/link";
import Image from "next/image";
import { Play, CheckIcon } from "lucide-react";

import sewingImage from "@/images/sewing.jpg";
const WhyChooseUsSection = () => {
  const features = [
    {
      title: "Low Price Cost",
      description:
        "Affordable textile solutions without reducing quality or customer satisfaction.",
    },
    {
      title: "Latest Technology",
      description:
        "Advanced textile machinery ensures fast, efficient, and precise production.",
    },
    {
      title: "Pure Quality",
      description:
        "Every fabric is tested for strength, color, and long-lasting durability.",
    },
    {
      title: "24/7 Support",
      description:
        "Get expert help anytime with fast responses and dedicated assistance.",
    },
  ];

  return (
    <>
      <div className="relative top-12 left-1/2 transform -translate-x-1/2 z-30 w-[60%] max-w-2xl bg-[#5BA600] text-white p-6 flex items-center shadow-xl">
        <div className="text-lg md:text-xl font-bold">
          The Best Textile Solutions For Your <br /> Business.
        </div>

        {/* Push button to the right */}
        <div className="ml-auto">
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
            <span className="relative z-10 w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <Play className="fill-green w-8 h-8" />
            </span>
          </Link>
        </div>
      </div>

      <section className=" bg-[rgb(255,255,255)] shadow-2xl py-20 px-4 sm:px-6 lg:px-8">
        <div className=" relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          <div className="relative hidden md:block w-full h-[450px] lg:h-[550px]  overflow-hidden shadow-2xl">
            <Image
              src={sewingImage}
              alt="Why Choose Us"
              fill
              className="object-cover "
              priority
            />
          </div>

          {/* Right Column: Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <p className="text-green text-sm font-semibold uppercase tracking-wider mb-2">
              WHY CHOOSE US
            </p>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              We Are Best Textile Company In The World
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start text-left ">
                  <span className="relative z-10 w-16 h-8 mx-2 rounded-full bg-green  transition flex justify-center items-center">
                    <CheckIcon
                      size={20}
                      className="text-white  flex-shrink-0 "
                    />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h3>

                    <p className=" text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUsSection;
