import z from 'zod';

export const newPaymentLinkSchema = z.object({
  customerName: z.string().min(1, { message: 'Name is required' }),
  description: z
    .string()
    .min(10, {
      message: 'Description must be at least 10 characters.',
    })
    .max(160, {
      message: 'Description must not be longer than 30 characters.',
    }),
  amount: z.string().min(1, { message: 'Amount is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email('Enter valid email address'),
  phone: z.string().min(1, { message: 'Phone Number is required' }),
});

export type TNewPaymentLink = z.infer<typeof newPaymentLinkSchema>;
