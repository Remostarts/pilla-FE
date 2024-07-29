import * as z from 'zod';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d@$!%*?&#]{6,100}$/;

const phoneNumberRegex = /^(017|018|019|016|015|014|013)\d{8}$/;

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const userLoginSchema = z.object({
  email: z.string().email().min(2, {
    message: 'please use valid email.',
  }),
  password: z.string().min(6, { message: 'invalid password..' }).max(100),
});

export const userRegisterSchema = z
  .object({
    firstName: z
      .string()
      .min(3, { message: 'Your first name should not be that short!' })
      .max(100)
      .trim(),
    lastName: z
      .string()
      .min(3, { message: 'Your last name should not be that short!' })
      .max(100)
      .trim(),

    email: z.string().email().trim().regex(emailRegex, 'Invalid email format'),
    phoneNumber: z.string().trim().regex(phoneNumberRegex, 'Invalid phone number'),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(6, 'Password too short - should be 6 chars minimum')
      .max(100, 'Password too long - should be 100 chars maximum')
      .trim(),
    // .regex(passwordRegex, 'Invalid password format'),
    confirmPassword: z
      .string({
        required_error: 'Confirm password is required',
      })
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });
export type TUserRegisterInput = z.infer<typeof userRegisterSchema>;
