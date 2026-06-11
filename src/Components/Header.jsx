import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
];

const resumeUrl = `${import.meta.env.BASE_URL}Vincent_Resume_2026.pdf`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-10">

        <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent shrink-0">
          Vincent Nguyen
        </span>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden md:block bg-teal-400 hover:bg-teal-300 text-navy font-semibold text-sm px-4 py-2 rounded transition-colors duration-200"
          >
            Resume
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
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-teal-400 transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-teal-400 hover:bg-teal-300 text-navy font-semibold text-sm px-4 py-2 rounded transition-colors text-center"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
