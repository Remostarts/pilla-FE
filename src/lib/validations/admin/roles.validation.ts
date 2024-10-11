import { z } from 'zod';

export const AddNewUserSchema = z.object({
  access: z.string().min(1, 'Please select access level'),
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().min(1, 'Email is required').email('Enter valid email address'),
  users: z.boolean().default(false).optional(),
  transactions: z.boolean().default(false).optional(),
  savings: z.boolean().default(false).optional(),
  investment: z.boolean().default(false).optional(),
  website: z.boolean().default(false).optional(),
});

export type TAddNewUser = z.infer<typeof AddNewUserSchema>;
