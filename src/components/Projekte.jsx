import React from "react";
import ProjectCard from "./ProjectCard";
import firsWork from "../assets/Works/DRRajab.jpeg";
import provetImage from "../assets/Works/Provet.png";
import saludImage from "../assets/Works/salud.png";
import mkmultibauImage from "../assets/Works/MK Multibau.png";

const projectsData = [
  {
    id: 1,
    image: firsWork,
    title: "Dr. Rajab Medical Practice",
    description: "Modern medical practice website with appointment booking and service information.",
    link: "https://praxis-rajab-bochum.de",
    technologies: ["React", "Tailwind", "JavaScript"],
  },
  {
    id: 2,
    image: provetImage,
    title: "Provet Emergency Veterinary",
    description: "Emergency veterinary platform connecting pet owners with available veterinarians.",
    link: "https://provet-tierarzt-notdienst.de/",
    technologies: ["Next.js", "Tailwind", "Node.js"],
  },
  {
    id: 3,
    image: saludImage,
    title: "Salud Blog",
    description: "Health and wellness blog with nutrition, fitness, and wellbeing content.",
    link: "http://saludblog.de/",
    technologies: ["Next.js", "CSS", "JavaScript"],
  },
  {
    id: 4,
    image: mkmultibauImage,
    title: "MK Multibau",
    description: "Construction company website showcasing services and project references.",
    link: "https://mk-multibau.de/",
    technologies: ["React", "Tailwind", "JavaScript"],
  },
];

const Projekte = () => {
  return (
    <section className="py-24 bg-[#F1EFF1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">Meine Projekte</h2>
          
          <p className="text-lg text-gray-600">Eine Auswahl meiner letzten Arbeiten und Referenzen.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projekte;