import Image from "next/image";

const ProjectDetails = ({ project }) => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <Image
        src={project.image}
        alt={project.name}
        width={800}
        height={500}
        className="rounded-lg shadow mb-6 w-full h-auto object-cover"
      />
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <p className="text-gray-700">{project.description}</p>
    </section>
  );
};

export default ProjectDetails;
