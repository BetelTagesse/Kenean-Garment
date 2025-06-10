import FirstSection from "./FirstSection";
import MainSection from "./MainSection";

const Footer = () => {
  return (
    <footer className="bg-[#0d2b5c] text-gray-200 pt-5 relative">
      {/* Scroll-to-top button (optional, but in original image) */}
      {/* <button className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg text-white z-50">
        <ArrowUp size={24} />
      </button> */}

      <div className="container mx-auto px-4">
        <FirstSection />
        <MainSection />
      </div>
      {/* Bottom Section: Copyright */}
      <div className="text-center w-full   bg-purple  p-6">
        <p>
          Copyright © 2025 <span className="text-green">TEXTILE </span> All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
