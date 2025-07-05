"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectInfo({
  src,
  alt,
  projectName,
  category,
  client,
  date,
  price,
  website,
  status,
}) {
  return (
    <div className=" max-w-[85%] mx-auto grid grid-cols-1  lg:grid-cols-3 gap-8  items-center md:items-start ">
      {/* Left: Image */}
      <div className="relative w-full h-[500px] md:col-span-2 rounded-lg overflow-hidden shadow">
        <Image src={src} alt={alt} fill className="object-cover" priority />
      </div>

      {/* Right: Info Card */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Project Information
        </h2>

        {/* Border rows with full width */}
        <div className="  bg-white  w-4/5 mx-auto border-gray-300 shadow-lg">
          {[
            ["Project", projectName],
            ["Category", category],
            ["Clients", client],
            ["Date", date],
            ["Price", price],
            [
              "Website",
              website ? (
                <Link
                  href={website}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  {website.replace(/https?:\/\//, "")}
                </Link>
              ) : (
                "N/A"
              ),
            ],
            ["Status", status],
          ].map(([label, value], i) => (
            <div
              key={label}
              className={`text-gray-700 px-6 py-4 ${
                i !== 6 ? "border-b border-gray-300" : ""
              }`}
            >
              <span className="font-semibold">{label}:</span> {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
