import * as z from 'zod';

// Pilla Savings

// Common
export const amountSchema = z.object({
  amount: z.string().min(1, 'Amount is required'),
});
export type TAmount = z.infer<typeof amountSchema>;

// Regular Savings
export const withdrawSchema = z.object({
  amount: z.string().min(1, 'Amount is required'),
  withdrawTo: z.string().min(1, 'Withdraw To is required'),
  bank: z.string().min(1, 'Bank is required'),
  accountNumber: z.string().min(1, 'Account number is required'),
  accountName: z.string().min(1, 'Account name is required'),
});
export type TWithdraw = z.infer<typeof withdrawSchema>;

// Target Savings
export const targetSchema = z.object({
  targetSavingsName: z.string().min(1, 'Name is required'),
  reason: z.string().min(1, 'Reason is required'),
});
export type TTarget = z.infer<typeof targetSchema>;

export const targetLastStepSchema = z.object({
  startDate: z.string().min(1, 'Start Date is required'),
  withdrawlDate: z.string().min(1, 'Withdrawl Date is required'),
});
export type TTargetLastStep = z.infer<typeof targetLastStepSchema>;

// Lock Savings
export const lockSchema = z.object({
  lockSavingsName: z.string().min(1, 'Name is required'),
  reason: z.string().min(1, 'Reason is required'),
});
export type TLock = z.infer<typeof lockSchema>;

export const lockLastStepSchema = z.object({
  targetAmount: z.string().min(1, 'Amount is required'),
  period: z.string().min(1, 'Period is required'),
});
export type TLockLastStep = z.infer<typeof lockLastStepSchema>;
