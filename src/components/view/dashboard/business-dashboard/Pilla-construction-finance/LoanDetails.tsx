import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import ReFileUploadField from '@/components/re-ui/ReFileUploadField';
import ReInput from '@/components/re-ui/re-input/ReInput';
import ReSelect from '@/components/re-ui/ReSelect';
import { ReButton } from '@/components/re-ui/ReButton';
import { Form } from '@/components/ui/form';
import { loanDetailsSchema, TLoanDetails } from '@/lib/validations/business/settings.validation';

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

interface LoanDetailsProps {
  nextStep: () => void;
  dispatch: any;
  updateLoanDetails: (data: any) => void;
}

const defaultValues = {
  purpose: '',
  loanAmount: '',
  loanAmountTenure: '',
  collateral: '',
  estimateValueOfCollateral: '',
  collateralPages: '',
};

export default function LoanDetails({ nextStep, dispatch, updateLoanDetails }: LoanDetailsProps) {
  const form = useForm<TLoanDetails>({
    resolver: zodResolver(loanDetailsSchema),
    mode: 'onChange',
    defaultValues,
  });

  const { handleSubmit } = form;

  const onSubmit = (data: TLoanDetails) => {
    dispatch(updateLoanDetails(data));
    nextStep();
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            name="collateral"
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
          <ReFileUploadField
            name="collateralPages"
            placeholder="Upload Collateral pages"
            label="Upload Collateral pages"
          />
        </div>

        {/* Submit */}
        <div className=" space-y-4">
          <ReButton type="submit" className="mt-6 w-full text-lg text-white">
            Proceed
          </ReButton>
          <ReButton type="button" className="w-full border bg-white text-lg">
            Save
          </ReButton>
        </div>
      </form>
    </Form>
  );
}
