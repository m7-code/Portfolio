import { Hero } from "./components/Hero";
import Experience from "./components/Experience";
import { Projects } from "./components/Projects";

function App() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}

export default App;