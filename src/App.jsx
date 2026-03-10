import { useState, useEffect } from "react";
import Page1 from "./components/page1/Page1";
import Page2 from "./components/page2/Page2";
import Page3 from "./components/page3/Page3";
import Page4 from "./components/page4/Page4";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "home",       label: "Home"       },
    { id: "experience", label: "Experience" },
    { id: "skills",     label: "Skills"     },
    { id: "contact",    label: "Contact"    },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{
      background: "#050510",
      color: "white",
      fontFamily: "'Syne', sans-serif",
      overflowX: "hidden",   // <-- horizontal scroll band
      width: "100%",
    }}>

      {/* ── Navbar ── */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: "blur(12px)",
        background: "rgba(5,5,16,0.85)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        boxSizing: "border-box",
        width: "100%",
      }}
      className="navbar-wrap"
      >
        {/* Logo */}
        <span
          onClick={() => scrollTo("home")}
          style={{
            fontSize: "1.4rem", fontWeight: 900,
            color: "#7DF9FF", cursor: "pointer",
            letterSpacing: "-0.02em",
            fontFamily: "'Syne', sans-serif",
            flexShrink: 0,
          }}
        >
          m7<span style={{ color: "white" }}>.</span>
        </span>

        {/* Desktop links */}
        <ul className="nav-desktop" style={{
          display: "flex", gap: "2rem",
          listStyle: "none", margin: 0, padding: 0,
        }}>
          {navItems.map((item) => (
            <li key={item.id} onClick={() => scrollTo(item.id)}
              style={{
                cursor: "pointer",
                fontSize: "0.72rem", fontWeight: 600,
                letterSpacing: "0.15em", textTransform: "uppercase",
                transition: "color 0.3s",
                color: activeSection === item.id ? "#7DF9FF" : "rgba(255,255,255,0.4)",
                whiteSpace: "nowrap",
              }}
              onMouseOver={(e) => { if (activeSection !== item.id) e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
              onMouseOut={(e)  => { if (activeSection !== item.id) e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            padding: 4, flexDirection: "column", gap: 5,
            display: "none", flexShrink: 0,
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: 22, height: 2,
              background: "#7DF9FF", borderRadius: 2, transition: "all 0.3s",
              transform:
                menuOpen && i === 0 ? "rotate(45deg) translate(5px,5px)"  :
                menuOpen && i === 2 ? "rotate(-45deg) translate(5px,-5px)" :
                menuOpen && i === 1 ? "scaleX(0)" : "none",
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 58, left: 0, right: 0, zIndex: 49,
          background: "rgba(5,5,16,0.98)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "12px 24px",
          boxSizing: "border-box",
        }}>
          {navItems.map(item => (
            <div key={item.id} onClick={() => scrollTo(item.id)}
              style={{
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                fontSize: "0.82rem", fontWeight: 600,
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: activeSection === item.id ? "#7DF9FF" : "rgba(255,255,255,0.6)",
                cursor: "pointer",
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}

      {/* Pages */}
      <section id="home">      <Page1 /> </section>
      <section id="experience"><Page2 /> </section>
      <section id="skills">    <Page3 /> </section>
      <section id="contact">   <Page4 /> </section>

      <style>{`
        /* Desktop navbar padding */
        .navbar-wrap { padding: 18px 60px; }

        /* Mobile navbar padding — chhota */
        @media (max-width: 768px) {
          .navbar-wrap   { padding: 16px 20px !important; }
          .nav-desktop   { display: none !important; }
          .nav-mobile    { display: flex !important; }
        }
      `}</style>
    </div>
  );
}