"use client";

import Image from "next/image";
import Link from "next/link";

const FabricCard = ({ imageSrc, name, description, ctaLink }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white w-full max-w-sm mx-auto">
      {/* Fabric Image */}
      <div className="relative w-full h-64">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info Section */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <Link
          href={ctaLink || "/"}
          className="inline-block bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green transition"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default FabricCard;
