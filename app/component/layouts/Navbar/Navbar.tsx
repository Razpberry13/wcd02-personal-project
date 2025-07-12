'use client';

import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarMobileToggle from './NavbarMobileToggle';

const Navbar = () => (
  <header className="fixed top-0 left-0 w-full bg-[#2e2e2e] text-white z-50 shadow-md">
    <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-8 py-4">
      <NavbarLogo />
      <div className="hidden sm:block">
        <NavbarLinks />
      </div>
      <div className="sm:hidden">
        <NavbarMobileToggle />
      </div>
    </nav>
  </header>
);

export default Navbar;
