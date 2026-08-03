import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { asset } from '../utils/asset';

export default function ProjectCard({ project }) {
  return (
    <div className="card overflow-hidden">
      <div className="flex aspect-video items-center justify-center bg-navy-lightest/40">
        {project.image ? (
          <img src={asset(project.image)} alt={project.title} className="h-full w-full object-cover" />
        ) : (
          <span className="font-display text-4xl font-bold text-slate-600">
            {project.title.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="font-display text-xl font-semibold text-offwhite">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-slate-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {(project.tags || []).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-navy-lightest bg-navy-light/60 px-2.5 py-1 text-xs text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-5 border-t border-navy-lightest/60 pt-5 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-medium text-accent hover:underline"
            >
              <FiExternalLink /> Live
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-medium text-accent hover:underline"
            >
              <FiGithub /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
