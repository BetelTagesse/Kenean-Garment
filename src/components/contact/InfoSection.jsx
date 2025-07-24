"use client";

import { useState } from "react";
import { Mail, MapPin } from "lucide-react";

const InfoSection = () => {
  return (
    <div>
      <section className="max-w-7xl  mx-auto px-6 pt-12">
        <p className="text-sm text-green mb-5 font-semibold uppercase">
          Contact Us
        </p>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Get In <span className="text-green">Touch!</span>
        </h2>
        <p className="text-gray-600 max-w-4xl mb-10">
          We're here to help you with any questions about our textile services,
          fabric solutions, or custom orders.
        </p>

        {/* Head Office */}
        <div className="grid grid-cols-1 md:grid-cols-2  text-center gap-8 border-t border-gray-200 pt-14">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Head Office{" "}
            <span>
              <hr className="text-gray-200 mt-6" />
            </span>
          </h3>
          <h3 className="text-xl font-semibold text-gray-800 ">
            Branch Office{" "}
            <span>
              <hr className="text-gray-200 mt-6" />
            </span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14 ">
          <div className="flex  items-start gap-4 mb-6">
            <div className="bg-gray-100 p-4 rounded-full">
              <MapPin className="text-green w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-sm text-gray-600">
                2872 Modjo, Modjo, Ethiopia
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-4 rounded-full">
              <Mail className="text-green w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold">Call Us / Email</p>
              <p className="text-sm text-gray-600">(+1) 123 654 7894</p>
              <p className="text-sm text-gray-600">BetelTagesse367@gmail.com</p>
            </div>
          </div>

          <div className="flex  items-start gap-4 mb-6">
            <div className="bg-gray-100 p-4 rounded-full">
              <MapPin className="text-green w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-sm text-gray-600">
                2872 Ashewa meda, Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-4 rounded-full">
              <Mail className="text-green w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold">Call Us / Email</p>
              <p className="text-sm text-gray-600">+251913088240</p>
              <p className="text-sm text-gray-600">muler2011@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoSection;
