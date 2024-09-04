import * as z from 'zod';

export const personalSignUpSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({
      message: 'Invalid email format.',
    })
    .trim(),

  phoneNumber: z
    .string({
      required_error: 'Phone number is required',
    })
    .min(10, 'Phone number must be at least 10 digits')
    .trim(),
  // .regex(phoneNumberRegex, 'Invalid phone number format.'),

  firstName: z
    .string({
      required_error: 'First name is required',
    })
    .trim()
    .min(3, 'firstName too short - should be 3 chars minimum')
    .max(100, 'firstName too long - should be 100 chars maximum'),

  middleName: z
    .string({
      required_error: 'First name is required',
    })
    .trim()
    .min(1, 'middleName too short - should be 1 chars minimum')
    .max(100, 'middleName too long - should be 100 chars maximum'),

  lastName: z
    .string({
      required_error: 'Last name is required',
    })
    .trim()
    .min(3, 'lastName too short - should be 3 chars minimum')
    .max(100, 'lastName too long - should be 100 chars maximum'),

  referralCode: z.string().optional(),
});

export type TPersonalSignup = z.infer<typeof personalSignUpSchema>;

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

export type TPassword = z.infer<typeof passwordSchema>;

export const userLoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export type UserLoginFormData = z.infer<typeof userLoginSchema>;
