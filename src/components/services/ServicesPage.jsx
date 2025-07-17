"use client";

import React from "react";

import HeroSection from "./HeroSection";
import ServicesListTwo from "../home/services/ServicesListTwo";

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
    <div className="min-h-screen bg-gray-50 top-96">
      {/* Hero Section */}
      <ServicesListTwo />
      <HeroSection />
    </div>
  );
};

export default ServicesPage;
