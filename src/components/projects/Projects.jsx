import projects from "../../data/projectsData";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            src={project.image}
            alt={project.alt}
            name={project.name}
            slug={project.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
