import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navLinks = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: hidden ? 0 : 1, y: hidden ? -100 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 grid grid-cols-3 items-center px-8 md:px-20 py-6 md:py-8 bg-[#0A0A0A]/60 backdrop-blur-md"
    >
      <span
        style={{ fontFamily: "'Syne', sans-serif" }}
        className="text-white font-bold text-lg tracking-tight"
      >
        M7<span className="text-[#7DF9FF]">.</span>
      </span>

      <ul className="hidden md:flex items-center justify-center gap-24">
        {navLinks.map((link, i) => (
          <motion.li
            key={link}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
          >
            <a
              href={`#${link.toLowerCase()}`}
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              className="text-white/80 hover:text-white text-xs tracking-[0.15em] uppercase transition-colors duration-300"
            >
              {link}
            </a>
          </motion.li>
        ))}
      </ul>

      <div />
    </motion.nav>
  );
}

function FloatingAvatar() {
  return (
    <div className="relative flex items-center justify-center w-80 h-80 md:w-96 md:h-96">
      <div className="absolute w-52 h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#7DF9FF]/25 to-[#B57BFF]/25 blur-3xl" />

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-[3px]
                   bg-gradient-to-br from-[#7DF9FF] to-[#B57BFF]"
      >
        <img
          src="/muhammad-mughira-asad.png"
          alt="Muhammad Mughira Asad"
          className="w-full h-full object-cover rounded-full border-4 border-[#0A0A0A]"
        />
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="snap-start relative w-full h-screen bg-[#0A0A0A] overflow-hidden">
      <Navbar />

      {/* ---- MOBILE: simple stacked flow ---- */}
      <div className="md:hidden flex flex-col items-center justify-center h-full px-6 pt-20 gap-6 text-center">
        <h1
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          className="text-white leading-[0.9] tracking-tight text-[clamp(2rem,9vw,2.75rem)]"
        >
          HI, I'M MUGHIRA<span className="text-[#7DF9FF]">.</span>
        </h1>
        <FloatingAvatar />
        <p
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="text-white/50 text-sm leading-relaxed max-w-xs"
        >
          Full stack AI engineer building MERN and PERN apps, ML and deep
          learning systems, RAG pipelines and autonomous AI agents.
        </p>
        <a
          href="#contact"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            padding: "18px 40px",
            fontSize: "20px",
            fontWeight: 700,
            transform: "rotate(-6deg)",
            marginTop: "24px",
          }}
          className="inline-flex items-center gap-2 rounded-full text-black
                     bg-gradient-to-r from-[#7DF9FF] to-[#B57BFF] shadow-[0_0_30px_rgba(125,249,255,0.25)]"
        >
          Contact Me
        </a>
      </div>

      {/* ---- DESKTOP: absolute overlapping composition (matches reference) ---- */}
      <div className="hidden md:block relative w-full h-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          className="absolute top-[16%] left-20 z-0 text-white leading-none tracking-tight select-none whitespace-nowrap text-[clamp(2.5rem,6.5vw,5.5rem)]"
        >
          HI, I'M MUGHIRA<span className="text-[#7DF9FF]">.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="absolute top-[30%] left-1/2 -translate-x-1/2 z-10"
        >
          <FloatingAvatar />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
          className="absolute bottom-[30%] left-20 z-20 w-64 text-white/70 text-lg leading-relaxed"
        >
          Full stack AI engineer building MERN and PERN apps, ML and deep
          learning systems, RAG pipelines and autonomous AI agents.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: -8 }}
          whileHover={{ scale: 1.08, rotate: -4 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="absolute top-[42%] right-20 z-10 inline-flex items-center gap-2 px-20 py-10 rounded-full
            text-black text-3xl font-bold bg-gradient-to-r from-[#7DF9FF] to-[#B57BFF]
            shadow-[0_0_40px_rgba(125,249,255,0.35)]"
        >
          Contact Me
        </motion.a>
      </div>
    </section>
  );
}