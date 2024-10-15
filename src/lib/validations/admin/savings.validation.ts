import { z } from 'zod';

export const addSavingPlanSchema = z.object({
  accountType: z.string().min(1, 'Account type is required'),
  title: z.string().min(1, 'Title is required'),
  interest: z.string().min(1, 'Interest is required'),
});

export type TAddSavingPlan = z.infer<typeof addSavingPlanSchema>;
