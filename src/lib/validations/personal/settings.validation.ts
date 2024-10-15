import * as z from 'zod';

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'Current Password is required'),
    newPassword: z.string().min(1, 'New Password is required'),
    confirmNewPassword: z.string().min(1, 'Confirm Password is required'),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
    path: ['confirmNewPassword'],
  });

export type TChangePassword = z.infer<typeof changePasswordSchema>;

export const changePinSchema = z
  .object({
    currentTransactionPin: z.string().min(1, 'Current Pin is required'),
    newTransactionPin: z.string().min(1, 'New Password is required'),
    confirmNewTransactionPin: z.string().min(1, 'Confirm Password is required'),
  })
  .refine((data) => data.newTransactionPin === data.confirmNewTransactionPin, {
    message: "Pin don't match",
    path: ['confirmNewTransactionPin'],
  });

export type TChangePin = z.infer<typeof changePinSchema>;
