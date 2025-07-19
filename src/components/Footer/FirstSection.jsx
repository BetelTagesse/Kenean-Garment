import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import logoImage from "@/images/logo.jpg";
const FirstSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center py-6 border-b border-gray-700 mb-8">
        {/* Logo */}
        <div className="text-3xl font-bold flex items-center mb-6  gap-1.5 md:mb-0">
          <Image src={logoImage} alt="logo" width={20} />
          TEXTILE
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-1">
          <Link
            href="#"
            className="text-gray-300 bg-purple p-4 rounded-full hover:text-white hover:bg-green  transition-colors duration-200 "
          >
            <Facebook size={24} />
          </Link>
          <Link
            href="#"
            className="text-gray-300  bg-purple p-4 rounded-full hover:text-white hover:bg-green transition-colors duration-200"
          >
            <Twitter size={24} />
          </Link>
          <Link
            href="#"
            className="text-gray-300  bg-purple p-4 rounded-full hover:text-white hover:bg-green transition-colors duration-200"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="#"
            className="text-gray-300  bg-purple p-4 rounded-full hover:text-white hover:bg-green transition-colors duration-200"
          >
            <Instagram size={24} />
          </Link>

          <Link
            href="#"
            className="text-gray-300  bg-purple p-4 rounded-full hover:text-white hover:bg-green transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-circle"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
