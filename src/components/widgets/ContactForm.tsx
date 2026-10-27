'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowRight } from 'react-icons/fi';

import { Button, CustomInput, CustomTextArea } from '@/components/elements';
import {
  contactFormSchema,
  contactServices,
  type ContactFormValues,
} from '@/schema/contactFormSchema';

const emptyValues: ContactFormValues = {
  full_name: '',
  email: '',
  service: 'Hiring',
  message: '',
};

type Status = { type: 'idle' | 'success' | 'error'; text: string };

const ContactForm = () => {
  const [status, setStatus] = useState<Status>({ type: 'idle', text: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactFormSchema),
    defaultValues: emptyValues,
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus({ type: 'idle', text: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(
          data.message || 'Something went wrong while sending your message.'
        );
      }

      reset(emptyValues);
      setStatus({
        type: 'success',
        text: data.message || 'Thanks — your message is on its way.',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        text:
          error instanceof Error
            ? error.message
            : 'Something went wrong while sending your message.',
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className='flex flex-col gap-8'
    >
      <fieldset>
        <legend className='text-muted font-mono text-xs'>
          What&apos;s this about?
        </legend>
        <div className='mt-3 flex flex-wrap gap-2'>
          {contactServices.map((service) => (
            <label key={service} className='cursor-pointer'>
              <input
                type='radio'
                value={service}
                className='peer sr-only'
                {...register('service')}
              />
              <span className='border-line-strong text-muted peer-checked:border-fg peer-checked:bg-fg peer-checked:text-bg peer-focus-visible:outline-accent-ink hover:text-fg inline-flex h-9 items-center rounded-full border px-4 text-sm transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2'>
                {service}
              </span>
            </label>
          ))}
        </div>
        {errors.service?.message && (
          <p className='mt-2 text-sm text-red-600 dark:text-red-400'>
            {errors.service.message}
          </p>
        )}
      </fieldset>

      <div className='grid gap-8 sm:grid-cols-2'>
        <CustomInput
          label='Name'
          autoComplete='name'
          placeholder='Ada Lovelace'
          required
          error={errors.full_name?.message}
          {...register('full_name')}
        />
        <CustomInput
          label='Email'
          type='email'
          autoComplete='email'
          placeholder='ada@company.com'
          required
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <CustomTextArea
        label='Message'
        placeholder='A little about the product, the team, and the timeline.'
        required
        error={errors.message?.message}
        {...register('message')}
      />

      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <Button type='submit' disabled={isSubmitting} className='sm:w-auto'>
          {isSubmitting ? 'Sending…' : 'Send message'}
          {!isSubmitting && (
            <FiArrowRight
              aria-hidden
              className='transition-transform group-hover:translate-x-0.5'
            />
          )}
        </Button>

        <p
          role='status'
          className={`text-sm ${
            status.type === 'success'
              ? 'text-accent-ink'
              : status.type === 'error'
                ? 'text-red-600 dark:text-red-400'
                : 'sr-only'
          }`}
        >
          {status.text}
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
