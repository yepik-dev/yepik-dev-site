import type { SkillGroup, SkillItem } from "@/types/skills";
import { cn } from "@/lib/utils";

interface SkillListProps {
  group: SkillGroup;
  className?: string;
}
export const SkillList = ({ group, className }: SkillListProps) => {
  return (
    <div>
      {group.category && (
        <h3 className="text-xl text-center md:text-left font-accent font-semibold mb-4">
          {group.category}
        </h3>
      )}
      <ul
        className={cn(
          "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4",
          className
        )}
      >
        {group.skill.map((skill: SkillItem) => (
          <li
            key={skill.title}
            className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-center text-sm font-medium shadow-sm transition hover:scale-105 hover:border-black hover:shadow-md"
          >
            {skill.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
