// "use client";
// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import BlogCard from "./BlogCard";

// export default function BlogSlider() {
//   const swiperRef = useRef(null);

// const blogData = [
//   {
//     image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
//     date: "Feb 25, 2025",
//     comments: "20",
//     category: "Business",
//     title: "There Are Many Variations Of Passages Available",
//     excerpt:
//       "It is a long established fact that a reader will be distracted by the...",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
//     date: "Feb 25, 2025",
//     comments: "20",
//     category: "Daily Textile",
//     title: "There Are Many Variations Of Passages Available",
//     excerpt:
//       "It is a long established fact that a reader will be distracted by the...",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
//     date: "Feb 25, 2025",
//     comments: "20",
//     category: "Lifestyle",
//     title: "There Are Many Variations Of Passages Available",
//     excerpt:
//       "It is a long established fact that a reader will be distracted by the...",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
//     date: "Feb 25, 2025",
//     comments: "20",
//     category: "Textile",
//     title: "Passages Available In The Factory",
//     excerpt:
//       "It is a long established fact that a reader will be distracted by the...",
//   },
// ];

//   return (
//     <div className="bg-gray-400 py-10 px-4">
//       <Swiper
//         // spaceBetween={20}
//         // slidesPerView={1}
//         // breakpoints={{
//         //   640: { slidesPerView: 1 },
//         //   768: { slidesPerView: 2 },
//         //   1024: { slidesPerView: 3 },
//         // }}
//         loop={true}
//         autoplay={{ delay: 3000 }}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//       >
//         {blogData.map((blog, index) => (
//           <SwiperSlide key={index}>
//             <BlogCard {...blog} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// components/ImageSlider.jsx

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const blogData = [
  {
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    date: "Feb 25, 2025",
    comments: "20",
    category: "Business",
    title: "There Are Many Variations Of Passages Available",
    excerpt:
      "It is a long established fact that a reader will be distracted by the...",
  },
  {
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    date: "Feb 25, 2025",
    comments: "20",
    category: "Daily Textile",
    title: "There Are Many Variations Of Passages Available",
    excerpt:
      "It is a long established fact that a reader will be distracted by the...",
  },
  {
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    date: "Feb 25, 2025",
    comments: "20",
    category: "Lifestyle",
    title: "There Are Many Variations Of Passages Available",
    excerpt:
      "It is a long established fact that a reader will be distracted by the...",
  },
  {
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    date: "Feb 25, 2025",
    comments: "20",
    category: "Textile",
    title: "Passages Available In The Factory",
    excerpt:
      "It is a long established fact that a reader will be distracted by the...",
  },
  {
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    date: "Feb 25, 2025",
    comments: "20",
    category: "Daily Textile",
    title: "There Are Many Variations Of Passages Available",
    excerpt:
      "It is a long established fact that a reader will be distracted by the...",
  },
  {
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    date: "Feb 25, 2025",
    comments: "20",
    category: "Lifestyle",
    title: "There Are Many Variations Of Passages Available",
    excerpt:
      "It is a long established fact that a reader will be distracted by the...",
  },
  {
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    date: "Feb 25, 2025",
    comments: "20",
    category: "Textile",
    title: "Passages Available In The Factory",
    excerpt:
      "It is a long established fact that a reader will be distracted by the...",
  },
];

const BlogSlider = () => {
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
        {blogData.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="  rounded-xl  overflow-hidden  hover:scale-105 transition-transform duration-700 ">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={blog.image}
                  alt={`Garment ${index + 1}`}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5   bg-white mx-auto w-10/12 relative z-10  shadow-2xl -translate-y-20 ">
                <div className="absolute top-0 right-0 bg-green text-white text-sm px-4 py-2   font-semibold ">
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
                  href="#"
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
