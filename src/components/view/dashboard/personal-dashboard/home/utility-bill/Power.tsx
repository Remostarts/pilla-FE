import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from '../../../shared/Heading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import ReSelect from '@/components/re-ui/ReSelect';
import { ReButton } from '@/components/re-ui/ReButton';
import { usePaymentSummaryAction } from '@/hooks/useSummaryAction';
import { UTILITY_POWER_WINDOW, UTILITY_SERVICE_CHARGE } from '@/constants/homeData';
import { Form } from '@/components/ui/form';
import { powerSchema, TPower } from '@/lib/validations/personal/home.validation';

const defaultValues = {
  biller: '',
  meterNumber: '',
  amount: '',
  phoneNumber: '',
  email: '',
};

export default function Power() {
  const { handlePaymentSummary } = usePaymentSummaryAction();

  const form = useForm<TPower>({
    resolver: zodResolver(powerSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  // Sets a amount and closes itself
  const onSubmit = () => {
    handlePaymentSummary(2100, UTILITY_SERVICE_CHARGE, UTILITY_POWER_WINDOW);
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <Heading
          heading="Buy Power"
          size="2xl"
          img="/assets/personal-dashboard/home/power-icon.svg"
        />

        <div className="mt-6 space-y-5">
          <ReSelect
            name="biller"
            label="Select Biller"
            placeholder="Select"
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'other', label: 'Other' },
            ]}
          />

          <ReInput label="Meter Number" placeholder="00000" name="meterNumber" />

          <ReInput label="Enter Amount" placeholder="0.00" name="amount" />

          <ReInput label="Phone Number" placeholder="+234" name="phoneNumber" />

          <ReInput label="Email Address" placeholder="Enter Email Address" name="email" />
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
