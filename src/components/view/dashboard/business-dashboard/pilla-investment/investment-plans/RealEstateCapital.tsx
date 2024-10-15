import { useState } from 'react';

import { Heading } from '../../../shared/Heading';
import SubHeading from '../../../shared/SubHeading';
import { Sidebar, useSidebar } from '../../../shared/SideBar';
import InvestmentSummary from '../../../shared/summary/InvestmentSummary';
import Pin from '../../../shared/Pin';
import { SuccessMessage } from '../../../shared/SuccessMessage';

import PlanContainer from './RePlanContainer';
import BronzePlan from './BronzePlan';
import SilverPlan from './SilverPlan';
import GoldPlan from './GoldPlan';
import DiamondPlan from './DiamondPlan';

import {
  BRONZE_PLAN_WINDOW,
  DIAMOND_PLAN_WINDOW,
  GOLD_PLAN_WINDOW,
  INVESTMENT_RECEIPT_WINDOW,
  INVESTMENT_SUMMARY_WINDOW,
  SILVER_PLAN_WINDOW,
} from '@/constants/pillaInvestData';
import { ReButton } from '@/components/re-ui/ReButton';
import { TRANSACTION_PIN_WINDOW } from '@/constants/homeData';
import { formatNumber } from '@/helpers/utils/formatNumber';
import { useInvestmentSummary } from '@/context/InvestmentSummaryProvider';

const plansData = [
  {
    id: 1,
    name: 'Bronze Plan',
    window: 'bronze-plan-window',
    tenure: '3 months (90 Days)',
    roi: '22%',
    investment: '₦4,999,999 from ₦1,000,000',
  },
  {
    id: 2,
    name: 'Silver Plan',
    window: 'silver-plan-window',
    tenure: '6 months (180 Days)',
    roi: '24%',
    investment: '₦9,999,999 from ₦5,000,000',
  },
  {
    id: 3,
    name: 'Gold Plan',
    window: 'gold-plan-window',
    tenure: '9 months (270 Days)',
    roi: '26%',
    investment: '₦19,999,999 from ₦10,000,000',
  },
  {
    id: 4,
    name: 'Diamond Plan',
    window: 'diamond-plan-window',
    tenure: '12 months (365 Days)',
    roi: '28%',
    investment: '₦20,000,000',
  },
];

export default function RealEstateCapital() {
  // State for selecting plan
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Use Sidebar Context
  const { open } = useSidebar();
  const { investmentSummaryData } = useInvestmentSummary();

  // Handle Plan Select
  const handlePlanSelect = (windowName: string) => {
    setSelectedPlan(windowName);
  };

  // Handle Proceed Btn Click
  const handleProceed = () => {
    if (selectedPlan) {
      open(selectedPlan);
    }
  };

  return (
    <div className="p-4">
      {/* Heading */}
      <Heading heading="Pilla Real Estate" size="2xl" />
      <Heading heading="Capital Growth Note" size="2xl" />

      {/* SubHeading */}
      <div className="mt-2">
        <SubHeading subHeading="Pilla Real Estate Capital Growth Note is a professionally managed fund that invest directly in real estate." />
      </div>

      {/* Select Plan Start */}
      <div className="mt-10">
        <Heading heading="Select Plan" size="lg" />

        <div className="mt-4">
          {/* Plans Btn */}
          {plansData.map((data) => (
            <PlanContainer
              key={data.id}
              data={data}
              isSelected={selectedPlan === data.window}
              onSelect={handlePlanSelect}
            />
          ))}
        </div>
        {/* Select Plan End */}

        {/* Proceed Btn */}
        <div className="mt-6">
          <ReButton size="lg" disabled={selectedPlan === null} onClick={handleProceed}>
            Proceed
          </ReButton>
        </div>
      </div>

      {/* Sidebar Windows */}

      {/* Bronze Plan Window */}
      <Sidebar.Window name={BRONZE_PLAN_WINDOW}>
        <BronzePlan />
      </Sidebar.Window>

      {/* Silver Plan Window */}
      <Sidebar.Window name={SILVER_PLAN_WINDOW}>
        <SilverPlan />
      </Sidebar.Window>

      {/* Gold Plan Window */}
      <Sidebar.Window name={GOLD_PLAN_WINDOW}>
        <GoldPlan />
      </Sidebar.Window>

      {/* Diamond Plan Window */}
      <Sidebar.Window name={DIAMOND_PLAN_WINDOW}>
        <DiamondPlan />
      </Sidebar.Window>

      {/* Investment Summary Window */}
      <Sidebar.Window name={INVESTMENT_SUMMARY_WINDOW}>
        <InvestmentSummary plan="new" />
      </Sidebar.Window>

      {/* Transaction Pin */}
      <Sidebar.Window name={TRANSACTION_PIN_WINDOW}>
        <Pin
          heading="Enter Transaction PIN"
          subHeading="Input your 4 digit passcode to authorize this transaction"
          btnName="Verify"
          opens={INVESTMENT_RECEIPT_WINDOW}
          closes={TRANSACTION_PIN_WINDOW}
        />
      </Sidebar.Window>

      {/* Receipt + Succes Message Window */}
      <Sidebar.Window name={INVESTMENT_RECEIPT_WINDOW}>
        <SuccessMessage>
          <SuccessMessage.Title>Transaction Reciept</SuccessMessage.Title>
          <SuccessMessage.Content>
            <SuccessMessage.Description>Bill Payment Successful</SuccessMessage.Description>
          </SuccessMessage.Content>
          <SuccessMessage.AmountAndDate amount={formatNumber(investmentSummaryData?.amount)} />
          <SuccessMessage.ActionButton onClick={() => console.log('share reciept')}>
            Share Receipt
          </SuccessMessage.ActionButton>
          <SuccessMessage.Button closes={INVESTMENT_RECEIPT_WINDOW}>Done</SuccessMessage.Button>
        </SuccessMessage>
      </Sidebar.Window>
    </div>
  );
}
