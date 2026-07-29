import { motion } from 'framer-motion';
import { skills } from '../data/profile';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="skills" />
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card card-hover p-5"
          >
            <h3 className="font-display mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-slate-400">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
