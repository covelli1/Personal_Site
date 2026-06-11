import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { label: 'Home',       to: '/' },
  { label: 'About',      to: '/about' },
  { label: 'Skills',     to: '/skills' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects',   to: '/projects' },
];

const linkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors duration-200 ${
    isActive ? 'text-teal-400' : 'text-gray-300 hover:text-teal-400'
  }`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-10">

        <NavLink to="/">
          <img
            src="/personal-icon.png"
            alt="Vincent Nguyen"
            className="w-10 h-10 rounded-full object-cover shrink-0"
          />
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <NavLink key={link.label} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <a
            href="mailto:vincent.nguyen3325@gmail.com"
            className="hidden md:block bg-teal-400 hover:bg-teal-300 text-navy font-semibold text-sm px-4 py-2 rounded transition-colors duration-200"
          >
            Contact Me
          </a>
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-navy-light border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <NavLink
              key={link.label}
              to={link.to}
              className={linkClass}
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="mailto:vincent.nguyen3325@gmail.com"
            className="bg-teal-400 hover:bg-teal-300 text-navy font-semibold text-sm px-4 py-2 rounded transition-colors text-center"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
