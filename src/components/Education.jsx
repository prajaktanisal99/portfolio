import React from "react";
import "../styles/education.css"; // Make sure you have the right CSS file imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const education = [
  {
    degree: "Master of Science",
    major: "Computer Science",
    university: "The University of Texas, Arlington",
    courses: [
      "Cloud Computing and Big Data",
      "Data Mining",
      "Neural Networks",
      "Machine Learning",
      "Artificial Intelligence",
      "Design and Analysis of Algorithms",
    ],
    gpa: "4.0/4.0",
    date: "Expected May 2025",
  },
  {
    degree: "Bachelor of Technology",
    major: "Computer Engineering",
    university: "MKSSSs Cummins College of Engineering for Women",
    courses: [
      "Data Structures",
      "Operating Systems",
      "Computer Networks",
      "Database Systems",
      "Theory of Computation",
    ],
    gpa: "8.66/10",
    date: "Jun 2021",
  },
  {
    degree: "Diploma in Computer Engineering",
    major: "Computer Engineering",
    university: "University of Mumbai (MSBTE)",
    courses: ["", "Linux Programming", "Computer Hardware"],
    gpa: "90.13/100",
    date: "Jun 2018",
  },
];

const Education = () => {
  return (
    <div className="education">
      <div className="education-header">
        <h1>Education</h1>
      </div>
      <div className="education-container">
        {education.map((edu, index) => {
          return (
            <div className="education-card" key={index}>
              <div className="card-heading">
                <div className="card-name">
                  <h1>{edu.degree}</h1>,<h1>{edu.major}</h1>
                </div>
                <div className="card-time">{edu.date} <FontAwesomeIcon icon={faLink} onClick={() => console.log(`show ${edu.degree} transcript.`)}/></div>
              </div>
              <div className="card-uni">
                <h1>{edu.university}</h1>
                <h1>{edu.gpa}</h1>
              </div>
              <ul className="card-courses">
                {edu?.courses.map((desc) => (
                  <li>{desc}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
