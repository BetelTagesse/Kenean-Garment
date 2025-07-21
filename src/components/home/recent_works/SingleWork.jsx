"use client";

import { useState } from "react";

import { Search, Shuffle } from "lucide-react";
import Image from "next/image";
import First from "../../../images/sewing.jpg";
import Link from "next/link";

const SingleWork = ({ src, alt, name, slug }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="relative group w-4/5 h-[300px] overflow-hidden rounded-none shadow-none hover:scale-100 duration-300">
        {/* Image */}
        <Image
          src={src}
          alt={alt}
          className="object-cover w-full h-full  overflow-hidden hover:scale-105 transition-transform duration-700"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0  bg-opacity-60 flex flex-col justify-center  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Icons */}
          <div className="flex gap-4 items-center justify-center">
            <div
              className="transform -translate-x-10 group-hover:translate-x-0 transition-all duration-500 bg-white hover:bg-green text-black  hover:text-white p-3  shadow cursor-pointer hover:scale-110"
              onClick={() => setShowModal(true)}
            >
              <Search className="w-4 h-4   font-bold" />
            </div>

            <Link href={`/projects/${slug}`}>
              <div className="transform translate-x-10 group-hover:translate-x-0 transition-all duration-500 bg-white hover:bg-green text-black  hover:text-white p-3  shadow cursor-pointer hover:scale-110">
                <Shuffle className="w-4 h-4  font-extrabold" />
              </div>
            </Link>
          </div>

          {/* Description */}
          <p className="absolute text-black w-full py-3 text-center bg-white *:text-lg font-semibold -bottom-0 ">
            {name}
          </p>
        </div>
      </div>
      {showModal && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/10 z-50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-11/12 md:w-[90%] lg:w-[80%] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              className="rounded-lg object-contain w-full h-auto max-h-[90vh]"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleWork;
