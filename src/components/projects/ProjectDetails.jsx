import Image from "next/image";
import PageBanner from "./PageBanner";
import ProjectInfo from "./ProjectInfo";
import ProjectDescription from "./ProjectDescription";
import RelatedProjects from "./RelatedProjects";

const ProjectDetails = ({ project }) => {
  console.log("project info:", {
    client: project.client,
    price: project.price,
    date: project.date,
    status: project.status,
  });

  return (
    <div className="space-y-20">
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
      <RelatedProjects
        src={project.image}
        alt={project.name}
        name={project.name}
        slug={project.slug}
        description={project.description.slice(0, 95) + "..."}
      />
    </div>
  );
};

export default ProjectDetails;
