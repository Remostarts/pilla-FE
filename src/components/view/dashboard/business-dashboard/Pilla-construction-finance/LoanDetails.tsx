import { Upload } from 'lucide-react';

import ReInput from '@/components/re-ui/re-input/ReInput';
import ReSelect from '@/components/re-ui/ReSelect';
import { ReButton } from '@/components/re-ui/ReButton';
import { Label } from '@/components/ui/label';

const months = [
  { value: '1', label: '1 Month' },
  { value: '2', label: '2 Months' },
  { value: '3', label: '3 Months' },
  { value: '4', label: '4 Months' },
  { value: '5', label: '5 Months' },
  { value: '6', label: '6 Months' },
  { value: '7', label: '7 Months' },
  { value: '8', label: '8 Months' },
  { value: '9', label: '9 Months' },
  { value: '10', label: '10 Months' },
  { value: '11', label: '11 Months' },
  { value: '12', label: '12 Months' },
];

export default function LoanDetails() {
  return (
    <form className="space-y-4">
      {/* Purpose */}
      <div>
        <ReInput
          name="purpose"
          label="Purpose *"
          placeholder="Prefilled from building stage selection"
          className="bg-[#F7F7F7]"
        />
      </div>

      {/* Loan Amount */}
      <div>
        <ReInput
          name="loanAmount"
          label="Loan Amount *"
          placeholder="Prefilled from Amount requested for loan "
          className="bg-[#F7F7F7]"
        />
      </div>

      {/* Loan Amount Tenure */}
      <div>
        <ReSelect
          name="loanAmountTenure"
          label="Loan Amount Tenure *"
          placeholder="Select"
          options={months}
          className="bg-[#F7F7F7]"
        />
      </div>

      {/* Collateral/Security */}
      <div>
        <ReSelect
          name="collateral/security"
          label="Collateral/Security *"
          placeholder="Select"
          options={[
            { value: 'financialSecurities', label: 'Financial Securities' },
            { value: 'realEstate', label: 'Real Estate' },
            { value: 'fixedAssets', label: 'Fixed Assets' },
            { value: 'guarantees', label: 'Guarantees' },
            { value: 'insurance', label: 'Insurance' },
          ]}
          className="bg-[#F7F7F7]"
        />
      </div>

      {/* Estimate Value of Collateral */}
      <div>
        <ReInput
          name="estimateValueOfCollateral"
          label="Estimate Value of Collateral *"
          placeholder="₦"
          className="bg-[#F7F7F7]"
        />
      </div>

      {/* Upload Collateral pages */}
      <div>
        <Label className="text-md mb-3 block font-medium text-gray-700">Upload Invoice *</Label>
        <div className="mb-4 flex items-center justify-between rounded border bg-[#F7F7F7] p-4">
          <span className="text-sm text-gray-600">Upload collateral papers</span>
          <Upload className="size-6 text-gray-400" />
        </div>
      </div>

      {/* Submit */}
      <div className="mt-10 space-y-4">
        <ReButton className="w-full text-lg text-white">Proceed</ReButton>
        <ReButton className="w-full border bg-white text-lg">Save</ReButton>
      </div>
    </form>
  );
}
