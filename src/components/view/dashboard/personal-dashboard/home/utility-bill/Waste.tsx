import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from '../../../shared/Heading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import ReSelect from '@/components/re-ui/ReSelect';
import { ReButton } from '@/components/re-ui/ReButton';
import { usePaymentSummaryAction } from '@/hooks/useSummaryAction';
import { UTILITY_WASTE_WINDOW, UTILITY_SERVICE_CHARGE } from '@/constants/homeData';
import { Form } from '@/components/ui/form';
import { TWaste, wasteSchema } from '@/lib/validations/personal/home.validation';

const defaultValues = {
  provider: '',
  customerAccountNumber: '',
  amount: '',
};

export default function Waste() {
  const { handlePaymentSummary } = usePaymentSummaryAction();

  const form = useForm<TWaste>({
    resolver: zodResolver(wasteSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  // Sets a amount and closes itself
  const onSubmit = () => {
    handlePaymentSummary(2100, UTILITY_SERVICE_CHARGE, UTILITY_WASTE_WINDOW);
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <Heading
          heading="Waste Bill"
          size="2xl"
          img="/assets/personal-dashboard/home/waste-icon.svg"
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

          <ReInput label="Customer Account Number" placeholder="00" name="customerAccountNumber" />

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
