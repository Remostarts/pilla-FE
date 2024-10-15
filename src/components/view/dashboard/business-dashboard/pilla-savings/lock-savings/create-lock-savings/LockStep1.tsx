import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { Form } from '@/components/ui/form';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import { LOCK_SAVINGS_STEP_1, LOCK_SAVINGS_STEP_2 } from '@/constants/pillaSavingsData';
import { amountSchema, TAmount } from '@/lib/validations/personal/savings.validation';

const defaultValues = {
  amount: '',
};

export default function LockStep1() {
  const { close, open } = useSidebar();

  const form = useForm<TAmount>({
    resolver: zodResolver(amountSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  const onSubmit = () => {
    close(LOCK_SAVINGS_STEP_1);
    open(LOCK_SAVINGS_STEP_2);
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <Heading heading="How much are you locking away?" size="2xl" />

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
