"use client";

import React from "react";

import HeroSection from "./HeroSection";
import ServicesListTwo from "../home/services/ServicesListTwo";
import WhyChooseUsSection from "./WhyChooseUs";
import PageBanner from "./PageBanner";
import Testimonials from "./Testimonials";

const ServicesPage = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f1f0ee] ">
        <PageBanner />
        <ServicesListTwo />
        <HeroSection />
        <WhyChooseUsSection />
        <Testimonials />
      </div>
    </>
  );
};

export default ServicesPage;
