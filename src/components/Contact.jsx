// Contact.jsx
// React + Tailwind — "Contact Me" section.
// Matches the exact cream paper / black ink / typewriter aesthetic of About.jsx.

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

const contactDetails = [
  {
    label: "Email",
    value: "mughiraasad6@gmail.com",
    href: "mailto:mughiraasad6@gmail.com",
    iconPath:
      "M2.5 5.5h19v13h-19v-13zm1.7 1.3L12 12l7.8-5.2H4.2z",
  },
  {
    label: "WhatsApp",
    value: "+92 318 4533738",
    href: "https://wa.me/923184533738",
    iconPath:
      "M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-2.99.78.8-2.92-.19-.3A7.93 7.93 0 1 1 12 20zm4.36-5.94c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z",
  },
  {
    label: "LinkedIn",
    value: "Muhammad Mughira Asad",
    href: "https://www.linkedin.com/in/muhammad-mughira-asad-85251a32a/",
    iconPath:
      "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z",
  },
  {
    label: "GitHub",
    value: "m7-code",
    href: "https://github.com/m7-code",
    iconPath:
      "M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.15c-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.62 0-1.24.44-2.26 1.17-3.05-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 5.74 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.81 1.17 3.05 0 4.37-2.66 5.32-5.19 5.6.41.36.77 1.06.77 2.14v3.17c0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z",
  },
];

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate EmailJS, Formspree, or backend endpoint
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section className="w-full min-h-screen bg-[#eee6d3] text-[#181410] flex flex-col justify-between">
      {/* ================= TOP NAV — same as Home & About page ================= */}
      <header className="w-full px-4 sm:px-8 md:px-20 pt-4 md:pt-6 pb-2 relative z-30">
        <div className="flex items-center justify-between">
          {/* LOGO + NAME (M7) */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            onClick={() => setMenuOpen(false)}
          >
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
              <Link
                key={item.label}
                to={item.to}
                className="hover:opacity-60 transition-opacity"
              >
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

      {/* ================= MAIN CONTENT ================= */}
      <div className="px-4 sm:px-8 md:px-20 py-10 md:py-14 grow">
        {/* BACK BUTTON */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 -rotate-1 hover:rotate-0 bg-[#151210] text-[#eee6d3] px-4 py-2 shadow-[2px_3px_0_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:scale-95 transition-all font-['Space_Mono'] text-xs sm:text-sm tracking-wide font-bold mb-6 md:mb-8"
        >
          ← Back
        </button>

        {/* PAGE HEADING */}
        <div className="mb-10 md:mb-14">
          <h2 className="font-['Permanent_Marker'] text-[36px] md:text-[52px] leading-none">
            GET IN TOUCH
          </h2>
          <span className="block w-14 md:w-16 h-[5px] bg-[#181410] mt-3 -rotate-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* LEFT COLUMN: CONTACT DETAILS CARDS */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <p className="font-['Space_Mono'] text-[14px] md:text-[16px] leading-relaxed text-[#4a4136]">
              Have a project in mind, need an AI workflow automated, or just want to connect?
              Feel free to drop me a message or reach out through any of these platforms!
            </p>

            <div className="flex flex-col gap-3.5 mt-2">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 bg-[#f6f0e2] border border-black/15 rounded-xl shadow-[3px_4px_0_rgba(0,0,0,0.06)] hover:shadow-[4px_5px_0_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="w-9 h-9 shrink-0 rounded-full bg-[#181410] text-[#eee6d3] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d={item.iconPath} />
                      </svg>
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="font-['Space_Mono'] text-xs text-[#8a7f6a] font-bold uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="font-['Space_Mono'] text-sm text-[#181410] truncate">
                        {item.value}
                      </span>
                    </div>
                  </div>
                  <span className="font-['Space_Mono'] text-sm text-[#8a7f6a] group-hover:translate-x-1 transition-transform ml-2 shrink-0">
                    →
                  </span>
                </a>
              ))}
            </div>

            {/* HANDWRITTEN NOTE */}
            <div className="mt-4 p-4 bg-[#e4d9bf] border border-black/10 rounded-xl relative -rotate-1">
              <span
                className="font-['Caveat'] text-[24px] md:text-[28px] text-[#181410] leading-snug block"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                "Looking forward to building something awesome together!"
              </span>
              <span className="block text-right font-['Space_Mono'] text-xs text-[#6e6351] mt-1">
                — Mughira
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="md:col-span-7 bg-[#f6f0e2] border border-black/15 rounded-2xl shadow-[5px_6px_0_rgba(0,0,0,0.08)] p-6 sm:p-8 md:p-10">
            <h3 className="font-['Permanent_Marker'] text-2xl text-[#181410] mb-6">
              SEND A MESSAGE
            </h3>

            {submitted ? (
              <div className="bg-[#e4d9bf] border border-black/20 p-6 rounded-xl text-center font-['Space_Mono'] text-sm text-[#181410] animate-fade-in">
                <span className="text-2xl block mb-2">✉️</span>
                <p className="font-bold text-base mb-1">Message Sent!</p>
                <p className="text-[#5a5043]">
                  Thanks for reaching out, Mughira will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* NAME INPUT */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-['Space_Mono'] text-xs font-bold text-[#6e6351] uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="your name"
                      className="w-full bg-[#eee6d3] border border-black/15 rounded-lg px-3.5 py-2.5 font-['Space_Mono'] text-sm text-[#181410] outline-none focus:border-black/50 focus:ring-1 focus:ring-black/20 transition-all placeholder:text-black/30"
                    />
                  </div>

                  {/* EMAIL INPUT */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-['Space_Mono'] text-xs font-bold text-[#6e6351] uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="abc@example.com"
                      className="w-full bg-[#eee6d3] border border-black/15 rounded-lg px-3.5 py-2.5 font-['Space_Mono'] text-sm text-[#181410] outline-none focus:border-black/50 focus:ring-1 focus:ring-black/20 transition-all placeholder:text-black/30"
                    />
                  </div>
                </div>

                {/* SUBJECT INPUT */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-['Space_Mono'] text-xs font-bold text-[#6e6351] uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Hiring"
                    className="w-full bg-[#eee6d3] border border-black/15 rounded-lg px-3.5 py-2.5 font-['Space_Mono'] text-sm text-[#181410] outline-none focus:border-black/50 focus:ring-1 focus:ring-black/20 transition-all placeholder:text-black/30"
                  />
                </div>

                {/* MESSAGE TEXTAREA */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-['Space_Mono'] text-xs font-bold text-[#6e6351] uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="w-full bg-[#eee6d3] border border-black/15 rounded-lg px-3.5 py-2.5 font-['Space_Mono'] text-sm text-[#181410] outline-none focus:border-black/50 focus:ring-1 focus:ring-black/20 transition-all placeholder:text-black/30 resize-none"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="mt-2 w-full sm:w-auto self-start bg-[#181410] text-[#eee6d3] font-['Space_Mono'] text-sm font-bold tracking-wide px-8 py-3.5 rounded-lg shadow-[3px_4px_0_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:scale-95 transition-all -rotate-1 hover:rotate-0 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <span>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER ACCENT */}
      <footer className="w-full text-center py-4 border-t border-black/10 font-['Space_Mono'] text-xs text-[#8a7f6a]">
        © {new Date().getFullYear()} Muhammad Mughira Asad. All rights reserved.
      </footer>
    </section>
  );
}