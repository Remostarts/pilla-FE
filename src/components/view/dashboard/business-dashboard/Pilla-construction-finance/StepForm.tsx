'use client';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CircularProgressBar from '../../shared/CircularProgressBar';
import { Sidebar, useSidebar } from '../../shared/SideBar';

import BusinessInformationForm from './business-information/BusinessInformationForm';
import ConstructionDetails from './ConstructionDetails';
import ConstructionStageDetails from './ConstructionStageDetails';
import LoanDetails from './LoanDetails';
import LinkCorporateBankAccount from './LinkCorporateBankAccount';
import Declaration from './Declaration';

import { Button } from '@/components/ui/button';
import { ReButton } from '@/components/re-ui/ReButton';
import {
  updateBusinessInformation,
  updateConstructionDetails,
  updateConstructionStageDetails,
  updateLoanDetails,
  updateLinkCorporateBankAccount,
  updateDeclaration,
} from '@/redux/businessConstructionFinanceForm/formSlice';
import { RootState } from '@/redux/store';
import {
  APPLY_FOR_LOAN,
  APPLY_LOAN_FORM_WINDOW,
  LOAN_APPLICATION_SUBMIT_SUCCESS,
} from '@/constants/businessDashboard';

export default function StepForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 6;
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const { close } = useSidebar();

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    close(APPLY_FOR_LOAN);
    close(APPLY_LOAN_FORM_WINDOW);
    // Here you can send the data to your backend or perform any other action
  };

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

      {step === 1 && (
        <BusinessInformationForm
          nextStep={nextStep}
          dispatch={dispatch}
          updateBusinessInformation={updateBusinessInformation}
        />
      )}
      {step === 2 && (
        <ConstructionDetails
          nextStep={nextStep}
          dispatch={dispatch}
          updateConstructionDetails={updateConstructionDetails}
        />
      )}
      {step === 3 && (
        <ConstructionStageDetails
          nextStep={nextStep}
          dispatch={dispatch}
          updateConstructionStageDetails={updateConstructionStageDetails}
        />
      )}
      {step === 4 && (
        <LoanDetails
          nextStep={nextStep}
          dispatch={dispatch}
          updateLoanDetails={updateLoanDetails}
        />
      )}
      {step === 5 && (
        <LinkCorporateBankAccount
          nextStep={nextStep}
          dispatch={dispatch}
          updateLinkCorporateBankAccount={updateLinkCorporateBankAccount}
        />
      )}
      {step === 6 && <Declaration dispatch={dispatch} updateDeclaration={updateDeclaration} />}

      <div className="mt-6 flex justify-between">
        {step > 1 && (
          <Button onClick={prevStep} variant="outline" className="text-md font-spaceGrotesk">
            Previous
          </Button>
        )}

        {step === totalSteps && (
          <Sidebar.Open opens={LOAN_APPLICATION_SUBMIT_SUCCESS}>
            <ReButton type="submit" className=" py-3 text-white " onClick={handleSubmit}>
              Submit
            </ReButton>
          </Sidebar.Open>
        )}
      </div>
    </div>
  );
}
