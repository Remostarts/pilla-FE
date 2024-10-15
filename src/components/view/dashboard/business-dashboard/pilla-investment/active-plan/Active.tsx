import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

import { Sidebar } from '../../../shared/SideBar';
import RePlanCard from '../RePlanCard';
import InvestmentSummary from '../../../shared/summary/InvestmentSummary';
import Pin from '../../../shared/Pin';
import { SuccessMessage } from '../../../shared/SuccessMessage';

import PreLiquidateRequest from './PreLiquidateRequest';

import { ReButton } from '@/components/re-ui/ReButton';
import {
  ACTIVE_REAL_ESTATE_CAPITAL_WINDOW,
  PRE_LIQUIDATE_REQUEST_WINDOW,
  PRE_LIQUIDATE_SUCCESS_WINDOW,
  PRE_LIQUIDATE_WINDOW,
} from '@/constants/pillaInvestData';
import { useInvestmentSummary } from '@/context/InvestmentSummaryProvider';
import { TRANSACTION_PIN_WINDOW } from '@/constants/homeData';

const activePlansData = [
  {
    id: 1,
    planTitle: 'Pilla Real Estate Capital Growth Note',
    planDescription:
      'Pilla Real Estate Capital Growth Note is a professionally managed fund that invest directly in real estate properties.',
    planDetail: 'Bronze Plan',
    maturityDate: 'June 5, 2025',
    window: 'active-real-estate-capital-window',
  },
];

interface ActiveProps {
  setCurrTab: Dispatch<SetStateAction<string>>;
}

export default function Active({ setCurrTab }: ActiveProps) {
  const isEmpty = false;
  const { setInvestmentSummaryData } = useInvestmentSummary();

  const handleEmptyBtnClick = () => {
    setCurrTab('explore');
  };

  const handlePlanOpen = () => {
    const investmentData = {
      investmentType: 'Pilla Real Estate Capital Growth Note',
      plan: 'Bronze Plan',
      amount: 100,
      period: '3 Months',
      interestRate: '16%',
      status: 'Active',
      purchaseDate: '21 Nov, 2024',
    };
    setInvestmentSummaryData(investmentData);
  };

  return (
    <div>
      {isEmpty ? (
        <>
          <div className="mb-8 text-center">
            <div className="flex justify-center">
              <Image
                src="/assets/personal-dashboard/pilla-invest/invest-empty-icon.svg"
                alt="empty-icon"
                width={150}
                height={150}
              />
            </div>
            <p className="mb-1 font-inter text-gray-600">Start your investment journey.</p>
            <p className="font-inter text-gray-600">
              Explore opportunities to grow your wealth. Begin today!
            </p>
          </div>

          <div className="mx-auto w-[30rem]">
            <ReButton size="lg" onClick={handleEmptyBtnClick}>
              Start Investing
            </ReButton>
          </div>
        </>
      ) : (
        <div>
          {activePlansData.map((data) => (
            <Sidebar.Open key={data.id} opens={data.window}>
              <RePlanCard
                planTitle={data.planTitle}
                planDescription={data.planDescription}
                planDetails={data.planDetail}
                maturityDate={data.maturityDate}
                onClick={handlePlanOpen}
              />
            </Sidebar.Open>
          ))}
        </div>
      )}
      {/* Sidebar Windows */}

      {/* Existing plan summary window */}
      <Sidebar.Window name={ACTIVE_REAL_ESTATE_CAPITAL_WINDOW}>
        <InvestmentSummary plan="existing" />
      </Sidebar.Window>

      {/* Pre-Liquidate summary window */}
      <Sidebar.Window name={PRE_LIQUIDATE_REQUEST_WINDOW}>
        <PreLiquidateRequest />
      </Sidebar.Window>

      {/* Pre-Liquidate window */}
      <Sidebar.Window name={PRE_LIQUIDATE_WINDOW}>
        <InvestmentSummary plan="pre-liquidate" />
      </Sidebar.Window>

      {/* Transaction Pin */}
      <Sidebar.Window name={TRANSACTION_PIN_WINDOW}>
        <Pin
          heading="Enter Transaction PIN"
          subHeading="Input your 4 digit passcode to authorize this transaction"
          btnName="Verify"
          opens={PRE_LIQUIDATE_SUCCESS_WINDOW}
          closes={TRANSACTION_PIN_WINDOW}
        />
      </Sidebar.Window>

      {/* Receipt + Succes Message Window */}
      <Sidebar.Window name={PRE_LIQUIDATE_SUCCESS_WINDOW}>
        <SuccessMessage>
          <SuccessMessage.Title>Pre-Liquidation Submitted</SuccessMessage.Title>
          <SuccessMessage.Content>
            <SuccessMessage.Description>
              Verification and disbursement takes within 24-48 working hours.
            </SuccessMessage.Description>
            <div className="-mt-4">
              <SuccessMessage.Description>Check your mail for status.</SuccessMessage.Description>
            </div>
          </SuccessMessage.Content>
          <SuccessMessage.Button closes={PRE_LIQUIDATE_SUCCESS_WINDOW}>Done</SuccessMessage.Button>
        </SuccessMessage>
      </Sidebar.Window>
    </div>
  );
}
