"use client";

import { useState } from "react";
import { Search, Shuffle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const RelatedProjects = ({ name, src, alt, slug, description }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=" pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-[#0A1A3A]">
          Related Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Using arbitrary placeholder images for related projects */}
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="relative group w-3/4 md:w-full h-[150px] overflow-hidden   duration-300">
                {/* Image with fill */}
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover hover:scale-50 hover:opacity-55 transition-transform duration-700"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0  bg-opacity-60 flex flex-col justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Icons */}
                  <div className="flex items-center justify-center gap-4">
                    <div
                      className="transform -translate-x-10 group-hover:translate-x-0 transition-all duration-500 bg-white group-hover:bg-green  p-3 rounded shadow cursor-pointer hover:scale-110"
                      onClick={() => setShowModal(true)}
                    >
                      <Search className="w-5 h-5 group-hover:text-white font-bold" />
                    </div>

                    <Link href={`/projects/${slug}`}>
                      <div className="transform translate-x-10 group-hover:translate-x-0 transition-all duration-500 bg-white group-hover:bg-green p-3 rounded shadow cursor-pointer hover:scale-110">
                        <Shuffle className="w-5 h-5 group-hover:text-white font-extrabold" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Modal */}
              {showModal && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
                  onClick={() => setShowModal(false)}
                >
                  <div
                    className="relative w-11/12 md:w-3/4 lg:w-1/2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={100}
                      height={100}
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
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{name}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProjects;
