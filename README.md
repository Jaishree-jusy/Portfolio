# Jaishree K S — Portfolio

Portfolio Link:https://portfolio-eight-gilt-50.vercel.app/

A premium, minimal, and recruiter-friendly portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Styled with a clean teal-on-neutral palette (`#14B8A6` accent, `#FAFAFA` background) in the spirit of Linear, Vercel, and Stripe.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

To build for production:

```bash
npm run build
npm run preview
```

## Before you deploy — a few things to personalize

1. **Resume file** — Drop your actual resume PDF into `public/resume.pdf`. The "Download Resume" button already links to `/resume.pdf`.
2. **GitHub & LinkedIn links** — Open `src/constants/data.js` and replace the placeholder `github` and `linkedin` URLs in `personalInfo` with your real profile links.
3. **Contact form (EmailJS)** — The contact form uses [EmailJS](https://www.emailjs.com) so messages land directly in your inbox with no backend needed.
   - Create a free EmailJS account.
   - Create an Email Service and an Email Template (with `from_name`, `from_email`, and `message` variables).
   - Open `src/services/emailService.js` and replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` with your actual EmailJS credentials.
4. **Project links & thumbnails** — Each project in `src/constants/data.js` has empty `github` and `demo` fields — add real links once your repos/deployments are live. Project cards currently use a styled gradient placeholder instead of a screenshot; swap in real screenshots under `src/assets/images` and reference them in `ProjectCard.jsx` when ready.
5. **Profile photo (optional)** — The hero currently uses a circular "JK" monogram instead of a photo. To use a real photo, drop an image into `src/assets/images` and swap the monogram `<div>` in `src/components/Hero.jsx` for an `<img>` tag.

## Project structure

```
src/
  components/   Reusable UI building blocks (Navbar, Hero, ProjectCard, ExperienceTimeline, Credentials, ...)
  pages/        Route-level pages (Home, NotFound)
  constants/    Single source of truth for all resume content (data.js)
  hooks/        Custom hooks (typewriter effect, scroll-spy)
  services/     External integrations (EmailJS)
  styles/       Global Tailwind styles
  utils/        Small helper functions (smooth scroll)
```

Navigation is intentionally kept to six sections — Home, About, Skills, Projects, Experience, Contact. Education, Achievements, and Certifications are merged into a compact "Credentials" block inside the Experience section rather than being separate nav items.

All content is centralized in `src/constants/data.js` — update your info there and it propagates across the entire site.

## Tech stack

React 18 · Vite · Tailwind CSS · Framer Motion · React Icons · React Router · EmailJS
