import { motion } from "framer-motion";

const navLinks = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 w-full z-50 grid grid-cols-3 items-center px-8 md:px-20 py-6 md:py-8"
    >
      <span
        style={{ fontFamily: "'Syne', sans-serif" }}
        className="text-white font-bold text-lg tracking-tight"
      >
        M7<span className="text-[#7DF9FF]">.</span>
      </span>

      <ul className="hidden md:flex items-center justify-center gap-24">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-white/80 hover:text-white text-xs tracking-[0.15em] uppercase transition"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div />
    </motion.nav>
  );
}