interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className="w-full z-50 h-15 flex justify-center sm:justify-between items-center px-16 text-red-500">
      <p className="hidden sm:block">logo</p>
      <nav className="flex gap-4">
        <a href="/" className="">
          Home
        </a>
        <a href="/about" className="">
          About
        </a>
        <a href="/contact" className="">
          Contact
        </a>
      </nav>
    </header>
  );
};
