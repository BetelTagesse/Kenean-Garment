import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MessageCircle, MapPin, Phone, Mail, Send } from "lucide-react";
import Chiffon from "@/images/Chiffon-Fabric.jpg";
import Cotton from "@/images/Cotton-Fabric.jpg";

const MainSection = () => {
  return (
    <div>
      {" "}
      {/* Main Footer Content: Four Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {/* Column 1: Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe our newsletter to get latest update and news.
          </p>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-full border border-gray-500 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="w-full py-3 px-6 bg-green hover:bg-purple text-white font-semibold rounded-full shadow-md transition-colors duration-200 flex items-center justify-center space-x-2">
              <span>SUBSCRIBE US</span>
              <Send size={18} />
            </button>
          </div>
        </div>

        {/* Column 2: Our Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Our Services
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li className="">
              <Link
                href="#"
                className="hover:text-green transition-colors duration-200"
              >
                Fabric Development
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-green transition-colors duration-200"
              >
                Digital Fabric Printing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-green transition-colors duration-200"
              >
                Fabric Dyeing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-green transition-colors duration-200"
              >
                Quality Engineering
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-green transition-colors duration-200"
              >
                Fabric Finishing
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Recent Posts */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Recent Posts
          </h3>
          <div className="space-y-6">
            {/* Post Item 1 */}
            <div className="flex items-start space-x-3">
              <Image
                src={Chiffon}
                alt="Post Thumbnail 1"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-300">
                  Chiffon is a lightweight, soft, and silky fabric.
                </p>
                <span className="text-gray-500 text-sm">May 25, 2025</span>
              </div>
            </div>
            {/* Post Item 2 */}
            <div className="flex items-start space-x-3">
              <Image
                src={Cotton}
                alt="Post Thumbnail 2"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-300">
                  There are many variations available
                </p>
                <span className="text-gray-500 text-sm">Jul 25, 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="text-green mt-1 flex-shrink-0" />
              <p className="text-gray-400">
                2872 Ashewa meda
                <br />
                Addis Ababa, Ethiopia,
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-green flex-shrink-0" />
              <p className="text-gray-400">(+251) 913088240</p>
            </div>

            <Link href="muler2011@gmail.com">
              <div className="flex  items-center  space-x-3">
                <Mail size={20} className="text-green flex-shrink-0" />
                <p className="text-gray-400">muler2011@gmail.com</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
