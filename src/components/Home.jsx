import { motion } from "motion/react";
import { Link } from "react-router-dom";

const MotionLink = motion.create(Link);

const navItems = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

// Shared torn-paper mask
const tornMaskStyle = {
  WebkitMaskImage: "url('/torn-paper.png')",
  WebkitMaskSize: "100% 100%",
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskImage: "url('/torn-paper.png')",
  maskSize: "100% 100%",
  maskRepeat: "no-repeat",
  maskPosition: "center",
};

function TornButton({ label, to, delay }) {
  return (
    <MotionLink
      to={to}
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.06, rotate: -1 }}
      whileTap={{ scale: 0.96 }}
      className="relative block w-32 h-11 md:w-40 md:h-12 cursor-pointer select-none"
    >
      <span
        className="absolute inset-0 bg-white transition-colors duration-300 hover:bg-neutral-100"
        style={tornMaskStyle}
      />
      <span className="relative z-10 flex h-full w-full items-center justify-center px-3 text-center text-sm font-semibold tracking-wide text-black md:text-base">
        {label}
      </span>
    </MotionLink>
  );
}

export default function Home() {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center gap-6 overflow-hidden bg-black px-4 pt-20 pb-4 md:h-screen md:flex-row md:items-center md:justify-between md:px-16 md:pt-24 lg:px-65">
      {/* Photo block – on mobile: first (top), on desktop: right side */}
      <div className="order-1 flex -translate-y-6 flex-col items-center md:order-2 md:translate-y-0">
        {/* Short tagline instead of the full name (name now lives in the navbar) */}
        <motion.p
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-lg uppercase leading-tight text-white sm:text-xl md:text-2xl"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          Full Stack AI Engineer
        </motion.p>

        {/* Container ka aspect ratio photo (1080x1080 square) ke barabar rakha
            hai — isliye object-cover kuch bhi crop nahi karega, pura photo
            corner-to-corner torn-shape ke andar fit hoga */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative h-[260px] w-[260px] shrink-0 sm:h-[300px] sm:w-[300px] md:h-[340px] md:w-[340px]"
          style={tornMaskStyle}
        >
          <img
            src="/muhammad-mughira-asad.png"
            alt="Muhammad Mughira Asad"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>
      </div>

      {/* Nav buttons – on mobile: bottom, on desktop: left side */}
      <div className="order-2 -translate-y-8 flex flex-row flex-wrap items-center justify-center gap-5 md:order-1 md:translate-y-0 md:flex-col md:items-start md:gap-10">
        {navItems.map((item, i) => (
          <TornButton
            key={item.label}
            label={item.label}
            to={item.to}
            delay={0.15 + i * 0.1}
          />
        ))}
      </div>

      {/* Mobile-only: logo (left) + social icons (right), sitting
          directly inside the bottom torn line band. Hidden on sm+
          since the navbar already shows these on larger screens. */}
      <div className="fixed bottom-0 left-0 z-50 flex h-14 w-full items-center justify-between bg-[#f5f3ee] px-5 sm:hidden">
        <Link to="/" className="flex items-center gap-2">
          <div
            className="h-7 w-7 bg-black"
            style={{
              WebkitMaskImage: "url('/deer-mask.png')",
              maskImage: "url('/deer-mask.png')",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
          <span
            className="text-2xl text-black"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
          >
            M7
          </span>
        </Link>

        <div className="flex items-center gap-4 ">
          <a
            href="https://github.com/m7-code"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:opacity-70"
          >
            <svg viewBox="0 0 24 24" fill="black" className="h-6 w-6">
              <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.98 3.23 9.2 7.71 10.69.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.14.68-3.8-1.34-3.8-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.4-1.22.72-1.5-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.1 1.16a10.7 10.7 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.04 0 4.35-2.64 5.31-5.16 5.59.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.65.78.54A11.1 11.1 0 0 0 23.1 11.6C23.1 5.33 18.27.5 12 .5Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-mughira-asad-85251a32a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:opacity-70"
          >
            <svg viewBox="0 0 24 24" fill="black" className="h-6 w-6">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
            </svg>
          </a>
          <a
            href="mailto:mughiraasad6@gmail.com"
            aria-label="Email"
            className="transition hover:opacity-70"
          >
            <svg viewBox="0 0 24 24" fill="black" className="h-6 w-6">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </a>
        </div>
       
      </div>
 {/* Bottom horizontal torn line — tiled at native resolution so the
          jagged texture stays crisp on any screen width. */}
      {/* Desktop bottom torn line */}
<div
  className="absolute -bottom-4 left-0 hidden h-8 w-screen md:block"
  style={{
    backgroundImage: "url('/torn-line-horizontal.png')",
    backgroundRepeat: "repeat-x",
    backgroundPosition: "top left",
    backgroundSize: "auto 100%",
  }}
/>

{/* Mobile bottom torn line */}
<div
  className="fixed bottom-12 left-0 z-[60] h-5 w-screen md:hidden"
  style={{
    backgroundImage: "url('/torn-line-horizontal.png')",
    backgroundRepeat: "repeat-x",
    backgroundPosition: "top left",
    backgroundSize: "auto 100%",
  }}
/>
      
    </section>
  );
}