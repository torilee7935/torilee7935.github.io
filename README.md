# Tori Lee — Online Portfolio

[![Website](https://img.shields.io/badge/Website-tori--lee.com-2ea44f?style=flat-square)](https://tori-lee.com/)
[![Deploy](https://github.com/torilee7935/torilee7935.github.io/actions/workflows/pages.yml/badge.svg)](https://github.com/torilee7935/torilee7935.github.io/actions)

Welcome to my personal portfolio site — a clean, whimsical space that blends my background in computer science, technical account management, and creative projects. It’s where I showcase my work, highlight projects, and share a bit of personality.

## Features
- Responsive design that works on desktop and mobile
- Sticky Navbar with quick access to Home, Background, Projects, and Contact
- Background section with resume-style snapshot of my experience and education
- Projects section highlighting technical and creative projects with expandable detail cards
- Spotify Music Player to add background music while scrolling
- Tailwind-powered theming with a sage green and sky blue palette, plus lightweight animations

## Built With
- [Vite](https://vitejs.dev/) — build tool
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) — styling and theme
- [Framer Motion](https://www.framer.com/motion/) — animations
- [GitHub Pages](https://pages.github.com/) — hosting and deploy pipeline

## Structure
.github/workflows # Pages deploy workflow
public/ # static assets (images, etc.)
src/ # React components, pages, styles
index.html # Vite entry point
tailwind.config.ts # Tailwind config
vite.config.ts # Vite config

## Local Development
To run this portfolio locally:

```bash
# Clone the repo
git clone https://github.com/torilee7935/torilee7935.github.io.git
cd torilee7935.github.io

# Install dependencies
npm install

# Run local dev server
npm run dev
