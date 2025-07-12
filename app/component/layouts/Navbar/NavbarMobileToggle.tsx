'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const NavbarMobileToggle = () => {
  const [open, setOpen] = useState(false);
  const navItems = ['home', 'about', 'skills', 'project', 'contact'];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="text-xl focus:outline-none"
        aria-label="Toggle navigation"
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-[#2e2e2e] px-4 py-4 sm:hidden">
          <ul className="flex flex-col gap-4 text-sm">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="capitalize hover:text-yellow-400 transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavbarMobileToggle;
