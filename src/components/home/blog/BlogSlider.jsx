"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BlogCard from "./BlogCard";

export default function BlogSlider() {
  const swiperRef = useRef(null);

  const blogData = [
    {
      image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      date: "Feb 25, 2023",
      comments: "20",
      category: "Business",
      title: "There Are Many Variations Of Passages Available",
      excerpt:
        "It is a long established fact that a reader will be distracted by the...",
    },
    {
      image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      date: "Feb 25, 2023",
      comments: "20",
      category: "Daily Textile",
      title: "There Are Many Variations Of Passages Available",
      excerpt:
        "It is a long established fact that a reader will be distracted by the...",
    },
    {
      image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      date: "Feb 25, 2023",
      comments: "20",
      category: "Lifestyle",
      title: "There Are Many Variations Of Passages Available",
      excerpt:
        "It is a long established fact that a reader will be distracted by the...",
    },
    {
      image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      date: "Feb 25, 2023",
      comments: "20",
      category: "Textile",
      title: "Passages Available In The Factory",
      excerpt:
        "It is a long established fact that a reader will be distracted by the...",
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {blogData.map((blog, index) => (
          <SwiperSlide key={index}>
            <BlogCard {...blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
