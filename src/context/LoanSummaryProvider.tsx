'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoanSummaryProps {
  loanType: string;
  loanTenor: string;
  estimatedInterestRate: string;
  monthlyRepayment: number;
  loanAmount: number;
}

type LoanSummaryContextType = {
  loanSummary: LoanSummaryProps | null;
  setLoanSummaryData: (props: LoanSummaryProps) => void;
};

interface LoanSummaryProviderProps {
  children: ReactNode;
}

const LoanSummaryContext = createContext<LoanSummaryContextType | undefined>(undefined);

// Create Loan Summary Provider
export function LoanSummaryProvider({ children }: LoanSummaryProviderProps) {
  const [loanSummary, setLoanSummary] = useState<LoanSummaryProps | null>(null);

  const setLoanSummaryData = (props: LoanSummaryProps) => {
    setLoanSummary(props);
  };

  return (
    <LoanSummaryContext.Provider
      value={{
        loanSummary,
        setLoanSummaryData,
      }}
    >
      {children}
    </LoanSummaryContext.Provider>
  );
}

// Use Loan Summary Context
export function useLoanSummary(): LoanSummaryContextType {
  const context = useContext(LoanSummaryContext);
  if (context === undefined) {
    throw new Error('useLoanSummary must be used within a LoanSummaryProvider');
  }
  return context;
}
