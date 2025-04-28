"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/shared/Button";

export const NavBar = () => {
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
    <nav className=" hidden sticky top-0  md:flex justify-between px-10 items-center  h-20 z-50 bg-white shadow-md  active:text-green-500">
      <div className="first-half md:flex gap-6">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`text-xl  ${pathname === item.href && "text-gray-800"}`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className=" flex justify-between items-center  ">
        <div className="flex gap-4 mr-5">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-green-600 text-2xl"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-green-600 text-2xl"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-green-600 text-2xl"
          />

          <Link href="www.linkedin.com">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-green-600 text-2xl"
            />
          </Link>
        </div>

        <Button className="bg-blue-950 text-white text-bold px-10 py-2 border-amber-50 rounded-full hover:cursor-pointer ">
          GET QUOTE
        </Button>
      </div>
    </nav>
  );
};
