const SKILL_ROWS = [
  {
    label: "Languages",
    skills: [
      { name: "HTML",       icon: "html"       },
      { name: "CSS",        icon: "css"        },
      { name: "JavaScript", icon: "js"         },
      { name: "Python",     icon: "python"     },
      { name: "PHP",        icon: "php"        },
      { name: "C++",        icon: "cpp"        },
      { name: "C#",         icon: "cs"         },
      { name: "Java",       icon: "java"       },
      { name: "React",      icon: "react"      },
      { name: "Three.js",   icon: "threejs"    },
    ],
  },
  {
    label: "AI / ML & Frameworks",
    skills: [
      { name: "PyTorch",    icon: "pytorch"    },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "FastAPI",    icon: "fastapi"    },
      { name: "Flask",      icon: "flask"      },
      { name: "Laravel",    icon: "laravel"    },
      { name: ".NET",       icon: "dotnet"     },
    ],
  },
  {
    label: "Databases & Cloud",
    skills: [
      { name: "MySQL",      icon: "mysql"      },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB",    icon: "mongodb"    },
      { name: "SQLite",     icon: "sqlite"     },
      { name: "AWS",        icon: "aws"        },
      { name: "Netlify",    icon: "netlify"    },
      { name: "Vercel",     icon: "vercel"     },
    ],
  },
  {
    label: "Tools & Others",
    skills: [
      { name: "Git",        icon: "git"        },
      { name: "GitHub",     icon: "github"     },
      { name: "VSCode",     icon: "vscode"     },
      { name: "Docker",     icon: "docker"     },
      { name: "Postman",    icon: "postman"    },
      { name: "Blender",    icon: "blender"    },
      { name: "npm",        icon: "npm"        },
      { name: "Linux",      icon: "linux"      },
      { name: "WordPress",  icon: "wordpress"  },
    ],
  },
];

export default function Page3() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "100px 60px 80px",
      position: "relative",
    }}>
      {/* Glow */}
      <div style={{
        position: "absolute", bottom: 0, left: 0,
        width: 400, height: 400, borderRadius: "50%",
        background: "rgba(125,249,255,0.05)",
        filter: "blur(120px)", pointerEvents: "none",
      }} />

      {/* Heading */}
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(2rem, 5vw, 3rem)",
        fontWeight: 900,
        marginBottom: "56px",
        textAlign: "center",
      }}>
        Skills
      </h2>

      {/* Rows */}
      <div style={{ width: "100%", maxWidth: 900, display: "flex", flexDirection: "column", gap: "44px" }}>
        {SKILL_ROWS.map((row) => (
          <div key={row.label}>
            {/* Row label */}
            <p style={{
              color: "#7DF9FF",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontFamily: "'Syne', sans-serif",
              marginBottom: "20px",
            }}>
              {row.label}
            </p>

            {/* Icons */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
            }}>
              {row.skills.map((skill) => (
                <div
                  key={skill.name}
                  title={skill.name}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "default",
                  }}
                >
                  {/* Circle */}
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      padding: 12,
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.border = "1px solid rgba(125,249,255,0.5)";
                      e.currentTarget.style.background = "rgba(125,249,255,0.08)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(125,249,255,0.15)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`}
                      alt={skill.name}
                      style={{ width: 36, height: 36, objectFit: "contain" }}
                    />
                  </div>

                  {/* Name */}
                  <span style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    textAlign: "center",
                    maxWidth: 64,
                  }}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}