import TornSection from "./TornSection";
import { tornMaskStyle } from "../tornMask";

const markerFont = { fontFamily: "'Permanent Marker', cursive" };

const contacts = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-mughira-asad-85251a32a/",
    external: true,
    icon: (
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    ),
  },
  {
    label: "Email",
    href: "mailto:mughiraasad6@gmail.com",
    external: false,
    icon: (
      <>
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923184533738",
    external: true,
    icon: (
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.15-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347ZM12.05 0C5.495 0 0 5.495 0 12.05c0 2.13.555 4.135 1.531 5.868L0 24l6.256-1.647A11.986 11.986 0 0 0 12.05 24C18.605 24 24 18.605 24 12.05 24 5.495 18.605 0 12.05 0Zm0 21.976a9.816 9.816 0 0 1-5.34-1.578l-.383-.227-3.972 1.043 1.063-3.869-.25-.394A9.775 9.775 0 0 1 2.126 12.05C2.126 6.65 6.65 2.126 12.05 2.126S21.976 6.65 21.976 12.05 17.45 21.976 12.05 21.976Z" />
    ),
  },
];

function ContactButton({ label, href, external, icon }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="relative block h-14 w-full max-w-xs sm:h-16"
    >
      <span className="absolute inset-0 bg-black" style={tornMaskStyle} />
      <span className="relative z-10 flex h-full items-center justify-center gap-3 px-6 text-sm font-semibold uppercase tracking-wide text-white sm:text-base">
        <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5 shrink-0 sm:h-6 sm:w-6">
          {icon}
        </svg>
        {label}
      </span>
    </a>
  );
}

export default function Contact() {
  return (
    <TornSection id="contact" title="Contact">
      <p className="mb-8 text-center text-sm leading-relaxed sm:text-base" style={markerFont}>
        Got a project in mind, or just want to say hi? Reach out — I usually
        reply fast.
      </p>

      <div className="flex flex-col items-center gap-5">
        {contacts.map((c) => (
          <ContactButton key={c.label} {...c} />
        ))}
      </div>
    </TornSection>
  );
}