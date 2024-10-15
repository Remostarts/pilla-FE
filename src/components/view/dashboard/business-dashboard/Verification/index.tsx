'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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

import { FormValues, fullSchema } from '@/lib/validations/business/verification.validation';
import { ReButton } from '@/components/re-ui/ReButton';
import { ReStepper } from '@/components/re-ui/re-stepper/ReStepper';
import { VERIFICATION_SUCCESS } from '@/constants/businessDashboard';
import { Form } from '@/components/ui/form';

// defining the stepper configurations
const stepperConfigs = {
  landlord: ['Profile', 'Property Details', 'Bank Verification', 'Next of Kin'],
  developer: ['Profile', 'Identity Verification', 'Account Information', 'Contact'],
  realEstate: ['Profile', 'Business Profile', 'Contact', 'Account Information'],
};

type StepName = (typeof stepperConfigs)[keyof typeof stepperConfigs][number];

// Define types for the schema keys that apply to each category
type LandlordSchemaKeys = 'profile' | 'propertyDetails' | 'bankVerification' | 'nextOfKin';
type DeveloperSchemaKeys = 'profile' | 'identityVerification' | 'accountInformation' | 'contact';
type RealEstateSchemaKeys = 'profile' | 'businessProfile' | 'accountInformation' | 'contact';

type StepToSchemaMapType = {
  landlord: Record<StepName, LandlordSchemaKeys>;
  developer: Record<StepName, DeveloperSchemaKeys>;
  realEstate: Record<StepName, RealEstateSchemaKeys>;
};

// Map the steps to schema keys based on category
const stepToSchemaMap: StepToSchemaMapType = {
  landlord: {
    Profile: 'profile',
    'Property Details': 'propertyDetails',
    'Bank Verification': 'bankVerification',
    'Next of Kin': 'nextOfKin',
  },
  developer: {
    Profile: 'profile',
    'Identity Verification': 'identityVerification',
    'Account Information': 'accountInformation',
    Contact: 'contact',
  },
  realEstate: {
    Profile: 'profile',
    'Business Profile': 'businessProfile',
    'Account Information': 'accountInformation',
    Contact: 'contact',
  },
};

export default function VerificationHomePage() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof stepperConfigs | null>(
    null
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(fullSchema),
    mode: 'onChange',
  });

  const {
    handleSubmit,
    trigger,
    getValues,
    setValue,
    // formState: { errors },
  } = form;

  // handling category selection based on the selected category and reset the current step
  useEffect(() => {
    if (selectedCategory) {
      setValue('category', selectedCategory);
    }
  }, [selectedCategory, setValue]);

  // function to handle next button and triggering form validation for each step
  const handleNext = async () => {
    if (selectedCategory) {
      // Get the current step name based on the category and current step
      const currentStepName = stepperConfigs[selectedCategory][currentStep];

      // Retrieve the schema key for the current step
      const schemaKey = stepToSchemaMap[selectedCategory][currentStepName as StepName];

      // Check if the schema key is valid before triggering validation
      if (schemaKey) {
        const result = await trigger(schemaKey);

        if (result && currentStep < stepperConfigs[selectedCategory].length - 1) {
          setCurrentStep(currentStep + 1);
        }
      }
    }
  };

  // function to handle previous button
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // function to handle category selection
  const handleCategorySelect = (category: keyof typeof stepperConfigs) => {
    setSelectedCategory(category);
    setCurrentStep(0);
    setValue('category', category);
  };

  // onSubmit handler
  const onSubmit = (data: FormValues) => {
    const formData = getValues();
    console.log('Form Data:', data);
    console.log('Collected Form Data:', formData);
    // console.log('Form Errors:', errors);
  };

  // function to render the content of each step
  const renderStepContent = () => {
    if (!selectedCategory) return <ProfileForm onCategorySelect={handleCategorySelect} />;

    const stepName = stepperConfigs[selectedCategory][currentStep];
    switch (stepName) {
      case 'Profile':
        return <ProfileForm onCategorySelect={handleCategorySelect} />;
      case 'Property Details':
        return <PropertyDetailsForm />;
      case 'Bank Verification':
        return <BankVerificationForm />;
      case 'Next of Kin':
        return <NextOfKinForm />;
      case 'Identity Verification':
        return <IdentityVerificationForm />;
      case 'Account Information':
        return <AccountInformationForm />;
      case 'Business Profile':
        return <BusinessProfileForm />;
      case 'Contact':
        return <ContactForm />;
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto size-full max-w-6xl rounded-lg bg-white p-16"
      >
        {/* stepper header */}
        {selectedCategory && (
          <ReStepper
            currentStep={currentStep}
            steps={stepperConfigs[selectedCategory]}
            setFormStep={setCurrentStep}
          />
        )}

        {/* rendering the step forms */}
        <div>{renderStepContent()}</div>

        {/* previous,next and submit button */}
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
            <Sidebar.Open opens={VERIFICATION_SUCCESS}>
              <ReButton
                type="submit"
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
            >
              Next
            </ReButton>
          )}
        </div>

        {/* verification success message */}
        <Sidebar.Window name={VERIFICATION_SUCCESS}>
          <SuccessMessage>
            <SuccessMessage.Title>Verification Submitted</SuccessMessage.Title>
            <SuccessMessage.Content>
              <SuccessMessage.Description>Verification takes 1-3 days</SuccessMessage.Description>
            </SuccessMessage.Content>
            <SuccessMessage.Button closes={VERIFICATION_SUCCESS}>Continue</SuccessMessage.Button>
          </SuccessMessage>
        </Sidebar.Window>
      </form>
    </Form>
  );
}
