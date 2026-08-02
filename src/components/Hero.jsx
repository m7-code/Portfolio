import {
  motion,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";

const navLinks = ["About", "Experience", "Projects", "Skills", "Contact"];

function Navbar() {
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

/* ---------------- HANGING DRAGGABLE IMAGE CARD ---------------- */
const ROPE_LENGTH = 110; // bigger rope

function HangingImageCard({ src, size = 320 }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-20, 20]);
  const [ropeEnd, setRopeEnd] = useState({ x: size / 2, y: 0 });
  const idleControls = useRef(null);

  const startIdleSway = () => {
    idleControls.current?.stop();
    idleControls.current = animate(x, [0, 18, -14, 10, -6, 0], {
      duration: 4.5,
      ease: "easeInOut",     
    });
  };

  useEffect(() => {
    startIdleSway(); // swings by itself from the start, no interaction needed
    return () => idleControls.current?.stop();
  }, []);

  useEffect(() => {
    const unsubX = x.on("change", (v) => setRopeEnd((r) => ({ ...r, x: size / 2 + v })));
    const unsubY = y.on("change", (v) => setRopeEnd((r) => ({ ...r, y: v })));
    return () => {
      unsubX();
      unsubY();
    };
  }, [x, y, size]);

  return (
    <div className="relative flex flex-col items-center" style={{ width: size }}>
      {/* rope/string, stretches as the card is dragged */}
      <svg width={size} height={ROPE_LENGTH} className="pointer-events-none overflow-visible">
        <line
          x1={size / 2}
          y1={0}
          x2={ropeEnd.x}
          y2={Math.max(4, ROPE_LENGTH + ropeEnd.y)}
          stroke="rgba(255,255,255,0.45)"
          strokeWidth={2}
        />
      </svg>

      {/* pin/nail the rope hangs from */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />

      <motion.div
        drag
        dragElastic={0.15}
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 400, bounceDamping: 12 }}
        onDragStart={() => idleControls.current?.stop()}
        // onDragEnd={() => setTimeout(startIdleSway, 600)}
        style={{ x, y, rotate, width: size, height: size }}
        className="rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing
                   shadow-[0_0_50px_rgba(125,249,255,0.15)] -mt-1 border border-white/10"
      >
        <img
          src={src}
          alt=""
          draggable={false}
          className="w-full h-full object-cover select-none pointer-events-none"
        />
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#0A0A0A] overflow-hidden">
      <Navbar />

      {/* ---------- MOBILE ---------- */}
      <div className="md:hidden flex flex-col items-center justify-center h-full px-6 pt-20 gap-6 text-center">
        <h1
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          className="text-white leading-[0.9] tracking-tight text-[clamp(2rem,9vw,2.75rem)]"
        >
          HI, I'M MUGHIRA<span className="text-[#7DF9FF]">.</span>
        </h1>
        <HangingImageCard src="/muhammad-mughira-asad.png" size={220} />
        <p
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="text-white/50 text-sm leading-relaxed max-w-xs"
        >
          Full stack AI engineer building MERN and PERN apps, ML and deep
          learning systems, RAG pipelines and autonomous AI agents.
        </p>
      </div>

      {/* ---------- DESKTOP ---------- */}
      <div className="hidden md:block relative w-full h-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          className="absolute top-[16%] left-[120px] z-0 text-white leading-none tracking-tight select-none whitespace-nowrap text-[clamp(2.5rem,6.5vw,5.5rem)]"
        >
          HI, I'M MUGHIRA<span className="text-[#7DF9FF]">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
          className="absolute bottom-[26%] left-[140px] z-20 w-[376px] text-white/70 text-2xl leading-relaxed"
        >
          Full stack AI engineer building MERN and PERN apps, ML and deep
          learning systems, RAG pipelines and autonomous AI agents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="absolute top-[20%] right-[200px] z-10"
        >
          <HangingImageCard src="/muhammad-mughira-asad.png" size={320} />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;