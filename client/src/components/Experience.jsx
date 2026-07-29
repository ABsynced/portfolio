import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import { experience } from '../data/experience';
import SectionHeading from './SectionHeading';

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = experience[active];

  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="experience" />
      </motion.div>

      <div className="grid gap-2 sm:grid-cols-[160px_1fr] sm:gap-8">
        {/* Tab list */}
        <div className="flex gap-1 overflow-x-auto sm:flex-col sm:overflow-visible">
          {experience.map((item, i) => (
            <button
              key={item.company}
              onClick={() => setActive(i)}
              className={`shrink-0 border-l-2 px-4 py-2.5 text-left text-sm font-medium transition-colors sm:w-full ${
                active === i
                  ? 'border-accent text-accent'
                  : 'border-navy-lightest text-slate-400 hover:border-slate-500 hover:bg-navy-light/30'
              }`}
            >
              {item.company}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <h3 className="font-display text-lg font-semibold text-offwhite">
              {job.title} <span className="text-accent">@ {job.company}</span>
            </h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
              {job.range} · {job.location}
            </p>
            <ul className="mt-5 space-y-3">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-slate-400">
                  <FiChevronRight className="mt-0.5 shrink-0 text-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
