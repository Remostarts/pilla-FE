import { Heading } from '../../../shared/Heading';
import SubHeading from '../../../shared/SubHeading';
import { useSidebar } from '../../../shared/SideBar';

import { Button } from '@/components/ui/button';
import { ReButton } from '@/components/re-ui/ReButton';
import { PRE_LIQUIDATE_REQUEST_WINDOW, PRE_LIQUIDATE_WINDOW } from '@/constants/pillaInvestData';
import { useInvestmentSummary } from '@/context/InvestmentSummaryProvider';

export default function PreLiquidateRequest() {
  const { open, close } = useSidebar();
  const { setInvestmentSummaryData } = useInvestmentSummary();

  const handleCancel = () => {
    close(PRE_LIQUIDATE_REQUEST_WINDOW);
  };

  const handleContinue = () => {
    const investmentData = {
      investmentType: 'Pilla Real Estate Capital Growth Note',
      plan: 'Bronze Plan',
      amount: 100,
      period: '3 Months',
      interestRate: '16%',
    };
    setInvestmentSummaryData(investmentData);
    open(PRE_LIQUIDATE_WINDOW);
    close(PRE_LIQUIDATE_REQUEST_WINDOW);
  };

  return (
    <div className="p-4">
      <div className="space-y-4">
        <Heading heading="Pre-Liquidation Request" size="2xl" />
        <SubHeading subHeading="Dear user, you are about to terminate your investment. Please note that you will be charged a penalty of 50% on your accrued interest." />

        <SubHeading subHeading="Kindly click on proceed to continue or cancel to end this request" />
      </div>

      <div className="mt-8 flex gap-8">
        <Button
          size="lg"
          className="w-full border border-primary-950 bg-white font-spaceGrotesk text-base hover:bg-white"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <ReButton size="lg" onClick={handleContinue}>
          Continue
        </ReButton>
      </div>
    </div>
  );
}
