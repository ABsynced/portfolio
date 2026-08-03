import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiSend } from 'react-icons/fi';
import { profile } from '../data/profile';
import SectionHeading from './SectionHeading';

// No backend to submit to on GitHub Pages (static hosting only), so this is
// a mailto: link instead of a live form that POSTs to an API.
export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="contact" />
      </motion.div>

      <p className="max-w-xl text-slate-400">
        Have a project in mind, an opportunity to discuss, or just want to say hi? My inbox is open.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8"
      >
        <a href={`mailto:${profile.email}`} className="btn-outline">
          <FiSend /> Send Me an Email
        </a>
      </motion.div>

      <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-400">
        <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-accent">
          <FiMail /> {profile.email}
        </a>
        {profile.whatsapp && (
          <a
            href={`https://wa.me/${profile.whatsapp.replace(/[^\d]/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-accent"
          >
            <FiPhone /> {profile.phone}
          </a>
        )}
      </div>
    </section>
  );
}
