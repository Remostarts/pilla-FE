import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import { TARGET_SAVINGS_STEP_1, TARGET_SAVINGS_STEP_2 } from '@/constants/pillaSavingsData';
import { amountSchema, TAmount } from '@/lib/validations/personal/savings.validation';
import { Form } from '@/components/ui/form';

const defaultValues = {
  amount: '',
};

export default function TargetStep1() {
  const { close, open } = useSidebar();

  const form = useForm<TAmount>({
    resolver: zodResolver(amountSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  const onSubmit = () => {
    close(TARGET_SAVINGS_STEP_1);
    open(TARGET_SAVINGS_STEP_2);
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <Heading heading="How much is your total savings target?" size="2xl" />

        <div className="mt-10">
          <ReInput label="Target Amount" name="amount" placeholder="0.00" />
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
