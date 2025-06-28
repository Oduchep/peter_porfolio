'use client';

import React from 'react';
import {
  CustomButton,
  Heading2,
  CustomInput,
  CustomTextArea,
} from '../elements';
import { externalRoutes } from '@/utils/PortfolioRoutes';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import { SmokeImg } from '../../../public/assets/images';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { emailRegex } from '@/schema/schemaRegex';
import { Wrapper } from '../sections/layout';

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

  const services = ['Hiring', 'Collaboration', 'Tutoring'];

  return (
    <Wrapper className='grid gap-x-32 gap-y-16 lg:grid-cols-2'>
      <div className='relative flex flex-col gap-5'>
        <Heading2 text="Let's Connect 🤝" />

        <div className='relative z-10 flex flex-col gap-5'>
          <p className='leading-9'>
            I&apos;m always excited to discuss new projects, collaborations, or
            opportunities. Whether you have a question, a project idea, or just
            want to say hi, feel free to reach out! I&apos;m just an email away
            and look forward to connecting with you.
          </p>

          <div className='flex flex-col gap-2'>
            <p>
              Say hello at&nbsp;
              <a
                href='mailto:oduchep@gmail.com'
                className='hover:border-secondary-default hover:text-secondary-default border-b'
              >
                oduchep@gmail.com
              </a>
            </p>
            <p>
              Or call me on&nbsp;
              <a
                href='tel:07066788234'
                className='hover:border-secondary-default hover:text-secondary-default border-b'
              >
                07066788234
              </a>
            </p>
            <p>
              For more info, here&apos;s&nbsp;
              <a
                href={externalRoutes?.RESUME}
                className='hover:border-secondary-default hover:text-secondary-default border-b'
                target='_blank'
                rel='noopener noreferrer'
              >
                my resume
              </a>
            </p>
          </div>

          <div className='relative z-10 flex items-center gap-5'>
            {social_links?.map((socials, index) => (
              <a
                key={index}
                href={socials.href}
                className='all__trans text-secondary-default text-xl hover:scale-125'
                target='_blank'
              >
                {socials?.icon}
              </a>
            ))}
          </div>
        </div>

        <Image
          src={SmokeImg}
          className='absolute -bottom-20'
          alt='smoke image'
        />
      </div>

      <form onSubmit={() => handleSubmit} className='flex flex-col gap-8'>
        <div>
          <label className='block'>Choose A Service</label>

          <div className='mt-4 flex items-center gap-4'>
            {services?.map((service, index) => (
              <span
                key={index}
                className='rounded-full border border-white px-5 py-1.5 text-sm font-medium'
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <Controller
          control={control}
          name='full_name'
          render={({ field }) => (
            <CustomInput
              label='Your Name'
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
            <CustomInput
              label='Your Email Address'
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
            <CustomTextArea
              label='Message'
              placeholder='Enter batch description'
              className='h-28'
              error={errors.message?.message}
              {...field}
            />
          )}
        />

        <CustomButton className='bg-secondary-default rounded-full text-[#0A0A0A] uppercase'>
          Contact Me
        </CustomButton>
      </form>
    </Wrapper>
  );
};

export default ConnectWithMe;
