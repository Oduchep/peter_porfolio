import { Experiences } from '@/utils/data';

// Every role visible at once: dates on the left, role and impact on the right.
const ExperienceTimeline = () => (
  <ol className='mt-10'>
    {Experiences.map((exp) => (
      <li
        key={exp.id}
        className='border-line grid gap-3 border-t py-8 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-8'
      >
        <div className='text-subtle font-mono text-xs leading-6 md:col-span-3'>
          <p>{exp.duration}</p>
          <p>{exp.location}</p>
        </div>

        <div className='md:col-span-9'>
          <h3 className='text-lg font-medium tracking-tight'>
            {exp.position}
            <span className='text-muted font-normal'> · {exp.company}</span>
          </h3>
          <ul className='text-muted mt-3 max-w-2xl space-y-2 text-[15px] leading-relaxed'>
            {exp.description.map((item) => (
              <li key={item} className='flex gap-3'>
                <span aria-hidden className='text-subtle select-none'>
                  –
                </span>
                <span className='text-pretty'>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </li>
    ))}
  </ol>
);

export default ExperienceTimeline;
