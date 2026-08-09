import TornSection from "./TornSection";
import { tornMaskStyle } from "../tornMask";

const markerFont = { fontFamily: "'Permanent Marker', cursive" };

const categories = [
  {
    title: "Languages",
    icons: ["html", "css", "js", "python", "php", "cpp", "c", "cs", "java", "react", "threejs"],
  },
  {
    title: "AI / ML & Frameworks",
    icons: ["pytorch", "sklearn", "fastapi", "flask", "laravel", "nodejs"],
  },
  {
    title: "Databases & Cloud",
    icons: ["mysql", "postgresql", "mongodb", "sqlite", "aws", "netlify", "vercel"],
  },
  {
    title: "Tools & Others",
    icons: ["git", "github", "vscode", "docker", "postman", "blender", "npm", "linux", "wordpress"],
  },
];

// small torn-paper badge, black chip + white (dark-theme) skill icon —
// keeps the whole skills grid monochrome, matching the site's palette
// instead of skillicons' default rainbow of colors.
function SkillBadge({ slug }) {
  return (
    <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
      <div className="absolute inset-0 bg-black" style={tornMaskStyle} />
      <img
        src={`https://skillicons.dev/icons?i=${slug}&theme=dark`}
        alt={slug}
        className="absolute inset-0 m-auto h-8 w-8 sm:h-10 sm:w-10"
      />
    </div>
  );
}

export default function Skills() {
  return (
    <TornSection id="skills" title="Skills">
      <div className="space-y-8 sm:space-y-10">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3
              className="mb-3 text-lg font-bold uppercase tracking-wide sm:mb-4 sm:text-xl"
              style={markerFont}
            >
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {cat.icons.map((slug) => (
                <SkillBadge key={slug} slug={slug} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </TornSection>
  );
}