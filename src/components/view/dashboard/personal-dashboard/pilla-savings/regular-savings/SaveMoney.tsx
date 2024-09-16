import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from '../../../shared/Heading';
import SubHeading from '../../../shared/SubHeading';

import { usePaymentSummaryAction } from '@/hooks/useSummaryAction';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import {
  REGULAR_SAVINGS_SAVE_MONEY_WINDOW,
  REGULAR_SAVINGS_SERVICE_CHARGE,
} from '@/constants/pillaSavingsData';
import { amountSchema, TAmount } from '@/lib/validations/personal/savings.validation';
import { Form } from '@/components/ui/form';

const defaultValues = {
  amount: '',
};

export default function SaveMoney() {
  const { handlePaymentSummary } = usePaymentSummaryAction();

  const form = useForm<TAmount>({
    resolver: zodResolver(amountSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  // Sets a amount and closes itself
  const onSubmit: SubmitHandler<TAmount> = () => {
    handlePaymentSummary(2100, REGULAR_SAVINGS_SERVICE_CHARGE, REGULAR_SAVINGS_SAVE_MONEY_WINDOW);
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <Heading heading="Save Money" size="2xl" />
        <SubHeading subHeading="Enter how much you want to save." />

        <div className="mt-10 space-y-6">
          <ReInput label="Enter Amount" name="amount" placeholder="0.00" />
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
