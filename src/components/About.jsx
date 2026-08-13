// About.jsx
// React + Tailwind — "About Me" section.
// Uses the same fonts/colors as Home.jsx (cream paper / black ink / tan tones).
//
// Add this font too (for the signature) alongside your existing font link in index.html <head>:
//   <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Permanent+Marker&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">

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

const info = [
  { label: "Name", value: "Muhammad Mughira Asad" },
  { label: "Role", value: "Full Stack AI Engineer" },
  { label: "Experience", value: "1+ Year" },
  { label: "Email", value: "mughiraasad6@gmail.com" },
  { label: "Location", value: "Multan, Pakistan" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-handle",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z",
  },
  {
    label: "GitHub",
    href: "https://github.com/m7-code",
    path: "M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.15c-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.62 0-1.24.44-2.26 1.17-3.05-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 5.74 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.81 1.17 3.05 0 4.37-2.66 5.32-5.19 5.6.41.36.77 1.06.77 2.14v3.17c0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923184533738",
    path: "M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-2.99.78.8-2.92-.19-.3A7.93 7.93 0 1 1 12 20zm4.36-5.94c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z",
  },
  {
    label: "Email",
    href: "mailto:mughiraasad6@gmail.com",
    path: "M2.5 5.5h19v13h-19v-13zm1.7 1.3L12 12l7.8-5.2H4.2z",
  },
];

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen bg-[#eee6d3] text-[#181410]">
      {/* ================= TOP NAV — same as Home page ================= */}
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
          ABOUT ME
        </h2>
        <span className="block w-14 md:w-16 h-[5px] bg-[#181410] mt-3 -rotate-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* LEFT: bio text + signature */}
        <div className="flex flex-col">
          <p className="font-['Space_Mono'] text-[14px] md:text-[16px] leading-relaxed text-[#4a4136] mb-4">
            I'm a Full Stack AI Engineer who loves turning ideas into powerful digital
            solutions. With a strong foundation in both frontend and backend development,
            I create scalable, user-friendly, and intelligent applications using the
            MERN/PERN stack.
          </p>
          <p className="font-['Space_Mono'] text-[14px] md:text-[16px] leading-relaxed text-[#4a4136] mb-4">
            On the AI side, I work with PyTorch to build and train deep learning models,
            and I design automation workflows and AI agents using n8n — connecting LLMs,
            vector databases, and real-world APIs into practical, working pipelines. I
            also enjoy integrating AI directly into full-stack products, from chatbots to
            computer-vision powered tools.
          </p>
          <p className="font-['Space_Mono'] text-[14px] md:text-[16px] leading-relaxed text-[#4a4136] mb-10">
            When I'm not coding, you'll find me exploring new technologies, contributing
            to open-source, or sharing knowledge with the developer community.
          </p>

          <span
            className="font-['Caveat'] text-[34px] md:text-[42px] leading-none -rotate-2"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Mughira
          </span>
          <svg width="120" height="14" viewBox="0 0 120 14" className="mt-1 -rotate-1" fill="none">
            <path d="M2 8 C 30 2, 60 12, 118 5" stroke="#181410" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>

        {/* RIGHT: info card + socials (icons now live inside the card) */}
        <div className="flex flex-col items-start md:items-end md:-mt-6 md:-translate-x-8">
          <div className="w-full md:max-w-[440px] bg-[#f6f0e2] border border-black/15 rounded-2xl shadow-[4px_5px_0_rgba(0,0,0,0.08)] p-7 md:p-9">
            {info.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between py-3.5 font-['Space_Mono'] text-[14px] md:text-[16px] border-b border-black/10"
              >
                <span className="text-[#8a7f6a] font-bold">{row.label}:</span>
                <span className="text-[#181410] text-right ml-4">{row.value}</span>
              </div>
            ))}

            {/* social icons — inside the card now */}
            <div className="flex items-center gap-3 pt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#181410] text-[#eee6d3] flex items-center justify-center hover:-translate-y-1 transition-transform"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}