import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";

export const ServicesCard = () => {
  return (
    <div className="w-1/2 container flex flex-col items-center justify-center text-center p-6 group">
      {/* Rotating Globe icon */}
      <Globe className="w-16 h-16 text-blue-600 dark:text-blue-400 mb-4 animate-rotate-once" />

      <h2 className="text-xl font-semibold mb-2">Fabric Development</h2>

      <p className="text-gray-600 mb-4 w-1/2">
        There are many variations of passages of lorem ipsum available
      </p>

      <Link
        href="/home"
        className="text-green-600 font-medium flex items-center gap-2 mb-4"
      >
        READ MORE
        <ArrowRight className="text-green-500 text-2xl" />
      </Link>

      {/* Green line appears on hover */}
      <div className="h-0.5 w-0 bg-green-600 transition-all duration-500 group-hover:w-1/2"></div>
    </div>
  );
};
