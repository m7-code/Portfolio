import { Hero } from "./components/Hero";
import Experience from "./components/Experience";

function App() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <Hero />
      <Experience />
    </main>
  );
}

export default App;