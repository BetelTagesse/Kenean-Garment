"use client";

import { useState } from "react";
import { Search, Shuffle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SingleProject = ({ src, alt, name, slug }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Image Container */}
      <div className="relative group w-3/4 md:w-full h-[450px] overflow-hidden rounded-2xl shadow-lg hover:scale-110 duration-300">
        {/* Image with fill */}
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover hover:scale-105 hover:opacity-55 transition-transform duration-700"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0  bg-opacity-60 flex flex-col justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Icons */}
          <div className="flex items-center justify-center gap-4">
            <div
              className="transform -translate-x-10 group-hover:translate-x-0 transition-all duration-500 bg-white hover:bg-green p-3 rounded shadow cursor-pointer hover:scale-110"
              onClick={() => setShowModal(true)}
            >
              <Search className="w-5 h-5 text-black font-bold" />
            </div>

            <Link href={`/projects/${slug}`}>
              <div className="transform translate-x-10 group-hover:translate-x-0 transition-all duration-500 bg-white hover:bg-green p-3 rounded shadow cursor-pointer hover:scale-110">
                <Shuffle className="w-5 h-5 text-black font-extrabold" />
              </div>
            </Link>
          </div>

          {/* Description */}
          <p className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-white text-black w-full py-3 text-center text-lg font-semibold">
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
            className=" w-11/12 md:w-3/4 lg:w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={800}
              height={500}
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

export default SingleProject;
