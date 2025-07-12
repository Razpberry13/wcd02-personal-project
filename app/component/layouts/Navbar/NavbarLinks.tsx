'use client';

const navItems = ['home', 'about', 'skills', 'project', 'contact'];

const NavbarLinks = () => (
  <ul className="flex gap-6 text-sm sm:text-base">
    {navItems.map((item) => (
      <li key={item}>
        <a
          href={`#${item}`}
          className="capitalize hover:text-yellow-400 transition"
        >
          {item}
        </a>
      </li>
    ))}
  </ul>
);

export default NavbarLinks;
