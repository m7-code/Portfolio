// Skills.jsx
// React + Tailwind — "Skills" section. Same header/heading style as About.jsx.

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

const skillGroups = [
  {
    title: "🚀 Languages",
    icons: "html,css,js,python,php,cpp,c,cs,java,react,threejs",
    perline: 11,
  },
  {
    title: "🧠 AI / ML & Frameworks",
    icons: "pytorch,sklearn,fastapi,flask,laravel,nodejs",
    perline: 7,
  },
  {
    title: "🗄️ Databases & Cloud",
    icons: "mysql,postgresql,mongodb,sqlite,aws,netlify,vercel",
    perline: 7,
  },
  {
    title: "🛠️ Tools & Others",
    icons: "git,github,vscode,docker,postman,blender,npm,linux,wordpress",
    perline: 10,
  },
];

export default function Skills() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen bg-[#eee6d3] text-[#181410]">
      {/* ================= TOP NAV — same as About page ================= */}
      <header className="w-full px-4 sm:px-8 md:px-20 pt-4 md:pt-6 pb-2 relative z-30">
        <div className="flex items-center justify-between">
          {/* LOGO + NAME (M7) — top-left corner, always visible */}
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setMenuOpen(false)}>
            <img
              src="/icon.png"
              alt="Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain rounded-sm"
            />
            <span className="font-['Permanent_Marker'] text-lg sm:text-xl md:text-2xl leading-none">
              M7
            </span>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden sm:flex items-center gap-x-6 md:gap-x-8 font-['Space_Mono'] text-xs sm:text-sm tracking-wide">
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} className="hover:opacity-60 transition-opacity">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="sm:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 shrink-0"
          >
            <span
              className={`block w-6 h-[2px] bg-[#181410] transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#181410] transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#181410] transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-80 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col items-center gap-1 bg-[#e4d9bf] border border-black/10 rounded-md py-3 font-['Space_Mono'] text-sm tracking-wide shadow-[2px_3px_0_rgba(0,0,0,0.08)]">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-2 hover:opacity-60 hover:bg-black/5 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="px-4 sm:px-8 md:px-20 py-10 md:py-14">
        {/* BACK BUTTON */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 -rotate-1 hover:rotate-0 bg-[#151210] text-[#eee6d3] px-4 py-2 shadow-[2px_3px_0_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:scale-95 transition-all font-['Space_Mono'] text-xs sm:text-sm tracking-wide font-bold mb-6 md:mb-8"
        >
          ← Back
        </button>

        {/* heading */}
        <div className="mb-10 md:mb-14">
          <h2 className="font-['Permanent_Marker'] text-[36px] md:text-[52px] leading-none">
            SKILLS
          </h2>
          <span className="block w-14 md:w-16 h-[5px] bg-[#181410] mt-3 -rotate-1" />
        </div>

        {/* skill category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-[#f6f0e2] border border-black/15 rounded-2xl shadow-[4px_5px_0_rgba(0,0,0,0.08)] p-6 md:p-7"
            >
              <h3 className="font-['Permanent_Marker'] text-[18px] md:text-[22px] leading-none mb-5">
                {group.title}
              </h3>
              <img
                src={`https://skillicons.dev/icons?i=${group.icons}&theme=dark&perline=${group.perline}`}
                alt={group.title}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}