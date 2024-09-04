'use client';

import React, { useState } from 'react';

import { Sidebar } from '../../shared/SideBar';
import { SuccessMessage } from '../../shared/SuccessMessage';

import ProfileForm from './profile/ProfileForm';
import PropertyDetailsForm from './property-details/PropertyDetailsForm';
import BankVerificationForm from './bank-verification/BankVerificationForm';
import NextOfKinForm from './next-of-kin/NextOfKinForm';

import { ReButton } from '@/components/re-ui/ReButton';
import { ReStepper } from '@/components/re-ui/re-stepper/ReStepper';
import { VERIFICATION_SUCCESS } from '@/constants/businessDashboard';

const steps = ['Profile', 'Property Details', 'Bank Verification', 'Next of Kin'];

export default function VerificationHomePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(true);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setIsNextDisabled(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <ProfileForm />;
      case 1:
        return <PropertyDetailsForm />;
      case 2:
        return <BankVerificationForm />;
      case 3:
        return <NextOfKinForm />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto size-full max-w-3xl rounded-lg bg-white p-16">
      {/* Stepper Header */}
      {/* <div className="mb-4 ml-4 flex items-center gap-10">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`flex size-8 items-center justify-center rounded-full ${
                index <= currentStep
                  ? 'border-4 border-green-500 text-white'
                  : 'border-4 border-gray-200'
              }`}
            >
              {index < currentStep && <Check className="bg-green-500 text-white" />}
            </div>
            <span
              className={`ml-2 ${index === currentStep ? 'font-bold text-black' : 'text-gray-600'}`}
            >
              {step}
            </span>
            {index < steps.length - 1 && <div className="mx-2 h-1 flex-1 bg-gray-200" />}
          </div>
        ))}
      </div> */}

      <ReStepper currentStep={currentStep} steps={steps} setFormStep={setCurrentStep} />

      {/* Render the content of the current step */}
      {renderStepContent()}

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between font-spaceGrotesk">
        {currentStep > 0 ? (
          <button
            type="button"
            onClick={handlePrevious}
            className=" text-xl font-bold text-black/60 hover:text-black/35"
          >
            Previous
          </button>
        ) : (
          <div className="none" />
        )}

        {/* conditionally rendering the buttons as per step are completed */}
        {currentStep === steps.length - 1 ? (
          <Sidebar.Open opens="verification-success">
            <ReButton
              type="button"
              className={`mt-4 w-full rounded-md  text-xl font-bold text-white  lg:w-2/5 ${
                isNextDisabled ? 'cursor-not-allowed bg-gray-500/60 hover:bg-gray-500/50' : ''
              }`}
            >
              Submit
            </ReButton>
          </Sidebar.Open>
        ) : (
          <ReButton
            type="button"
            onClick={handleNext}
            className={`mt-4 w-full rounded-md  text-xl font-bold text-white  lg:w-2/5 ${
              isNextDisabled ? 'cursor-not-allowed bg-gray-500/60 hover:bg-gray-500/50' : ''
            }`}
          >
            Next
          </ReButton>
        )}
      </div>

      {/* Verification Success Window */}
      <Sidebar.Window name={VERIFICATION_SUCCESS}>
        <SuccessMessage>
          <SuccessMessage.Title>Verification Submitted</SuccessMessage.Title>
          <SuccessMessage.Content>
            <SuccessMessage.Description>Verification takes 1-3 days</SuccessMessage.Description>
          </SuccessMessage.Content>
          <SuccessMessage.Button closes={VERIFICATION_SUCCESS}>Continue</SuccessMessage.Button>
        </SuccessMessage>
      </Sidebar.Window>
    </div>
  );
}
