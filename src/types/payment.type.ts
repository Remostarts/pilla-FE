import { ReactNode } from 'react';

export type PaymentContextType = {
  selectedMethod: string;
  setSelectedMethod: (method: string) => void;
  agreementChecked: boolean;
  setAgreementChecked: (checked: boolean) => void;
  hasAgreement: boolean;
};

export type PaymentProps = {
  children: ReactNode;
  hasAgreement?: boolean;
};

export type MethodProps = {
  name: string;
  value: string;
  icon: string;
  details?: string;
  onChangeClick?: () => void;
};

export type PaymentSummaryProps = {
  amount: number;
};

export type PaymentSummaryContextType = {
  paymentSummary: PaymentSummaryProps | null;
  openPaymentSummary: (props: PaymentSummaryProps) => void;
};
