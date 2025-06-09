import Image from "next/image";
import First from "@/images/sewing.jpg";

const skills = [
  { name: "Fabric Development", value: 95 },
  { name: "Fabric Manufacture", value: 85 },
  { name: "Quality Engineering", value: 70 },
];

const SkillsSection = () => {
  return (
    <div className="flex   w-full  mt-20 ">
      {/* Left Content */}
      <div className="md:w-1/2 bg-[#0A1A3A] text-white  px-10 lg:px-30 py-12">
        <p className="text-green font-semibold text-sm mb-2">SKILLS</p>
        <h2 className="text-4xl font-bold mb-4">
          Grow Your <span className="text-green">Business</span> With Us
        </h2>
        <p className="text-gray-300 mb-8">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi id est
          laborum.
        </p>

        {/* Progress Bars */}
        {skills.map((skill, idx) => (
          <div key={idx} className="mb-6">
            <p className="font-semibold mb-1">{skill.name}</p>
            <div className="w-full bg-white h-6 rounded overflow-hidden">
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
      <div className=" hidden md:block md:w-1/2 h-96 md:h-auto relative">
        <Image
          src={First}
          alt="Fabric Rolls"
          objectFit="cover"
          className="w-full h-full"
          priority
        />
      </div>
    </div>
  );
};

export default SkillsSection;
