import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";



function HomeWithExtras() {
  return (
    <>
      {/* <TornNavbar />
      <CursorDust /> */}
      <Home />
    </>
  );
}

function App() {
  return (
    <>
      {/* <ShatterPreloader /> */}
      <Routes>
        <Route path="/" element={<HomeWithExtras />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;