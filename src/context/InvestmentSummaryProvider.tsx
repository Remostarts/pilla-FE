// InvestmentContext.tsx
'use client';

import { addMonths, format } from 'date-fns';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface InvestmentDetailsProps {
  status?: string;
  investmentType: string;
  plan: string;
  amount: number;
  period: string;
  interestRate: string;
  purchaseDate?: string;
}

interface InvestmentContextType {
  investmentSummaryData: InvestmentDetailsProps | null;
  setInvestmentSummaryData: (details: InvestmentDetailsProps) => void;
  estimatedProfit: number;
  maturityDate: string;
  totalReturn: number;
}

const InvestmentContext = createContext<InvestmentContextType | undefined>(undefined);

export function InvestmentProvider({ children }: { children: ReactNode }) {
  const [investmentSummaryData, setInvestmentSummaryData] = useState<InvestmentDetailsProps | null>(
    null
  );

  // Calculate Estimated Profit
  const calculateEstimatedProfit = (
    amount: number,
    interestRate: string,
    period: string
  ): number => {
    const rate = parseFloat(interestRate) / 100;
    const months = parseInt(period);
    return amount * rate * (months / 12);
  };

  // Calculate Maturity Date
  const calculateMaturityDate = (period: string): string => {
    const months = parseInt(period);
    const maturityDate = addMonths(new Date(), months);
    return format(maturityDate, 'MMM dd, yyyy');
  };

  const estimatedProfit = investmentSummaryData
    ? calculateEstimatedProfit(
        investmentSummaryData.amount,
        investmentSummaryData.interestRate,
        investmentSummaryData.period.split(' ')[0]
      )
    : 0;

  const maturityDate = investmentSummaryData
    ? calculateMaturityDate(investmentSummaryData.period.split(' ')[0])
    : '';

  const totalReturn = investmentSummaryData?.amount
    ? investmentSummaryData?.amount + estimatedProfit
    : 0;

  return (
    <InvestmentContext.Provider
      value={{
        investmentSummaryData,
        setInvestmentSummaryData,
        estimatedProfit,
        maturityDate,
        totalReturn,
      }}
    >
      {children}
    </InvestmentContext.Provider>
  );
}

// Use investment context
export function useInvestmentSummary(): InvestmentContextType {
  const context = useContext(InvestmentContext);
  if (context === undefined) {
    throw new Error('useInvestment must be used within an InvestmentProvider');
  }
  return context;
}
