"use client";

import React from "react";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import First from "@/images/sewing.jpg";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl">
          {icon} {/* Render the icon component passed as a prop */}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg">
            Home / <span className="font-semibold">Services</span>
          </p>
        </div>
        <div
          className="relative bg-cover bg-center text-white py-24 text-center"
          style={{
            backgroundImage: `url(${First.src})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>{" "}
          <h3 className="text-4xl font-bold relative z-10">
            Our Services.services
          </h3>
        </div>
      </section>
      {/* Services Grid Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-2">
            WHAT WE DO
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Services We Provide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </section>
      {/* About Us / Experience Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            {" "}
            {/* Image on right for desktop */}
            <img
              src="https://placehold.co/600x400/D1D5DB/1F2937?text=About+Us+Image"
              alt="About Us"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:order-1 text-center md:text-left">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-2">
              ABOUT US
            </p>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              We Have 25+ Years Of Experience
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center justify-center md:justify-start">
                <CheckCircle size={20} className="text-green-500 mr-2" /> Best
                Quality Material
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <CheckCircle size={20} className="text-green-500 mr-2" />{" "}
                Professional Expert Team
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <CheckCircle size={20} className="text-green-500 mr-2" /> 24/7
                Customer Support
              </li>
            </ul>
            <button className="bg-green-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-md">
              Discover More
            </button>
          </div>
        </div>
      </section>
      {/* Call to Action / Contact Section */}
      <section className="bg-[#1A2D5C] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Need Any Help?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mb-4">
                <Phone size={32} />
              </div>
              <p className="text-lg font-semibold">Call Us</p>
              <p className="text-gray-300">(+1) 123 654 7894</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mb-4">
                <Mail size={32} />
              </div>
              <p className="text-lg font-semibold">Email Us</p>
              <p className="text-gray-300">info@domain.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mb-4">
                <MapPin size={32} />
              </div>
              <p className="text-lg font-semibold">Our Location</p>
              <p className="text-gray-300">
                2872 Hillhaven Drive, New York, USA
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section (Simple placeholder) */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <p className="text-green-600 text-sm font-semibold uppercase tracking-wider mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            What Our Customers Say
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <p className="text-gray-700 italic mb-4">
              "It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution."
            </p>
            <p className="font-semibold text-gray-800">- Customer Name</p>
            <p className="text-gray-500 text-sm">Customer Title</p>
          </div>
        </div>
      </section>
      <Footer /> {/* Include your Footer component */}
    </div>
  );
};

export default ServicesPage;
