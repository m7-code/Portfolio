import { motion } from "framer-motion";

// EDIT THIS: replace each `images[i]` with your real screenshot path
// (put files in /public/projects/ and use "/projects/xxx.png"),
// `mobileImage` is a SEPARATE image just for the mobile view — e.g. a screenshot
// of how the site looks on a phone. Fill in `live` / `github` links too.
// If `live` is empty, button falls back to `github`.
const projects = [
  {
    number: "01",
    title: "PneumoFusion",
    description: "AI-powered pneumonia detection from chest X-rays — Final Year Project with a FastAPI model backend and MERN frontend.",
    live: "",
    github: "https://github.com/your-username/pneumofusion",
    images: ["", "", ""],
    mobileImage: "",
    accent: "from-[#7DF9FF]/25 to-[#B57BFF]/10",
  },
  {
    number: "02",
    title: "BotForge",
    description: "Multi-tenant SaaS chatbot platform — users embed an AI widget trained on their own crawled website content.",
    live: "",
    github: "https://github.com/m7-code/Botforge.git",
    images: ["bpic1.png", "bpic2.png", "bpic3.png"],
    mobileImage: "mbpic.png",
    accent: "from-[#B57BFF]/25 to-[#7DF9FF]/10",
  },
  {
    number: "03",
    title: "AI Agents",
    description: "Ai agents build with n8n.",
    live: "",
    github: "https://github.com/m7-code/Ai-Agents.git",
    images: ["apic1.png", "apic2.png", "apic3.png"],
    mobileImage: "mapic.png",
    accent: "from-[#7DF9FF]/20 to-[#B57BFF]/20",
  },
];

function ImageTile({ src, accent, style, className }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className || ""}`} style={style}>
      {src ? (
        <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${accent} bg-[#111]`} />
      )}
    </div>
  );
}

function ProjectHeader({ project, href, label }) {
  return (
    <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
      <div className="flex items-center gap-4 md:gap-6 min-w-0 flex-1" style={{ flexBasis: "260px" }}>
        <span
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          className="text-transparent bg-clip-text bg-gradient-to-br from-[#7DF9FF] to-[#B57BFF] text-3xl md:text-5xl shrink-0"
        >
          {project.number}
        </span>
        <div className="min-w-0 flex-1">
          <h3
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
            className="text-white text-lg md:text-2xl truncate"
          >
            {project.title}
          </h3>
          <p
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-white/45 text-xs md:text-sm mt-1 line-clamp-2"
          >
            {project.description}
          </p>
        </div>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontFamily: "'Space Grotesk', sans-serif", padding: "12px 26px", fontSize: "14px", fontWeight: 600 }}
        className="shrink-0 inline-flex items-center gap-2 border border-white/25 hover:border-[#7DF9FF]
                   rounded-full text-white/80 hover:text-white transition-colors duration-300"
      >
        {label}
      </a>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const href = project.live || project.github;
  const label = project.live ? "Live Project" : "View on GitHub";

  return (
    <>
      {/* ---- MOBILE: sticky stack too, but with ONE dedicated mobile image ---- */}
      <div
        className="md:hidden snap-start sticky top-0 h-screen w-full bg-[#0A0A0A] flex items-center justify-center"
        style={{ zIndex: index + 1, padding: "16px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative w-full border border-white/15 bg-white/[0.04] backdrop-blur-xl shadow-2xl
                     rounded-[1.75rem] flex flex-col overflow-hidden"
          style={{ height: "100%", maxHeight: "88vh", padding: "24px", gap: "20px" }}
        >
          <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${project.accent} blur-3xl pointer-events-none`} />

          <ProjectHeader project={project} href={href} label={label} />

          <ImageTile
            src={project.mobileImage}
            accent={project.accent}
            className="relative flex-1 min-h-0"
          />
        </motion.div>
      </div>

      {/* ---- DESKTOP: sticky glass stack, left image bigger than the two right ones ---- */}
      <div
        className="hidden md:flex snap-start sticky top-0 h-screen w-full bg-[#0A0A0A] items-center justify-center"
        style={{ zIndex: index + 1, padding: "40px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-6xl border border-white/15 bg-white/[0.04] backdrop-blur-xl shadow-2xl
                     rounded-[2.5rem] flex flex-col overflow-hidden"
          style={{ height: "100%", maxHeight: "90vh", padding: "56px", gap: "32px" }}
        >
          <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${project.accent} blur-3xl pointer-events-none`} />

          <ProjectHeader project={project} href={href} label={label} />

          <div
            className="relative flex-1 min-h-0"
            style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gridTemplateRows: "1fr 1fr", gap: "16px" }}
          >
            <ImageTile src={project.images[0]} accent={project.accent} style={{ gridRow: "1 / span 2" }} />
            <ImageTile src={project.images[1]} accent={project.accent} />
            <ImageTile src={project.images[2]} accent={project.accent} />
          </div>
        </motion.div>
      </div>
    </>
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