import * as yup from 'yup';
import { emailRegex } from './schemaRegex';

const contactServices = ['Hiring', 'Collaboration', 'Tutoring'] as const;

const contactFormSchema = yup.object({
  full_name: yup.string().trim().required('Your name is required'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .matches(emailRegex, 'Invalid email format')
    .required('Email is required'),
  service: yup
    .string()
    .oneOf(contactServices, 'Choose a service')
    .required('Choose a service'),
  message: yup
    .string()
    .trim()
    .min(10, 'Please share a bit more detail')
    .required('Message is required'),
});

type ContactFormValues = yup.InferType<typeof contactFormSchema>;

export { contactFormSchema, contactServices };
export type { ContactFormValues };
