import PlanContainer from './RePlanContainer';

import { ReButton } from '@/components/re-ui/ReButton';
import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { DIAMOND_PLAN_WINDOW } from '@/constants/pillaInvestData';
import { useInvestmentSummaryAction } from '@/hooks/useSummaryAction';

const diamondPlanData = {
  id: 4,
  name: 'Diamond Plan',
  window: 'diamond-plan-window',
  tenure: '12 months (365 Days)',
  roi: '28%',
  investment: '₦20,000,000',
};

export default function DiamondPlan() {
  const { handleInvestmentSummary } = useInvestmentSummaryAction();

  // Sets a amount and closes itself
  const handleProceedClick = () => {
    handleInvestmentSummary(
      'Pilla Real Estate Capital Growth Note',
      'Diamond Plan',
      5500000,
      '12 months',
      '28%',
      DIAMOND_PLAN_WINDOW
    );
  };

  return (
    <div className="p-4">
      <PlanContainer data={diamondPlanData} isSelected={true} />

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
          options={[{ value: '12-months', label: '12 months (365 Days) - 28%' }]}
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
