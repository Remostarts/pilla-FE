import { ReactNode } from 'react';

export type SummaryContextType = {
  selectedMethod: string;
  setSelectedMethod: (method: string) => void;
  agreementChecked: boolean;
  setAgreementChecked: (checked: boolean) => void;
  hasAgreement: boolean;
};

export type SummaryProps = {
  children: ReactNode;
  hasAgreement?: boolean;
  className?: string;
};

export type MethodProps = {
  name: string;
  value: string;
  icon: string;
  details?: string;
  onChangeClick?: () => void;
};

// Payment Summary types
export type PaymentSummaryProps = {
  amount: number;
  serviceCharge: number;
  finalAmount: number;
};

export type PaymentSummaryContextType = {
  paymentSummary: PaymentSummaryProps | null;
  setPaymentSummaryData: (props: PaymentSummaryProps) => void;
};

// More Summary types
