import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Heading } from '../../../shared/Heading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { Form } from '@/components/ui/form';
import { MONEY_TRANSFER_SERVICE_CHARGE, TO_PILLA_ACCOUNT_WINDOW } from '@/constants/homeData';
import { usePaymentSummaryAction } from '@/hooks/useSummaryAction';
import { sendMoneyPillaSchema, TSendMoneyPilla } from '@/lib/validations/personal/home.validation';

const defaultValues = {
  accountNumber: '',
  beneficiaryName: '',
  amount: '',
  narration: '',
};

export default function PillaTransfer() {
  const { handlePaymentSummary } = usePaymentSummaryAction();

  const form = useForm<TSendMoneyPilla>({
    resolver: zodResolver(sendMoneyPillaSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  // Sets a amount and closes itself
  const onSubmit: SubmitHandler<TSendMoneyPilla> = () => {
    handlePaymentSummary(2100, MONEY_TRANSFER_SERVICE_CHARGE, TO_PILLA_ACCOUNT_WINDOW);
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Heading heading="Pilla Transfer" size="2xl" />
        </div>

        {/* Profile Details */}
        <div className="mt-6">
          <div className="flex justify-end">
            <button className="font-inter font-medium text-gray-800">Select Beneficiary</button>
          </div>

          <div className="mt-4 space-y-5">
            <ReInput
              label="Account Number"
              placeholder="Enter Account Number"
              name="accountNumber"
            />

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
          <ReButton size="lg" type="submit">
            Continue
          </ReButton>
        </div>
      </form>
    </Form>
  );
}
