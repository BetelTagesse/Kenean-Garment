"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blog.js";

const BlogSlider = () => {
  return (
    <div className="w-5/6 mx-auto py-10 px-4 ">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 0,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="  rounded-xl overflow-hidden hover:scale-105 transition-transform duration-700">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={blog.image}
                  alt={`Blog image ${index + 1}`}
                  width={600}
                  height={320}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-5 bg-white mx-auto w-11/12 relative z-10 shadow-xl -translate-y-20">
                <div className="absolute top-0 right-0 bg-green text-white text-sm px-4 py-2 font-semibold">
                  📅 {blog.date}
                </div>
                <div className="flex items-center text-sm mt-5 text-gray-500 space-x-2">
                  <span>💬 {blog.comments} Comments</span>
                  <span>/</span>
                  <span>📁 {blog.category}</span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-gray-800 hover:text-green">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-block font-medium mt-4 text-sm hover:text-green"
                >
                  READ MORE <span className="text-green px-2"> → </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSlider;
