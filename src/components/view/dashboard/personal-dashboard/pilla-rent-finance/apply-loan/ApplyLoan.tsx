import { Sidebar, useSidebar } from '../../../shared/SideBar';
import LoanSummary from '../../../shared/summary/LoanSummary';
import { SuccessMessage } from '../../../shared/SuccessMessage';
import Pin from '../../../shared/Pin';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import ReSelect from '@/components/re-ui/ReSelect';
import ReSelectable from '@/components/re-ui/ReSelectable';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import SubHeading from '@/components/view/dashboard/shared/SubHeading';
import { useLoanSummary } from '@/context/LoanSummaryProvider';
import { LOAN_APPLIED_SUCCESS_WINDOW, LOAN_SUMMARY_WINDOW } from '@/constants/pillaRentFinanceData';
import { TRANSACTION_PIN_WINDOW } from '@/constants/homeData';

const selectableOptions = [
  { label: '1 Month', value: '1' },
  { label: '3 Month', value: '3' },
  { label: '6 Month', value: '6' },
];

export default function ApplyLoan() {
  const { setLoanSummaryData } = useLoanSummary();
  const { open } = useSidebar();

  const handleSelect = (value: string | number) => {
    console.log('Selected:', value);
  };

  const handleProceed = () => {
    const loanSummaryData = {
      loanType: 'Rent Payment',
      loanTenor: '3 Months',
      estimatedInterestRate: '3.5% - 5%',
      monthlyRepayment: 400000,
      loanAmount: 2300000,
    };

    setLoanSummaryData(loanSummaryData);
    open(LOAN_SUMMARY_WINDOW);
  };

  return (
    <div className="p-4">
      <Heading heading="Apply for Loan" size="2xl" />

      <div className="mt-2">
        <SubHeading subHeading="Getting a loan takes just a few steps" />
      </div>

      <div className="mt-8 space-y-5">
        <ReSelect
          name="loanReason"
          label="What is the Loan for?"
          placeholder="Select"
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'other', label: 'Other' },
          ]}
        />

        <ReInput
          label="How much do you need?"
          placeholder="0.00"
          name="amountRequired"
          description="Maximum Amount: ₦ 500,000"
        />

        <ReSelectable options={selectableOptions} onSelect={handleSelect} />
      </div>

      <div className="mt-12">
        <ReButton size="lg" onClick={handleProceed}>
          Proceed
        </ReButton>
      </div>

      {/* Loan Sumamry window */}
      <Sidebar.Window name={LOAN_SUMMARY_WINDOW}>
        <LoanSummary />
      </Sidebar.Window>

      {/* Transaction Pin */}
      <Sidebar.Window name={TRANSACTION_PIN_WINDOW}>
        <Pin
          heading="Enter Transaction PIN"
          subHeading="Input your 4 digit passcode to authorize this transaction"
          btnName="Verify"
          opens={LOAN_APPLIED_SUCCESS_WINDOW}
          closes={TRANSACTION_PIN_WINDOW}
        />
      </Sidebar.Window>

      {/* Success Message for Apply Loan */}
      <Sidebar.Window name={LOAN_APPLIED_SUCCESS_WINDOW}>
        <SuccessMessage>
          <SuccessMessage.Title>Loan Application Submitted</SuccessMessage.Title>
          <SuccessMessage.Content>
            <SuccessMessage.Description>
              Verification and disbursement takes within 24-48 working hours.
            </SuccessMessage.Description>
            <div className="-mt-4">
              <SuccessMessage.Description>Check your e-mail for update.</SuccessMessage.Description>
            </div>
          </SuccessMessage.Content>
          <SuccessMessage.Button closes={LOAN_APPLIED_SUCCESS_WINDOW}>Done</SuccessMessage.Button>
        </SuccessMessage>
      </Sidebar.Window>
    </div>
  );
}
