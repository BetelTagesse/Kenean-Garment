"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/shared/Button";

export const NavBar = ({ isMobileOpen }) => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden lg:flex sticky top-0 justify-between px-20 items-center h-20 z-50 bg-white shadow-md">
        <div className="first-half  lg:flex gap-6 ">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-xl ${
                pathname === item.href ? "text-green" : "text-gray-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          <div className="flex gap-4 mr-5">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-green text-2xl"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-green text-2xl"
            />
            <FontAwesomeIcon icon={faTwitter} className="text-green text-2xl" />
            <Link href="https://www.linkedin.com">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-green text-2xl"
              />
            </Link>
          </div>
          <Button className="bg-blue-950 text-white text-bold px-10 py-2 border-amber-50 rounded-full hover:cursor-pointer">
            GET QUOTE
          </Button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <div className="lg:hidden h-73 bg-white border-t-4 border-t-green shadow-md flex flex-col  px-6  space-y-3 z-50">
          {navItems.map((item, index) => (
            <div key={index} className="w-full border-t border-gray-300 pt-2.5">
              <Link
                href={item.href}
                className="text-gray-600 font-bold uppercase block"
              >
                {item.label}
              </Link>
            </div>
          ))}

          <div className=" hidden lg:flex gap-4 mt-4">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-green-600 text-xl"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-green-600 text-xl"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-green-600 text-xl"
            />
            <Link href="https://www.linkedin.com">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-green-600 text-xl"
              />
            </Link>
          </div>

          <Button className=" hidden lg:block mt-4 bg-blue-950 text-white font-bold px-6 py-2 rounded-full">
            GET QUOTE
          </Button>
        </div>
      )}
    </>
  );
};

export default NavBar;
