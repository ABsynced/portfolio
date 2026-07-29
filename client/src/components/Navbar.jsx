import { useEffect, useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';
import { profile } from '../data/profile';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#art', label: 'Art' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'border-b border-navy-lightest/40 bg-navy/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#home" className="font-display text-base font-bold tracking-tight text-offwhite">
          {profile.name} <span className="text-accent">{'</>'}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`mailto:${profile.email}`}
            className="text-slate-300 transition-colors hover:text-accent"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
        </div>

        <button
          className="text-slate-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="card mx-4 mb-4 flex flex-col gap-1 p-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-navy-lightest/40 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-5 border-t border-navy-lightest/60 px-3 pt-3">
            <a href={`mailto:${profile.email}`} className="text-slate-300 hover:text-accent" aria-label="Email">
              <FiMail size={18} />
            </a>
            <a href={profile.social.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-accent" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-accent" aria-label="LinkedIn">
              <FiLinkedin size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
