import { Sidebar, useSidebar } from '../SideBar';

import { Payment } from './Payment';

import { usePaymentSummary } from '@/context/PaymentSummaryProvider';

export default function PaymentSummary() {
  const { paymentSummary } = usePaymentSummary();
  const amount = paymentSummary?.amount ?? 0;
  const serviceCharge: number = 100;
  const totalAmount = amount + serviceCharge;

  // Use Sidebar Context
  const { close } = useSidebar();

  const handlePayment = () => {
    close('payment-summary');
  };

  return (
    <Payment>
      {/* Heading */}
      <Payment.Heading heading="Payment Summary" size="2xl" />
      {/* Body */}
      <Payment.Body
        items={[
          { label: 'Amount', value: `₦ ${amount}.00` },
          { label: 'Service Charge', value: `₦ ${serviceCharge}.00` },
          { label: 'Total', value: `₦ ${totalAmount}.00`, isBold: true },
        ]}
      />

      {/* Methods */}
      <div className="mt-10">
        <Payment.Heading heading="Payment Method" size="lg" />
      </div>
      <div className="mt-4">
        <Payment.Method
          name="Account Balance"
          value="account_balance"
          icon="/assets/personal-dashboard/home/payment-wallet-icon.svg"
          details="₦ 400,500.00"
        />
        <Payment.Method
          name="Gt Bank (Card)"
          value="gt_bank_card"
          icon="/assets/personal-dashboard/home/payment-card-icon.svg"
          details="452739******6245"
          onChangeClick={() => {}}
        />
      </div>

      {/* Btn */}
      <Sidebar.Open opens="transaction-pin">
        <Payment.Button onClick={handlePayment}>Pay Now</Payment.Button>
      </Sidebar.Open>
    </Payment>
  );
}
