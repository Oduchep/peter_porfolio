import { StaticImageData } from 'next/image';
import {
  AkilaahScreen,
  BlessingPortfolioScreen,
  CoastNgScreen,
  PexelsCloneScreen,
  SophlexxScreen,
  StakecutScreen,
  SupremeDelichScreen,
  UmojalinnScreen,
} from '../../public/assets/images';

export interface ProjectType {
  slug: string;
  name: string;
  year: number;
  image: StaticImageData;
  /** One line, shown in lists. */
  summary: string;
  /** Longer overview, shown on the case study page. */
  description: string;
  stack: string[];
  type: 'public' | 'private';
  featured?: boolean;
  /** Optional case study details — sections only render when filled in. */
  role?: string;
  /** The apps that make up a larger build, shown as "The system". */
  system?: { name: string; stack: string; description: string }[];
  highlights?: string[];
  github_link?: string;
  project_link?: string;
}

export interface TestimonialType {
  quote: string;
  name: string;
  title: string;
  relationship: string;
  date: string;
}

// Order here is the display order.
export const Projects: ProjectType[] = [
  {
    slug: 'supreme-delich',
    name: 'Supreme Delich',
    year: 2026,
    image: SupremeDelichScreen,
    summary:
      'A restaurant platform: public website, point of sale and management dashboard, and the API behind them.',
    description:
      'Supreme Delich is a restaurant, bakery and events business in Port Harcourt. I led the project from planning to launch and built the customer website and the point of sale and dashboard staff use every day. The API was started by Cedar Daniel; I extended it with payments, a self-order kiosk, website content and the inventory system.',
    stack: ['Next.js', 'React', 'NestJS', 'PostgreSQL', 'Redis'],
    type: 'private',
    featured: true,
    role: 'Project lead and frontend engineer; backend contributor',
    system: [
      {
        name: 'Website',
        stack: 'Next.js, TanStack Query',
        description:
          'Menu, cart and checkout, service pages and enquiry forms. All content comes from the API and is edited by staff.',
      },
      {
        name: 'POS and dashboard',
        stack: 'React, Vite, TanStack Table, Recharts',
        description:
          'Cashier point of sale, sales analytics, and management for the menu, inventory, expenses, staff and website content.',
      },
      {
        name: 'API',
        stack: 'NestJS, PostgreSQL, TypeORM, Redis, BullMQ',
        description:
          'Started by Cedar Daniel. I added Paystack payments and refunds, the kiosk, website orders and content, inventory transfers and permissions.',
      },
    ],
    highlights: [
      'Ran the project as project manager: gathered requirements, planned and broke down the work, and coordinated delivery of all three apps.',
      'Built the customer website and the POS and management dashboard.',
      'Built a cashier POS with split payments, held orders, discounts, VAT and printed receipts.',
      'Extended the API with Paystack payments and refunds, a self-order kiosk, website orders and a content module for the website.',
      'Designed the inventory system: a central store sends stock to departments through accept/reject transfers, with every movement recorded in a ledger.',
      'Replaced fixed roles with admin-defined roles and per-area permissions, enforced in both the API and the interface.',
      'Set up CI, database migrations and staging and production deployments.',
    ],
    project_link: 'https://www.supremedelich.com',
  },
  {
    slug: 'sophlexx-luxury',
    name: 'Sophlexx Luxury',
    year: 2026,
    image: SophlexxScreen,
    summary:
      'A decor and event-styling retailer: storefront with WhatsApp checkout, an offline-ready POS and one shared API.',
    description:
      'Sophlexx Luxury sells decor and event-styling pieces from a Port Harcourt showroom and online. I planned and built the full system: a customer storefront, a management app with a point of sale that keeps selling without internet, and one API serving both from a shared catalogue and stock.',
    stack: ['Next.js', 'React', 'NestJS', 'PostgreSQL', 'IndexedDB'],
    type: 'private',
    featured: true,
    role: 'Project lead and full-stack engineer',
    system: [
      {
        name: 'Storefront',
        stack: 'Next.js, TanStack Query',
        description:
          'Catalogue, collections, product pages and cart, reading the same stock as the showroom.',
      },
      {
        name: 'Management app and POS',
        stack: 'React, Vite, Dexie, Vitest',
        description:
          'Showroom point of sale with split payments, returns and exchanges, plus admin for products, orders and staff.',
      },
      {
        name: 'API',
        stack: 'NestJS, PostgreSQL (Supabase), Redis, BullMQ',
        description:
          'One API for the POS, the admin and the storefront, with emailed receipts and migration-managed schema.',
      },
    ],
    highlights: [
      'Ran the project end to end: wrote detailed implementation plans for each app, then built and delivered all three.',
      'Built an offline mode for the POS: the catalogue is cached in IndexedDB and sales wait in an outbox that syncs when the connection returns.',
      'Designed WhatsApp checkout: the storefront records an order request, then opens a pre-filled WhatsApp message so staff can arrange delivery and payment.',
      'Kept all money maths in one module with test cases shared by the API, POS and storefront, so totals, VAT and split payments always agree.',
      'Locked down the database: schema changes only through migrations, and public data API access revoked.',
    ],
    project_link: 'https://www.sophlexx.com',
  },
  {
    slug: 'akilaah',
    name: 'Akilaah',
    year: 2024,
    image: AkilaahScreen,
    summary:
      'Savings, loans and welfare management for cooperatives and community groups.',
    description:
      'Akilaah is a platform that helps communities manage savings, loans, and welfare. It makes it easy for groups to save together, support each other, and stay organized and transparent.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    type: 'private',
    featured: true,
    role: 'Lead Frontend Engineer, MAJFintech',
    highlights: [
      'Lead frontend development for the platform, improving UI/UX and performance.',
      'Work with cross-functional teams to turn business needs into scalable features.',
    ],
    project_link: 'https://www.akilaah.com',
  },
  {
    slug: 'coast-ng',
    name: 'Coast.ng',
    year: 2024,
    image: CoastNgScreen,
    summary:
      'A fintech app for trading gift cards and crypto, paying bills and moving money.',
    description:
      'Coast.ng is a Nigerian fintech platform where users can trade gift cards, crypto, airtime, and data, pay bills, transfer funds, and earn through referrals — all in one secure app.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    type: 'private',
    featured: true,
    project_link: 'https://www.coast.ng',
  },
  {
    slug: 'umojalinn',
    name: 'Umojalinn',
    year: 2025,
    image: UmojalinnScreen,
    summary:
      'An Afro-Irish marketplace connecting African-inspired fashion designers with global customers.',
    description:
      'Umojalinn is an Afro-Irish digital marketplace connecting African-inspired fashion designers to global customers. It champions cultural unity, supports emerging creators, and offers quality, ethically made apparel.',
    stack: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    type: 'private',
    project_link: 'https://www.umojalinn.com',
  },
  {
    slug: 'stakecut',
    name: 'Stakecut',
    year: 2022,
    image: StakecutScreen,
    summary:
      'An affiliate marketing platform where anyone can earn commissions by sharing product links.',
    description:
      'Stakecut is an African affiliate marketing platform that lets anyone earn commissions by sharing product links, with no upfront cost. It offers high payouts, multiple currencies, training, and weekly payments.',
    stack: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    type: 'private',
    role: 'Frontend Developer (Contract)',
    highlights: [
      'Revamped stakecut.com, improving user retention by 30% with better navigation and features.',
      'Built a real-time admin dashboard with Next.js to track user activity and transactions.',
      'Integrated APIs to improve data flow and platform performance.',
    ],
    project_link: 'https://stakecut.com',
  },
  {
    slug: 'blessing-portfolio',
    name: 'Blessing Bisong Portfolio',
    year: 2025,
    image: BlessingPortfolioScreen,
    summary:
      'A responsive portfolio for a product designer, shipped on a tight timeline.',
    description:
      'A fully responsive portfolio website for a product designer colleague, brought to life in the shortest possible time.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    type: 'public',
    github_link: 'https://gitlab.com/oduchep/blessing_portfolio',
    project_link: 'https://blessing-bisong.netlify.app',
  },
  {
    slug: 'pexels-clone',
    name: 'Pexels Clone',
    year: 2022,
    image: PexelsCloneScreen,
    summary: 'A Vue rebuild of Pexels, made as an early-career side project.',
    description:
      'A clone of the Pexels website, built in my spare time a few years into my career to practise layout, image grids and API work.',
    stack: ['Vue', 'JavaScript', 'Tailwind CSS'],
    type: 'public',
    github_link: 'https://github.com/Oduchep/pexels-clone',
    project_link: 'https://pexels-replica.vercel.app',
  },
];

export const FeaturedProjects = Projects.filter((p) => p.featured);

export const getProject = (slug: string) =>
  Projects.find((p) => p.slug === slug);

export const Experiences = [
  {
    id: 'majfintech',
    company: 'MAJFintech',
    position: 'Lead Frontend Engineer',
    duration: 'Jan 2023 - Present',
    location: 'Abuja, Nigeria',
    description: [
      'Spearhead frontend development for Akilaah, a SaaS platform for organizational/cooperative management, improving UI/UX and performance',
      'Redesigned the entire website to boost visual appeal and user engagement.',
      'Mentor and support interns, helping them grow faster in frontend development.',
      'Work with cross-functional teams to turn business needs into scalable technical features.',
    ],
  },
  {
    id: 'stakecut',
    company: 'Stakecut',
    position: 'Frontend Developer (Contract)',
    duration: 'Apr 2022 - Feb 2023',
    location: 'Remote',
    description: [
      'Revamped stakecut.com, improving user retention by 30% with better navigation and features.',
      'Built a real-time admin dashboard using Next.js to track user activity and transactions.',
      'Integrated APIs to enhance data flow and platform performance.',
    ],
  },
  {
    id: 'jobgam',
    company: 'Jobgam Technologies Recruitment',
    position: 'Frontend Developer',
    duration: 'Jan 2022 - Jun 2023',
    location: 'Port Harcourt, Nigeria',
    description: [
      'Built a responsive job recruitment web app with Next.js and Tailwind CSS.',
      'Implemented intuitive filters and fast-loading pages, reducing bounce rate by 25%.',
      'Added chat functionality to connect applicants with employers directly.',
      'Introduced a wallet system that increased revenue through paid job listings.',
      'Optimized SEO, leading to a 22% boost in organic traffic.',
    ],
  },
  {
    id: 'kwalite',
    company: 'Kwalite Nigeria Limited',
    position: 'WordPress Developer',
    duration: 'Mar 2021 - Jan 2022',
    location: 'Remote',
    description: [
      'Built and customized WordPress sites to improve clients online presence.',
      'Managed content scraping, curation, and SEO optimization for over 60 pages.',
    ],
  },
  {
    id: 'genesys',
    company: 'Genesys Tech Hub',
    position: 'Frontend Developer Intern',
    duration: 'Jul 2020 - Feb 2021',
    location: 'Enugu, Nigeria',
    description: [
      'Developed responsive UI components for Cerebrum, an e-learning platform.',
      'Worked in Agile sprints to turn user stories into working features.',
    ],
  },
];

export const Testimonials: TestimonialType[] = [
  {
    quote:
      "Working with Peter was a great experience.\n\nHe's the kind of frontend engineer who doesn't just write code; he takes responsibility for delivering real value. He's self-motivated, always ready to take on challenges, and consistently pushes himself to improve.\n\nPeter is also a supportive teammate who collaborates well and contributes positively to the team environment. You can count on him to step up when it matters.\n\nBeyond his technical abilities, what stands out is his drive for growth and self-improvement. He is proactive, adaptable, and a great team player, someone you can trust to contribute meaningfully to any project.\n\nAny team would be lucky to have him.",
    name: 'Cedar Daniel',
    title:
      'Software Engineer | Developer Relations | Community Builder | Open Source Contributor',
    relationship: 'Worked with Peter on the same team',
    date: 'April 17, 2026',
  },
  {
    quote:
      "Peter is one of the best developers I've had the pleasure of working with.\n\nWhat makes him so great is not just his coding skills, but also his acumen for business logic - by looking at scenarios from the perspective of users - and his exceptional professionalism.\n\nHe is the sort of engineer who would be an asset to any team.",
    name: 'Maduabuchi Dibiaezue',
    title:
      'Product Manager | Product Owner | Agile & Scrum | User Research | Data Analysis | Stakeholder Management | AI | SaaS',
    relationship: 'Managed Peter directly',
    date: 'April 19, 2026',
  },
  {
    quote:
      "I had the pleasure of working with Peter, and he's a highly skilled front-end developer with a strong logical approach to problem-solving. He's calm, calculated, and consistently delivers well-thought-out solutions. Beyond his technical ability, Peter is a patient and effective leader who brings out the best in his team mates.",
    name: 'Chioma Otu',
    title:
      'Frontend Developer (React, Next.js, React Native) | Product Manager / Technical PM | Building and managing Scalable User-Centered Products',
    relationship: 'Chioma worked with Peter on the same team',
    date: 'April 20, 2026',
  },
];
