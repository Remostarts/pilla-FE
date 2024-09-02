import * as z from 'zod';

// Verification Status

// BVN Verification
export const bvnVerificationSchema = z.object({
  bvnVerificationNumber: z.string().min(1, 'Bank verification number is required'),
  gender: z.string().min(1, 'Gender is required'),
  dateOfBirth: z.string().min(1, 'Date of Birth is required'),
});
export type TBvnVerification = z.infer<typeof bvnVerificationSchema>;

// Identity Verification
export const identityVerificationSchema = z.object({
  ninNumber: z.string().min(1, 'NIN number is required'),
  idType: z.string().min(1, 'ID Type is required'),
  idNumber: z.string().min(1, 'ID Number is required'),
  idImage: z.string().min(1, 'ID Image is required'),
});
export type TIdentityVerification = z.infer<typeof identityVerificationSchema>;

// Proof of Address
export const proofOfAddressSchema = z.object({
  address: z.string().min(1, 'Address is required'),
  state: z.string().min(1, 'State is required'),
  localGov: z.string().min(1, 'Local Government is required'),
  city: z.string().min(1, 'City is required'),
  docType: z.string().min(1, 'Doc Type is required'),
  docImage: z.string().min(1, 'Doc Image is required'),
});
export type TProofOfAddress = z.infer<typeof proofOfAddressSchema>;

// Proof of Address
export const nextOfKinSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  gender: z.string().min(1, 'Gender is required'),
  relationship: z.string().min(1, 'Relationship is required'),
  phoneNumber: z.string().min(1, 'Phone Number is required'),
  email: z.string().min(1, 'Email Address is required'),
  address: z.string().min(1, 'Address is required'),
  state: z.string().min(1, 'State is required'),
  localGov: z.string().min(1, 'Local Government is required'),
  city: z.string().min(1, 'City is required'),
});
export type TNextOfKin = z.infer<typeof nextOfKinSchema>;

// Utility Bill

// Power
export const powerSchema = z.object({
  biller: z.string().min(1, 'Biller is required'),
  meterNumber: z.string().min(1, 'Meter Number is required'),
  amount: z.string().min(1, 'Amount is required'),
  phoneNumber: z.string().min(1, 'Phone Number is required'),
  email: z.string().min(1, 'Email address is required'),
});
export type TPower = z.infer<typeof powerSchema>;

// Airtime
export const airtimeSchema = z.object({
  networkProvider: z.string().min(1, 'Network Provider is required'),
  phoneNumber: z.string().min(1, 'Phone Number is required'),
  amount: z.string().min(1, 'Amount is required'),
});
export type TAirtime = z.infer<typeof airtimeSchema>;

// Data
export const dataSchema = z.object({
  networkProvider: z.string().min(1, 'Network Provider is required'),
  package: z.string().min(1, 'Package is required'),
  phoneNumber: z.string().min(1, 'Phone Number is required'),
  amount: z.string().min(1, 'Amount is required'),
});
export type TData = z.infer<typeof dataSchema>;

// Cable
export const cableSchema = z.object({
  provider: z.string().min(1, 'Provider is required'),
  package: z.string().min(1, 'Package is required'),
  amount: z.string().min(1, 'Amount is required'),
  smartCardNumber: z.string().min(1, 'Smart Card Number is required'),
});
export type TCable = z.infer<typeof cableSchema>;

// Water
export const waterSchema = z.object({
  provider: z.string().min(1, 'Provider is required'),
  customerAccountNumber: z.string().min(1, 'Customer Account Number is required'),
  amount: z.string().min(1, 'Amount is required'),
});
export type TWater = z.infer<typeof waterSchema>;

// Waste
export const wasteSchema = z.object({
  provider: z.string().min(1, 'Provider is required'),
  customerAccountNumber: z.string().min(1, 'Customer Account Number is required'),
  amount: z.string().min(1, 'Amount is required'),
});
export type TWaste = z.infer<typeof wasteSchema>;

// Pay Rent
export const payRentSchema = z.object({
  pillaAccountNumber: z.string().min(1, 'Pilla Account Number is required'),
  beneficiaryName: z.string().min(1, 'Beneficiary Name is required'),
  amount: z.string().min(1, 'Amount is required'),
  narration: z.string().min(1, 'Narration is required'),
});
export type TPayRent = z.infer<typeof payRentSchema>;

// Send Money Pilla Account
export const sendMoneyPillaSchema = z.object({
  accountNumber: z.string().min(1, 'Account Number is required'),
  beneficiaryName: z.string().min(1, 'Beneficiary Name is required'),
  amount: z.string().min(1, 'Amount is required'),
  narration: z.string().min(1, 'Narration is required'),
});
export type TSendMoneyPilla = z.infer<typeof sendMoneyPillaSchema>;

// Send Money Bank Account
export const sendMoneyBankSchema = z.object({
  bank: z.string().min(1, 'Bank is required'),
  accountNumber: z.string().min(1, 'Account Number is required'),
  beneficiaryName: z.string().min(1, 'Beneficiary Name is required'),
  amount: z.string().min(1, 'Amount is required'),
  narration: z.string().min(1, 'Narration is required'),
});
export type TSendMoneyBank = z.infer<typeof sendMoneyBankSchema>;

// Add Card
export const addCardSchema = z.object({
  cardholderName: z.string().min(1, 'Card holder name is required'),
  cardNumber: z.string().min(1, 'Card Number is required'),
  expiryDate: z.string().min(1, 'Expiry Date is required'),
  cvv: z.string().min(1, 'CVV is required'),
});
export type TAddCard = z.infer<typeof addCardSchema>;
