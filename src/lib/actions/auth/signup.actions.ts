'use server';
import { getErrorMessage } from '@/lib/responseError';
import { personalSignUpSchema, TPersonalSignup } from '@/lib/validations/userAuth.validations';

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
