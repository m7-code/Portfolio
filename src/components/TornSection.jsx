import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { tornMaskStyle } from "../tornMask";

const colorOptions = [
  { label: "Black", value: "#000000" },
  { label: "Red", value: "#b91c1c" },
  { label: "Navy", value: "#1e3a5f" }, // my pick — reads well on the cream paper bg
];

/**
 * Full-viewport torn-paper page section with a built-in back button
 * and a text-color switcher (3 torn-paper swatches, top-right).
 *
 * Usage:
 *   <TornSection id="about" title="About">
 *     ...content goes here...
 *   </TornSection>
 *
 * Reuse this SAME component for every section (About, Services,
 * Projects, Skills, Contact) so they all stay visually identical AND
 * all get the same back button + color switcher.
 *
 * IMPORTANT: for the color switcher to actually work, content passed
 * as children should NOT hardcode its own text color (no text-black /
 * text-neutral-800 etc). Let it inherit color from this wrapper.
 */
export default function TornSection({ id, title, children }) {
  const navigate = useNavigate();
  const [textColor, setTextColor] = useState(colorOptions[0].value);

  return (
    <section
      id={id}
      className="relative flex min-h-screen w-full items-start justify-center bg-black px-4 pt-24 pb-10 md:pt-28"
    >
      {/* torn-paper background — fills the full screen */}
      <div className="absolute inset-0 bg-[#f5f3ee]" style={tornMaskStyle} />

      {/* Back button — top-left, small torn-paper pill */}
      <motion.button
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-8 top-10 z-20 flex items-center gap-1.5 sm:left-32 sm:top-32 md:top-10"
        aria-label="Go back"
      >
        <span className="absolute inset-0 bg-black" style={tornMaskStyle} />
        <span className="relative z-10 flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="h-4 w-4">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </span>
      </motion.button>

      {/* Text-color switcher — top-right, 3 small torn-paper swatches */}
      <div className="absolute right-5 top-10 z-20 flex items-center gap-2 sm:right-16 md:top-10">
        {colorOptions.map((c) => (
          <button
            key={c.value}
            onClick={() => setTextColor(c.value)}
            aria-label={`Set text color to ${c.label}`}
            className="relative h-8 w-8 shrink-0"
          >
            <span
              className="absolute inset-0"
              style={{ ...tornMaskStyle, backgroundColor: c.value }}
            />
            {textColor === c.value && (
              <span className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="h-3.5 w-3.5">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}
          </button>
        ))}
      </div>

      {/* content sits above the mask, stays crisp (not masked).
          color here is inherited by all children unless a child
          explicitly overrides it. */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ color: textColor }}
        className="relative z-10 w-full max-w-3xl px-6 py-4 sm:px-10 sm:py-6 md:max-w-4xl lg:max-w-5xl"
      >
        {title && (
          <h2
            className="mb-3 text-center text-3xl uppercase leading-tight sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            {title}
          </h2>
        )}
        {children}
      </motion.div>
    </section>
  );
}