import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import ReSelect from '@/components/re-ui/ReSelect';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import SubHeading from '@/components/view/dashboard/shared/SubHeading';
import { TARGET_SAVINGS_START_WINDOW, TARGET_SAVINGS_STEP_1 } from '@/constants/pillaSavingsData';

export default function TargetSavingStart() {
  const { close, open } = useSidebar();

  const handleContinue = () => {
    close(TARGET_SAVINGS_START_WINDOW);
    open(TARGET_SAVINGS_STEP_1);
  };

  return (
    <div className="p-4">
      <Heading heading="Target Savings" size="2xl" />
      <SubHeading
        subHeading="Save towards your rent or dream home. A savings account where the user saves towards a goal for a period of time, with 12% interest rate annually and can break savings but will be penalised."
        className="mt-2"
      />

      <div className="mt-10 space-y-5">
        <Heading heading="Get Started" />

        <ReInput label="Name your target savings" name="targetSavingsName" />

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
        <ReButton size="lg" onClick={handleContinue}>
          Continue
        </ReButton>
      </div>
    </div>
  );
}
