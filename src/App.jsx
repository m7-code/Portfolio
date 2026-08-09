import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ShatterPreloader from "./components/ShatterPreloader";
import CursorDust from "./components/CursorDust";
import TornNavbar from "./components/TornNavbar";

// Navbar + cursor dust only render on the Home page now
function HomeWithExtras() {
  return (
    <>
      <TornNavbar />
      <CursorDust />
      <Home />
    </>
  );
}

function App() {
  return (
    <>
      <ShatterPreloader />
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