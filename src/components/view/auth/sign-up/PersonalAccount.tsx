'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

import Stepper from '@/components/ui/stepper';
import FillDetails from '@/components/view/auth/sign-up/FillDetails';
import VerifyEmail from '@/components/view/auth/sign-up/VerifyEmail';
// import VerifyPhone from '@/components/view/auth/sign-up/VerifyPhone';
import CreatePassword from '@/components/view/auth/sign-up/CreatePassword';
import { useSearchParamsHandler } from '@/hooks/useSearchParamsHandler';

export default function PersonalAccount() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentStep = Number(searchParams.get('step'));
  const previousStep = currentStep - 1;

  const goBack = useSearchParamsHandler();

  const handleNavigateBack = () => {
    if (currentStep > 1) {
      goBack('step', String(previousStep));
    }
    if (currentStep === 1) {
      router.push('/sign-up');
    }
  };

  return (
    <div className="mx-auto mb-20 mt-10 max-w-2xl px-6 sm:mt-12 md:px-10 lg:px-12">
      <button className="mb-4 flex items-center gap-2" onClick={handleNavigateBack}>
        <ArrowLeft />
        <span className="font-inter text-xl font-semibold">Back</span>
      </button>

      <div className="rounded-lg border bg-white px-10 py-8">
        <Stepper totalSteps={3} currentStep={currentStep} className="mb-4" />

        {currentStep === 1 && <FillDetails />}
        {currentStep === 2 && <VerifyEmail />}
        {/* {currentStep === 3 && <VerifyPhone />} */}
        {currentStep === 3 && <CreatePassword />}
      </div>
    </div>
  );
}
