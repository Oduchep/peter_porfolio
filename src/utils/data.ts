import { StaticImageData } from 'next/image';
import { ProjectSample } from '../../public/assets/images';

export interface ProjectType {
  project_name: string;
  project_year: string | number;
  project_img: string | StaticImageData;
  project_desc: string;
  tools: string[];
  github_link?: string;
  project_link?: string;
  project_type: 'public' | 'private';
}

export const Projects: ProjectType[] = [
  {
    project_name: 'NFT Marketplace',
    project_year: 2023,
    project_img: ProjectSample,
    project_desc:
      'Digital agency is a landing page built with the latest version of next.js using best practices.',
    tools: [
      'HTML',
      'CSS',
      'Tailwind',
      'JavaScript',
      'TypeScript',
      'React',
      'Git',
      'Next',
    ],
    project_type: 'private',
    project_link: 'www.google.com',
  },
  {
    project_name: 'NFT Marketplace',
    project_year: 2023,
    project_img: ProjectSample,
    project_desc:
      'Digital agency is a landing page built with the latest version of next.js using best practices.',
    tools: [
      'HTML',
      'CSS',
      'Tailwind',
      'JavaScript',
      'TypeScript',
      'React',
      'Git',
      'Next',
    ],
    project_type: 'public',
    github_link: 'https://www.github.com',
    project_link: 'www.google.com',
  },
  {
    project_name: 'NFT Marketplace',
    project_year: 2023,
    project_img: ProjectSample,
    project_desc:
      'Digital agency is a landing page built with the latest version of next.js using best practices.',
    tools: [
      'HTML',
      'CSS',
      'Tailwind',
      'JavaScript',
      'TypeScript',
      'React',
      'Git',
      'Next',
    ],
    project_type: 'public',
    github_link: 'https://www.github.com',
    project_link: 'www.google.com',
  },
];

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
