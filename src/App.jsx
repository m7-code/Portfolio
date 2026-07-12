import { Hero } from "./components/Hero";
import Experience from "./components/Experience";
import { Projects } from "./components/Projects";
import {Skills} from "./components/Skills";
import { Contact } from "./components/Contact";
import "./index.css";

function App() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;