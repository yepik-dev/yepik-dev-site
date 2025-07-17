import { LinkButton } from "./LinkButton";
import { SectionTitle } from "./section-title";

interface IntroductionProps {}

export const Introduction = ({}: IntroductionProps) => {
  return (
    <>
      <section className="my-24 mx-16">
        <SectionTitle title="INTRODUCTION" />
        <article className="my-16 text-2xl font-normal [text-indent:1.5em] leading-relaxed">
          <p className="text-primary pr-2 ">
            I'm a frontend developer passionate about building fast, clean, and
            user-friendly interfaces. I work with modern technologies like
            TypeScript, React, Next.js, and Tailwind CSS.
          </p>
          <p className=" text-muted">
            Lately, I've been exploring full-stack workflows — from design to
            deployment. I enjoy building pet projects that involve auth, API
            handling, validation, data protection, and smooth UX.
          </p>
        </article>
        <LinkButton href="/about" text="EXPLORE MORE" />
      </section>
    </>
  );
};
