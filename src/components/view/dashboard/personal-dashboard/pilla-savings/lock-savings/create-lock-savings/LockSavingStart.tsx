import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import ReSelect from '@/components/re-ui/ReSelect';
import { Form } from '@/components/ui/form';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import SubHeading from '@/components/view/dashboard/shared/SubHeading';
import { LOCK_SAVINGS_START_WINDOW, LOCK_SAVINGS_STEP_1 } from '@/constants/pillaSavingsData';
import { lockSchema, TLock } from '@/lib/validations/personal/savings.validation';

const defaultValues = {
  lockSavingsName: '',
  reason: '',
};

export default function LockSavingStart() {
  const { close, open } = useSidebar();

  const form = useForm<TLock>({
    resolver: zodResolver(lockSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  const onSubmit = () => {
    close(LOCK_SAVINGS_START_WINDOW);
    open(LOCK_SAVINGS_STEP_1);
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <Heading heading="Lock Savings" size="2xl" />
        <SubHeading
          subHeading="Lock savings is a type of savings account where the user locks away money for a period of time. The user cannot access fund until the end of the lock period. "
          className="mt-2"
        />

        <div className="mt-10 space-y-5">
          <Heading heading="Get Started" />

          <ReInput label="Name your savings" name="lockSavingsName" />

          <ReSelect
            name="reason"
            label="Why are you saving?"
            placeholder="Select"
            options={[
              { value: 'rent', label: 'Rent' },
              { value: 'homeOwnership', label: 'Home Ownership' },
            ]}
          />
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
