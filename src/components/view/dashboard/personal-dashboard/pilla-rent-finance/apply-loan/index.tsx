import Image from 'next/image';

import { Heading } from '../../../shared/Heading';
import SubHeading from '../../../shared/SubHeading';
import { Sidebar } from '../../../shared/SideBar';
import Pin from '../../../shared/Pin';
import { SuccessMessage } from '../../../shared/SuccessMessage';

import WorkInfo from './credit-check/WorkInfo';
import RentInfo from './credit-check/RentInfo';
import LinkBankAccount from './credit-check/LinkBankAccount';
import ApplyLoan from './ApplyLoan';

import { ReButton } from '@/components/re-ui/ReButton';
import {
  APPLY_FOR_LOAN_WINDOW,
  CREDIT_CHECK_DONE_WINDOW,
  LINK_BANK_ACCOUNT_WINDOW,
  LOAN_APPLIED_SUCCESS_WINDOW,
  RENT_INFORMATION_WINDOW,
  WORK_INFORMATION_WINDOW,
} from '@/constants/pillaRentFinanceData';
import { TRANSACTION_PIN_WINDOW } from '@/constants/homeData';

export default function ApplyLoanHome() {
  return (
    <div className="p-4">
      <Heading heading="Apply for Loan" size="2xl" />

      <div className="mt-2">
        <SubHeading subHeading="Getting a loan on the app takes just a few steps" />
      </div>

      <div className="mt-12 flex justify-center">
        <Image
          src="/assets/personal-dashboard/pilla-rent-finance/apply-for-loan.svg"
          alt="apply-for-loan-img"
          width={120}
          height={120}
        />
      </div>

      <p className="mt-10 text-center text-lg">
        Your credit limit has not been assigned. Please click on &quot;Check Credit Limit&quot;
        below to apply.
      </p>

      <div className="mt-12">
        <Sidebar.Open opens={WORK_INFORMATION_WINDOW}>
          <ReButton size="lg">Check Credit Limit</ReButton>
        </Sidebar.Open>
      </div>

      {/* Sidebar Windows */}

      {/* Work Info Window */}
      <Sidebar.Window name={WORK_INFORMATION_WINDOW}>
        <WorkInfo />
      </Sidebar.Window>

      {/* Rent Info Window */}
      <Sidebar.Window name={RENT_INFORMATION_WINDOW}>
        <RentInfo />
      </Sidebar.Window>

      {/* Link Bank Account Window */}
      <Sidebar.Window name={LINK_BANK_ACCOUNT_WINDOW}>
        <LinkBankAccount />
      </Sidebar.Window>

      {/* Apply for loan window */}
      <Sidebar.Window name={APPLY_FOR_LOAN_WINDOW}>
        <ApplyLoan />
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

      {/* Success Message for Credit Check Done Window */}
      <Sidebar.Window name={CREDIT_CHECK_DONE_WINDOW}>
        <SuccessMessage>
          <SuccessMessage.Title>Application Successful</SuccessMessage.Title>
          <SuccessMessage.Content>
            <SuccessMessage.Description>
              Verification might take 1-3 days.
            </SuccessMessage.Description>
            <div className="-mt-4">
              <SuccessMessage.Description>Check your e-mail for update.</SuccessMessage.Description>
            </div>
          </SuccessMessage.Content>
          <SuccessMessage.Button closes={CREDIT_CHECK_DONE_WINDOW}>Done</SuccessMessage.Button>
        </SuccessMessage>
      </Sidebar.Window>
    </div>
  );
}
