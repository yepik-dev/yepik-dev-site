import { cn } from "@/lib/utils";

interface ResponsiveWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

export const ResponsiveWrapper = ({
  children,
  className,
}: ResponsiveWrapperProps) => {
  return (
    <div className={cn(`px-4 sm:px-8 md:px-16`, className)}>{children}</div>
  );
};
