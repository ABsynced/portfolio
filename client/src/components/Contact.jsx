import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiPhone } from 'react-icons/fi';
import { profile } from '../data/profile';
import { sendContactMessage } from '../api/client';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendContactMessage(form);
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

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

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        onSubmit={handleSubmit}
        className="mt-8 grid max-w-xl gap-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="rounded-md border border-navy-lightest bg-navy-light/40 px-4 py-3 text-sm text-offwhite placeholder:text-slate-500 focus:border-accent focus:outline-none"
          />
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="rounded-md border border-navy-lightest bg-navy-light/40 px-4 py-3 text-sm text-offwhite placeholder:text-slate-500 focus:border-accent focus:outline-none"
          />
        </div>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="rounded-md border border-navy-lightest bg-navy-light/40 px-4 py-3 text-sm text-offwhite placeholder:text-slate-500 focus:border-accent focus:outline-none"
        />
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message"
          rows={5}
          className="resize-none rounded-md border border-navy-lightest bg-navy-light/40 px-4 py-3 text-sm text-offwhite placeholder:text-slate-500 focus:border-accent focus:outline-none"
        />

        <button type="submit" disabled={status === 'sending'} className="btn-outline mt-2 w-fit disabled:opacity-60">
          <FiSend /> {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>

        {status === 'sent' && <p className="text-sm text-accent">Message sent — thanks for reaching out!</p>}
        {status === 'error' && (
          <p className="text-sm text-red-400">
            Couldn't send right now — email me directly at{' '}
            <a href={`mailto:${profile.email}`} className="underline">
              {profile.email}
            </a>
            .
          </p>
        )}
      </motion.form>

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
