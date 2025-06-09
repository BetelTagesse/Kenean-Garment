"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/cola.png";
import phone from "../public/phone.svg";
import "../../app/globals.css";

const MainHeader = ({ isMobileOpen, setIsMobileOpen }) => {
  return (
    <div className="main-header text-sm py-4 px-10 bg-purple shadow flex justify-between lg:justify-around items-center relative">
      {/* Logo */}
      <div className="flex space-x-3 items-center">
        <Image src={logo} width={30} height={30} alt="company logo" priority />
        <h1 className="font-bold text-2xl text-white">Canaan</h1>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex space-x-10 items-center">
        <div className="flex space-x-4 items-center justify-between">
          <FontAwesomeIcon icon={faEnvelope} className="text-green text-4xl " />
          <div className="flex flex-col">
            <p className="text-tiny">Send Email</p>
            <Link href="/contact" className="text-tiny-bold">
              info@domain.com
            </Link>
          </div>
          <div className="w-px bg-gray-500 h-10  mx-4"></div>
        </div>
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faClock} className="text-green text-4xl" />
          <div className="flex flex-col space-y-2 relative">
            <p className="text-tiny">Working hours</p>
            <p className="text-tiny-bold">Fri-Sun 08:00AM - 06:00PM</p>
          </div>
          <div className="w-px bg-gray-500 h-10 mx-4"></div>
        </div>
        <div className="flex space-x-4">
          <Image src={phone} alt="Phone icon" width={50} height={50} />
          <div className="flex flex-col">
            <p className="text-tiny ">Need Any Help</p>
            <p className="text-tiny-bold">+251913088240</p>
          </div>
        </div>
      </div>

      {/* Mobile Toggle */}
      <div className="lg:hidden">
        <FontAwesomeIcon
          icon={isMobileOpen ? faXmark : faBars}
          className="text-3xl text-white cursor-pointer"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        />
      </div>
    </div>
  );
};

export default MainHeader;
