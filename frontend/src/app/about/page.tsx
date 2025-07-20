import Image from "next/image";

import { ResponsiveWrapper } from "@/custom_components/ResponsiveWrapper";
import { SectionTitle } from "@/custom_components/section-title";
import { ContactCTA } from "@/custom_components/ContactCTA";

interface aboutAndSkillsProps {}

const AboutAndSkillsPage = ({}: aboutAndSkillsProps) => {
  const skills = {
    core: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Shadcn/ui"],
    auxiliary: ["Strapi", "Docker", "PostgreSQL", "Git", "Zod"],
    soft: ["Communication", "Problem-Solving", "Teamwork", "Adaptability"],
  };

  function SkillCategory({ title, items }: { title: string; items: string[] }) {
    return (
      <div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <ul className="grid grid-cols-2  gap-4">
          {items.map((skill) => (
            <li
              key={skill}
              className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-center text-sm font-medium shadow-sm transition hover:scale-105 hover:border-black hover:shadow-md"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <section>
      <div className="relative w-full h-[972px] text-primary-foreground mt-[-60px]">
        <Image
          src="/hero-about.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="object-cover  w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40  h-[972px]" />
        <div className="relative z-10 flex flex-col h-[912px] px-16">
          <div className="flex-1 flex flex-col  items-start justify-end">
            <div className="text-3xl  md:text-5xl max-w-2/3 leading-10 md:leading-14 font-medium ">
              <h1 className="pb-12">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit, voluptatem.
              </h1>
              <p className="text-secondary/70">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur illo consequuntur minus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveWrapper className="flex flex-col gap-24 my-24">
        <article className="">
          <SectionTitle title="ABOUT ME" className="mb-24" />

          <p className="text-lg  mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            excepturi dolorum, impedit quaerat quo illum maxime. Temporibus non
            asperiores inventore? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quae excepturi dolorum, impedit quaerat quo illum
            maxime. Temporibus non asperiores inventore?
          </p>
          <p className="text-lg  mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A eveniet
            labore et qui incidunt repellat beatae nostrum soluta, quo vel
            repudiandae voluptatem ipsam dolorum sit, fuga sequi, molestiae
            facilis asperiores ex sint totam exercitationem quos maiores
            necessitatibus? Soluta, excepturi esse.
          </p>
          <p className="text-lg  mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            odit, reprehenderit rerum aliquam eum, dolorem doloribus minima
            ducimus exercitationem fugit harum expedita corrupti magnam tenetur
            facilis pariatur veniam voluptatem obcaecati? Itaque illum dolor
            architecto! In temporibus accusantium praesentium corporis facere.
          </p>
        </article>
        <article className="">
          <SectionTitle title="HOW I WORK" className="mb-24" />
          <div className="grid md:grid-cols-[30%_1fr] gap-4">
            <div className="flex flex-col justify-between">
              <h3 className="text-4xl font-medium">Inside my workflow</h3>
              <p className="text-lg py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit nihil nobis placeat totam, doloremque deleniti.
              </p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2  gap-4">
              <div className="border-1 border-primary p-4 text-primary leading-tight">
                <h4 className="font-semibold text-lg">Step N</h4>
                <p className="font-medium text-lg mt-2 mb-4">step title</p>
                <p className="font-medium text-lg text-muted-foreground/80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore quis alias vitae rem necessitatibus blanditiis illo
                  adipisci deserunt quas incidunt!
                </p>
              </div>
              <div className="border-1 border-primary p-4 text-primary leading-tight">
                <h4 className="font-semibold text-lg">Step N</h4>
                <p className="font-medium text-lg mt-2 mb-4">step title</p>
                <p className="font-medium text-lg text-muted-foreground/80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore quis alias vitae rem necessitatibus blanditiis illo
                  adipisci deserunt quas incidunt!
                </p>
              </div>
              <div className="border-1 border-primary p-4 text-primary leading-tight">
                <h4 className="font-semibold text-lg">Step N</h4>
                <p className="font-medium text-lg mt-2 mb-4">step title</p>
                <p className="font-medium text-lg text-muted-foreground/80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore quis alias vitae rem necessitatibus blanditiis illo
                  adipisci deserunt quas incidunt!
                </p>
              </div>
              <div className="border-1 border-primary p-4 text-primary leading-tight">
                <h4 className="font-semibold text-lg">Step N</h4>
                <p className="font-medium text-lg mt-2 mb-4">step title</p>
                <p className="font-medium text-lg text-muted-foreground/80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore quis alias vitae rem necessitatibus blanditiis illo
                  adipisci deserunt quas incidunt!
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className="">
          <SectionTitle title="SKILLS" className="mb-24" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <SkillCategory title="Core Skills" items={skills.core} />
            <SkillCategory title="Auxiliary Tools" items={skills.auxiliary} />
            <SkillCategory title="Soft Skills" items={skills.soft} />
          </div>
        </article>
        <ContactCTA />
      </ResponsiveWrapper>
    </section>
  );
};

export default AboutAndSkillsPage;
