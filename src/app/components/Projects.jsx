"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Project description",
    image: "/images/projects/P1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Hungry Box",
    description: "Project description",
    image: "/images/projects/HungryBox.png",
    tag: ["All", "MERN"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Complaint Management System",
    description: "Project description",
    image: "/images/projects/P1.png",
    tag: ["All", "Java"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Pharmacy Management System",
    description: "Project description",
    image: "/images/projects/P1.png",
    tag: ["All", "Python"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Smart Calculator",
    description: "Project description",
    image: "/images/projects/P1.png",
    tag: ["All", "Python"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Project Management System",
    description: "Project description",
    image: "/images/projects/ProjectManagement.png",
    tag: ["All", "MERN"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" style="margin: 1rem">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <div className="text-white grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-2 md:gap-12 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="MERN"
          isSelected={tag === "MERN"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Java"
          isSelected={tag === "Java"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12" style="margin : 2rem">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            desc={project.description}
            imgURL={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </ul>
    </section >
  );
};

export default Projects;
