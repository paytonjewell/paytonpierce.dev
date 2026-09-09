import Link from "next/link";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={`flex items-center justify-center w-16 aspect-square rounded-full bg-linear-to-br from-brand-start to-brand-end text-white font-black text-4xl [text-shadow:0_1px_3px_rgba(0,0,0,0.5)] ${className}`}
      aria-label="Payton Pierce logo"
      role="img"
    >
      p<sup className="text-sm font-extrabold">2</sup>
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="w-full flex justify-center items-center">
        <Logo />
      </div>
    </nav>
  );
};

export default Navbar;
