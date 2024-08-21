import React from 'react';

import { useSidebar } from '../SideBar';
import SubHeading from '../SubHeading';

import { Summary } from './Summary';

import { formatNumber } from '@/helpers/utils/formatNumber';
import {
  INVESTMENT_SUMMARY_WINDOW,
  PRE_LIQUIDATE_REQUEST_WINDOW,
  PRE_LIQUIDATE_WINDOW,
} from '@/constants/pillaInvestData';
import { TRANSACTION_PIN_WINDOW } from '@/constants/homeData';
import { useInvestmentSummary } from '@/context/InvestmentSummaryProvider';
import { ReButton } from '@/components/re-ui/ReButton';

interface InvestmentSummaryProps {
  plan: 'new' | 'existing' | 'pre-liquidate' | 'matured';
}

interface SummaryItem {
  label: string;
  value: string;
  isBold?: boolean;
}

export default function InvestmentSummary({ plan }: InvestmentSummaryProps) {
  // Use Sidebar Context
  const { close, open } = useSidebar();

  const { investmentSummaryData, estimatedProfit, maturityDate, totalReturn } =
    useInvestmentSummary();

  if (!investmentSummaryData) {
    return null;
  }

  // When Buying a new plan
  const newSummaryItems: SummaryItem[] = [
    { label: 'Investment Type', value: investmentSummaryData.investmentType },
    { label: 'Plan', value: investmentSummaryData.plan },
    { label: 'Amount', value: `₦ ${formatNumber(investmentSummaryData.amount)}` },
    { label: 'Period', value: investmentSummaryData.period },
    { label: 'Interest Rate P.A', value: investmentSummaryData.interestRate },
    { label: 'Estimated Profit', value: `₦ ${formatNumber(estimatedProfit)}` },
    { label: 'Maturity Date', value: maturityDate },
  ];

  // Existing Plan details
  const existingSummaryItems: SummaryItem[] = [
    { label: 'Status', value: investmentSummaryData.status || 'N/A' },
    { label: 'Investment Type', value: investmentSummaryData.investmentType },
    { label: 'Plan', value: investmentSummaryData.plan },
    { label: 'Amount', value: `₦ ${formatNumber(investmentSummaryData.amount)}` },
    { label: 'Period', value: investmentSummaryData.period },
    { label: 'Interest Rate P.A', value: investmentSummaryData.interestRate },
    { label: 'Estimated Profit', value: `₦ ${formatNumber(estimatedProfit)}` },
    { label: 'Purchase Date', value: investmentSummaryData.purchaseDate || 'N/A' },
    { label: 'Maturity Date', value: maturityDate },
    { label: 'Total Return', value: `₦ ${formatNumber(totalReturn)}` },
    { label: 'Certificate', value: 'Download PDF' },
  ];

  // Pre Liquidate summary details
  const preLiquidateSummaryItems: SummaryItem[] = [
    { label: 'Investment Type', value: investmentSummaryData.investmentType },
    { label: 'Plan', value: investmentSummaryData.plan },
    { label: 'Amount', value: `₦ ${formatNumber(investmentSummaryData.amount)}` },
    { label: 'Period', value: investmentSummaryData.period },
    { label: 'Interest Rate P.A', value: investmentSummaryData.interestRate },
    { label: 'Estimated Profit', value: `₦ ${formatNumber(estimatedProfit)}` },
    { label: 'Maturity Date', value: maturityDate },
  ];

  // Existing Plan details
  const maturedSummaryItems: SummaryItem[] = [
    { label: 'Status', value: investmentSummaryData.status || 'N/A' },
    { label: 'Investment Type', value: investmentSummaryData.investmentType },
    { label: 'Plan', value: investmentSummaryData.plan },
    { label: 'Amount', value: `₦ ${formatNumber(investmentSummaryData.amount)}` },
    { label: 'Period', value: investmentSummaryData.period },
    { label: 'Interest Rate P.A', value: investmentSummaryData.interestRate },
    { label: 'Estimated Profit', value: `₦ ${formatNumber(estimatedProfit)}` },
    { label: 'Purchase Date', value: investmentSummaryData.purchaseDate || 'N/A' },
    { label: 'Maturity Date', value: maturityDate },
    { label: 'Total Return', value: `₦ ${formatNumber(totalReturn)}` },
    { label: 'Certificate', value: 'Download PDF' },
  ];

  // Handle New Btn Clicked
  const handleNewBtnClicked = () => {
    close(INVESTMENT_SUMMARY_WINDOW);
    open(TRANSACTION_PIN_WINDOW);
  };

  // Handle Existing Btn clicked
  const handleExistingBtnClicked = () => {
    open(PRE_LIQUIDATE_REQUEST_WINDOW);
  };

  // Handle Pre Liquidation Click
  const handleApprovePreLiquidationClick = () => {
    open(TRANSACTION_PIN_WINDOW);
    close(PRE_LIQUIDATE_WINDOW);
  };

  return (
    <Summary className="p-4">
      {/* Heading */}
      {plan === 'new' && <Summary.Heading heading="Investment Summary" size="2xl" />}
      {plan === 'existing' && (
        <div>
          <Summary.Heading heading="Pilla Real Estate" size="2xl" />
          <Summary.Heading heading="Capital Growth Note" size="2xl" />
        </div>
      )}
      {plan === 'pre-liquidate' && <Summary.Heading heading="Pre-Liquidation Request" size="2xl" />}

      {plan === 'matured' && (
        <div>
          <Summary.Heading heading="Pilla Real Estate" size="2xl" />
          <Summary.Heading heading="Capital Growth Note" size="2xl" />
        </div>
      )}

      {/* Body */}

      {plan === 'new' && <Summary.Body items={newSummaryItems} />}

      {plan === 'existing' && <Summary.Body items={existingSummaryItems} />}

      {plan === 'pre-liquidate' && <Summary.Body items={preLiquidateSummaryItems} />}

      {plan === 'matured' && <Summary.Body items={maturedSummaryItems} />}

      {plan === 'new' && (
        <>
          {/* Methods */}
          <div className="mt-10">
            <Summary.Heading heading="Payment Method" size="lg" />
          </div>

          <div className="mt-4">
            <Summary.Method
              name="Account Balance"
              value="account_balance"
              icon="/assets/personal-dashboard/home/payment-wallet-icon.svg"
              details="₦ 400,500.00"
            />
            <Summary.Method
              name="Gt Bank (Card)"
              value="gt_bank_card"
              icon="/assets/personal-dashboard/home/payment-card-icon.svg"
              details="452739******6245"
              onChangeClick={() => {}}
            />
          </div>
          {/* Btn */}
          <Summary.Button onClick={handleNewBtnClicked}>Pay Now</Summary.Button>
        </>
      )}

      {plan === 'existing' && (
        <>
          {/* Methods */}
          <div className="mt-10">
            <SubHeading subHeading="Your investment will pe paid into your Pilla account on maturity." />
          </div>

          {/* Btn */}
          <div className="mt-8">
            <ReButton size="lg" onClick={handleExistingBtnClicked}>
              Pre-Liquidate
            </ReButton>
          </div>
        </>
      )}

      {plan === 'pre-liquidate' && (
        <>
          {/* Agreement */}
          <div className="mt-10 flex items-center gap-4">
            <input type="checkbox" name="agreement" id="agreement" />
            <label htmlFor="agreement" className="text-sm text-gray-600">
              By agreeing, termination of investments will be processed and disbursed within 48
              hours. A penalty of 50% of the interest accrued will apply.
            </label>
          </div>

          {/* Btn */}
          <div className="mt-8">
            <ReButton size="lg" onClick={handleApprovePreLiquidationClick}>
              Pre-Liquidate
            </ReButton>
          </div>
        </>
      )}

      {plan === 'matured' && (
        <>
          {/* Methods */}
          <div className="mt-10">
            <SubHeading subHeading="Your investment has been paid into your Pilla account." />
          </div>
        </>
      )}
    </Summary>
  );
}
