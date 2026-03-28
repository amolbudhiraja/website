# amol.budhiraja.com

Personal website and portfolio. Built with Next.js, Tailwind CSS, and MDX.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS with CSS custom properties for theming
- **Content:** MDX compiled at runtime via `@mdx-js/mdx`
- **Animations:** Framer Motion
- **Syntax highlighting:** rehype-pretty-code + shiki (dual github-dark/github-light theme)
- **Command palette:** cmdk
- **Dark/light mode:** next-themes
- **Travel map:** react-simple-maps
- **Fonts:** Geist Sans + Geist Mono

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

### Blog posts

Add a new `.mdx` file to `content/blog/`:

```
---
title: "Post title"
date: "2025-01-01"
description: "Short description"
---

Your content here.
```

### Projects

Add a new `.mdx` file to `content/projects/` and a corresponding entry in `src/lib/projects.ts`:

```ts
{
  title: "Project Name",
  slug: "project-slug",          // matches the .mdx filename
  description: "Short description",
  tags: ["Tag1", "Tag2"],
  github: "https://github.com/...",
  featured: true,
  year: 2025,
}
```

The project detail page renders the MDX automatically. Use `<SystemDiagram>` in the MDX for architecture diagrams — no import needed.

## Deployment

Deployed on Vercel. Merging to `main` triggers an automatic production deployment. PRs get preview deployments.

```bash
npm run build   # verify build locally before pushing
```
