import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data';

function useActiveSection(ids) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // A section counts as "active" when it crosses the middle band of the screen
      { rootMargin: '-40% 0px -55% 0px' }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const ids = navLinks.map((l) => l.id);

function Navbar() {
  const active = useActiveSection(ids);

  // Close the mobile dropdown after a link is tapped
  const closeMenu = () => document.activeElement?.blur();

  return (
    <header className="navbar fixed top-0 z-50 border-b border-base-300 bg-base-100/85 px-4 backdrop-blur lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Open menu">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h10" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-10 mt-3 w-52 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg"
          >
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={closeMenu}
                  className={active === id ? 'menu-active' : ''}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a href="#home" className="btn btn-ghost font-display text-xl font-bold tracking-tight">
          {profile.name}
        </a>
      </div>

      <nav className="navbar-center hidden lg:flex" aria-label="Sections">
        <ul className="menu menu-horizontal gap-1 px-1">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'menu-active' : ''}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="navbar-end" />
    </header>
  );
}

export default Navbar;