import { z } from 'zod';

// Profile information tab schema
export const AdminProfileInformationSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().min(1, 'Email is required').email('Enter valid email address'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
});

export type TAdminProfileInformation = z.infer<typeof AdminProfileInformationSchema>;

// password requirements schema
const passwordRequirements = z
  .string()
  .min(8, 'Password must be at least 8 characters long')
  .max(100, 'Password cannot exceed 100 characters')
  .refine(
    (password) => {
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[@$!%*?&]/.test(password);
      return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    },
    {
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    }
  );

// change password tab schema
export const AdminChangePasswordSchema = z
  .object({
    oldPassword: z.string().min(1, 'Old Password is required'),
    newPassword: passwordRequirements,
    confirmPassword: passwordRequirements,
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
  .refine((data) => data.oldPassword !== data.newPassword, {
    message: 'New password must be different from the old password',
    path: ['newPassword'],
  });

export type TAdminChangePassword = z.infer<typeof AdminChangePasswordSchema>;
