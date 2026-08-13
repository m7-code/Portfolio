// Services.jsx
// React + Tailwind — "Services" section, same visual language as About.jsx / Home.jsx.

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

const services = [
  {
    title: "Full Stack Development",
    desc: "Building clean, scalable web apps end-to-end with the MERN/PERN stack — from database to UI.",
    image: "service1.png",
  },
  {
    title: "AI & ML Integration",
    desc: "Training and deploying models with PyTorch, and wiring AI features directly into real products.",
    image: "service2.png",
  },
  {
    title: "Automation & AI Agents",
    desc: "Designing n8n workflows and AI agents that connect LLMs, APIs, and data into working pipelines.",
    image: "service3.png",
  },
  {
    title: "UI/UX & Frontend",
    desc: "Crafting responsive, user-friendly interfaces with React and Tailwind — clean and intentional.",
    image: "service4.png",
  },
];

export default function Services() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen bg-[#eee6d3] text-[#181410]">
      {/* ================= TOP NAV — same as Home/About ================= */}
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
            SERVICES
          </h2>
          <span className="block w-14 md:w-16 h-[5px] bg-[#181410] mt-3 -rotate-1" />
        </div>

        {/* 4 cards in a row on desktop, stacking down on smaller screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[#f6f0e2] border border-black/15 rounded-2xl shadow-[4px_5px_0_rgba(0,0,0,0.08)] p-5 md:p-6 flex flex-col"
            >
              {/* Image / icon */}
              <div className="w-full aspect-square rounded-xl border-2 border-dashed border-black/20 bg-[#eee6d3] overflow-hidden mb-5">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-['Permanent_Marker'] text-[18px] md:text-[20px] leading-snug mb-2">
                {s.title}
              </h3>
              <p className="font-['Space_Mono'] text-[12.5px] md:text-[13.5px] leading-relaxed text-[#4a4136]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}