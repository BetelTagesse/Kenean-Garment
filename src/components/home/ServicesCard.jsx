import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Globe, Layers, Cpu } from "lucide-react";

export const ServicesCard = ({
  MyIcon,
  title,
  description,
  link,
  className = "",
}) => {
  return (
    <div
      className={`w-1/2   flex flex-col items-center justify-center text-center p-6 md:p-3 lg:p-6 group ${className}`}
    >
      {/* MyIcon that rotates once on hover */}
      <MyIcon className="w-16 h-16 text-green mb-4 animate-rotate-once" />

      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      <p className="text-gray-600 mb-4 w-1/2 md:w-2/3">{description}</p>

      <Link
        href={link}
        className="text-green font-medium flex items-center gap-2 mb-4"
      >
        READ MORE
        <ArrowRight className="text-green text-2xl" />
      </Link>

      <div className="h-0.5 w-0 bg-green transition-all duration-500 group-hover:w-1/2"></div>
    </div>
  );
};
