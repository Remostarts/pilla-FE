import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import { LOCK_SAVINGS_STEP_1, LOCK_SAVINGS_STEP_2 } from '@/constants/pillaSavingsData';

export default function LockStep1() {
  const { close, open } = useSidebar();

  const handleContinue = () => {
    close(LOCK_SAVINGS_STEP_1);
    open(LOCK_SAVINGS_STEP_2);
  };

  return (
    <div className="p-4">
      <Heading heading="How much are you locking away?" size="2xl" />

      <div className="mt-10">
        <ReInput label="Target Amount" name="targetAmount" placeholder="0.00" />
      </div>

      <div className="mt-12">
        <ReButton size="lg" onClick={handleContinue}>
          Continue
        </ReButton>
      </div>
    </div>
  );
}
