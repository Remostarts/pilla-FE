import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import ReSelectable from '@/components/re-ui/ReSelectable';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import { TARGET_SAVINGS_STEP_3, TARGET_SAVINGS_STEP_4 } from '@/constants/pillaSavingsData';

const targetStep3Data = [
  { label: '₦ 1,000.00', value: '1000' },
  { label: '₦ 2,000.00', value: '2000' },
  { label: '₦ 5,000.00', value: '5000' },
  { label: '₦ 10,000.00', value: '10000' },
  { label: '₦ 20,000.00', value: '20000' },
  { label: '₦ 50,000.00', value: '50000' },
];

export default function TargetStep3() {
  const { close, open } = useSidebar();

  const handleContinue = () => {
    close(TARGET_SAVINGS_STEP_3);
    open(TARGET_SAVINGS_STEP_4);
  };

  const handleSelect = (value: string | number) => {
    console.log('Selected:', value);
  };

  return (
    <div className="p-4">
      <Heading heading="Amount to save frequently?" size="2xl" />

      <div className="mt-10 space-y-8">
        <ReSelectable options={targetStep3Data} onSelect={handleSelect} />

        <ReInput label="Enter Amount" name="amount" placeholder="0.00" />
      </div>

      <div className="mt-12">
        <ReButton size="lg" onClick={handleContinue}>
          Continue
        </ReButton>
      </div>
    </div>
  );
}
