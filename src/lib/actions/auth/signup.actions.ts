'use server';
import { getErrorMessage } from '@/lib/responseError';
import {
  passwordSchema,
  personalSignUpSchema,
  TPersonalSignup,
} from '@/lib/validations/userAuth.validations';
import { CreatePasswordParams, ResetPasswordParams } from '@/types/auth.type';

export async function partialSignup(formData: TPersonalSignup) {
  const validation = personalSignUpSchema.safeParse(formData);

  if (!validation.success) {
    let zodErrors = '';
    validation.error.issues.forEach((issue) => {
      zodErrors = zodErrors + issue.path[0] + ':' + issue.message + '.';
    });
    throw new Error(zodErrors);
  }

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/auth/create-partial-user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validation.data),
      cache: 'no-store',
    });

    return response.json();
  } catch (error) {
    getErrorMessage(error);
  }
}

export async function createPassword(formData: CreatePasswordParams) {
  const validation = passwordSchema.safeParse(formData);

  if (!validation.success) {
    let zodErrors = '';
    validation.error.issues.forEach((issue) => {
      zodErrors = zodErrors + issue.path[0] + ':' + issue.message + '.';
    });
    throw new Error(zodErrors);
  }

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        emailVerificationCode: formData.emailVerificationCode,
        role: formData.customerType,
      }),
      cache: 'no-store',
    });

    return response.json();
  } catch (error) {
    return getErrorMessage(error);
  }
}

export async function sendForgetPasswordOtp(email: string) {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/auth/forget-password-otp-send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to send verification code');
    }

    return response.json();
  } catch (error) {
    return getErrorMessage(error);
  }
}

export async function resetPassword(data: ResetPasswordParams) {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/auth/forget-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to reset password');
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: getErrorMessage(error) };
  }
}
