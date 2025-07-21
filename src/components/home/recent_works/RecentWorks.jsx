import FirstSection from "./FirstSection";
import SingleWork from "./SingleWork";
import projects from "@/data/projectsData";

const RecentWorks = () => {
  return (
    <div className="bg-purple w-full mt-40 py-15">
      <FirstSection />
      <div className="w-3/4 bg-red-400 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-2 pb-20">
        {projects.slice(0, 4).map((project, index) => (
          <SingleWork
            key={index}
            src={project.image}
            alt={project.alt}
            name={project.name}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentWorks;
