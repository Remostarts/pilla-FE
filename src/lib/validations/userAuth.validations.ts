import * as z from 'zod';

export const personalSignUpSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  middleName: z.string().optional(),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  referralCode: z.string().optional(),
});

export const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .regex(/[A-Z]/, 'Password must contain at least one upper case letter')
      .regex(/[a-z]/, 'Password must contain at least one lower case letter')
      .regex(
        /[0-9!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least one number or special character'
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type PasswordFormData = z.infer<typeof passwordSchema>;

export type PersonalSignUpFormData = z.infer<typeof personalSignUpSchema>;
