'use client';

import React, { useState } from 'react';
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
import { Wrapper } from '../sections/layout';
import {
  contactFormSchema,
  contactServices,
  type ContactFormValues,
} from '@/schema/contactFormSchema';

const ConnectWithMe = () => {
  const social_links = [
    { icon: <FaGithub />, href: externalRoutes.GITHUB, label: 'GitHub' },
    { icon: <FaLinkedin />, href: externalRoutes.LINKEDIN, label: 'LinkedIn' },
    { icon: <FaXTwitter />, href: externalRoutes.TWITTER, label: 'Twitter/X' },
  ];

  const [submitMessage, setSubmitMessage] = useState<{
    type: 'idle' | 'success' | 'error';
    text: string;
  }>({
    type: 'idle',
    text: '',
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      full_name: '',
      email: '',
      service: 'Hiring',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitMessage({ type: 'idle', text: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(
          data.message || 'Something went wrong while sending your message.'
        );
      }

      reset({
        full_name: '',
        email: '',
        service: 'Hiring',
        message: '',
      });
      setSubmitMessage({
        type: 'success',
        text: data.message || 'Your message has been sent successfully.',
      });
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text:
          error instanceof Error
            ? error.message
            : 'Something went wrong while sending your message.',
      });
    }
  };

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
                className='dark:hover:border-secondary-default dark:hover:text-secondary-default hover:border-primary-default border-b hover:text-blue-500'
              >
                oduchep@gmail.com
              </a>
            </p>
            <p>
              Or call me on&nbsp;
              <a
                href='tel:07066788234'
                className='dark:hover:border-secondary-default dark:hover:text-secondary-default hover:border-primary-default border-b hover:text-blue-500'
              >
                07066788234
              </a>
            </p>
            <p>
              For more info, here&apos;s&nbsp;
              <a
                href={externalRoutes?.RESUME}
                className='dark:hover:border-secondary-default dark:hover:text-secondary-default hover:border-primary-default border-b hover:text-blue-500'
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
                aria-label={socials.label}
                className='all__trans text-tertiary-default dark:text-secondary-default text-xl hover:scale-125'
                target='_blank'
                rel='noopener noreferrer'
              >
                {socials?.icon}
              </a>
            ))}
          </div>
        </div>

        <Image
          src={SmokeImg}
          className='absolute -bottom-20 opacity-70'
          alt='smoke image'
        />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-8 rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-8 dark:border-white/10 dark:bg-white/4'
      >
        <div>
          <label className='block font-medium text-slate-700 dark:text-white/90'>
            Choose A Service
          </label>

          <Controller
            control={control}
            name='service'
            render={({ field }) => (
              <div className='mt-4 flex flex-wrap items-center gap-3'>
                {contactServices.map((service) => {
                  const isActive = field.value === service;

                  return (
                    <button
                      key={service}
                      type='button'
                      onClick={() => field.onChange(service)}
                      className={`all__trans rounded-full border px-5 py-1.5 text-sm font-medium ${
                        isActive
                          ? 'border-tertiary-default bg-tertiary-default dark:border-secondary-default dark:bg-secondary-default dark:text-primary-default text-white'
                          : 'border-slate-300 bg-slate-50 text-slate-700 hover:border-slate-400 hover:bg-slate-100 dark:border-white/12 dark:bg-white/5 dark:text-white dark:hover:bg-white/8'
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            )}
          />

          {errors.service?.message && (
            <p className='mt-2 ml-1 text-sm text-red-500'>
              {errors.service.message}
            </p>
          )}
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
              required
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
              required
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
              placeholder='Tell me a little about your project or what you need help with'
              className='h-28'
              error={errors.message?.message}
              required
              {...field}
            />
          )}
        />

        {submitMessage.text && (
          <p
            className={`rounded-2xl border px-4 py-3 text-sm ${
              submitMessage.type === 'success'
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300'
                : 'border-red-200 bg-red-50 text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300'
            }`}
          >
            {submitMessage.text}
          </p>
        )}

        <CustomButton
          type='submit'
          loading={isSubmitting}
          className='bg-tertiary-default dark:bg-secondary-default dark:text-primary-default rounded-full text-white uppercase'
        >
          Send Message
        </CustomButton>

        <p className='text-sm leading-6 text-slate-500 dark:text-white/60'>
          Messages go directly to&nbsp;
          <span className='font-medium'>oduchep@gmail.com</span>.
        </p>
      </form>
    </Wrapper>
  );
};

export default ConnectWithMe;
