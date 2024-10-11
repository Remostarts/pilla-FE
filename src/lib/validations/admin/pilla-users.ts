import { z } from 'zod';

export const editProfileSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First name is required' })
    .max(50, { message: 'First name must be less than 50 characters' }),
  lastName: z
    .string()
    .min(1, { message: 'Last name is required' })
    .max(50, { message: 'Last name must be less than 50 characters' }),
  emailAddress: z
    .string()
    .min(1, { message: 'Email address is required' })
    .email({ message: 'Email address is invalid' }),
  phoneNumber: z
    .string()
    .min(1, { message: 'Phone number is required' })
    .max(50, { message: 'Phone number must be less than 50 characters' }),
  address: z
    .string()
    .min(1, 'Address is required')
    .max(50, 'Address must be less than 50 characters'),
});

export type TEditProfile = z.infer<typeof editProfileSchema>;

// status schema

export const statusSchema = z.object({
  status: z.string().min(1, 'Status is required'),
});

export type TStatus = z.infer<typeof statusSchema>;
