import React from "react";

export function Skills() {
  const skills = [
    {
      title: "HTML",
    },
    {
      title: "CSS",
    },
    {
      title: "JavaScript",
    },
    { title: "React" },
    { title: "Git" },
    { title: "Figma" },
    { title: "Soon Backend and Blockchain ;)" },
  ];
  return (
    <section className="section skills">
      <p>
        and my <span>skills</span> are:
      </p>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <React.Fragment key={index}>
            <li>{skill.title}</li>
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
}
