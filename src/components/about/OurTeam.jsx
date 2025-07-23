"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Search, Shuffle } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import First from "@/images/worker1.jpg";
import Second from "@/images/worker2.jpg";
import Third from "@/images/worker3.jpg";
import Fourth from "@/images/worker4.jpg";

const teams = [
  { name: "Alem Tadesse", title: "Textile Production Manager", image: First },
  { name: "Liya Mekonnen", title: "Fabric Design Specialist", image: Second },
  { name: " Hana Belay", title: "Textile Engineer", image: Third },
  { name: "Samuel Tesfaye", title: "Quality Assurance Lead", image: Fourth },
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
              <div className=" md:px-6 px-10 lg:px-10 py-4  bg-white   mx-auto w-fit relative z-20  shadow-xl -translate-y-8 group-hover:border-b-4 group-hover:border-b-green  ">
                <h3 className=" text-xl  font-bold text-gray-800 hover:text-green">
                  {name.name}
                </h3>
                <p className=" text-sm">{name.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeam;
