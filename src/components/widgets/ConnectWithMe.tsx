import { Wrapper } from '@/layout/components';
import React from 'react';
import { Bttn, Heading2, Input, TextArea } from '../elements';
import { externalRoutes } from '@/utils/PortfolioRoutes';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import { SmokeImg } from '../../../public/assets/images';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { emailRegex } from '@/schema/schemaRegex';

const ConnectWithMe = () => {
  const contactFormSchema = yup.object().shape({
    full_name: yup.string().required('Project name is required!'),
    email: yup
      .string()
      .email()
      .matches(emailRegex, 'Invalid email format')
      .required('Email is required'),
    message: yup.string().required('Project name is required!'),
  });

  const social_links = [
    { icon: <FaGithub />, href: externalRoutes.GITHUB },
    {
      icon: <FaLinkedin />,
      href: externalRoutes.LINKEDIN,
    },
    { icon: <FaXTwitter />, href: externalRoutes.TWITTER },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  return (
    <Wrapper className='grid grid-cols-2 gap-32'>
      <div className='relative flex flex-col gap-5'>
        <Heading2 text="Let's Connect 🤝" />

        <div className='flex flex-col gap-3'>
          <p>
            I&apos;m always excited to discuss new projects, collaborations, or
            opportunities. Whether you have a question, a project idea, or just
            want to say hi, feel free to reach out! I&apos;m just an email away
            and look forward to connecting with you.
          </p>

          <p>
            Say hello at&nbsp;
            <a
              href='mailto:oduchep@gmail.com'
              className='border-b hover:border-secondary-default hover:text-secondary-default'
            >
              oduchep@gmail.com
            </a>
          </p>
          <p>
            For more info, here&apos;s&nbsp;
            <a
              href={externalRoutes?.RESUME}
              className='border-b hover:border-secondary-default hover:text-secondary-default'
            >
              my resume
            </a>
          </p>
        </div>

        <div className='flex items-center gap-5'>
          {social_links?.map((socials, index) => (
            <a
              key={index}
              href={socials.href}
              className='text-xl text-secondary-default'
              target='_blank'
            >
              {socials?.icon}
            </a>
          ))}
        </div>

        <Image src={SmokeImg} className='absolute bottom-0' alt='smoke image' />
      </div>

      <div className='flex flex-col gap-6'>
        <Controller
          control={control}
          name='full_name'
          render={({ field }) => (
            <Input
              label='Name'
              type='text'
              placeholder='Enter full name'
              error={errors.full_name?.message}
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name='email'
          render={({ field }) => (
            <Input
              label='Email'
              type='email'
              placeholder='Please enter email'
              error={errors.email?.message}
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name='message'
          render={({ field }) => (
            <TextArea
              label='Message'
              placeholder='Enter batch description'
              className='h-28'
              error={errors.message?.message}
              {...field}
            />
          )}
        />

        <Bttn className='rounded-full bg-secondary-default uppercase text-[#0A0A0A]'>
          Contact Me
        </Bttn>
      </div>
    </Wrapper>
  );
};

export default ConnectWithMe;
