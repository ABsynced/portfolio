# Portfolio — MERN + Tailwind

A dark-themed portfolio site built with React, Vite, and Tailwind CSS. Deployed as a fully
static site on GitHub Pages — every push to `main` rebuilds and republishes automatically via
the GitHub Actions workflow in `.github/workflows/deploy.yml`.

## Structure

```
portfolio-mern/
├── client/   React + Vite + Tailwind CSS frontend (this is what's deployed)
└── server/   Express + MongoDB API — not used by the live GitHub Pages site
              (GitHub Pages only serves static files, no Node/DB). Kept here in
              case a live backend is wired back up later; the frontend already
              falls back to client/src/data/projects.js when no API is configured.
```

## Quick start

```bash
cd client
npm install
npm run dev      # starts the dev server on http://localhost:5173
npm run build    # builds for production into client/dist
```

That's it — no database or API setup needed. The `server/` folder (Express + MongoDB) is
optional and unused by the deployed site; see the note in **Structure** above if you want
to revive it for a live database-backed projects section or contact form.

## Making it yours

1. `client/src/data/profile.js` — your name, role, bio, skills, social links.
2. `client/src/data/projects.js` — placeholder projects (shown if the API isn't reachable).
3. `server/seed.js` — the real project data to load into MongoDB via `npm run seed`.
4. Replace the favicon at `client/public/favicon.svg` and add project screenshots
   (set the `image` field on a project to a URL or path under `client/public`).

## Deployment

Static hosting on **GitHub Pages**, auto-deployed on every push to `main`:

1. In the repo's GitHub settings → **Pages**, set Source to **GitHub Actions** (one-time setup).
2. Push to `main` — the `Deploy to GitHub Pages` workflow builds `client/` and publishes `client/dist`.
3. Site goes live at `https://<your-username>.github.io/portfolio-mern/`.

`client/vite.config.js` sets `base: '/portfolio-mern/'` to match that URL path — if you ever
rename the repo, update this to match.

No `VITE_API_URL` is needed; the site runs entirely on the placeholder data in
`client/src/data/projects.js`, and the contact section is a `mailto:` link instead of a live form.

## Design

Near-black background (`#05060a`) with animated gradient blobs, bordered cards, a violet accent
(`#a78bfa`), gradient hero name text (fuchsia → violet → cyan), and scroll-triggered fade/slide
animations via Framer Motion. Colors and fonts are centralized in `client/src/index.css` — the
`@theme` block at the top controls the palette site-wide.
