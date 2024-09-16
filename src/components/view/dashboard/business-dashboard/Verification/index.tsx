'use client';

import React, { useState } from 'react';

import { Sidebar } from '../../shared/SideBar';
import { SuccessMessage } from '../../shared/SuccessMessage';

import ProfileForm from './profile/ProfileForm';
import PropertyDetailsForm from './landlord-manager-option/property-details/PropertyDetailsForm';
import BankVerificationForm from './landlord-manager-option/bank-verification/BankVerificationForm';
import NextOfKinForm from './landlord-manager-option/next-of-kin/NextOfKinForm';
import IdentityVerificationForm from './property-developer-option/IdentityVerificationForm';
import AccountInformationForm from './AccountInformationForm';
import BusinessProfileForm from './realEstate-option/BusinessProfileForm';
import ContactForm from './ContactForm';

import { ReButton } from '@/components/re-ui/ReButton';
import { ReStepper } from '@/components/re-ui/re-stepper/ReStepper';
import { VERIFICATION_SUCCESS } from '@/constants/businessDashboard';

// defining Stepper configs
const stepperConfigs = {
  landlord: ['Profile', 'Property Details', 'Bank Verification', 'Next of Kin'],
  developer: ['Profile', 'Contact', 'Identity Verification', 'Account Information'],
  realEstate: ['Personal Information', 'Business Profile', 'Contact', 'Account Information'],
};

export default function VerificationHomePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof stepperConfigs | null>(
    null
  );

  // handling next button
  const handleNext = () => {
    if (selectedCategory && currentStep < stepperConfigs[selectedCategory].length - 1) {
      setCurrentStep(currentStep + 1);
      setIsNextDisabled(false);
    }
  };

  // handling previous button
  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  // handling category select
  const handleCategorySelect = (category: keyof typeof stepperConfigs) => {
    setSelectedCategory(category);
    setCurrentStep(0);
    setIsNextDisabled(false);
  };

  // rendering step content
  const renderStepContent = () => {
    if (!selectedCategory) return <ProfileForm onCategorySelect={handleCategorySelect} />;

    switch (selectedCategory) {
      case 'landlord':
        switch (currentStep) {
          case 0:
            return <ProfileForm onCategorySelect={handleCategorySelect} />;
          case 1:
            return <PropertyDetailsForm />;
          case 2:
            return <BankVerificationForm />;
          case 3:
            return <NextOfKinForm />;
        }
        break;
      case 'developer':
        switch (currentStep) {
          case 0:
            return <ProfileForm onCategorySelect={handleCategorySelect} />;
          case 1:
            return <ContactForm />;
          case 2:
            return <IdentityVerificationForm />;
          case 3:
            return <AccountInformationForm />;
        }
        break;
      case 'realEstate':
        switch (currentStep) {
          case 0:
            return <ProfileForm onCategorySelect={handleCategorySelect} />;
          case 1:
            return <BusinessProfileForm />;
          case 2:
            return <ContactForm />;
          case 3:
            return <AccountInformationForm />;
        }
        break;
    }
  };

  return (
    <div className="mx-auto size-full max-w-3xl rounded-lg bg-white p-16">
      {/* // Stepper header */}
      {selectedCategory && (
        <ReStepper
          currentStep={currentStep}
          steps={stepperConfigs[selectedCategory]}
          setFormStep={setCurrentStep}
        />
      )}

      {/* rendering Stepper content */}
      {renderStepContent()}

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between font-spaceGrotesk">
        {currentStep > 0 ? (
          <button
            type="button"
            onClick={handlePrevious}
            className="text-xl font-bold text-black/60 hover:text-black/35"
          >
            Previous
          </button>
        ) : (
          <div className="none" />
        )}

        {selectedCategory && currentStep === stepperConfigs[selectedCategory].length - 1 ? (
          <Sidebar.Open opens="verification-success">
            <ReButton
              type="button"
              className="mt-4 w-full rounded-md bg-orange-500 text-xl font-bold text-white lg:w-2/5"
            >
              Submit
            </ReButton>
          </Sidebar.Open>
        ) : (
          <ReButton
            type="button"
            onClick={handleNext}
            className="mt-4 w-full rounded-md bg-orange-500 text-xl font-bold text-white lg:w-2/5"
            disabled={isNextDisabled}
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
