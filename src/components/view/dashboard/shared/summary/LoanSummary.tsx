import { useSidebar } from '../SideBar';
import SubHeading from '../SubHeading';

import { Summary } from './Summary';

import { formatNumber } from '@/helpers/utils/formatNumber';
import { TRANSACTION_PIN_WINDOW } from '@/constants/homeData';
import { useLoanSummary } from '@/context/LoanSummaryProvider';
import { ReButton } from '@/components/re-ui/ReButton';
import { LOAN_SUMMARY_WINDOW } from '@/constants/pillaRentFinanceData';

export default function LoanSummary() {
  const { loanSummary } = useLoanSummary();

  // Use Sidebar Context
  const { close, open } = useSidebar();

  // Handle Submit Action
  const handleSubmit = () => {
    close(LOAN_SUMMARY_WINDOW);
    open(TRANSACTION_PIN_WINDOW);
  };

  // Create the items array for Summary.Body
  const summaryItems = [
    { label: 'Loan Type', value: loanSummary?.loanType || 'N/A' },
    { label: 'Loan Tenor', value: loanSummary?.loanTenor || 'N/A' },
    { label: 'Estimated Interest Rate', value: loanSummary?.estimatedInterestRate || 'N/A' },
    { label: 'Monthly Repayment', value: formatNumber(loanSummary?.monthlyRepayment) || 'N/A' },
    { label: 'Loan Amount', value: formatNumber(loanSummary?.loanAmount), isBold: true || 'N/A' },
  ];

  return (
    <Summary className="p-4">
      {/* Heading */}
      <Summary.Heading heading="Loan Summary" size="2xl" />
      <SubHeading subHeading="Getting a loan takes just a few steps." className="mt-2" />
      {/* Body */}
      <Summary.Body items={summaryItems} />

      {/* Methods */}
      <div className="mt-10 space-y-6">
        <div className="flex items-center gap-3">
          <input type="checkbox" name="agreement1" id="agreement1" />
          <label htmlFor="agreement1" className="text-sm text-gray-600">
            I acknowledge that the rates, tenor, and proposed loan amount are estimates, subject to
            further assessment, as stated on the loan summary page.
          </label>
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" name="agreement2" id="agreement2" />
          <label htmlFor="agreement2" className="text-sm text-gray-600">
            Approve the automatic deduction of loan repayment from my salary bank account on the due
            date.
          </label>
        </div>
      </div>

      {/* Btn */}
      <div className="mt-10">
        <ReButton size="lg" onClick={handleSubmit}>
          Submit Application
        </ReButton>
      </div>
    </Summary>
  );
}
