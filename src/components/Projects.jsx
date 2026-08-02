import { motion } from "framer-motion";


const projects = [
  {
    number: "01",
    title: "PneumoFusion",
    description: "AI-powered pneumonia detection from chest X-rays using a MERN stack web application.",
    live: "https://pneumonia-web-mern.vercel.app/",
    github: "https://github.com/your-username/pneumofusion",
    images: ["ppic1.png", "ppic2.png", "ppic3.png"],
    mobileImage: "mppic.jpeg",
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


// How far down each successive card's sticky point sits.
// This is what creates the peek — earlier cards' top edges stay visible.
const STEP = 100;
const BASE_TOP = 70;

function ImageTile({ src, accent, style, className }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#0d0d10] ${className || ""}`}
      style={style}
    >
      {src ? (
        <>
          {/* blurred zoomed copy fills all empty space */}
          <img
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-40"
          />
          {/* actual full image, uncropped, centered on top */}
          <img
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-contain"
          />
        </>
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
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          padding: "12px 26px",
          fontSize: "14px",
          fontWeight: 600,
          boxShadow: "0 0 20px rgba(125,249,255,0.25)",
        }}
        className="shrink-0 inline-flex items-center gap-2 border border-[#7DF9FF]/40 hover:border-[#7DF9FF]
                   rounded-full text-white/90 hover:text-white transition-all duration-300
                   hover:shadow-[0_0_30px_rgba(125,249,255,0.5)]"
      >
        {label}
      </a>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const href = project.live || project.github;
  const label = project.live ? "Live Project" : "View on GitHub";
  const topOffset = BASE_TOP + index * STEP;

  return (
    <>
      {/*  MOBILE: cascading peek stack  */}
      <div
        className="md:hidden sticky w-full flex justify-center"
        style={{ top: `${topOffset}px`, zIndex: index + 1, paddingLeft: "16px", paddingRight: "16px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{
            width: "100%",
            height: "560px",
            padding: "22px",
            gap: "16px",
            boxShadow: "0 -12px 30px rgba(0,0,0,0.55), 0 0 40px rgba(125,249,255,0.08)",
          }}
          className="relative border border-white/15 bg-[#111318] backdrop-blur-xl
                     rounded-[1.75rem] flex flex-col overflow-hidden"
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

      {/*  DESKTOP: cascading peek stack, centered, fixed height */}
      <div
        className="hidden md:flex sticky w-full justify-center"
        style={{ top: `${topOffset}px`, zIndex: index + 1, paddingLeft: "24px", paddingRight: "24px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          style={{
            width: "100%",
            maxWidth: "1100px",
            height: "560px",
            padding: "44px",
            gap: "28px",
            boxShadow: "0 -14px 40px rgba(0,0,0,0.55), 0 0 50px rgba(125,249,255,0.08)",
          }}
          className="relative border border-white/15 bg-[#111318] backdrop-blur-xl
                     rounded-[2.5rem] flex flex-col overflow-hidden"
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
    <section
      id="projects"
      className="relative w-full bg-[#0A0A0A]"
      style={{ paddingBottom: "50vh" }}
    >
      {projects.map((project, i) => (
        <ProjectCard key={project.number} project={project} index={i} />
      ))}
    </section>
  );
}