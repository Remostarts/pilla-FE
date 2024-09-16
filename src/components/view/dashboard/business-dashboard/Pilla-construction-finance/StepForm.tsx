'use client';

import { useState } from 'react';

import CircularProgressBar from '../../shared/CircularProgressBar';

import BusinessInformationForm from './business-information/BusinessInformationForm';
import ConstructionDetails from './ConstructionDetails';
import ConstructionStageDetails from './ConstructionStageDetails';
import LoanDetails from './LoanDetails';
import LinkCorporateBankAccount from './LinkCorporateBankAccount';
import Declaration from './Declaration';

import { Button } from '@/components/ui/button';
import { ReButton } from '@/components/re-ui/ReButton';

export default function StepForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 6;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className=" w-full p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-spaceGrotesk text-2xl font-bold">
          {step === 1 && 'Business Information'}
          {step === 2 && 'Construction Details'}
          {step === 3 && 'Construction Stage Details'}
          {step === 4 && 'Loan Details'}
          {step === 5 && 'Link Corporate Bank Account'}
          {step === 6 && 'Declaration'}
        </h2>
        <div className="flex items-center">
          <CircularProgressBar step={step} totalSteps={totalSteps} />
        </div>
      </div>

      {step === 1 && <BusinessInformationForm />}
      {step === 2 && <ConstructionDetails />}
      {step === 3 && <ConstructionStageDetails />}
      {step === 4 && <LoanDetails />}
      {step === 5 && (
        <LinkCorporateBankAccount step={step} nextStep={nextStep} totalSteps={totalSteps} />
      )}
      {step === 6 && <Declaration />}

      <div className="mt-6 flex justify-between">
        {step > 1 && (
          <Button onClick={prevStep} variant="outline" className="text-md font-spaceGrotesk">
            Previous
          </Button>
        )}
        {step < totalSteps && (
          <ReButton className="text-md text-white" onClick={nextStep}>
            Next
          </ReButton>
        )}
      </div>
    </div>
  );
}
