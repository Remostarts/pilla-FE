import { z } from 'zod';

// Profile settings form schema
export const profileSettingsSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().min(1, 'Email is required').email('Enter valid email address'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
});
export type TProfileSettings = z.infer<typeof profileSettingsSchema>;

// business information form schema

export const businessInformationSchema = z.object({
  businessName: z.string().min(1, 'Business name is required'),
  businessAddress: z.string().min(1, 'Business address is required'),
  businessType: z.string().min(1, 'Business type is required'),
  industry: z.string().min(1, 'Industry is required'),
  registrationType: z.string().min(1, 'Registration type is required'),
});
export type TBusinessInformation = z.infer<typeof businessInformationSchema>;

// support channel form schema
export const supportChannelSchema = z.object({
  supportEmail: z.string().min(1, 'Email is required').email('Enter valid email address'),
  supportPhone: z.string().min(1, 'Phone number is required'),
});
export type TSupportChannel = z.infer<typeof supportChannelSchema>;

// Settlement account form schema
export const settlementAccountSchema = z.object({
  bankName: z.string().min(1, 'Bank name is required'),
  accountName: z.string().min(1, 'Account name is required'),
  accountNumber: z.string().min(1, 'Account number is required'),
});
export type TSettlementAccount = z.infer<typeof settlementAccountSchema>;

// Construction finance business information form schema
export const constructionBusinessInformationSchema = z.object({
  tin: z.string().min(1, 'TIN name is required'),
  revenue: z.string().min(1, 'Revenue address is required'),
  projects: z.string().min(1, 'Projects are required'),
  certificateOfIncorporation: z.any().optional(),
  memorandumAndArticlesOfAssociationFormC07: z.any().optional(),
  buildersProfessionalLicense: z.any().optional(),
  boardResolution: z.any().optional(),
});
export type TConstructionBusinessInformation = z.infer<
  typeof constructionBusinessInformationSchema
>;

// Construction details form schema
export const constructionDetailsSchema = z.object({
  propertyType: z.string().min(1, 'Property Type is required'),
  addressOfProperty: z.string().min(1, 'AddressOfProperty is required'),
  descriptionOfConstructionProject: z.string().min(1, 'Description is required'),
  timeline: z.string().min(1, 'Timeline is required'),
  cost: z.string().min(1, 'Cost is required'),
});
export type TConstructionDetails = z.infer<typeof constructionDetailsSchema>;

// Construction Stage Details form schema
export const constructionStageDetailsSchema = z.object({
  buildingStage: z.string().min(1, 'Building Stage is required'),
  loanAmountRequested: z.string().min(1, 'Loan Amount is required'),
  invoiceAmount: z.string().min(1, 'Invoice Amount is required'),
  fullName: z.string().min(1, 'Full Name is required'),
  phoneNumber: z.string().min(1, 'Phone Number is required'),
  emailAddress: z.string().min(1, 'Email Address is required').email('Enter valid email address'),
  bankName: z.string().min(1, 'Bank Name is required'),
  bankAccountNumber: z.string().min(1, 'Bank Account Number is required'),
  invoice: z.any().optional(),
  uploadBanner: z.any().optional(),
});
export type TConstructionStageDetails = z.infer<typeof constructionStageDetailsSchema>;

// Loan Details form schema

export const loanDetailsSchema = z.object({
  purpose: z.string().min(1, 'Purpose is required'),
  loanAmount: z.string().min(1, 'Loan Amount is required'),
  loanAmountTenure: z.string().min(1, 'Loan Amount Tenure is required'),
  collateral: z.string().min(1, 'Collateral is required'),
  estimateValueOfCollateral: z.string().min(1, 'Estimate Value of Collateral is required'),
  collateralPages: z.any().optional(),
});
export type TLoanDetails = z.infer<typeof loanDetailsSchema>;

// mobile: z.boolean().default(false).optional(),
