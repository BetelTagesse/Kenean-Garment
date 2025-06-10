"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Search, Shuffle } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import First from "@/images/sewing.jpg";
import Second from "@/images/designer.jpg";
import Third from "@/images/cola.png";
import Fourth from "@/images/bbq_burger.png";

const OurTeam = () => {
  return (
    <div className="w-5/6  mx-auto py-10">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {[First, Second, Third, Fourth].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="  rounded-xl  overflow-hidden hover:scale-105 transition-transform duration-700  ">
              <div className="overflow-hidden rounded-xl shadow-lg ">
                <Image
                  src={img}
                  alt={`Expert ${index + 1}`}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

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
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeam;
