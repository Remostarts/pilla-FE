import { ReButton } from '@/components/re-ui/ReButton';
import ReSelectable from '@/components/re-ui/ReSelectable';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import SubHeading from '@/components/view/dashboard/shared/SubHeading';
import { TARGET_SAVINGS_STEP_2, TARGET_SAVINGS_STEP_3 } from '@/constants/pillaSavingsData';

const targetStep2Data = [
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Any Time', value: 'anyTime' },
];

export default function TargetStep2() {
  const { close, open } = useSidebar();

  const handleContinue = () => {
    close(TARGET_SAVINGS_STEP_2);
    open(TARGET_SAVINGS_STEP_3);
  };

  const handleSelect = (value: string | number) => {
    console.log('Selected:', value);
  };

  return (
    <div className="p-4">
      <Heading heading="How frequent do you want to save?" size="2xl" />
      <SubHeading
        subHeading="Note: The money is automatically withdrawn if daily/weekly/monthly options are selected on the day it falls due."
        className="mt-2"
      />

      <div className="mt-10">
        <ReSelectable options={targetStep2Data} onSelect={handleSelect} />
      </div>

      <div className="mt-12">
        <ReButton size="lg" onClick={handleContinue}>
          Continue
        </ReButton>
      </div>
    </div>
  );
}
