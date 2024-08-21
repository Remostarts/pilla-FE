'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

import { PaymentSummaryContextType, PaymentSummaryProps } from '@/types/summary.type';

interface PaymentSummaryProviderProps {
  children: ReactNode;
}

const PaymentSummaryContext = createContext<PaymentSummaryContextType | undefined>(undefined);

// Create Payment Summary Provider
export function PaymentSummaryProvider({ children }: PaymentSummaryProviderProps) {
  const [paymentSummary, setPaymentSummary] = useState<PaymentSummaryProps | null>(null);

  const setPaymentSummaryData = (props: PaymentSummaryProps) => {
    setPaymentSummary(props);
  };

  return (
    <PaymentSummaryContext.Provider
      value={{
        paymentSummary,
        setPaymentSummaryData,
      }}
    >
      {children}
    </PaymentSummaryContext.Provider>
  );
}

// Use Payment Summary Context
export function usePaymentSummary(): PaymentSummaryContextType {
  const context = useContext(PaymentSummaryContext);
  if (context === undefined) {
    throw new Error('usePaymentSummary must be used within a PaymentSummaryProvider');
  }
  return context;
}
