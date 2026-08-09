import TornSection from "./TornSection";

const markerFont = { fontFamily: "'Permanent Marker', cursive" };

const services = [
  {
    title: "Full Stack Web Development",
    desc: "End-to-end web apps — frontend to backend to database. React, Node.js, Express, FastAPI, Laravel, MERN & PERN stacks, built to actually ship.",
    tags: ["React", "Node.js", "FastAPI", "MERN", "PERN"],
  },
  {
    title: "AI Model Development",
    desc: "Custom deep learning models trained and deployed — from CNNs for image classification to fine-tuned pipelines, built with PyTorch.",
    tags: ["PyTorch", "Deep Learning", "CNNs", "Model Deployment"],
  },
  {
    title: "AI Agents & Automation",
    desc: "Agentic AI systems and RAG pipelines that actually do work — research, retrieval, decision-making — plus n8n workflows to automate the boring stuff.",
    tags: ["AI Agents", "RAG", "n8n", "Automation"],
  },
  {
    title: "Full Stack SaaS Development",
    desc: "Multi-tenant SaaS platforms built from the ground up — auth, billing, scalable architecture, and a frontend people actually enjoy using.",
    tags: ["SaaS", "Multi-tenant", "Billing", "Auth"],
  },
];

export default function Services() {
  return (
    <TornSection id="services" title="Services">
      <div className="space-y-6 sm:space-y-8">
        {services.map((s) => (
          <div key={s.title}>
            <h3
              className="mb-1.5 text-lg font-bold uppercase tracking-wide sm:text-xl"
              style={markerFont}
            >
              {s.title}
            </h3>
            <p
              className="mb-2.5 text-sm leading-relaxed sm:text-base sm:leading-relaxed"
              style={markerFont}
            >
              {s.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-current px-2.5 py-0.5 text-xs tracking-wide"
                  style={markerFont}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TornSection>
  );
}