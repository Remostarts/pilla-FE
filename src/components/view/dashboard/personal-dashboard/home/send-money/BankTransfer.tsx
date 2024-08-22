import { Heading } from '../../../shared/Heading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import ReSelect from '@/components/re-ui/ReSelect';
import { MONEY_TRANSFER_SERVICE_CHARGE, TO_BANK_ACCOUNT_WINDOW } from '@/constants/homeData';
import { usePaymentSummaryAction } from '@/hooks/useSummaryAction';

export default function BankTransfer() {
  const { handlePaymentSummary } = usePaymentSummaryAction();

  // Sets a amount and closes itself
  const handleContinueClick = () => {
    handlePaymentSummary(2200, MONEY_TRANSFER_SERVICE_CHARGE, TO_BANK_ACCOUNT_WINDOW);
  };

  return (
    <div className="p-4">
      <div>
        <Heading heading="Bank Transfer" size="2xl" />
      </div>

      {/* Profile Details */}
      <div className="mt-6">
        <div className="flex justify-end">
          <button className="font-inter font-medium text-gray-800">Select Beneficiary</button>
        </div>

        <div className="mt-4 space-y-5">
          <ReSelect
            name="bank"
            label="Select Bank"
            placeholder="Select"
            options={[
              { value: 'option 1', label: 'Option 1' },
              { value: 'option 2', label: 'Option 2' },
              { value: 'other', label: 'Other' },
            ]}
          />

          <ReInput label="Account Number" placeholder="Enter Account Number" name="accountNumber" />

          <ReInput
            label="Beneficiary Name"
            placeholder="Enter Beneficiary Name"
            name="beneficiaryName"
          />

          <ReInput label="Enter Amount" name="amount" placeholder="0.00" />

          <ReInput label="Narration" name="narration" placeholder="Enter Narration" />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <input type="checkbox" id="saveBeneficiary" />
        <label htmlFor="saveBeneficiary">Save as beneficiary</label>
      </div>

      <div className="mt-8">
        <ReButton size="lg" onClick={handleContinueClick}>
          Continue
        </ReButton>
      </div>
    </div>
  );
}
