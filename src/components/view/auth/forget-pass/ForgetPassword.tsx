'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

import FillEmail from '@/components/view/auth/forget-pass/FillEmail';
import VerifyEmail from '@/components/view/auth/sign-up/VerifyEmail';
import ResetPasswordPersonal from '@/components/view/auth/forget-pass/ResetPasswordPersonal';
import { useSearchParamsHandler } from '@/hooks/useSearchParamsHandler';

export default function ForgetPassword() {
  const searchParams = useSearchParams();
  const currentStep = Number(searchParams.get('step'));
  const previousStep = currentStep - 1;
  const router = useRouter();

  const goBack = useSearchParamsHandler();

  const handleNavigateBack = () => {
    if (currentStep > 1) {
      goBack('step', String(previousStep));
    }
    if (currentStep === 1) {
      router.push('/personal-account/sign-in');
    }
  };

  return (
    <>
      <div className="mb-4 flex items-center">
        <button className="mb-2 flex items-center gap-2" onClick={handleNavigateBack}>
          <ArrowLeft />
          <span className="font-inter text-xl font-semibold">Back</span>
        </button>
      </div>
      {currentStep === 1 && <FillEmail />}
      {currentStep === 2 && (
        <div className="rounded-xl border px-8 py-12">
          <VerifyEmail />
        </div>
      )}
      {currentStep === 3 && (
        <div className="rounded-xl border px-8 py-12">
          <ResetPasswordPersonal />
        </div>
      )}

      <Link
        href="/personal-account/sign-in"
        className="mt-6 flex justify-center font-inter font-medium text-gray-800"
      >
        Back to Sign in
      </Link>
    </>
  );
}
