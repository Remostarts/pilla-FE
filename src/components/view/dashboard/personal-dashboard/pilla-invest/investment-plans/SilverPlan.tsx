import PlanContainer from './RePlanContainer';

import { ReButton } from '@/components/re-ui/ReButton';
import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { SILVER_PLAN_WINDOW } from '@/constants/pillaInvestData';
import { useInvestmentSummaryAction } from '@/hooks/useSummaryAction';

const silverPlanData = {
  id: 2,
  name: 'Silver Plan',
  window: 'silver-plan-window',
  tenure: '6 months (180 Days)',
  roi: '24%',
  investment: '₦9,999,999 from ₦5,000,000',
};

export default function SilverPlan() {
  const { handleInvestmentSummary } = useInvestmentSummaryAction();

  // Sets a amount and closes itself
  const handleProceedClick = () => {
    handleInvestmentSummary(
      'Pilla Real Estate Capital Growth Note',
      'Silver Plan',
      2500000,
      '6 months',
      '20%',
      SILVER_PLAN_WINDOW
    );
  };

  return (
    <div className="p-4">
      <PlanContainer data={silverPlanData} isSelected={true} />

      <div className="mt-10 space-y-5">
        <ReInput
          label="Amount"
          placeholder="0.00"
          name="amount"
          description="Enter an amount between ₦1,000,000 - ₦4,999,999"
        />

        <ReSelect
          name="period"
          label="Select Period"
          placeholder="Select"
          options={[
            { value: '6-months', label: '6 months (180 Days) - 20%' },
            { value: '9-months', label: '9 months (270 Days) - 22%' },
            { value: '12-months', label: '12 months (365 Days) - 24%' },
          ]}
        />
      </div>

      <div className="mt-12">
        <ReButton size="lg" onClick={handleProceedClick}>
          Proceed
        </ReButton>
      </div>
    </div>
  );
}
