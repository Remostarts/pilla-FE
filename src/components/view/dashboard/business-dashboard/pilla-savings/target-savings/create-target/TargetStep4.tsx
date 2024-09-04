import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import { SAVINGS_SUMMARY_WINDOW, TARGET_SAVINGS_STEP_4 } from '@/constants/pillaSavingsData';
import { useSavingsSummary } from '@/context/SavingSummaryProvider';

export default function TargetStep4() {
  const { close, open } = useSidebar();
  const { setSavingsSummaryData } = useSavingsSummary();

  const handleContinue = () => {
    const summaryData = {
      interestRate: '12% p.a',
      startDate: 'Jul 31, 2024',
      withdrawalDate: 'Nov 21, 2024',
      saving: 50000,
      frequent: 'weekly',
      target: 240000,
    };

    setSavingsSummaryData(summaryData);

    close(TARGET_SAVINGS_STEP_4);
    open(SAVINGS_SUMMARY_WINDOW);
  };

  return (
    <div className="p-4">
      <Heading heading="Set start & withdrawl date" size="2xl" />

      <div className="mt-10 space-y-6">
        <ReInput label="Start Date" name="startDate" placeholder="select start date" />

        <ReInput
          label="Withdrawal Date"
          name="withdrawlDate"
          placeholder="select withdrawal date"
        />
      </div>

      <div className="mt-12">
        <ReButton size="lg" onClick={handleContinue}>
          Continue
        </ReButton>
      </div>
    </div>
  );
}
