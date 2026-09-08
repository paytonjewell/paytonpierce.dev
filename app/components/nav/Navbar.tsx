import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      alt="logo"
      src="/p2logo.png"
      width={1414}
      height={1209}
      className={`w-20 h-auto ${className}`}
    />
  )
}

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="w-full flex justify-center items-center">
<Logo />
      </div>
    </nav>
  )
}

export default Navbar