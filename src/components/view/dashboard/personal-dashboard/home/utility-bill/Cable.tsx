import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from '../../../shared/Heading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import ReSelect from '@/components/re-ui/ReSelect';
import { ReButton } from '@/components/re-ui/ReButton';
import { usePaymentSummaryAction } from '@/hooks/useSummaryAction';
import { UTILITY_CABLE_WINDOW, UTILITY_SERVICE_CHARGE } from '@/constants/homeData';
import { Form } from '@/components/ui/form';
import { cableSchema, TCable } from '@/lib/validations/personal/home.validation';

const defaultValues = {
  provider: '',
  package: '',
  amount: '',
  smartCardNumber: '',
};

export default function Cable() {
  const { handlePaymentSummary } = usePaymentSummaryAction();

  const form = useForm<TCable>({
    resolver: zodResolver(cableSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  // Sets a amount and closes itself
  const onSubmit: SubmitHandler<TCable> = () => {
    handlePaymentSummary(2100, UTILITY_SERVICE_CHARGE, UTILITY_CABLE_WINDOW);
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <Heading
          heading="Cable TV"
          size="2xl"
          img="/assets/personal-dashboard/home/cable-icon.svg"
        />

        <div className="mt-6 space-y-5">
          <ReSelect
            name="provider"
            label="Select Provider"
            placeholder="Select"
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'other', label: 'Other' },
            ]}
          />

          <ReSelect
            name="package"
            label="Select Package "
            placeholder="Select"
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'other', label: 'Other' },
            ]}
          />

          <ReInput label="Enter Amount" placeholder="0.00" name="amount" />

          <ReInput label="Smart Card Number" placeholder="00" name="smartCardNumber" />
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
