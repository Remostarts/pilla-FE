import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from '../../../shared/Heading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import ReSelect from '@/components/re-ui/ReSelect';
import { ReButton } from '@/components/re-ui/ReButton';
import { usePaymentSummaryAction } from '@/hooks/useSummaryAction';
import { UTILITY_AIRTIME_WINDOW, UTILITY_SERVICE_CHARGE } from '@/constants/homeData';
import { Form } from '@/components/ui/form';
import { airtimeSchema, TAirtime } from '@/lib/validations/personal/home.validation';

const defaultValues = {
  networkProvider: '',
  phoneNumber: '',
  amount: '',
};

export default function Airtime() {
  const { handlePaymentSummary } = usePaymentSummaryAction();

  const form = useForm<TAirtime>({
    resolver: zodResolver(airtimeSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  // Sets a amount and closes itself
  const onSubmit: SubmitHandler<TAirtime> = () => {
    handlePaymentSummary(2100, UTILITY_SERVICE_CHARGE, UTILITY_AIRTIME_WINDOW);
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <Heading
          heading="Buy Airtime"
          size="2xl"
          img="/assets/personal-dashboard/home/airtime-icon.svg"
        />

        <div className="mt-6 space-y-5">
          <ReSelect
            name="networkProvider"
            label="Network Provider"
            placeholder="Select"
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'other', label: 'Other' },
            ]}
          />

          <ReInput label="Phone Number" placeholder="+234" name="phoneNumber" />

          <ReInput label="Enter Amount" placeholder="0.00" name="amount" />
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
