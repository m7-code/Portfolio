import React, { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

const stars = [
  { top: "12%", left: "40%", size: 12, delay: 0 },
  { top: "22%", left: "58%", size: 8, delay: 0.4 },
  { top: "35%", left: "30%", size: 7, delay: 0.9 },
  { top: "58%", left: "46%", size: 9, delay: 1.3 },
  { top: "70%", left: "20%", size: 7, delay: 0.6 },
  { top: "18%", left: "8%", size: 8, delay: 1.6 },
  { top: "50%", left: "5%", size: 6, delay: 1.0 },
  { top: "45%", left: "62%", size: 6, delay: 1.8 },
];

function Star({ top, left, size, delay }) {
  return (
    <svg
      className="absolute pointer-events-none hidden sm:block"
      style={{
        top,
        left,
        width: size,
        height: size,
        animation: `twinkle 2.2s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        transformOrigin: "center",
      }}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="#181410" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-[#eee6d3] text-[#181410] relative">
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: .15; transform: scale(.6); }
          50%      { opacity: 1;   transform: scale(1.1); }
        }
        @keyframes point {
          0%, 20%   { transform: translate(0, 0) rotate(0deg); }
          10%       { transform: translate(4px, -4px) rotate(-4deg); }
          30%, 100% { transform: translate(0, 0) rotate(0deg); }
        }
        .arrow-point {
          animation: point 2.5s ease-in-out infinite;
          transform-origin: bottom left;
        }
      `}</style>

      {/* ================= TOP NAV ================= */}
      <header className="shrink-0 w-full px-4 sm:px-8 md:px-16 pt-4 md:pt-6 pb-2 z-30 relative">
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

      {/* ================= MAIN HERO ================= */}
      <section className="relative flex-1 w-full px-4 sm:px-8 md:px-16 py-4 md:py-8 max-w-7xl mx-auto flex flex-col justify-between">
        {stars.map((s, i) => (
          <Star key={i} {...s} />
        ))}

        {/* Main Content Grid: Stacks cleanly on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center z-10 my-auto">

          {/* LEFT COLUMN: Text & Badges */}
          <div className="md:col-span-7 flex flex-col items-start justify-start">
            <span className="inline-block bg-[#e4d9bf] border border-black/15 px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm tracking-widest -rotate-2 shadow-[2px_3px_0_rgba(0,0,0,0.08)] mb-3 md:mb-5 font-['Space_Mono']">
              MY PORTFOLIO
            </span>
            {/* MOBILE-ONLY PHOTO BLOCK (with tape, crown, THIS IS ME) */}
<div className="md:hidden relative max-w-[200px] mx-auto my-6">
  {/* Tape strip */}
  <div className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-6 w-14 h-4 bg-gradient-to-b from-[#cabb96] to-[#ddd0b1] opacity-90 shadow-sm z-10" />

  {/* Crown SVG */}
  <svg
    className="absolute -top-4 -right-2 w-10 sm:w-11 rotate-[35deg] z-20 pointer-events-none"
    viewBox="0 0 70 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 40 L10 15 L22 27 L32 8 L42 27 L54 15 L58 40 Z" stroke="#181410" strokeWidth="2.5" strokeLinejoin="round" fill="#eee6d3" />
    <path style={{ animation: "twinkle 1.8s ease-in-out infinite", transformOrigin: "center", transformBox: "fill-box" }} d="M64 4 L66 10 L72 12 L66 14 L64 20 L62 14 L56 12 L62 10 Z" fill="#181410" />
    <path style={{ animation: "twinkle 1.8s ease-in-out infinite .6s", transformOrigin: "center", transformBox: "fill-box" }} d="M2 2 L3.5 6 L7.5 7.5 L3.5 9 L2 13 L0.5 9 L-3.5 7.5 L0.5 6 Z" fill="#181410" />
  </svg>

  {/* Profile Image */}
  <img
    src="muhammad-mughira-asad2.png"
    alt="Muhammad Mughira Asad"
    className="w-full h-auto block rotate-3 drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
  />

  {/* THIS IS ME */}
  <div className="absolute -bottom-6 left-0 flex items-center gap-1 -rotate-2 z-20">
    <span className="font-['Permanent_Marker'] text-xs leading-none bg-[#eee6d3]/90 px-1.5 py-0.5 rounded shadow-sm">
      THIS IS ME
    </span>
    <svg className="arrow-point w-5" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 54 C 14 30, 28 12, 52 4" stroke="#181410" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M36 2 L54 4 L48 20" stroke="#181410" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
</div>
            <h1 className="font-['Permanent_Marker'] leading-[1.05] text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 md:mb-5 break-words">
              MUHAMMAD<br />MUGHIRA ASAD
            </h1>

            <span className="inline-block bg-[#151210] text-[#eee6d3] font-bold tracking-wider text-xs sm:text-sm md:text-base px-3 md:px-5 py-1.5 md:py-2.5 -rotate-1 mb-4 md:mb-6 font-['Space_Mono']">
              FULL STACK AI ENGINEER
            </span>

            <p className="font-['Space_Mono'] text-xs sm:text-sm md:text-base leading-relaxed text-[#4a4136] max-w-md border-b-2 border-[#181410] pb-3 mb-6">
              I build clean, creative and impactful digital experiences.
            </p>

            <div className="w-full flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Nav Buttons Grid */}
              <nav className="grid grid-cols-2 gap-2 sm:gap-3 w-full sm:w-auto max-w-xs font-['Space_Mono']">
                {navItems.slice(1).map((item, i) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`bg-[#ddd0b1] border border-black/10 px-3 py-2 text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-1.5 shadow-[2px_3px_0_rgba(0,0,0,0.07)] transition-transform hover:-translate-y-1 hover:rotate-0 whitespace-nowrap ${
                      i % 2 === 0 ? "-rotate-1" : "rotate-1"
                    }`}
                  >
                    → {item.label}
                  </Link>
                ))}
              </nav>

              {/* BASED IN PAKISTAN Badge */}
              <div className="relative w-28 sm:w-36 -rotate-3 shrink-0">
                <div
                  className="absolute -inset-2 opacity-100 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(black 1.5px, transparent 1.4px)",
                    backgroundSize: "8px 8px",
                    WebkitMaskImage: "url(/world-map-dots.svg)",
                    maskImage: "url(/world-map-dots.svg)",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }}
                />
                <div className="relative bg-transparent border-2 border-[#181410]/70 px-3 py-3 text-center text-xs tracking-wide shadow-[3px_4px_0_rgba(0,0,0,0.1)] font-['Space_Mono'] backdrop-blur-[1px]">
                  BASED IN<br />PAKISTAN
                  <svg className="w-6 mx-auto mt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8z" stroke="#181410" strokeWidth="1.6" />
                    <circle cx="12" cy="10" r="2.6" stroke="#181410" strokeWidth="1.6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Photo & Collaged Accents */}
    <div className="md:col-span-5 hidden md:flex flex-col items-end justify-center relative mt-6 md:mt-0">
            <div className="relative max-w-[240px] sm:max-w-[300px] md:max-w-[360px] w-full">
              {/* Tape strip */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-6 w-16 md:w-20 h-5 md:h-7 bg-gradient-to-b from-[#cabb96] to-[#ddd0b1] opacity-90 shadow-sm z-10" />

              {/* Crown SVG */}
              <svg
                className="absolute -top-5 -right-3 md:-top-6 md:-right-6 w-12 sm:w-16 md:w-20 rotate-[35deg] z-20 pointer-events-none"
                viewBox="0 0 70 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 40 L10 15 L22 27 L32 8 L42 27 L54 15 L58 40 Z" stroke="#181410" strokeWidth="2.5" strokeLinejoin="round" fill="#eee6d3" />
                <path style={{ animation: "twinkle 1.8s ease-in-out infinite", transformOrigin: "center", transformBox: "fill-box" }} d="M64 4 L66 10 L72 12 L66 14 L64 20 L62 14 L56 12 L62 10 Z" fill="#181410" />
                <path style={{ animation: "twinkle 1.8s ease-in-out infinite .6s", transformOrigin: "center", transformBox: "fill-box" }} d="M2 2 L3.5 6 L7.5 7.5 L3.5 9 L2 13 L0.5 9 L-3.5 7.5 L0.5 6 Z" fill="#181410" />
              </svg>

              

              {/* Profile Image */}
              <img
                src="muhammad-mughira-asad2.png"
                alt="Muhammad Mughira Asad"
                className="w-full h-auto block rotate-3 md:rotate-6 drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]"
              />

              {/* "THIS IS ME" Callout (Anchored relative to image) */}
              <div className="absolute -bottom-6 left-0 md:-left-20 md:top-70 md:-translate-y-2 flex items-center gap-1 -rotate-2 z-20">
                <span className="font-['Permanent_Marker'] text-xs sm:text-base md:text-xl leading-none bg-[#eee6d3]/90 px-1.5 py-0.5 rounded shadow-sm">
                  THIS IS ME
                </span>
                <svg className="arrow-point w-6 md:w-10" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 54 C 14 30, 28 12, 52 4" stroke="#181410" strokeWidth="2.6" strokeLinecap="round" />
                  <path d="M36 2 L54 4 L48 20" stroke="#181410" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM HERO BAR: Plane + Resume Button */}
        <div className="mt-4 md:mt-6 w-full flex flex-col md:flex-row items-center justify-between gap-6 z-10 pt-4 border-t border-black/10">
          
          {/* Headline + Plane */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
            <div className="shrink-0 text-center md:text-left">
              <div className="font-['Permanent_Marker'] text-lg sm:text-2xl md:text-3xl leading-tight">
                Turning Ideas
              </div>
              <div className="relative inline-block font-['Permanent_Marker'] text-lg sm:text-2xl md:text-3xl leading-tight mt-1">
                Into Impact
                <svg
                  className="absolute -left-3 -right-3 -top-2 -bottom-1 w-[calc(100%+24px)] h-[calc(100%+12px)] pointer-events-none"
                  viewBox="0 0 160 48"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="80" cy="24" rx="76" ry="20" stroke="#181410" strokeWidth="1.8" />
                </svg>
              </div>
            </div>

            {/* Paper Plane Animation */}
            <img
              src="/paper_plane_continuous_animated.svg"
              alt="Paper Plane Animation"
              className="w-28 sm:w-36 md:w-62 h-auto shrink-0 -rotate-12 md:rotate-0"
            />
          </div>

          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-block -rotate-3 hover:rotate-0 bg-[#151210] text-[#eee6d3] px-5 sm:px-6 py-2.5 sm:py-3 shadow-[3px_4px_0_rgba(0,0,0,0.25)] hover:-translate-y-1 active:scale-95 transition-all font-['Space_Mono'] text-xs sm:text-sm tracking-wide font-bold whitespace-nowrap"
          >
            ⬇ Download Resume
          </a>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="shrink-0 relative w-full mt-auto z-20">
        <div className="bg-[#151210] text-[#eee6d3] px-4 sm:px-8 md:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span className="font-['Space_Mono'] text-xs sm:text-sm tracking-wide">
           I don't build websites; I design them.
          </span>

          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/in/muhammad-mughira-asad-85251a32a/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-60 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 1 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a href="https://github.com/m7-code" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:opacity-60 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.15c-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.62 0-1.24.44-2.26 1.17-3.05-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 5.74 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.81 1.17 3.05 0 4.37-2.66 5.32-5.19 5.6.41.36.77 1.06.77 2.14v3.17c0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
              </svg>
            </a>
            <a href="mailto:mughiraasad6@gmail.com" aria-label="Email" className="hover:opacity-60 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                <path d="M3 6.5l9 6.5 9-6.5" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}