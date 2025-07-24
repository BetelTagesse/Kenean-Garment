import { FlaskConical, Printer, Droplets, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Fabric Development",
    description:
      "We research and design textiles to meet performance and aesthetic requirements.",
    icon: FlaskConical,
  },
  {
    title: "Digital Printing",
    description:
      "Our precision printing ensures vivid colors and clear patterns on all fabrics.",
    icon: Printer,
  },
  {
    title: "Fabric Dyeing",
    description:
      "Using modern dyeing methods, we achieve rich tones with eco-safe processes.",
    icon: Droplets,
  },
  {
    title: "Fabric Finishing",
    description:
      "Final touches enhance durability, softness, and fabric performance quality.",
    icon: Sparkles,
  },
];

const ClientSummary = () => {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Client&apos;s Summary
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-16">
        We follow a complete textile workflow, starting from innovative
        development through to vibrant printing, quality dyeing, and refined
        finishing — delivering excellence at every stage.
      </p>

      {/* Timeline steps */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 mt-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center flex-1 z-10"
          >
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/6 left-[70%] w-[80%] h-1 bg-green z-0" />
            )}

            {/* Circular Icon */}
            <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mb-4 z-10 transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3)]">
              <step.icon className="text-white w-7 h-7" />
            </div>

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
