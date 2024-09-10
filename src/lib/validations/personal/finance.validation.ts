import * as z from 'zod';

// Work Info
export const workInfoSchema = z.object({
  employerName: z.string().min(1, 'Employer Name is required'),
  monthlySalary: z.string().min(1, 'Salary is required'),
  paymentDate: z.string().min(1, 'Date is required'),
  isWorkEmailPresent: z.string().min(1, 'Response is required'),
});
export type TWorkInfo = z.infer<typeof workInfoSchema>;

// Rent Info
export const rentInfoSchema = z.object({
  annualRent: z.string().min(1, 'Annual rent is required'),
  rentDueDate: z.string().min(1, 'Rent due date is required'),
  typeOfHouse: z.string().min(1, 'Type of house is required'),
  houseAddress: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  housePictures: z.string().min(1, 'Image is required'),
  pastRentPictures: z.string().min(1, 'Past Rent is required'),
});
export type TRentInfo = z.infer<typeof rentInfoSchema>;

// Apply Loan
export const applyLoanSchema = z.object({
  loanReason: z.string().min(1, 'Loan Reason is required'),
  amountRequired: z.string().min(1, 'Amount is required'),
});
export type TApplyLoan = z.infer<typeof applyLoanSchema>;
