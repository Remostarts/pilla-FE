import { TPassword } from '@/lib/validations/userAuth.validations';

export type ResetPasswordParams = {
  email: string;
  emailVerificationCode: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type CreatePasswordParams = TPassword & {
  email: string;
  emailVerificationCode: string;
  role: string;
};
