import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "64px",
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}
        >
          <span
            className="inline-flex items-center rounded-full border border-[#7DF9FF]/20 bg-[#7DF9FF]/10 text-[#7DF9FF]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              padding: "8px 16px",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
            }}
          >
            Currently Working
          </span>

          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              lineHeight: 0.95,
              marginTop: "32px",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            }}
          >
            Full Stack
            <br />
            <span className="text-[#7DF9FF]">AI Engineer</span>
          </h2>

          <div style={{ marginTop: "40px" }}>
            <h3 style={{ fontSize: "1.875rem", fontWeight: 700 }}>SoftSuit Tech</h3>
            <p
              className="text-white/45"
              style={{ fontFamily: "'Space Grotesk', sans-serif", marginTop: "8px", fontSize: "1.125rem" }}
            >
              Multan, Pakistan
            </p>
          </div>

          <p
            className="text-white/65"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              marginTop: "40px",
              lineHeight: 2.25,
              fontSize: "1.125rem",
            }}
          >
            Working as a MERN and PERN Stack Developer, building scalable
            full-stack web applications while integrating AI-powered
            features, machine learning, and intelligent automation into
            modern software products.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <img
            src="/epage.png"
            alt="Experience"
            style={{ width: "100%", maxWidth: "420px", height: "auto", objectFit: "contain" }}
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
}