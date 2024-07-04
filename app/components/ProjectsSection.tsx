"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/ProjectData";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 mb:mb:12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          tagName="All"
          isSelected={tag === "All"}
          onClick={handleTagChange}
        />
        <ProjectTag
          tagName="Web"
          isSelected={tag === "Web"}
          onClick={handleTagChange}
        />
        <ProjectTag
          tagName="Mobile"
          isSelected={tag === "Mobile"}
          onClick={handleTagChange}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard key={project.id} project={project} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
