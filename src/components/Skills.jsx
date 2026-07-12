import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    emoji: "🚀",
    icons: "html,css,js,python,php,cpp,c,cs,java,react,threejs",
    perline: 11,
  },
  {
    title: "AI / ML & Frameworks",
    emoji: "🧠",
    icons: "pytorch,sklearn,fastapi,flask,laravel,nodejs",
    perline: 7,
  },
  {
    title: "Databases & Cloud",
    emoji: "🗄️",
    icons: "mysql,postgresql,mongodb,sqlite,aws,netlify,vercel",
    perline: 7,
  },
  {
    title: "Tools & Others",
    emoji: "🛠️",
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
            marginBottom: "56px",
            lineHeight: 0.95,
          }}
        >
          Skills &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7DF9FF] to-[#B57BFF]">
            Tools
          </span>
        </motion.h2>

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
              <h3
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, marginBottom: "18px" }}
                className="text-white text-lg md:text-xl"
              >
                {cat.emoji} {cat.title}
              </h3>
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