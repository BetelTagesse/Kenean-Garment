import Image from "next/image";
import fabricIcon1 from "@/images/icon-digital-print.png";
import fabricIcon2 from "@/images/icon-dye.png";

import fabricIcon3 from "@/images/icon-dye.png";
import fabricIcon4 from "@/images/icon-digital-print.png";

const steps = [
  {
    title: "Fabric Development",
    description:
      "There are many variations of majority have to suffered alteration in some form.",
    icon: fabricIcon1,
  },
  {
    title: "Digital Printing",
    description:
      "There are many variations of majority have to suffered alteration in some form.",
    icon: fabricIcon2,
  },
  {
    title: "Fabric Dyeing",
    description:
      "There are many variations of majority have to suffered alteration in some form.",
    icon: fabricIcon3,
  },
  {
    title: "Fabric Finishing",
    description:
      "There are many variations of majority have to suffered alteration in some form.",
    icon: fabricIcon4,
  },
];

const ClientSummary = () => {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Client&apos;s Summary
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-16">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters.
      </p>

      {/* Timeline steps */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 mt-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center flex-1 z-10"
          >
            {/* Green connector line between icons (inline and centered) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/6 left-[70%] w-[80%] h-1 bg-green  z-0" />
            )}

            {/* Circular icon */}
            <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mb-4 z-10 transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3)]">
              <Image src={step.icon} alt={step.title} width={30} height={30} />
            </div>

            {/* Text */}
            <h4 className="font-bold text-lg text-[#0A1A3A]">{step.title}</h4>
            <p className="text-sm text-gray-600 max-w-[200px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSummary;
