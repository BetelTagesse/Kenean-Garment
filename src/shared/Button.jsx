import Link from "next/link";

export const Button = ({ children, className = "" }) => {
  return (
    <div className=" transform z-30">
      <Link
        href="/about"
        className="relative inline-block overflow-hidden bg-green text-white  py-3 px-6 rounded-full  shadow group"
      >
        {/* Animated purple background */}
        <span className="absolute inset-0 bg-purple  w-0 group-hover:w-full transition-all duration-500 ease-out left-0 top-0 z-0 origin-left"></span>

        {/* Link text stays on top */}
        <span
          className={`relative z-10 px-8   group-hover:text-white transition-colors duration-300 capitalize ${className}`}
        >
          {children}
        </span>
      </Link>
    </div>
  );
};
