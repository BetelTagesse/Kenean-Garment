import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react"; // Removed 'Whatsapp' as it's not a direct export

const Footer = () => {
  return (
    <footer className="bg-[#1A2D5C] text-gray-200 pt-5 relative">
      {/* Scroll-to-top button (optional, but in original image) */}
      {/* <button className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg text-white z-50">
        <ArrowUp size={24} />
      </button> */}

      <div className="container mx-auto px-4">
        {/* Top Section: Logo and Social Media Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-b border-gray-700 mb-8">
          {/* Logo */}
          <div className="text-3xl font-bold flex items-center mb-6 md:mb-0">
            <span className="text-green">△</span> TEXTILE
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Instagram size={24} />
            </a>
            {/* Replaced 'Whatsapp' icon with a generic chat icon or consider using a custom SVG if exact WhatsApp logo is needed */}
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {/* Using a simple SVG as lucide-react does not directly provide a Whatsapp icon */}
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
            </a>
          </div>
        </div>

        {/* Main Footer Content: Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Column 1: Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Newsletter
            </h3>
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
                <Mail size={18} />
              </button>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Our Services
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Fabric Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Digital Fabric Printing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Fabric Dyeing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Quality Engineering
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Fabric Finishing
                </a>
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
                <img
                  src="https://placehold.co/50x50/cccccc/000000?text=P1" // Placeholder image
                  alt="Post Thumbnail 1"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-300">
                    There are many variations available
                  </p>
                  <span className="text-gray-500 text-sm">Feb 25, 2023</span>
                </div>
              </div>
              {/* Post Item 2 */}
              <div className="flex items-start space-x-3">
                <img
                  src="https://placehold.co/50x50/cccccc/000000?text=P2" // Placeholder image
                  alt="Post Thumbnail 2"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-300">
                    There are many variations available
                  </p>
                  <span className="text-gray-500 text-sm">Feb 25, 2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-green mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  2872 Hillhaven Drive,
                  <br />
                  New York,USA
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-green flex-shrink-0" />
                <p className="text-gray-400">(+1) 123 654 7894</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-green flex-shrink-0" />
                <p className="text-gray-400">info@domain.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section: Copyright */}
      <div className="text-center w-full   bg-purple border-t border-gray-700 p-4">
        <p>Copyright © 2025 TEXTILE All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
