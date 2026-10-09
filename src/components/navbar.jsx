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

function ThemeToggle() {
  return (
    <label className="swap swap-rotate btn btn-ghost btn-circle" aria-label="Toggle dark mode">
      <input type="checkbox" className="theme-controller" value="nightcamp" />
      {/* sun (shown in light mode) */}
      <svg className="swap-off h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0-5a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 17a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM4.22 4.22a1 1 0 011.42 0l1.41 1.41a1 1 0 11-1.41 1.42L4.22 5.64a1 1 0 010-1.42zm12.73 12.73a1 1 0 011.42 0l1.41 1.41a1 1 0 11-1.41 1.42l-1.42-1.42a1 1 0 010-1.41zM2 12a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1-1zm17 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM4.22 19.78a1 1 0 010-1.42l1.41-1.41a1 1 0 111.42 1.41l-1.41 1.42a1 1 0 01-1.42 0zM16.95 7.05a1 1 0 010-1.41l1.42-1.42a1 1 0 111.41 1.42l-1.41 1.41a1 1 0 01-1.42 0z" />
      </svg>
      {/* moon (shown in dark mode) */}
      <svg className="swap-on h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
      </svg>
    </label>
  );
}

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

      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Navbar;
