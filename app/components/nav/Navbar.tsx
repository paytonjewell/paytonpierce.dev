const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`flex items-center justify-center w-16 aspect-square rounded-full bg-linear-to-br from-brand-start to-brand-end text-base-300 font-black text-4xl ${className}`}
      aria-label="Payton Pierce logo"
      role="img"
    >
      p<sup className="text-sm font-extrabold">2</sup>
    </div>
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
