import { z } from 'zod';

// create investment schema
export const createInvestmentSchema = z.object({
  accountType: z.string().min(1, 'Account type is required'),
  uploadBanner: z.any().optional(),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  unitPrice: z.string().min(1, 'Unit price is required'),
  interest: z.string().min(1, 'Interest is required'),
  period: z.string().min(1, 'Period is required'),
});

export type TCreateInvestment = z.infer<typeof createInvestmentSchema>;

// edit investment schema
export const editInvestmentSchema = z.object({
  uploadBanner: z.any().optional(),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  unitPrice: z.string().min(1, 'Unit price is required'),
  interest: z.string().min(1, 'Interest is required'),
  period: z.string().min(1, 'Period is required'),
});

export type TEditInvestment = z.infer<typeof editInvestmentSchema>;
