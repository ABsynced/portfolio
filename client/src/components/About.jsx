import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiDownload, FiBookOpen } from 'react-icons/fi';
import { profile } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-fuchsia-400">About Me</p>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          The person behind the code
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-8 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass glass-hover md:col-span-3 p-8"
        >
          <p className="whitespace-pre-line leading-relaxed text-slate-300">{profile.bio}</p>

          {profile.quote && (
            <blockquote className="mt-6 border-l-2 border-fuchsia-400/50 pl-4 text-sm italic text-slate-400">
              "{profile.quote}"
            </blockquote>
          )}

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            {profile.education && (
              <span className="flex items-center gap-2">
                <FiBookOpen /> {profile.education}
              </span>
            )}
            <span className="flex items-center gap-2">
              <FiMapPin /> {profile.location}
            </span>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-white">
              <FiMail /> {profile.email}
            </a>
            {profile.phone && (
              <a
                href={`https://wa.me/${profile.whatsapp.replace(/[^\d]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <FiPhone /> {profile.phone}
              </a>
            )}
          </div>

          {/* <a
            href={profile.resumeUrl}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
          >
            <FiDownload /> Check My Resume
          </a> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass glass-hover md:col-span-2 flex flex-col justify-center gap-6 p-8"
        >
          {[
            { label: 'Projects Completed', value: '4+' },
            { label: 'Tools & Languages', value: '10+' },
            { label: 'Looking For', value: '6-mo Internship' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display gradient-text text-4xl font-bold">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
