import { LinkButton } from "./LinkButton";
import { SectionTitle } from "./section-title";

interface IntroductionProps {
  intro: {
    paragraphPart_1: string;
    paragraphPart_2: string;
  };
}

export const Introduction = ({ intro }: IntroductionProps) => {
  return (
    <>
      <section className="my-24">
        <SectionTitle title="INTRODUCTION" />
        <article className="my-16 text-2xl font-normal [text-indent:1.5em] leading-relaxed">
          <p className="text-primary pr-2 ">{intro.paragraphPart_1}</p>
          <p className=" text-muted">{intro.paragraphPart_2}</p>
        </article>
        <LinkButton href="/about" text="EXPLORE MORE" />
      </section>
    </>
  );
};
