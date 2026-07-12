import { motion } from "framer-motion";

// EDIT THIS: replace each `images[i]` with your real screenshot path
// (put files in /public/projects/ and use "/projects/xxx.png"),
// and fill in `live` / `github` links. If `live` is empty, button falls back to `github`.
const projects = [
  {
    number: "01",
    title: "PneumoFusion",
    description: "AI-powered pneumonia detection from chest X-rays — Final Year Project with a FastAPI model backend and MERN frontend.",
    live: "",
    github: "https://github.com/your-username/pneumofusion",
    images: ["", "", ""],
    accent: "from-[#7DF9FF]/25 to-[#B57BFF]/10",
  },
  {
    number: "02",
    title: "BotForge",
    description: "Multi-tenant SaaS chatbot platform — users embed an AI widget trained on their own crawled website content.",
    live: "",
    github: "https://github.com/your-username/botforge",
    images: ["", "", ""],
    accent: "from-[#B57BFF]/25 to-[#7DF9FF]/10",
  },
  {
    number: "03",
    title: "RAG Chatbot",
    description: "Retrieval-augmented chatbot built with n8n, Qdrant, and Groq's LLaMA 3.3, integrated into a live app via a proxy route.",
    live: "",
    github: "https://github.com/your-username/rag-chatbot",
    images: ["", "", ""],
    accent: "from-[#7DF9FF]/20 to-[#B57BFF]/20",
  },
];

function ImageTile({ src, className, accent }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {src ? (
        <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${accent} bg-[#111]`} />
      )}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const href = project.live || project.github;
  const label = project.live ? "Live Project" : "View on GitHub";

  return (
    <div
      className="snap-start sticky top-0 h-screen w-full bg-[#0A0A0A] flex items-center justify-center p-4 md:p-10"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-7xl h-full max-h-[95vh] rounded-[2rem] md:rounded-[2.5rem]
                   border border-white/15 bg-white/[0.04] backdrop-blur-xl shadow-2xl
                   flex flex-col p-6 md:p-10 gap-6 md:gap-8 overflow-hidden"
      >
        {/* glow accent inside the glass */}
        <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${project.accent} blur-3xl pointer-events-none`} />

        {/* Header row */}
        <div className="relative flex items-start justify-between gap-4 shrink-0">
          <div className="flex items-center gap-4 md:gap-6 min-w-0">
            <span
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
              className="text-transparent bg-clip-text bg-gradient-to-br from-[#7DF9FF] to-[#B57BFF] text-3xl md:text-5xl shrink-0"
            >
              {project.number}
            </span>
            <div className="min-w-0">
              <h3
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
                className="text-white text-lg md:text-2xl truncate"
              >
                {project.title}
              </h3>
              <p
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-white/45 text-xs md:text-sm mt-1 max-w-md truncate md:whitespace-normal"
              >
                {project.description}
              </p>
            </div>
          </div>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="shrink-0 inline-flex items-center gap-2 border border-white/25 hover:border-[#7DF9FF]
                       rounded-full px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm text-white/80 hover:text-white
                       transition-colors duration-300"
          >
            {label}
          </a>
        </div>

        {/* 3-image grid: big left, two stacked right */}
        <div className="relative flex-1 grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 min-h-0">
          <ImageTile
            src={project.images[0]}
            accent={project.accent}
            className="row-span-2"
          />
          <ImageTile src={project.images[1]} accent={project.accent} className="" />
          <ImageTile src={project.images[2]} accent={project.accent} className="" />
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0A0A0A]">
      {projects.map((project, i) => (
        <ProjectCard key={project.number} project={project} index={i} />
      ))}
    </section>
  );
}