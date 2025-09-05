# Tori's Portfolio (React + Vite + Tailwind)

This is your single-file demo split into real files with a clean structure.

## Quickstart

```bash
npm i
npm run dev
```

Then open the local URL Vite prints.

## Where things live

- `src/theme.ts` – design tokens
- `src/data/profile.ts` – name, headline, intro
- `src/data/projects.ts` – the `projectsData` array
- `src/shared/ui.tsx` – small UI helpers (Section, Container, Field)
- `src/components/*` – Navbar, Hero, Projects, Contact, Footer
- `src/pages/Index.tsx` – page shell
- `src/index.css` – Tailwind setup

## Notes

- I replaced dynamic Tailwind class interpolations with fixed utility classes so Tailwind can tree-shake correctly.
- The contact form is client-only. Hook up EmailJS, Formspree, or a server route to send messages.
- Adjust your social/profile links in `Hero.tsx` and `Contact.tsx`.
