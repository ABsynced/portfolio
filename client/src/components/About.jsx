import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import { profile, skills } from '../data/profile';
import SectionHeading from './SectionHeading';

// Flatten the categorized skills into one simple list, matching the
// reference site's plain "technologies I work with" grid.
const flatSkills = skills.flatMap((group) => group.items);

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="about me" />
      </motion.div>

      <div className="grid gap-10 md:grid-cols-[1fr_260px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="leading-relaxed text-slate-400">
            I am currently a Master's student in{' '}
            <span className="font-semibold text-accent">Data and Discourse Studies</span> at{' '}
            <span className="font-semibold text-accent">TU Darmstadt</span>, following a Bachelor's in
            English Studies and Linguistics. I work confidently with{' '}
            <span className="font-semibold text-accent">SQL</span>,{' '}
            <span className="font-semibold text-accent">Python</span>, and{' '}
            <span className="font-semibold text-accent">Power BI</span> for data cleaning, analysis, and
            dashboards, and I'm getting into the{' '}
            <span className="font-semibold text-accent">MERN stack</span> to build full applications
            around that data, not just analyze it.
          </p>

          <p className="mt-4 leading-relaxed text-slate-400">{profile.bio.split('\n\n')[2]}</p>

          <p className="mt-6 text-sm font-medium text-slate-300">
            Here are some technologies I've been working with:
          </p>
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {flatSkills.map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-slate-400">
                <FiChevronRight className="shrink-0 text-accent" /> {item}
              </span>
            ))}
          </div>

          {profile.quote && (
            <blockquote className="mt-8 border-l-2 border-accent/50 pl-4 text-sm italic text-slate-500">
              "{profile.quote}"
            </blockquote>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="order-first md:order-last"
        >
          <img
            src="/pic.jpg"
            alt="Achraf Benhammadi"
            className="w-full rounded-xl border border-navy-lightest object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
