"use client";

import Image from "next/image";
import logo from "../../images/cola.png";

export const ServicesSection = () => {
  return (
    <div>
      Hello there
      <i className="flaticon flaticon-rug"></i>
      <i className="flaticon-edit"></i>
      <i className="flaticon-global-shipping"></i>
      <Image src={logo} alt="image" className="h-100 w-100" />
    </div>
  );
};
