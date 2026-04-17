# Peter Okerulu — Portfolio

Personal portfolio website for Peter Okerulu, a frontend engineer based in Port Harcourt, Nigeria. Built to showcase projects, professional experience, and a direct contact channel — designed with product clarity and visual precision.

**Live site:** [oduchep.com](https://www.oduchep.com)

---

## Overview

This is a full-stack Next.js portfolio with a contact form backed by a server API route. The site is fully responsive, dark-mode enabled, animated with Framer Motion, and optimised for SEO with structured data and Open Graph metadata.

### Pages

| Route | Description |
|---|---|
| `/` | Home — hero section, featured projects, and work experience |
| `/about` | About — background, working principles, and skillset |
| `/projects` | Projects — tabbed view of public and private work |

A shared contact form and footer appear on every page via the root layout.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| Forms | React Hook Form + Yup |
| Email | Nodemailer |
| Icons | React Icons |
| Fonts | Inter (headings), Rubik (body) via `next/font` |

---

## Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About page
│   ├── projects/page.tsx       # Projects page
│   ├── api/contact/route.ts    # Contact form API (POST)
│   ├── layout.tsx              # Root layout — nav, footer, metadata
│   └── globals.css             # Tailwind base + custom theme
│
├── components/
│   ├── elements/               # Reusable base UI (Button, Input, SectionHero, etc.)
│   ├── widgets/                # Feature components (ConnectWithMe, GetSkillsBadge, AnimatedSection)
│   └── sections/               # Page-section components
│       ├── home/               # HomeHero, FeaturedProjects, MyExperience
│       ├── about/              # AboutHero, MySkillset
│       ├── projects/           # ProjectsHero, ProjectsList, ProjectCard
│       └── layout/             # Navigations, DesktopNav, MobileNav, Footer, Wrapper
│
├── utils/
│   ├── data.ts                 # Projects and Experiences data
│   ├── PortfolioRoutes.ts      # Route and external link constants
│   └── DateFormatters.ts       # Utility for calculating years of experience
│
└── schema/
    └── contactFormSchema.ts    # Yup validation schema for contact form
```

---

## Design Tokens

Custom colours defined in `globals.css` via Tailwind v4 `@theme`:

| Token | Value | Usage |
|---|---|---|
| `primary-default` | `#000627` | Dark background |
| `secondary-default` | `#D3E97A` | Lime accent (dark mode highlight) |
| `tertiary-default` | `#294068` | Blue accent (light mode highlight) |

Dark mode is toggled via a `.dark` class on `<html>`.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the required values for the contact form mailer:

```env
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_TO_EMAIL=
```

---

## Animation System

All scroll-triggered animations use `AnimatedSection` (Framer Motion + `react-intersection-observer`). Page-level entrance sequences use `motion` variants with staggered children. Hover micro-interactions are applied via `whileHover` directly on interactive elements.

Key easing curve used throughout: `[0.22, 1, 0.36, 1]` (ease-out-quint) — fast initial movement, smooth settle.

---

## Deployment

Deployed on [Vercel](https://vercel.com). Any push to `main` triggers a production build automatically.

---

## Contact

- **Email:** [oduchep@gmail.com](mailto:oduchep@gmail.com)
- **LinkedIn:** [linkedin.com/in/peter-okerulu](https://www.linkedin.com/in/peter-okerulu/)
- **GitHub:** [github.com/Oduchep](https://github.com/Oduchep)
