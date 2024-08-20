import { useSidebar } from '../SideBar';

import { Summary } from './Summary';

import { formatNumber } from '@/helpers/utils/formatNumber';
import { TRANSACTION_PIN_WINDOW } from '@/constants/homeData';
import { SAVINGS_SUMMARY_WINDOW } from '@/constants/pillaSavingsData';
import { useSavingsSummary } from '@/context/SavingSummaryProvider';

export default function SavingsSummary() {
  const { savingsSummary } = useSavingsSummary();

  // Use Sidebar Context
  const { close, open } = useSidebar();

  // Handle Submit Action
  const handlePayNow = () => {
    close(SAVINGS_SUMMARY_WINDOW);
    open(TRANSACTION_PIN_WINDOW);
  };

  // Create the items array for Summary.Body
  const summaryItems = [
    { label: 'Interest Rate', value: savingsSummary?.interestRate || 'N/A' },
    { label: 'Start Date', value: savingsSummary?.startDate || 'N/A' },
    { label: 'Withdrawal Date', value: savingsSummary?.withdrawalDate || 'N/A' },
    { label: 'Saving', value: formatNumber(savingsSummary?.saving) || 'N/A' },
    { label: 'Frequent', value: savingsSummary?.frequent || 'N/A' },
    { label: 'Target', value: formatNumber(savingsSummary?.target), isBold: true || 'N/A' },
  ];

  return (
    <Summary className="p-4">
      {/* Heading */}
      <Summary.Heading heading="Savings Summary" size="2xl" />
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

      {/* Agreement */}
      <div className="mt-10 space-y-6">
        <div className="flex items-center gap-3">
          <input type="checkbox" name="agreement1" id="agreement1" />
          <label htmlFor="agreement1" className="text-sm text-gray-600">
            I authorize automatic deduction of my savings on the due date from my designated account
            or card.
          </label>
        </div>
      </div>

      {/* Btn */}
      <div className="mt-10">
        <Summary.Button onClick={handlePayNow}>Pay Now</Summary.Button>
      </div>
    </Summary>
  );
}
