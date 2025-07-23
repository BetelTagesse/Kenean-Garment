import Image from "next/image";
import First from "@/images/sewing.jpg";

const skills = [
  { name: "Fabric Development", value: 95 },
  { name: "Fabric Manufacture", value: 85 },
  { name: " Quality Engineering", value: 70 },
];

const SkillsSection = () => {
  return (
    <div className="flex w-full mt-20">
      {/* Left Content */}
      <div className="md:w-1/2 bg-[#0A1A3A] text-white px-10 lg:px-30 py-12">
        <p className="text-green font-semibold text-sm mb-2"> SKILLS</p>
        <h2 className="text-4xl font-bold mb-4">
          Grow Your <span className="text-green">Business</span> With Us
        </h2>
        <p className="text-gray-300  text-[15px] mb-8">
          With years of experience in the textile industry, we provide
          cutting-edge solutions tailored to evolving business demands. From
          advanced fabric engineering to environmentally responsible production
          processes, our team is committed to delivering high-performance
          textiles with uncompromising quality.
        </p>

        {/* Progress Bars */}
        {skills.map((skill, idx) => (
          <div key={idx} className="mb-6">
            <p className="font-semibold text-gray-300 mb-1">{skill.name}</p>
            <div className="w-full bg-white h-8  overflow-hidden">
              <div
                className="bg-green h-full text-white text-sm flex items-center justify-center"
                style={{ width: `${skill.value}%` }}
              >
                {skill.value}%
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="hidden md:block md:w-1/2 h-96 md:h-auto relative">
        <Image
          src={First}
          alt="High-performance fabric development"
          objectFit="cover"
          className="w-full h-full"
          priority
        />
      </div>
    </div>
  );
};

export default SkillsSection;
