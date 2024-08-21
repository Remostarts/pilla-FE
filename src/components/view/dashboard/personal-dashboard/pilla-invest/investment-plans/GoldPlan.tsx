import PlanContainer from './RePlanContainer';

import { ReButton } from '@/components/re-ui/ReButton';
import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { GOLD_PLAN_WINDOW } from '@/constants/pillaInvestData';
import { useInvestmentSummaryAction } from '@/hooks/useSummaryAction';

const goldPlanData = {
  id: 3,
  name: 'Gold Plan',
  window: 'gold-plan-window',
  tenure: '9 months (270 Days)',
  roi: '26%',
  investment: '₦19,999,999 from ₦10,000,000',
};

export default function GoldPlan() {
  const { handleInvestmentSummary } = useInvestmentSummaryAction();

  // Sets a amount and closes itself
  const handleProceedClick = () => {
    handleInvestmentSummary(
      'Pilla Real Estate Capital Growth Note',
      'Gold Plan',
      1500000,
      '9 months',
      '24%',
      GOLD_PLAN_WINDOW
    );
  };

  return (
    <div className="p-4">
      <PlanContainer data={goldPlanData} isSelected={true} />

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
            { value: '9-months', label: '9 months (270 Days) - 24%' },
            { value: '12-months', label: '12 months (365 Days) - 26%' },
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
