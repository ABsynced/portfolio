import { FiArrowRight } from 'react-icons/fi';

export default function SectionHeading({ title, linkLabel, linkHref }) {
  return (
    <div className="mb-12 flex items-end justify-between gap-6">
      <h2 className="flex flex-1 items-baseline gap-2 font-display text-2xl font-bold text-offwhite sm:text-3xl">
        <span className="text-accent">/</span> {title}
        <span className="ml-4 hidden h-px flex-1 bg-navy-lightest sm:block" />
      </h2>
      {linkLabel && linkHref && (
        <a
          href={linkHref}
          target={linkHref.startsWith('http') ? '_blank' : undefined}
          rel={linkHref.startsWith('http') ? 'noreferrer' : undefined}
          className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-accent hover:underline sm:flex"
        >
          {linkLabel} <FiArrowRight />
        </a>
      )}
    </div>
  );
}
