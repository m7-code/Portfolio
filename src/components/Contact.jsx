import { motion } from "framer-motion";

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m2 7 8.4 6a3 3 0 0 0 3.2 0L22 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.29 1.257 12.06 12.06 0 0 0 6.06 6.06Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const contacts = [
  {
    label: "Email",
    value: "mughiraasad6@gmail.com",
    href: "mailto:mughiraasad6@gmail.com",
    Icon: MailIcon,
  },
  {
    label: "Phone",
    value: "0318 4533738",
    href: "tel:+923184533738",
    Icon: PhoneIcon,
  },
  {
    label: "LinkedIn",
    value: "muhammad-mughira-asad",
    href: "https://www.linkedin.com/in/muhammad-mughira-asad-85251a32a",
    Icon: LinkedinIcon,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="snap-start bg-[#0A0A0A] text-white"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "6vw",
        paddingRight: "6vw",
        paddingTop: "80px",
        paddingBottom: "80px",
        textAlign: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "700px" }}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          className="block text-white/40 text-xs tracking-[0.2em] uppercase mb-4"
        >
          Get in touch
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            lineHeight: 0.95,
            marginBottom: "48px",
          }}
        >
          Let's build
          <br />
          something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7DF9FF] to-[#B57BFF]">
            great
          </span>
          .
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.label === "LinkedIn" ? "_blank" : undefined}
              rel={c.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="border border-white/12 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#7DF9FF]/40 backdrop-blur-sm rounded-2xl transition-colors duration-300"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                padding: "20px 24px",
                textDecoration: "none",
                color: "white",
              }}
            >
              <span
                className="text-[#7DF9FF]"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, rgba(125,249,255,0.15), rgba(181,123,255,0.15))",
                  border: "1px solid rgba(125,249,255,0.2)",
                  flexShrink: 0,
                }}
              >
                <c.Icon />
              </span>
              <div style={{ textAlign: "left" }}>
                <p
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                  className="text-white/40 text-xs uppercase tracking-[0.15em]"
                >
                  {c.label}
                </p>
                <p
                  style={{ fontFamily: "'Space Grotesk', sans-serif", marginTop: "4px" }}
                  className="text-white text-base md:text-lg"
                >
                  {c.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.a
          href="mailto:mughiraasad6@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            display: "inline-flex",
            marginTop: "40px",
            padding: "16px 40px",
            fontSize: "16px",
            fontWeight: 700,
            color: "#0A0A0A",
            textDecoration: "none",
          }}
          className="rounded-full bg-gradient-to-r from-[#7DF9FF] to-[#B57BFF] shadow-[0_0_30px_rgba(125,249,255,0.25)]"
        >
          Say Hello
        </motion.a>
      </div>
    </section>
  );
}