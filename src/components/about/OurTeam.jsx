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
import Third from "@/images/sewing.jpg";
import Fourth from "@/images/bbq_burger.png";

const teams = [
  { name: "John Doe", title: "Lead Designer", image: First },
  { name: "Jane Doe", title: "UX/UI Designer", image: Second },
  { name: "Johnson Doe", title: "Lead Developer", image: Third },
  { name: "Janekin Doe", title: "Project Manager", image: Fourth },
];

const OurTeam = () => {
  return (
    <div className="w-5/6  mx-auto py-10">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {teams.map((name, index) => (
          <SwiperSlide key={index}>
            <div className="  rounded-xl  overflow-hidden group hover:scale-105 transition-transform duration-700  ">
              <div className=" relative group overflow-hidden rounded-xl shadow-lg ">
                <Image
                  src={name.image}
                  alt={`Expert ${index + 1}`}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-10 py-4  bg-white   mx-auto w-fit relative z-20  shadow-xl -translate-y-8 group-hover:border-b-4 group-hover:border-b-green  ">
                <h3 className=" text-2xl  font-bold text-gray-800 hover:text-green">
                  {name.name}
                </h3>
                <p className=" text-sm">{name.title}</p>
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
