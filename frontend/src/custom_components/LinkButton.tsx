import { ArrowRight } from "lucide-react";

interface LinkButtonProps {
  href: string;
  text: string;
  className?: string;
}

export const LinkButton = ({ href, text }: LinkButtonProps) => {
  return (
    <a
      href={href}
      className="inline-flex items-center group text-primary-foreground text-lg font-semibold"
    >
      <span className="px-6 py-4 bg-primary rounded-2xl group-hover:bg-primary/90 transition-all duration-300">
        {text}
      </span>
      <ArrowRight
        width={20}
        height={20}
        className="ml-[1px] bg-primary text-primary-foreground rounded-2xl w-[60px] h-[60px] p-[10px] flex items-center justify-center transition-colors group-hover:bg-primary/90"
      />
    </a>
  );
};
