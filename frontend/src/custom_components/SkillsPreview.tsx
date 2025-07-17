import { LinkButton } from "./LinkButton";
import { SectionTitle } from "./section-title";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Zod",
  "Strapi",
  "Docker",
  "Node.js",
];

export const SkillsPreview = () => {
  return (
    <section className="my-24 mx-16 ">
      <SectionTitle title="SKILLS" />
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-16">
        {skills.map((skill) => (
          <li
            key={skill}
            className="flex items-center justify-center bg-primary/10 rounded-lg py-4 text-lg font-semibold"
          >
            {skill}
          </li>
        ))}
      </ul>
      <LinkButton href="/skills" text="EXPLORE MORE" />
    </section>
  );
};
