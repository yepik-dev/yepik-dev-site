import { ContactCTA } from "@/custom_components/ContactCTA";
//import { FeaturedProjects } from "@/custom_components/FeaturedProjects";
import { Hero } from "@/custom_components/Hero";
import { Introduction } from "@/custom_components/Introduction";
import { ResponsiveWrapper } from "@/custom_components/ResponsiveWrapper";
import { SkillsPreview } from "@/custom_components/SkillsPreview";
import { publicApiRequest } from "@/data/services/apiRequest";
import qs from "qs";

export default async function Home() {
  const query = qs.stringify({
    populate: {
      coverImage: true,
      intro: {
        populate: "*",
      },
    },
  });

  const homePageData = await publicApiRequest({
    path: `home-page?${query}`,
    method: "GET",
    revalidate: 24 * 60 * 60,
  });

  const { intro } = homePageData?.data;
  console.log(homePageData);

  return (
    <section className="">
      <Hero />
      <ResponsiveWrapper>
        <Introduction intro={intro} />
        {/* <FeaturedProjects /> */}
        <SkillsPreview />
        <ContactCTA />
      </ResponsiveWrapper>
    </section>
  );
}
