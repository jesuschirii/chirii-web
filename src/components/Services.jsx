import { Title } from "./TitleSection.jsx";
import React from "react";

export function Services() {
  const services = [
    {
      title: "Web Development",
    },
    {
      title: "Web Design",
    },
    {
      title: "UI/UX Design",
    },
    { title: "Branding" },
  ];

  return (
    <section id="services" className="services section">
      <Title
        title="SERVICES /"
        backgroundColor="#212121"
        color="#fff"
        className="right"
      />
      <div className="services-list-container">
        <h3>(If you want a great website, i’m your guy)</h3>
        <ul className="services-list">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <li>{service.title}</li>
              <hr />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}
