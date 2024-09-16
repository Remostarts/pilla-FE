import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import ReSelect from '@/components/re-ui/ReSelect';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import { LOCK_SAVINGS_STEP_2, SAVINGS_SUMMARY_WINDOW } from '@/constants/pillaSavingsData';
import { useSavingsSummary } from '@/context/SavingSummaryProvider';
import { lockLastStepSchema, TLockLastStep } from '@/lib/validations/personal/savings.validation';
import { Form } from '@/components/ui/form';

const defaultValues = {
  targetAmount: '',
  period: '',
};

export default function LockStep2() {
  const { close, open } = useSidebar();
  const { setSavingsSummaryData } = useSavingsSummary();

  const form = useForm<TLockLastStep>({
    resolver: zodResolver(lockLastStepSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  const onSubmit = () => {
    const summaryData = {
      interestRate: '12% p.a',
      startDate: 'Jul 31, 2024',
      withdrawalDate: 'Nov 21, 2024',
      saving: 50000,
      frequent: 'weekly',
      target: 240000,
    };

    setSavingsSummaryData(summaryData);

    close(LOCK_SAVINGS_STEP_2);
    open(SAVINGS_SUMMARY_WINDOW);
  };
  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <Heading heading="How long do you want to lock your savings?" size="2xl" />

        <div className="mt-10 space-y-6">
          <ReInput label="Target Amount" name="targetAmount" placeholder="0.00" />

          <ReSelect
            name="period"
            label="Select Period"
            placeholder="Select"
            options={[
              { value: '1month', label: '1 month (30 Days) - 13%' },
              { value: '2month', label: '2 months (60 Days) - 14%' },
              { value: '3month', label: '3 months (90 Days) - 15%' },
              { value: '6month', label: '6 months (180 Days) - 16%' },
              { value: '9month', label: '9 months (270 Days) - 17%' },
              { value: '12month', label: '12 months (365 Days) - 18%' },
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
