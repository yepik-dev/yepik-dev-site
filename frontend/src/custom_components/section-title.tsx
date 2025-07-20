import { cn } from "@/lib/utils";

interface sectionTitleProps {
  title: string;
  className?: string;
}

export const SectionTitle = ({ title, className }: sectionTitleProps) => {
  return (
    <div
      className={cn("border-b-2 border-secondary w-full flex px-16", className)}
    >
      <div className="w-2 h-2 bg-primary mr-2"></div>
      <h2 className="text-2xl font-bold font-accent">{title}</h2>
    </div>
  );
};
