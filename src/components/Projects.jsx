import { Title } from "./TitleSection";

function Project({ backgroundImg, img, title, year, did1, did2 }) {
  return (
    <article className="project-card">
      <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className="project"
      >
        <img src={img} alt="" />
      </div>
      <div className="project-description">
        <aside className="project-title">
          <h3>{title}</h3>
          <span>{year}</span>
        </aside>
        <aside className="project-did">
          <span>{did1}</span>
          <span>{did2}</span>
        </aside>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section section-dark">
      <Title title="PROJECTS /" color="#fff" />
      <Project
        backgroundImg="/src/assets/background-1.svg"
        img="/src/assets/project-1.svg"
        title="veza"
        year="2025"
        did1="design"
        did2="development"
      />
      <Project
        backgroundImg="/src/assets/background-2.svg"
        img="/src/assets/project-2.svg"
        title="rocketair"
        year="2025"
        did1="design"
        did2="development"
      />
    </section>
  );
}
