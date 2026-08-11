import { motion } from "framer-motion";

function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

const categories = [
  {
    title: "Languages",
    Icon: CodeIcon,
    icons: "html,css,js,python,php,cpp,c,cs,java,react,threejs",
    perline: 11,
  },
  {
    title: "AI / ML & Frameworks",
    Icon: BrainIcon,
    icons: "pytorch,sklearn,fastapi,flask,laravel,nodejs",
    perline: 7,
  },
  {
    title: "Databases & Cloud",
    Icon: DatabaseIcon,
    icons: "mysql,postgresql,mongodb,sqlite,aws,netlify,vercel",
    perline: 7,
  },
  {
    title: "Tools & Others",
    Icon: ToolsIcon,
    icons: "git,github,vscode,docker,postman,blender,npm,linux,wordpress",
    perline: 10,
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="snap-start bg-[#0A0A0A] text-white"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "6vw",
        paddingRight: "6vw",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
            className="block text-white/40 text-xs tracking-[0.2em] uppercase mb-4"
          >
            What I work with
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
              lineHeight: 0.95,
            }}
          >
            Skills &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7DF9FF] to-[#B57BFF]">
              Tools
            </span>
          </motion.h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-white/10 bg-white/[0.03] backdrop-blur-sm rounded-2xl"
              style={{ padding: "28px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
                <span
                  className="text-[#7DF9FF]"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, rgba(125,249,255,0.15), rgba(181,123,255,0.15))",
                    border: "1px solid rgba(125,249,255,0.2)",
                    flexShrink: 0,
                  }}
                >
                  <cat.Icon />
                </span>
                <h3
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
                  className="text-white text-lg md:text-xl"
                >
                  {cat.title}
                </h3>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
                <img
                  src={`https://skillicons.dev/icons?i=${cat.icons}&theme=dark&perline=${cat.perline}`}
                  alt={cat.title}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                {cat.title === "Tools & Others" && (
                  <img
                    src="https://cdn.simpleicons.org/n8n/EA4B71"
                    alt="n8n"
                    title="n8n"
                    style={{ width: "48px", height: "48px", padding: "8px", background: "#1a1a1a", borderRadius: "8px" }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}