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
    {
      label: "Services",
      submenu: [
        { label: "Fabric Development", href: "/services" },
        { label: "Digital Fabric Printing", href: "/services" },
        { label: "Fabric Dyeing", href: "/services" },
        { label: "Quality Engineering", href: "/services" },
        { label: "Fabric Finishing", href: "/services" },
      ],
      href: "/services",
    },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden lg:flex sticky top-0 justify-between px-20 pl-36 items-center h-20 z-50 bg-white shadow-md">
        <div className="first-half  lg:flex gap-6 ">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.href}
                className={`text-xl px-4 py-2 ${
                  pathname === item.href ? "text-green" : "text-gray-800"
                }`}
              >
                {item.label}
              </Link>

              {/* Dropdown for submenu */}
              {item.submenu && (
                <div className="absolute left-0 pt-4 w-56 h-fit bg-white  items-stretch shadow-lg rounded-md hidden group-hover:block z-50">
                  {item.submenu.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sub.href}
                      className="group flex items-center px-4 py-2 text-gray-700 hover:text-green transition-all duration-200"
                    >
                      {sub.label}
                      <hr className="text-gray-300" />
                    </Link>

                    // <hr className="text-gray-300" />
                  ))}
                </div>
              )}
            </div>
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
