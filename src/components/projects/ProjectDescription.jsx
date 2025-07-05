import Image from "next/image";
import sewing from "@/images/sewing.jpg";

const ProjectDescription = ({ name, description }) => {
  return (
    <div className="max-w-[90%] mx-auto py-16 ">
      <div className="bg-white p-8 rounded-lg ">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{name}</h2>
        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Image src={sewing} alt="image of a sewing" />
          <Image src={sewing} alt="image of a sewing" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
