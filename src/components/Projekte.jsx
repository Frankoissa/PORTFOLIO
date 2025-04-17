import React from "react";
import ProjectCard from "./ProjectCard";
import firsWork from "../assets/Works/DRRajab.jpeg";
import provetImage from "../assets/Works/Provet.png";
import saludImage from "../assets/Works/salud.png";

// Project data array
const projectsData = [
  {
    id: 1,
    image: firsWork,
    title: "Praxis Dr. Rajab",
    description:
      "A modern website for a medical practice in Bochum, featuring appointment booking and service information.",
    link: "https://praxis-rajab-bochum.de",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    isFeatured: true,
  },
  {
    id: 2,
    image: provetImage,
    title: "Provet Tierarzt Notdienst",
    description:
      "Emergency veterinary service platform connecting pet owners with available veterinarians.",
    link: "https://provet-tierarzt-notdienst.de/",
    technologies: ["Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    id: 3,
    image: saludImage,
    title: "Salud Blog",
    description:
      "Health and wellness blog providing valuable information about nutrition, fitness, and wellbeing.",
    link: "http://saludblog.de/",
    technologies: ["Next.js", "CSS", "JavaScript"],
  },
];

const Projekte = () => {
  return (
    <div name="projekt" className="w-full min-h-screen bg-[#F1EFF1] py-16">
      {/* Main container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full">
        {/* Heading */}
        <div className="mb-12">
          <p className="px-4 text-4xl font-bold inline border-b-4 border-black">
            My Projects
          </p>
          <p className="py-4 px-4 text-2xl text-gray-600">
            Recent work I've completed:
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              githubLink={project.githubLink}
              technologies={project.technologies}
              isFeatured={project.isFeatured}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projekte;
