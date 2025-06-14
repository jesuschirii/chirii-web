import { Title } from "./TitleSection";

export function AboutMe() {
  return (
    <section id="about" className="section">
      <Title title={"ABOUT ME /"} backgroundColor={"#212121"} color={"#fff"} />

      <div className="aboutme-content">
        <img src="/src/assets/picture-profile.svg" alt="picture-profile" />
        <aside className="aboutme-aside">
          <p>
            I'm new creator with passion for development and desing, i will
            introduce you an other way to see what there is inside of my head
            throught my projects.
          </p>
          <section className="aboutme-country">
            <h3>(About me)</h3>
            <p>
              In my country Venezuela, i founded inspiration to make great web
              experiences. Each project have a best effort for details and all
              my passion on it.
            </p>
          </section>
        </aside>
      </div>
    </section>
  );
}
