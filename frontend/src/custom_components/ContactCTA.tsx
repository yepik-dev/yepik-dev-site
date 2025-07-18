import { LinkButton } from "./LinkButton";
import { SectionTitle } from "./section-title";

interface ContactCTAProps {}

export const ContactCTA = ({}: ContactCTAProps) => {
  return (
    <section className="text-center ">
      <SectionTitle title="TALK TO ME" />
      <article className="mt-16 mb-24">
        <h3 className="text-2xl font-semibold mx-8">
          Projects begin in the quiet moments.
        </h3>
        <p className="text-lg my-6 mx-8">
          Send a message, and let’s go from there.
        </p>
        <LinkButton href="/contact" text="CONTACT ME" />
      </article>
    </section>
  );
};
