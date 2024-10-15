import * as z from 'zod';

export const planSchema = z.object({
  amount: z.string().min(1, 'Amount is required'),
  period: z.string().min(1, 'Period is required'),
});
export type TPlan = z.infer<typeof planSchema>;
