import Image from "next/image";
export const Hero = ({}) => {
  return (
    <section className="relative w-full h-[972px] text-primary-foreground mt-[-60px]">
      <Image
        src="/hero-image.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="object-cover  w-full h-full"
      />
      <div className="absolute inset-0 bg-black/40  h-[972px]" />
      <div className="relative z-10 flex flex-col h-[912px] px-16">
        <article className="mt-40 flex items-start justify-between">
          <div>
            <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
            <p className="mt-4 text-lg opacity-50">
              Discover my projects, skills, and experiences.
            </p>
          </div>
          <span className="border-[1px] rounded-[32px] px-2 py-1">
            Since 2025
          </span>
        </article>
        <div className="flex-1 flex flex-col  items-center justify-center">
          <a className="py-48">CV download</a>
          <div className="flex justify-between w-full">
            <span>Studio</span> <span>Olawa, Poland</span>
          </div>
        </div>
      </div>
    </section>
  );
};
