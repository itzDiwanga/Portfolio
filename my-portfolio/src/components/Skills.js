import React from "react";

const Skills = () => {
  const skills = ["JavaScript", "React", "CSS", "Node.js", "Python"];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
