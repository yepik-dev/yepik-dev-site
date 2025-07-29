import { publicApiRequest } from "@/data/services/apiRequest";
import { LinkButton } from "./LinkButton";
import { SectionTitle } from "./section-title";
import { SkillList } from "./SkillList";
import qs from "qs";
import { SkillGroup, SkillItem } from "@/types/skills";

export const SkillsPreview = async () => {
  const query = qs.stringify(
    {
      populate: {
        skill: {
          filters: {
            isCore: {
              $eq: true,
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const skillsAll = await publicApiRequest({
    path: `skills?${query}`,
    method: "GET",
  });

  const coreSkills: SkillGroup = {
    documentId: "coreSkillsForHomePage",
    category: "",
    skill: skillsAll.data.flatMap(({ skill }: { skill: SkillItem[] }) => skill),
  };

  <SkillList group={coreSkills} />;

  return (
    <section className="my-24">
      <SectionTitle title="SKILLS" />
      <div className="my-16">
        <SkillList group={coreSkills} />
      </div>

      <LinkButton href="/skills" text="EXPLORE MORE" />
    </section>
  );
};
