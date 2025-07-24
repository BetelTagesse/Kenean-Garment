import Image from "next/image";
import PageBanner from "./PageBanner";
import ProjectInfo from "./ProjectInfo";
import ProjectDescription from "./ProjectDescription";
import RelatedProjects from "./RelatedProjects";
import ClientSummary from "./ClientSummary";
import projects from "@/data/projectsData";

const ProjectDetails = ({ project }) => {
  const currentSlug = project.slug;

  const relatedProjects = projects
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 3);

  return (
    <div className="space-y-15">
      <PageBanner title={project.name} backgroundImage={project.image} />

      <ProjectInfo
        src={project.image}
        alt={project.alt}
        projectName={project.name}
        category={project.category}
        client={project.client}
        date={project.date}
        price={project.price}
        website={project.website}
        status={project.status}
      />
      <ProjectDescription
        name={project.name}
        description={project.description}
      />
      <ClientSummary />
      {relatedProjects.map((project, index) => (
        <RelatedProjects
          key={index}
          name={project.name}
          src={project.image}
          alt={project.alt}
          slug={project.slug}
          description={project.description.slice(0, 95) + "..."}
        />
      ))}
    </div>
  );
};

export default ProjectDetails;
