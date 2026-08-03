// GitHub Pages serves this site from /portfolio/, not the domain root
// (see vite.config.js's `base`), but plain string image paths like
// "/projects/foo.png" in data files are just runtime strings — Vite has no
// way to rewrite those automatically the way it rewrites index.html or
// import-ed assets. Wrap any root-absolute local path with this before
// using it in an <img src> (or img.src = ...) so it resolves under the
// correct base path in both dev and production. Leave full URLs untouched.
export function asset(path) {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
