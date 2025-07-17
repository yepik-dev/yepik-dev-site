import { ContactCTA } from "@/custom_components/ContactCTA";
//import { FeaturedProjects } from "@/custom_components/FeaturedProjects";
import { Hero } from "@/custom_components/Hero";
import { Introduction } from "@/custom_components/Introduction";
import { SkillsPreview } from "@/custom_components/SkillsPreview";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <Introduction />
      {/* <FeaturedProjects /> */}
      <SkillsPreview />
      <ContactCTA />
    </section>
  );
}
