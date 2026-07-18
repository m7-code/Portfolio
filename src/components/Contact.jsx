import { motion } from "framer-motion";

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m2 7 8.4 6a3 3 0 0 0 3.2 0L22 7" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.6 6.32A8.86 8.86 0 0 0 12.02 3.5c-4.89 0-8.87 3.97-8.87 8.86 0 1.56.41 3.08 1.19 4.42L3.5 20.5l3.83-1.01a8.86 8.86 0 0 0 4.68 1.33h.01c4.89 0 8.87-3.97 8.87-8.86a8.8 8.8 0 0 0-2.6-6.27zm-5.58 13.6h-.01a7.35 7.35 0 0 1-3.76-1.03l-.27-.16-2.8.74.75-2.73-.18-.28a7.35 7.35 0 0 1-1.13-3.9c0-4.06 3.31-7.37 7.38-7.37a7.34 7.34 0 0 1 5.22 2.16 7.32 7.32 0 0 1 2.16 5.21c0 4.06-3.31 7.36-7.36 7.36zm4.04-5.52c-.22-.11-1.31-.65-1.51-.72-.2-.07-.35-.11-.5.11s-.58.72-.71.87-.26.16-.48.05a6.03 6.03 0 0 1-1.78-1.1 6.68 6.68 0 0 1-1.23-1.53c-.13-.22 0-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.07-.11-.5-1.2-.68-1.65-.18-.43-.36-.37-.5-.38h-.43c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.84 0 1.08.79 2.13.9 2.28.11.15 1.55 2.36 3.75 3.31.52.23.93.36 1.25.46.53.17 1 .14 1.38.09.42-.06 1.31-.53 1.5-1.05.18-.51.18-.95.13-1.05-.06-.09-.2-.15-.42-.26z" />
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
    label: "WhatsApp",
    value: "0318 4533738",
    href: "https://wa.me/923184533738",
    Icon: WhatsAppIcon,
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
              target={c.label === "LinkedIn" || c.label === "WhatsApp" ? "_blank" : undefined}
              rel={c.label === "LinkedIn" || c.label === "WhatsApp" ? "noopener noreferrer" : undefined}
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