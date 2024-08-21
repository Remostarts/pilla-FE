import { useSidebar } from '../SideBar';

import { Summary } from './Summary';

import { formatNumber } from '@/helpers/utils/formatNumber';
import { TRANSACTION_PIN_WINDOW, PAYMENT_SUMMARY_WINDOW } from '@/constants/homeData';
import { usePaymentSummary } from '@/context/PaymentSummaryProvider';

interface PaymentSummaryProps {
  isDestination: boolean;
  accountHolderName?: string;
  bankName?: string;
}

export default function PaymentSummary({
  isDestination,
  accountHolderName,
  bankName,
}: PaymentSummaryProps) {
  const { paymentSummary } = usePaymentSummary();
  const amount = paymentSummary?.amount ?? 0;
  const serviceCharge = paymentSummary?.serviceCharge ?? 0;
  const totalAmount = amount + serviceCharge;

  // Use Sidebar Context
  const { close, open } = useSidebar();

  // Handle Payment Action
  const handlePayment = () => {
    close(PAYMENT_SUMMARY_WINDOW);
    open(TRANSACTION_PIN_WINDOW);
  };

  // Create the items array for Summary.Body
  const summaryItems = [
    { label: 'Amount', value: `₦ ${formatNumber(amount)}` },
    { label: 'Service Charge', value: `₦ ${formatNumber(serviceCharge)}` },
    { label: 'Total', value: `₦ ${formatNumber(totalAmount)}`, isBold: true },
  ];

  // Add account holder name and bank name if isDestination is true
  if (isDestination) {
    summaryItems.unshift(
      { label: 'Account Holder Name', value: accountHolderName || 'N/A' },
      { label: 'Bank Name', value: bankName || 'N/A' }
    );
  }

  return (
    <Summary className="p-4">
      {/* Heading */}
      <Summary.Heading heading="Payment Summary" size="2xl" />
      {/* Body */}
      <Summary.Body items={summaryItems} />

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
      <Summary.Button onClick={handlePayment}>Pay Now</Summary.Button>
    </Summary>
  );
}
