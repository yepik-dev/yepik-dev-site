interface sectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: sectionTitleProps) => {
  return (
    <div className="border-b-2 border-secondary flex px-16">
      <div className="w-2 h-2 bg-primary mr-2"></div>
      <h2 className="text-2xl font-bold ">{title}</h2>
    </div>
  );
};
