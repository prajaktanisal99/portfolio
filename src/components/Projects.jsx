import React from "react";
import "../styles/projects.css";

const projects = [
  {
    title: "Environment Activities Tracking Application",
    description:
      "A full-stack application for keeping track of environment activities happening in city allowing people to volunteer.",
    techStack:
      "Java, JavaScript, Typescript, Spring Boot, React, Jest, RESTful APIs, Google Map Integration",
    imgUrl: "/path/to/image1.jpg",
  },
  {
    title: "Snake Agent - Reinforcement Learning",
    description:
      "Developed a snake agent using reinforcement learning technique.",
    techStack: "Python",
    imgUrl: "/path/to/image2.jpg",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-header">
        <h1>Projects</h1>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => {
          return (
            <div className="project-wrap" key={index}>
              <div className="project-text">
                <h1>{project.title}</h1>
                <p className="project-paragraph">{project.description}</p>
              </div>
              <div className="project-links">
                <p />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
