import "./App.css";
import { AboutMe } from "./components/AboutMe.jsx";
import { DescriptionSection } from "./components/DescriptionSection.jsx";
import { MainSection } from "./components/MainSection.jsx";
import Menu from "./components/Menu.jsx";
import { Projects } from "./components/Projects.jsx";
import { Services } from "./components/Services.jsx";
import { Skills } from "./components/Skills.jsx";

function App() {
  return (
    <>
      <div id="home" className="principal-container">
        <a href="#home" className="arrow">
          <img src="/src/assets/arrow.svg" alt="" />
        </a>
        <Menu />
        <MainSection />
        <DescriptionSection />
        <AboutMe />
        <Services />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
