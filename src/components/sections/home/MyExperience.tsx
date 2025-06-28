'use client';

import { Heading2 } from '@/components/elements';
import React, { useEffect, useRef, useState } from 'react';
import { Wrapper } from '../layout';
import { Experiences } from '@/utils/data';

const MyExperience = () => {
  const [activeId, setActiveId] = useState<string>(Experiences[0]?.id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        root: null, // observes within the whole page
        rootMargin: '0px 0px -50% 0px', // triggers when section is halfway
        threshold: 0.5,
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Wrapper className='space-y-14'>
      <div className='space-y-2'>
        <Heading2 text='My Experience 💼' />
        <p className='max-w-3xl'>
          Over the past 4 years, I&apos;ve worked with startups and teams to
          design, build, and scale user-focused web applications. I specialize
          in frontend development, bringing ideas to life through clean code,
          thoughtful UI, and strong collaboration.
        </p>
      </div>

      {/* desktop view */}
      <section className='hidden grid-cols-1 gap-x-16 gap-y-8 py-12 lg:grid lg:grid-cols-2'>
        {/* Left side: Full-page scrollable experience list */}
        <div className='space-y-5'>
          {Experiences.map((exp) => (
            <div
              key={exp.id}
              id={exp.id}
              ref={(el) => {
                sectionRefs.current[exp.id] = el;
              }}
              className={`min-h-20`}
            >
              <div
                className={`h-fit rounded-md p-6 transition-colors duration-300 ${
                  exp.id === activeId ? 'bg-[#172135]' : ''
                }`}
              >
                <h3 className='text-xl font-semibold'>{exp.company}</h3>
                <p className='text-sm text-gray-500'>{exp.duration}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right side: Dynamic content */}
        <div className='sticky top-28 self-start'>
          {Experiences.filter((exp) => exp.id === activeId).map((exp) => (
            <div key={exp.id}>
              <h2 className='mb-5 text-2xl font-bold'>{exp.position}</h2>
              <ul className='list-disc space-y-3 pl-5 text-base text-gray-300 md:text-lg'>
                {exp.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* mobile and tablet view */}
      <section className='block space-y-10 lg:hidden'>
        {Experiences.map((exp) => (
          <div key={exp.id} id={exp.id} className='flex flex-col gap-5'>
            <div
              className={`h-fit rounded-md bg-[#172135] p-4 transition-colors duration-300`}
            >
              <h3 className='text-xl font-semibold'>{exp.company}</h3>
              <p className='text-sm text-gray-500'>{exp.duration}</p>
            </div>

            <div>
              <h2 className='mb-5 text-xl font-bold md:text-2xl'>
                {exp.position}
              </h2>
              <ul className='list-disc space-y-3 pl-5 text-base text-gray-300 md:text-lg'>
                {exp.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </Wrapper>
  );
};

export default MyExperience;
