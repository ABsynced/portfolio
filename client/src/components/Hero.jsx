import { motion } from 'framer-motion';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import { profile } from '../data/profile';
import AsciiPortrait from './AsciiPortrait';

// Wraps known tech keywords in accent-colored spans, code-syntax-highlight
// style — a small visual cue that reinforces "developer" alongside the
// blinking cursor on the headline.
const KEYWORDS = ['SQL', 'Python', 'Power BI'];
function highlightKeywords(text) {
  const pattern = new RegExp(`(${KEYWORDS.join('|')})`, 'g');
  return text.split(pattern).map((part, i) =>
    KEYWORDS.includes(part) ? (
      <span key={i} className="text-accent font-medium">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="section flex min-h-screen flex-col items-center justify-center gap-6 pt-28 text-center md:pt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full sm:h-48 sm:w-48"
      >
        <AsciiPortrait maxSize={192} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-400"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping-fast rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
        </span>
        Available for an Internship / Werkstudent
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-offwhite sm:text-6xl md:text-7xl"
      >
        Hi, I'm <span className="text-gradient-brand">{profile.name}</span>
        <br />
        {profile.role}
        <span className="cursor-blink ml-0.5 font-normal text-accent">|</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-xl text-lg text-slate-400"
      >
        Based in {profile.location}.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-xl rounded-md border border-navy-lightest/60 bg-navy-light/30 px-4 py-3 text-left font-mono text-sm leading-relaxed text-slate-400"
      >
        <span className="text-slate-600">// </span>
        {highlightKeywords(profile.tagline)}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-2 flex flex-wrap items-center justify-center gap-4"
      >
        <a href="#projects" className="btn-outline">
          View My Work <FiArrowRight />
        </a>
        <a href="#contact" className="btn-outline">
          <FiMail /> Get in touch
        </a>
      </motion.div>
    </section>
  );
}
