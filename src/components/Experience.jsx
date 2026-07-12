import { motion } from "framer-motion";

const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "FastAPI",
  "AI / ML",
];

export default function Experience() {
  return (
    <section
      id="experience"
     className="snap-start min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-6 md:px-12 xl:px-24 py-20"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2 items-center gap-24 lg:gap-32">

        {/* LEFT SIDE */}

        <motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.8 }}
  className="max-w-xl"
>
  <span
    className="inline-flex items-center rounded-full border border-[#7DF9FF]/20 bg-[#7DF9FF]/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#7DF9FF]"
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
  >
    Currently Working
  </span>

  <h2
    style={{ fontFamily: "'Syne', sans-serif" }}
    className="mt-8 text-5xl lg:text-7xl font-extrabold leading-[0.95]"
  >
    Full Stack
    <br />
    <span className="text-[#7DF9FF]">AI Engineer</span>
  </h2>

  <div className="mt-10">
    <h3 className="text-3xl font-bold">SoftSuit Tech</h3>

    <p
      className="mt-2 text-white/45 text-lg"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      Multan, Pakistan
    </p>
  </div>

  <p
    className="mt-10 text-white/65 leading-9 text-lg"
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
  >
    Working as a MERN and PERN Stack Developer, building scalable
    full-stack web applications while integrating AI-powered
    features, machine learning, and intelligent automation into
    modern software products.
  </p>
</motion.div>

       

       {/* RIGHT IMAGE */}

<motion.div
  initial={{ opacity: 0, x: 80, scale: 0.95 }}
  whileInView={{ opacity: 1, x: 0, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center items-center"
>
  <img
    src="/epage.png"
    alt="Experience"
    className="w-full max-w-[450px] h-auto object-contain"
    draggable={false}
  />
</motion.div>

      </div>
    </section>
  );
}