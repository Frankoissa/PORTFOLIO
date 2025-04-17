import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  image,
  title,
  description,
  link,
  githubLink,
  technologies,
  isFeatured = false,
}) => {
  return (
    <div
      className={`project-card flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${
        isFeatured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="relative overflow-hidden group">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${title} website`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-medium px-4 py-2 rounded-md">
              View Project
            </span>
          </div>
        </a>
      </div>

      <div className="project-info p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="tech-stack flex flex-wrap gap-2 mb-4">
          {technologies?.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-3 mt-auto">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              aria-label="View source code on GitHub"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaGithub size={20} />
            </a>
          )}
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${title} website`}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
