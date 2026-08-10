import { Link } from "react-router-dom";

export const NAVBAR_HEIGHT_CLASS = "h-16 md:h-26"; // keep in sync with pt-* on page sections

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/m7-code",
    icon: (
      <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.98 3.23 9.2 7.71 10.69.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.14.68-3.8-1.34-3.8-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.4-1.22.72-1.5-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.1 1.16a10.7 10.7 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.04 0 4.35-2.64 5.31-5.16 5.59.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.65.78.54A11.1 11.1 0 0 0 23.1 11.6C23.1 5.33 18.27.5 12 .5Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-mughira-asad-85251a32a/",
    icon: (
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    ),
  },
  {
    label: "Email",
    href: "mailto:mughiraasad6@gmail.com",
    icon: (
      <>
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </>
    ),
  },
];

/**
 * Fixed navbar.
 * - Desktop (sm and up): logo left, name centered, social icons right.
 * - Mobile: logo and icons are hidden entirely — only the centered
 *   name text shows, so the bar stays clean on small screens.
 *
 * Mount ONCE in App.jsx above <Routes> so it shows on every page.
 */
export default function TornNavbar() {
  return (
    <header className={`fixed top-0 left-0 z-50 w-full ${NAVBAR_HEIGHT_CLASS}`}>
      <div className="absolute inset-0 bg-[#f5f3ee]" />

      <div
        className="absolute -bottom-2 left-0 h-5 w-screen md:-bottom-4 md:h-8"
        style={{
          backgroundImage: "url('/torn-line-horizontal.png')",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "top left",
          backgroundSize: "auto 100%",
        }}
      />

      <div className="relative flex h-full items-center px-5 sm:px-8 md:px-14">
        {/* Left — logo (hidden on mobile) */}
        <div className="hidden flex-1 items-center sm:flex">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <div
              className="h-7 w-7 bg-black sm:h-9 sm:w-9"
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
              className="text-xl text-black sm:text-4xl"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
            >
              M7
            </span>
          </Link>
        </div>

        {/* Center — name, truly centered regardless of side content width */}
        <p
          className="flex-1 px-2 text-center text-2xl leading-tight uppercase tracking-wide text-black xs:text-xs sm:flex-none sm:whitespace-nowrap sm:text-base sm:leading-normal md:text-3xl"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          Based in Pakistan | Developer
        </p>

        {/* Right — social icons (hidden on mobile) */}
        <div className="hidden flex-1 items-center justify-end gap-2.5 sm:flex sm:gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg viewBox="0 0 24 24" fill="black" className="h-10 w-10 sm:h-9 sm:w-9">
                {s.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}