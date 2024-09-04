'use server';

import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/AuthOptions';
import { getErrorMessage } from '@/lib/responseError';
import {
  bvnVerificationSchema,
  identityVerificationSchema,
  nextOfKinSchema,
  proofOfAddressSchema,
  TBvnVerification,
  TIdentityVerification,
  TNextOfKin,
  TProofOfAddress,
} from '@/lib/validations/personal/home.validation';
import { PinType } from '@/types/personalDashBHome.type';

// Bvn Verification
export async function bvnVerification(formData: TBvnVerification) {
  const validation = bvnVerificationSchema.safeParse(formData);
  const session = (await getServerSession(authOptions)) as any;
  const token = session?.accessToken;

  if (!validation.success) {
    let zodErrors = '';
    validation.error.issues.forEach((issue) => {
      zodErrors = zodErrors + issue.path[0] + ':' + issue.message + '.';
    });
    throw new Error(zodErrors);
  }

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/user/verify-bvn`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify(validation.data),
    });

    return response.json();
  } catch (error) {
    getErrorMessage(error);
  }
}

// Identity Verification
export async function identityVerification(formData: TIdentityVerification) {
  const validation = identityVerificationSchema.safeParse(formData);
  const session = (await getServerSession(authOptions)) as any;
  const token = session?.accessToken;

  if (!validation.success) {
    let zodErrors = '';
    validation.error.issues.forEach((issue) => {
      zodErrors = zodErrors + issue.path[0] + ':' + issue.message + '.';
    });
    throw new Error(zodErrors);
  }

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/user/verify-id`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify(validation.data),
    });

    return response.json();
  } catch (error) {
    getErrorMessage(error);
  }
}

// Proof of address verification
export async function proofOfAddressVerification(formData: TProofOfAddress) {
  const validation = proofOfAddressSchema.safeParse(formData);
  const session = (await getServerSession(authOptions)) as any;
  const token = session?.accessToken;

  if (!validation.success) {
    let zodErrors = '';
    validation.error.issues.forEach((issue) => {
      zodErrors = zodErrors + issue.path[0] + ':' + issue.message + '.';
    });
    throw new Error(zodErrors);
  }

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/user/verify-address`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify(validation.data),
    });

    return response.json();
  } catch (error) {
    getErrorMessage(error);
  }
}

// Next of kin verification
export async function nextOfKinVerification(formData: TNextOfKin) {
  const validation = nextOfKinSchema.safeParse(formData);
  const session = (await getServerSession(authOptions)) as any;
  const token = session?.accessToken;

  if (!validation.success) {
    let zodErrors = '';
    validation.error.issues.forEach((issue) => {
      zodErrors = zodErrors + issue.path[0] + ':' + issue.message + '.';
    });
    throw new Error(zodErrors);
  }

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/user/add-next-of-kin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify(validation.data),
    });

    return response.json();
  } catch (error) {
    getErrorMessage(error);
  }
}

// Get Verification status
export async function getVerificationStatus() {
  const session = (await getServerSession(authOptions)) as any;
  const token = session?.accessToken;

  if (!token) {
    throw new Error('Unauthorized: No token found');
  }

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/user/getVerificationStatus`, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch verification status: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    getErrorMessage(error);
  }
}

// Create transaction pin
export async function createPin(formData: PinType) {
  const session = (await getServerSession(authOptions)) as any;
  const token = session?.accessToken;

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/user/setTransactionPin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: token },
      body: JSON.stringify(formData),
    });

    return response.json();
  } catch (error) {
    getErrorMessage(error);
  }
}
