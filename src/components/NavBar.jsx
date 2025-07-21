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
      <nav className="hidden lg:flex sticky top-0 justify-between px-48  items-center h-20 z-50 bg-white shadow-md">
        <div className="first-half  lg:flex gap-6 ">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.href}
                className={`text-xl  py-2 ${
                  pathname === item.href ? "text-green" : "text-gray-800"
                }`}
              >
                {item.label}
              </Link>

              {/* Dropdown for submenu */}
              {item.submenu && (
                <div className="absolute left-0 pt-8 w-56 h-80 bg-white  items-stretch rounded-md hidden group-hover:block z-50 shadow-2xl">
                  {item.submenu.map((sub, subIndex) => (
                    <div key={subIndex}>
                      <Link
                        href={sub.href}
                        className="group flex items-center px-4 py-4 text-gray-700 hover:text-green transition-all duration-200"
                      >
                        {sub.label}
                      </Link>

                      <hr className="text-gray-300" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center mr-28">
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
          <div className="absolute right-20  top-1/2 transform -translate-y-1/2 z-30">
            <Link
              href="/contact"
              className="relative inline-block overflow-hidden bg-purple text-white  py-2 px-4 rounded-full shadow group"
            >
              {/* Animated purple background */}
              <span className="absolute inset-0 bg-green w-0 group-hover:w-full transition-all duration-500 ease-out left-0 top-0 z-0 origin-left"></span>

              {/* Link text stays on top */}
              <span className="relative z-10 px-8  text-xl group-hover:text-white transition-colors duration-300 capitalize">
                Get Quote
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <div className="md:hidden h-73 bg-white border-t-4 border-t-green shadow-md flex flex-col  px-6  space-y-3 z-50">
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
            <Link href="https://www.facebook.com">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-green hover:text-purple  text-xl"
              />
            </Link>
            <Link href="https://www.instagram.com">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-green hover:text-purple  text-xl"
              />
            </Link>
            <Link href="https://www.twitter.com">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-green hover:text-purple  text-xl"
              />
            </Link>
            <Link href="https://www.linkedin.com">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-green hover:text-purple  text-xl"
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
