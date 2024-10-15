'use server';

import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

import { authOptions } from '@/lib/AuthOptions';
import { getErrorMessage } from '@/lib/responseError';

// Get Verification status
export async function getPersonalDetails() {
  const session = (await getServerSession(authOptions)) as any;
  const token = session?.accessToken;

  if (!token) {
    throw new Error('Unauthorized: No token found');
  }

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/user/get-user-profile`, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
      cache: 'reload',
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch personal details: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    getErrorMessage(error);
  }
}

// Update Profile
export async function updateProfile(formData: any) {
  const session = (await getServerSession(authOptions)) as any;
  const token = session?.accessToken;

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/user/update-user-profile`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify(formData),
    });

    revalidatePath(`${process.env.BACKEND_URL}/user/get-user-profile`);
    return response.json();
  } catch (error) {
    getErrorMessage(error);
  }
}

// Update Profile
export async function updatePassword(formData: any) {
  const session = (await getServerSession(authOptions)) as any;
  const token = session?.accessToken;

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/auth/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify(formData),
    });
    return response.json();
  } catch (error) {
    console.log(error);
    getErrorMessage(error);
  }
}

// Update Profile
export async function updatePin(formData: any) {
  const session = (await getServerSession(authOptions)) as any;
  const token = session?.accessToken;

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/auth/reset-transaction-pin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify(formData),
    });
    return response.json();
  } catch (error) {
    getErrorMessage(error);
  }
}
