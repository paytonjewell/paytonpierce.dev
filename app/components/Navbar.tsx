import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

const Logo = ({ className }: { className?: string }) => {
  return (
    <img alt="logo" src="/p2logo.png" className={`w-20 ${className}`} />
  )
}

const HamburgerDropdownIcon = () => {
  return (
    <summary className="btn btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    </summary>
  )
}

const navLinks = [
  {
    label: 'about',
    href: '/about',
    mobile: true
  },
  {
    label: 'portfolio',
    href: '/portfolio',
    mobile: true
  },
  {
    label: <Logo />,
    href: '/',
    mobile: false
  },
  {
    label: 'blog',
    href: '/blog',
    mobile: true
  }
]

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 bg-base-200 md:bg-base-100">
      <div className="w-full flex md:justify-center justify-between md:items-center md:gap-2">
        {/* desktop */}
        <ul className="menu menu-horizontal items-center gap-10 hidden md:flex">
          {navLinks.map((link, index) => (
            <li key={index}><Link href={link.href}>{link.label}</Link></li>
          ))}
          <li>
            <DarkModeToggle />
          </li>
        </ul>
        {/* mobile */}
        <details className="dropdown dropdown-start md:hidden">
          <HamburgerDropdownIcon />
          <ul tabIndex={0} className="dropdown-content menu z-[1] bg-base-200 p-6 rounded-box shadow w-56 gap-2">
            {navLinks.filter(link => link.mobile).map((link, index) => (
              <li key={index}><Link href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </details>
        <Link href="/"><Logo className="md:hidden" /></Link>
        <div className="md:hidden">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar