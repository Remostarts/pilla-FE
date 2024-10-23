import * as z from 'zod';

// const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
// const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

// profile form schema
export const profileSchema = z.object({
  profile: z.object({
    category: z.enum(['landlord', 'developer', 'realEstate']),
    landlordManager: z
      .object({
        gender: z.enum(['male', 'female', 'other'], {
          required_error: 'Please select a gender',
        }),
        dob: z.date({
          required_error: 'Date of birth is required',
        }),
        address: z.string({ message: 'Address is required' }).min(1, 'Address is required'),
        city: z.string({ message: 'City is required' }).min(1, 'City is required'),
        state: z.string({ message: 'State is required' }).min(1, 'State is required'),
        identificationDocument: z.any().optional(),
        proofOfAddress: z.any().optional(),
      })
      .optional(),
    propertyDeveloper: z
      .object({
        businessName: z
          .string({ message: 'Business name is required' })
          .min(1, 'Business name is required'),
        businessType: z
          .string({ message: 'Business type is required' })
          .min(1, 'Business type is required'),
        registrationType: z
          .string({
            message: 'Registration type is required',
          })
          .min(1, 'Registration type is required'),
      })
      .optional(),
  }),
});

// property details form schema
export const propertyDetailsSchema = z.object({
  propertyDetails: z
    .array(
      z.object({
        address: z.string({ required_error: 'Address is required' }).min(1, 'Address is required'),
        city: z.string({ required_error: 'City is required' }).min(1, 'City is required'),
        state: z.string({ required_error: 'State is required' }).min(1, 'State is required'),
        CofO: z.string().min(1, 'CofO is required'),
        typeOfProperty: z
          .string({ required_error: 'Type of property is required' })
          .min(1, 'Type of property is required'),
      })
    )
    .min(1, 'At least one property is required'),
});

// bank verification form schema
export const bankVerificationSchema = z.object({
  bankVerification: z.object({
    bvn: z
      .string({ required_error: 'BVN is required' })
      .min(11, 'BVN must be at least 11 characters'),
    bankName: z.string({ required_error: 'Bank name is required' }).min(1, 'Bank name is required'),
    accountNumber: z
      .string({ required_error: 'Account number is required' })
      .min(10, 'Account number must be at least 10 characters'),
  }),
});

// nextOfKin form schema
export const nextOfKinSchema = z.object({
  nextOfKin: z.object({
    firstName: z
      .string({ required_error: 'First name is required' })
      .min(1, 'First name is required'),
    lastName: z.string({ required_error: 'Last name is required' }).min(1, 'Last name is required'),
    gender: z.enum(['male', 'female', 'other'], {
      required_error: 'Please select a gender',
    }),
    relationship: z
      .string({ required_error: 'Relationship is required' })
      .min(1, 'Relationship is required'),
    phoneNumber: z
      .string({ required_error: 'Phone number is required' })
      .min(10, 'Phone number must be at least 10 characters'),
    email: z.string({ required_error: 'Email is required' }).email('Invalid email address'),
  }),
});

// identity verification form schema

export const identityVerificationSchema = z.object({
  identityVerification: z.object({
    identityDocument: z
      .string({ required_error: 'Identity document is required' })
      .min(1, 'Identity document is required'),
    ownershipProof: z.any().optional(),
  }),
});

// account information form schema
export const accountInformationSchema = z.object({
  accountInformation: z.object({
    bvn: z.string({ required_error: 'BVN is required' }).min(1, 'BVN is required'),
    bankName: z.string({ required_error: 'Bank name is required' }).min(1, 'Bank name is required'),
    accountNumber: z
      .string({ required_error: 'Account number is required' })
      .min(1, 'Account number is required'),
    accountName: z
      .string({ required_error: 'Account name is required' })
      .min(1, 'Account name is required'),
  }),
});

// business profile form schema
export const businessProfileSchema = z.object({
  businessProfile: z.object({
    businessName: z
      .string({ required_error: 'Business name is required' })
      .min(1, 'Business name is required'),
    businessType: z
      .string({ required_error: 'Business type is required' })
      .min(1, 'Business type is required'),
    registrationType: z
      .string({ required_error: 'Registration type is required' })
      .min(1, 'Registration type is required'),
  }),
});

// contact form schema
export const contactSchema = z.object({
  contact: z.object({
    supportEmail: z.string({ required_error: 'Email is required' }).email('Invalid email address'),
    supportNumber: z
      .string({ required_error: 'Phone number is required' })
      .min(1, 'Phone number is required'),
    website: z.string({ required_error: 'Website is required' }).min(1, 'Website is required'),
    address: z.string({ required_error: 'Address is required' }).min(1, 'Address is required'),
    city: z.string({ required_error: 'City is required' }).min(1, 'City is required'),
    state: z.string({ required_error: 'State is required' }).min(1, 'State is required'),
    proofOfAddress: z.string().min(1, 'Proof of Address is required'),
  }),
});

// full form schema
export const fullSchema = z.discriminatedUnion('category', [
  z.object({
    category: z.literal('landlord'),
    profile: profileSchema.shape.profile,
    propertyDetails: propertyDetailsSchema.shape.propertyDetails,
    bankVerification: bankVerificationSchema.shape.bankVerification,
    nextOfKin: nextOfKinSchema.shape.nextOfKin,
  }),
  z.object({
    category: z.literal('developer'),
    profile: profileSchema.shape.profile,
    identityVerification: identityVerificationSchema.shape.identityVerification,
    accountInformation: accountInformationSchema.shape.accountInformation,
    contact: contactSchema.shape.contact,
  }),
  z.object({
    category: z.literal('realEstate'),
    profile: profileSchema.shape.profile,
    businessProfile: businessProfileSchema.shape.businessProfile,
    contact: contactSchema.shape.contact,
    accountInformation: accountInformationSchema.shape.accountInformation,
  }),
]);

// form values type
export type FormValues = z.infer<typeof fullSchema>;
