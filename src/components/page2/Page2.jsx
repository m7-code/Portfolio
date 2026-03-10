const experiences = [
  {
    role: "Digital Media Marketing",
    company: "Shopify",
    period: "Nov 2024 – March 2025",
    desc: "Managed and executed digital marketing campaigns, handled social media presence, and drove online engagement for Shopify-based store operations.",
  },
  {
    role: "Project Developer",
    company: "Pneumofusion",
    period: "Jan 2025 – Present",
    desc: "Leading development of the Pneumofusion project.",
  },
];

export default function Page2() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 20px",
      position: "relative",
      boxSizing: "border-box",
    }}>
      {/* Glow */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: 300, height: 300, borderRadius: "50%",
        background: "rgba(139,92,246,0.08)",
        filter: "blur(100px)", pointerEvents: "none",
      }} />

      <div style={{ width: "100%", maxWidth: 760, position: "relative", zIndex: 2 }}>

        <p style={{
          color: "#7DF9FF", fontSize: "0.72rem",
          letterSpacing: "0.3em", textTransform: "uppercase",
          fontWeight: 600, fontFamily: "'Syne', sans-serif",
          textAlign: "center", marginBottom: "12px",
        }}>
          What I've Done
        </p>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2rem, 6vw, 3rem)",
          fontWeight: 900, textAlign: "center",
          marginBottom: "60px", color: "white",
        }}>
          Experience
        </h2>

        {/* Timeline — paddingLeft makes room for dot + line */}
        <div style={{ position: "relative", paddingLeft: "36px", boxSizing: "border-box" }}>

          {/* Vertical line */}
          <div style={{
            position: "absolute", left: "7px", top: 0, bottom: 0,
            width: "1px", background: "rgba(255,255,255,0.08)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{ position: "relative" }}>

                {/* Dot */}
                <div style={{
                  position: "absolute",
                  left: "-29px",
                  top: "22px",
                  width: "16px", height: "16px",
                  borderRadius: "50%",
                  background: "#7DF9FF",
                  boxShadow: "0 0 14px #7DF9FF",
                  border: "2px solid #050510",
                  outline: "2px solid rgba(125,249,255,0.3)",
                }} />

                {/* Card */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                    padding: "24px 20px",
                    transition: "all 0.4s ease",
                    boxSizing: "border-box",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.border = "1px solid rgba(125,249,255,0.25)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <div style={{
                    display: "flex", flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "flex-start", gap: "6px",
                    marginBottom: "8px",
                  }}>
                    <h3 style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(0.95rem, 3vw, 1.2rem)",
                      fontWeight: 800, color: "white", margin: 0,
                    }}>
                      {exp.role}
                    </h3>
                    <span style={{
                      color: "rgba(255,255,255,0.3)",
                      fontSize: "0.75rem", fontFamily: "monospace",
                      whiteSpace: "nowrap", paddingTop: "3px",
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  <p style={{
                    color: "#7DF9FF", fontSize: "0.85rem",
                    fontWeight: 600, marginBottom: "12px",
                  }}>
                    {exp.company}
                  </p>

                  <p style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.88rem", lineHeight: "1.8", margin: 0,
                  }}>
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}