import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-navy-lightest/40 py-8 text-center text-sm text-slate-500">
      <p>
  © {new Date().getFullYear()} {profile.name}. Built By Achraf with{' '}
  <span className="text-accent">❤️</span>
      </p>
    </footer>
  );
}
