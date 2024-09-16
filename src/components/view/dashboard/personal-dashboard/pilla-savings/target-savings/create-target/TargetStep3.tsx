import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import ReSelectable from '@/components/re-ui/ReSelectable';
import { Form } from '@/components/ui/form';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import { TARGET_SAVINGS_STEP_3, TARGET_SAVINGS_STEP_4 } from '@/constants/pillaSavingsData';
import { amountSchema, TAmount } from '@/lib/validations/personal/savings.validation';

const targetStep3Data = [
  { label: '₦ 1,000.00', value: '1000' },
  { label: '₦ 2,000.00', value: '2000' },
  { label: '₦ 5,000.00', value: '5000' },
  { label: '₦ 10,000.00', value: '10000' },
  { label: '₦ 20,000.00', value: '20000' },
  { label: '₦ 50,000.00', value: '50000' },
];

const defaultValues = {
  amount: '',
};

export default function TargetStep3() {
  const { close, open } = useSidebar();

  const form = useForm<TAmount>({
    resolver: zodResolver(amountSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  const onSubmit = () => {
    close(TARGET_SAVINGS_STEP_3);
    open(TARGET_SAVINGS_STEP_4);
  };

  const handleSelect = (value: string | number) => {
    console.log('Selected:', value);
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <Heading heading="Amount to save frequently?" size="2xl" />

        <div className="mt-10 space-y-8">
          <ReSelectable options={targetStep3Data} onSelect={handleSelect} />

          <ReInput label="Enter Amount" name="amount" placeholder="0.00" />
        </div>

        <div className="mt-12">
          <ReButton size="lg" type="submit">
            Continue
          </ReButton>
        </div>
      </form>
    </Form>
  );
}
