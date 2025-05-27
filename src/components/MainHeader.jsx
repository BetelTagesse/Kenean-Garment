import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faClock } from "@fortawesome/free-regular-svg-icons";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "../images/cola.png";
import phone from "../public/phone.svg";
import "../../app/globals.css";

const MainHeader = () => {
  return (
    <div className="main-header  text-tiny flex justify-between  md:justify-around items-center">
      <div className="first-half flex space-x-4 ">
        <Image src={logo} width={20} height={20} alt="company logo" priority />
        <h1>Canaan</h1>
      </div>
      <div className=" hidden md:flex second-half  ">
        <div className="flex space-x-4 items-center justify-between">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-green-500 text-4xl "
          />
          <div className="flex flex-col">
            <p className="text-tiny">Send Email</p>
            <Link href="/contact" className="text-tiny-bold">
              info@domain.com
            </Link>
          </div>
          <div className="w-px bg-gray-500 h-10  mx-4"></div>
        </div>
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faClock} className="text-green-500 text-4xl" />
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

      <FontAwesomeIcon
        icon={faBars}
        className=" hidden text-orange-500 text-3xl cursor-pointer"
      />
    </div>
  );
};

export default MainHeader;
