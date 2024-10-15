import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
import { TWithdraw, withdrawSchema } from '@/lib/validations/personal/savings.validation';
import { Form } from '@/components/ui/form';

const defaultValues = {
  amount: '',
  reason: '',
  withdrawTo: '',
  bank: '',
  accountNumber: '',
  accountName: '',
};
export default function WithdrawMoney() {
  const { handlePaymentSummary } = usePaymentSummaryAction();

  const form = useForm<TWithdraw>({
    resolver: zodResolver(withdrawSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  // Sets a amount and closes itself
  const onSubmit: SubmitHandler<TWithdraw> = () => {
    handlePaymentSummary(50000, REGULAR_WITHDRAW_SERVICE_CHARGE, REGULAR_SAVINGS_WITHDRAW_WINDOW);
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
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

          <ReInput label="Account Number" name="accountNumber" placeholder="000" />

          <ReInput label="Account Name" name="accountName" placeholder="Enter Account Name" />
        </div>

        <div className="mt-12">
          <ReButton size="lg" type="submit">
            Proceed
          </ReButton>
        </div>
      </form>
    </Form>
  );
}
