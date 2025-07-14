import projects from "@/data/projectsData";
import ProjectDetails from "@/components/projects/ProjectDetails";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }) {
  console.log("Requested slug:", params.slug);

  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return <div>Project not found</div>;

  return <ProjectDetails project={project} />;
}
