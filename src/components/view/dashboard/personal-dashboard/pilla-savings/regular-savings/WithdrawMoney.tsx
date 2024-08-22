import { Heading } from '../../../shared/Heading';
import SubHeading from '../../../shared/SubHeading';

import { usePaymentSummaryAction } from '@/hooks/useSummaryAction';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import {
  REGULAR_SAVINGS_WITHDRAW_WINDOW,
  REGULAR_WITHDRAW_SERVICE_CHARGE,
} from '@/constants/pillaSavingsData';
import ReSelect from '@/components/re-ui/ReSelect';

export default function WithdrawMoney() {
  const { handlePaymentSummary } = usePaymentSummaryAction();

  // Sets a amount and closes itself
  const handleProceed = () => {
    handlePaymentSummary(50000, REGULAR_WITHDRAW_SERVICE_CHARGE, REGULAR_SAVINGS_WITHDRAW_WINDOW);
  };

  return (
    <div className="p-4">
      <Heading heading="Withdraw Savings" size="2xl" />
      <SubHeading subHeading="Input amount you want to withdarw" />

      <div className="mt-10 space-y-6">
        <ReInput label="Enter Amount" name="amount" placeholder="0.00" />

        <ReInput label="Reason for withdrawal (optional)" name="reason" />

        <ReSelect
          name="withdrawTo"
          label="Withdraw to"
          placeholder="Select"
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'otherBank', label: 'Other Bank' },
          ]}
        />

        <ReSelect
          name="bank"
          label="Select Bank"
          placeholder="Select"
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'otherBank', label: 'Other Bank' },
          ]}
        />

        <ReInput label="Account Number" name="amountNumber" placeholder="000" />

        <ReInput label="Account Name" name="accountName" placeholder="Enter Account Name" />
      </div>

      <div className="mt-12">
        <ReButton size="lg" onClick={handleProceed}>
          Proceed
        </ReButton>
      </div>
    </div>
  );
}
