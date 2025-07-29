import Image from "next/image";

import { ResponsiveWrapper } from "@/custom_components/ResponsiveWrapper";
import { SectionTitle } from "@/custom_components/section-title";
import { ContactCTA } from "@/custom_components/ContactCTA";
import { SkillList } from "@/custom_components/SkillList";
import { SkillGroup } from "@/types/skills";
import { publicApiRequest } from "@/data/services/apiRequest";
import qs from "qs";

const AboutAndSkillsPage = async () => {
  const query = qs.stringify({
    populate: {
      coverImage: true,
      workflow: {
        populate: "*",
      },
      skills: {
        populate: "*",
      },
    },
  });

  const aboutPageData = await publicApiRequest({
    path: `about-page?${query}`,
    method: "GET",
  });

  const { title, description, workflow, skills } = aboutPageData?.data;

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
            <div className="text-3xl font-accent md:text-5xl w-full sm:max-w-2/3 leading-10 md:leading-14 font-normal ">
              <h1 className="pb-12">{title}</h1>
              <p className="text-secondary/70">{description}</p>
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
              <h3 className="text-4xl font-medium font-accent">
                {workflow.title}
              </h3>
              <p className="text-lg py-4">{workflow.description}</p>
            </div>
            <ul className="grid md:grid-cols-1 lg:grid-cols-2  gap-4">
              {workflow.step.map((st) => (
                <li
                  key={st.title}
                  className="border-1 border-primary p-4 text-primary leading-tight"
                >
                  <h4 className="font-semibold text-lg font-accent">
                    {`Step ${st.stepNumber}`}
                  </h4>
                  <p className="font-medium text-lg mt-2 mb-4">{st.title}</p>
                  <p className="font-medium text-lg text-muted-foreground/80">
                    {st.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="">
          <SectionTitle title="SKILLS" className="mb-24" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skills.map((skill: SkillGroup) => (
              <SkillList
                key={skill.category}
                group={skill}
                className="xl:grid-cols-2"
              />
            ))}
          </div>
        </article>
        <ContactCTA />
      </ResponsiveWrapper>
    </section>
  );
};

export default AboutAndSkillsPage;
