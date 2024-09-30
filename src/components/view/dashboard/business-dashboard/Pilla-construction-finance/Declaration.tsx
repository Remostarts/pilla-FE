import React from 'react';

import { Separator } from '@/components/ui/separator';
import { ReCheckBox } from '@/components/re-ui/re-checkbox/ReCheckBox';

interface DeclarationProps {
  dispatch: any;
  updateDeclaration: (data: any) => void;
}

export default function Declaration({ dispatch, updateDeclaration }: DeclarationProps) {
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
          <span className="font-semibold">10%</span>
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
          <ReCheckBox
            name="declaration1"
            label="Declaration of accuracy and truthfulness of the information provided in the loan application"
          />
        </div>
        <div className="flex items-start space-x-2">
          <ReCheckBox
            name="declaration2"
            label="Consent to Pilla's verification of the information provided."
          />
        </div>
        <div className="flex items-start space-x-2">
          <ReCheckBox name="declaration3" label="Consent to credit checks and background checks." />
        </div>
      </div>

      {/* Submit button */}
    </div>
  );
}
