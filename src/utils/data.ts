import { StaticImageData } from 'next/image';
import {
  AkilaahScreen,
  BlessingPortfolioScreen,
  CoastNgScreen,
  PexelsCloneScreen,
  StakecutScreen,
  UmojalinnScreen,
} from '../../public/assets/images';

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

const projectsData: ProjectType[] = [
  {
    project_name: 'Akilaah',
    project_year: 2024,
    project_img: AkilaahScreen,
    project_desc:
      'Akilaah is a platform that helps communities manage savings, loans, and welfare. It makes it easy for groups to save together, support each other, and stay organized and transparent.',
    tools: [
      'JavaScript',
      'TypeScript',
      'Github',
      'Next',
      'HTML',
      'CSS',
      'Tailwind',
    ],
    project_type: 'private',
    project_link: 'www.akilaah.com',
  },
  {
    project_name: 'Blessing Portfolio',
    project_year: 2025,
    project_img: BlessingPortfolioScreen,
    project_desc:
      'A fully responsive portfolio website for a product designer colleague of mine. Brought to life in the shortest possible time.',
    tools: [
      'HTML',
      'JavaScript',
      'TypeScript',
      'React',
      'CSS',
      'Tailwind',
      'Gitlab',
    ],
    project_type: 'public',
    github_link: 'https://gitlab.com/oduchep/blessing_portfolio',
    project_link: 'https://blessing-bisong.netlify.app',
  },
  {
    project_name: 'Coast Ng',
    project_year: 2024,
    project_img: CoastNgScreen,
    project_desc:
      'Coast.ng is a Nigerian fintech platform where users can trade gift cards, crypto, airtime, and data, pay bills, transfer funds, and earn through referrals—all in one secure app.',
    tools: [
      'JavaScript',
      'TypeScript',
      'Github',
      'Next',
      'HTML',
      'CSS',
      'Tailwind',
    ],
    project_type: 'private',
    project_link: 'https://www.coast.ng',
  },
  {
    project_name: 'Stakecut',
    project_year: 2022,
    project_img: StakecutScreen,
    project_desc:
      'Stakecut is an African affiliate marketing platform that empowers anyone to earn commissions by sharing product links—no upfront cost. It offers high payouts, multiple currencies, training, and weekly payments.',
    tools: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'Next', 'Github'],
    project_type: 'private',
    project_link: 'https://stakecut-landing-page.vercel.app',
  },
  {
    project_name: 'Pexels Clone',
    project_year: 2022,
    project_img: PexelsCloneScreen,
    project_desc:
      'This is a clone website of the Pexels website. It was something I did in my spare time, a few years into my dev career.',
    tools: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'Vue', 'Github'],
    project_type: 'public',
    github_link: 'https://github.com/Oduchep/pexels-clone',
    project_link: 'https://pexels-replica.vercel.app',
  },
  {
    project_name: 'Umojalinn website',
    project_year: 2025,
    project_img: UmojalinnScreen,
    project_desc:
      'Umoja linn is an Afro-Irish digital marketplace connecting African-inspired fashion designers to global customers. It champions cultural unity, supports emerging creators, and offers quality, ethically-made apparel.',
    tools: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'Next', 'Github'],
    project_type: 'private',
    project_link: 'https://www.umojalinn.com',
  },
];

export const Projects = projectsData?.sort(
  (
    a: { project_year: string | number | Date },
    b: { project_year: string | number | Date }
  ) => {
    return (
      new Date(b.project_year).getTime() - new Date(a.project_year).getTime()
    );
  }
);

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
