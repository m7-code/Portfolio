import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

function CodeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M9 6h6a3 3 0 0 1 3 3v3" />
      <path d="M15 18H9a3 3 0 0 1-3-3V9" />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="8" rx="2" />
      <rect x="2" y="13" width="20" height="8" rx="2" />
      <line x1="6" y1="7" x2="6.01" y2="7" />
      <line x1="6" y1="17" x2="6.01" y2="17" />
    </svg>
  );
}

const services = [
  {
    Icon: CodeIcon,
    title: "Full Stack Web Development",
    description: "End-to-end web apps built on the MERN and PERN stacks — from database design to a polished, responsive frontend.",
    image: "Full Stack Web Development.jpg",
  },
  {
    Icon: BrainIcon,
    title: "AI / ML Integration",
    description: "Adding intelligence to existing products — model integration, inference APIs, and ML-driven features layered on top of your app.",
    image: "AIML Integration.jpg",
  },
  {
    Icon: WorkflowIcon,
    title: "AI Agents & Automation",
    description: "Chatbots, RAG pipelines, and automated workflows built with n8n, connecting your tools and data into one system.",
    image: "AI Agents & Automation.jpg",
  },
  {
    Icon: ServerIcon,
    title: "AI Modeles with Pytorch Development",
    description: "Clean, well-structured REST APIs and backend architecture designed to scale with your product.",
    image: "AI Modeles with Pytorch Development.jpg",
  },
];

export function Services() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const indexValue = useTransform(scrollYProgress, [0, 1], [0, services.length - 1]);

  useMotionValueEvent(indexValue, "change", (latest) => {
    const next = Math.min(services.length - 1, Math.max(0, Math.round(latest)));
    setActive(next);
  });

  const current = services[active];

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative w-full bg-[#0A0A0A] text-white"
      style={{ height: `${services.length * 100}vh` }}
    >
      <div
        className="snap-start sticky top-0"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "6vw",
          paddingRight: "6vw",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "60px",
            width: "100%",
            maxWidth: "1300px",
            margin: "0 auto",
            alignItems: "center",
          }}
        >
          {/* LEFT: static intro text */}
          <div style={{ maxWidth: "480px" }}>
            <span
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              className="block text-white/40 text-xs tracking-[0.2em] uppercase mb-4"
            >
              What I offer
            </span>

            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                lineHeight: 0.95,
                marginBottom: "24px",
              }}
            >
              Services &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7DF9FF] to-[#B57BFF]">
                Expertise
              </span>
            </h2>

            <p
              style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.8 }}
              className="text-white/55 text-base md:text-lg"
            >
              From full-stack products to AI-powered automation — here's how I
              can help bring an idea to life, end to end.
            </p>

            {/* progress dots */}
            <div style={{ display: "flex", gap: "8px", marginTop: "32px" }}>
              {services.map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: i === active ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "999px",
                    background: i === active ? "#7DF9FF" : "rgba(255,255,255,0.2)",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: single swapping card */}
          <div style={{ position: "relative", height: "480px", display: "flex", alignItems: "center" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 80, rotate: 6 }}
                animate={{ opacity: 1, x: 0, rotate: -2 }}
                exit={{ opacity: 0, x: -80, rotate: -6 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="border border-white/12 bg-white/[0.04] backdrop-blur-xl rounded-3xl"
                style={{
                  position: "absolute",
                  inset: 0,
                  padding: "28px",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "22px",
                }}
              >
                {/* Image placeholder — drop in a real screenshot later via service.image */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    flex: 1,
                    minHeight: "140px",
                    position: "relative",
                    background: current.image
                      ? undefined
                      : "linear-gradient(135deg, rgba(125,249,255,0.12), rgba(181,123,255,0.12))",
                  }}
                >
                  {current.image && (
                    <img
                      src={current.image}
                      alt={current.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </div>

                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                    <span
                      className="text-[#7DF9FF]"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg, rgba(125,249,255,0.15), rgba(181,123,255,0.15))",
                        border: "1px solid rgba(125,249,255,0.2)",
                        flexShrink: 0,
                      }}
                    >
                      <current.Icon />
                    </span>
                    <h3
                      style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
                      className="text-white text-2xl md:text-3xl"
                    >
                      {current.title}
                    </h3>
                  </div>
                  <p
                    style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.7 }}
                    className="text-white/60 text-base md:text-lg"
                  >
                    {current.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}