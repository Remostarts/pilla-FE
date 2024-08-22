'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SavingsSummaryProps {
  interestRate: string;
  startDate: string;
  withdrawalDate: string;
  saving: number;
  frequent: string;
  target: number;
}

type SavingsSummaryContextType = {
  savingsSummary: SavingsSummaryProps | null;
  setSavingsSummaryData: (props: SavingsSummaryProps) => void;
};

interface SavingsSummaryProviderProps {
  children: ReactNode;
}

const SavingsSummaryContext = createContext<SavingsSummaryContextType | undefined>(undefined);

// Create Savings Summary Provider
export function SavingsSummaryProvider({ children }: SavingsSummaryProviderProps) {
  const [savingsSummary, setSavingsSummary] = useState<SavingsSummaryProps | null>(null);

  const setSavingsSummaryData = (props: SavingsSummaryProps) => {
    setSavingsSummary(props);
  };

  return (
    <SavingsSummaryContext.Provider
      value={{
        savingsSummary,
        setSavingsSummaryData,
      }}
    >
      {children}
    </SavingsSummaryContext.Provider>
  );
}

// Use Savings Summary Context
export function useSavingsSummary(): SavingsSummaryContextType {
  const context = useContext(SavingsSummaryContext);
  if (context === undefined) {
    throw new Error('useSavingsSummary must be used within a SavingsSummaryProvider');
  }
  return context;
}
