import { placeholderProjects } from '../data/projects';

// Static hosting only (GitHub Pages) — no API to fetch from, so this just
// hands back the project data straight from data/projects.js. Kept as a
// hook (rather than importing placeholderProjects directly in Projects.jsx)
// so a future live API could be swapped back in without touching the
// component.
export function useProjects() {
  return { projects: placeholderProjects, loading: false, usingFallback: true };
}
