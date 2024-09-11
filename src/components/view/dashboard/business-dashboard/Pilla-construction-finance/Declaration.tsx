import React from 'react';

import { Sidebar, useSidebar } from '../../shared/SideBar';

import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { ReButton } from '@/components/re-ui/ReButton';
import {
  APPLY_FOR_LOAN,
  APPLY_LOAN_FORM_WINDOW,
  LOAN_APPLICATION_SUBMIT_SUCCESS,
} from '@/constants/businessDashboard';

export default function Declaration() {
  const { close } = useSidebar();

  const handleSubmit = () => {
    close(APPLY_FOR_LOAN);
    close(APPLY_LOAN_FORM_WINDOW);
  };
  return (
    <div>
      {/* Loan Details */}
      <div className="mb-6 space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Loan Type</span>
          <span className="font-semibold">Construction Stage</span>
        </div>
        <Separator className="bg-gray-200" />
        <div className="flex justify-between">
          <span className="text-gray-600">Loan Amount</span>
          <span className="font-semibold">₦ 200,000,000.00</span>
        </div>
        <Separator className="bg-gray-200" />

        <div className="flex justify-between">
          <span className="text-gray-600">Loan Tenor</span>
          <span className="font-semibold">1 Year</span>
        </div>
        <Separator className="bg-gray-200" />

        <div className="flex justify-between">
          <span className="text-gray-600">Interest Rate @ X%</span>
          <span className="font-semibold">₦ 2,000,000.00</span>
        </div>
        <Separator className="bg-gray-200" />

        <div className="flex justify-between">
          <span className="text-gray-600">Monthly Repayment</span>
          <span className="font-semibold">₦ 40,000,000.00</span>
        </div>
        <Separator className="bg-gray-200" />
      </div>

      {/* Declaration */}
      <div className="mb-6 space-y-4">
        <div className="flex items-start space-x-2">
          <Checkbox id="declaration1" className="mt-1" />
          <label htmlFor="declaration1" className="text-sm">
            Declaration of accuracy and truthfulness of the information provided in the loan
            application
          </label>
        </div>
        <div className="flex items-start space-x-2">
          <Checkbox id="declaration2" className="mt-1" />
          <label htmlFor="declaration2" className="text-sm">
            Consent to Pilla&apos;s verification of the information provided.
          </label>
        </div>
        <div className="flex items-start space-x-2">
          <Checkbox id="declaration3" className="mt-1" />
          <label htmlFor="declaration3" className="text-sm">
            Consent to credit checks and background checks.
          </label>
        </div>
      </div>

      {/* Submit button */}
      <Sidebar.Open opens={LOAN_APPLICATION_SUBMIT_SUCCESS}>
        <ReButton className="r w-full py-3 text-white " onClick={handleSubmit}>
          Submit Application
        </ReButton>
      </Sidebar.Open>
    </div>
  );
}
