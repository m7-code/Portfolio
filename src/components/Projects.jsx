import TornSection from "./TornSection";
import { tornMaskStyle } from "../tornMask";

const markerFont = { fontFamily: "'Permanent Marker', cursive" };

const projects = [
  {
    title: "PneumoFusion",
    desc: "Chest X-ray pneumonia detection system — EfficientNet-B2 model with 94.55% accuracy, Grad-CAM visualization to show exactly where the model is looking, plus a RAG chatbot embedded right into the app for Q&A.",
    links: [{ label: "Live Demo", href: "https://pneumonia-web-mern.vercel.app/" }],
  },
  {
    title: "AI Models",
    desc: "A collection of AI/ML models trained and experimented with on Google Colab — deep learning architectures, training runs, and experiments across different problems.",
    links: [{ label: "GitHub", href: "https://github.com/m7-code/AI_Models" }],
  },
  {
    title: "AI Agents",
    desc: "n8n automation workflows exported as JSON — AI agent pipelines built to automate real, repetitive tasks instead of just demoing a concept.",
    links: [{ label: "GitHub", href: "https://github.com/m7-code/Ai-Agents" }],
  },
  {
    title: "BotForge",
    desc: "An advanced, production-ready AI chatbot infrastructure that turns any website URL into a smart, context-aware AI chatbot. It crawls website content, builds a robust knowledge base, and generates an easily embeddable widget — letting any business offer instant automated support in seconds.",
    links: [{ label: "GitHub", href: "https://github.com/m7-code/Botforge" }],
  },
];

function LinkButton({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block h-10 min-w-[110px]"
    >
      <span className="absolute inset-0 bg-black" style={tornMaskStyle} />
      <span className="relative z-10 flex h-full items-center justify-center px-5 text-xs font-semibold uppercase tracking-wide text-white sm:text-sm">
        {label}
      </span>
    </a>
  );
}

export default function Projects() {
  return (
    <TornSection id="projects" title="Projects">
      <div className="space-y-6 sm:space-y-8">
        {projects.map((p) => (
          <div key={p.title}>
            <h3
              className="mb-1.5 text-lg font-bold uppercase tracking-wide sm:text-xl"
              style={markerFont}
            >
              {p.title}
            </h3>
            <p
              className="mb-3 text-sm leading-relaxed sm:text-base sm:leading-relaxed"
              style={markerFont}
            >
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-3">
              {p.links.map((l) => (
                <LinkButton key={l.label} {...l} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </TornSection>
  );
}