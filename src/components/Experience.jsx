import React from "react";
import "../styles/experience.css"; // Make sure you have the right CSS file imported

const experiences = [
  {
    title: "Graduate Teaching Assistant, ",
    organization: "The University of Texas, Arlington",
    description: [
      "Led programming, digital logic, and embedded systems labs, guiding students in software design and debugging.",
      "Assessed student projects with a focus on algorithms, code structure, and hardware-software integration."
    ],
    techStack:
      "Java, JavaScript, Typescript, Spring Boot, React, Jest, RESTful APIs, Google Map Integration",
    imgUrl: "/path/to/image1.jpg",
    date: "Aug 2024 - Present",
  },
  {
    title: "Senior Analyst, ",
    organization: "DWS India Private Limited(Deutsche Bank Group)",
    description: [
      "Spearheaded the development of an asset management dashboard using React, boosting productivity by 40%.",
      "Engineered scalable RESTful APIs with Spring Boot, improving system interoperability.",
      "Achieved a 75% reduction in initial load time by optimizing front-end performance and database queries.",
      "Secured 97% code coverage with Jest, significantly reducing post-deployment defects.",
      "Actively contributed to Agile processes, including user-story refinement and cross-functional team collaboration.",
    ],
    techStack: "Python",
    imgUrl: "/path/to/image2.jpg",
    date: "Jul 2021 - Aug 2023",
  },
  {
    title: "Summer Intern, ",
    organization: "Deutsche India Private Limited",
    description: [
      "Developed a data lineage solution with Hadoop, Spark, and Scala, enhancing visibility and tracking of data flows.",
      "Introduced Spline for pipeline visualization, decreasing debugging time by 60%.",
      "Elevated data quality and compliance through advanced tracking and management techniques.",
    ],
    techStack: "Apache Spark, Hadoop, Python",
    date: "Jun 2020 - Jul 2020",
  },
];

const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-header">
        <h1>Experience</h1>
      </div>
      <div className="experience-container">
        {experiences.map((experience, index) => {
          return (
            <div className="experience-card" key={index}>
              <div className="card-heading">
                <div className="card-name">
                  <h1>{experience.title}</h1>
                  <h1>{experience.organization}</h1>
                </div>
                <div className="card-time">{experience.date}</div>
              </div>
              <ul className="experience-desc">
                {experience?.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
