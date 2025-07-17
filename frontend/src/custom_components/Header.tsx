interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className="w-full z-50 h-15 flex justify-between items-center px-16 text-red-500">
      <p>logo</p>
      <nav className="flex gap-4">
        <a href="/" className="">
          Home
        </a>
        <a href="/saa" className="">
          About
        </a>
        <a href="skills" className="">
          Skills
        </a>
        <a href="#contact" className="">
          Contact
        </a>
      </nav>
    </header>
  );
};
