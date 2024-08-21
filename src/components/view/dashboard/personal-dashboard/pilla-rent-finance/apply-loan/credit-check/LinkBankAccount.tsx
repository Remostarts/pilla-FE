import React from 'react';

import { Heading } from '@/components/view/dashboard/shared/Heading';
import SubHeading from '@/components/view/dashboard/shared/SubHeading';
import {
  CREDIT_CHECK_DONE_WINDOW,
  LINK_BANK_ACCOUNT_WINDOW,
} from '@/constants/pillaRentFinanceData';
import { useSidebar } from '@/components/view/dashboard/shared/SideBar';

export default function LinkBankAccount() {
  const { open, close } = useSidebar();

  const handleContinueClick = () => {
    close(LINK_BANK_ACCOUNT_WINDOW);
    open(CREDIT_CHECK_DONE_WINDOW);
  };

  return (
    <div className="p-4">
      <Heading heading="Link Salary Bank Account" size="2xl" />
      <SubHeading
        subHeading="Make sure the bank being linked is your salary account. We are going to fetch financial transaction, balance, expense, income, and identity data."
        className="mt-2"
      />

      <div className="relative mt-8 rounded-lg bg-blue-600 p-10 text-white">
        <button className="absolute right-4 top-4 text-white">&times;</button>

        <Heading heading="Link your account with Demo" className="mt-4" size="2xl" />

        <ul className="mt-6 space-y-6">
          <li className="flex items-start">
            <svg
              className="mr-2 mt-1 size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <div>
              <Heading heading="Secured" size="lg" />
              <SubHeading
                subHeading="Your information is encrypted using bank grade security."
                className="text-white"
              />
            </div>
          </li>
          <li className="flex items-start">
            <svg
              className="mr-2 mt-1 size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <div>
              <Heading heading="Private" size="lg" />
              <SubHeading
                subHeading="Your credentials will never be made accessible to Demo."
                className="text-white"
              />
            </div>
          </li>
          <li className="flex items-start">
            <svg
              className="mr-2 mt-1 size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <div>
              <Heading heading="Protected" size="lg" />
              <SubHeading
                subHeading="Demo or Mono doesn't have access to move your funds."
                className="text-white"
              />
            </div>
          </li>
        </ul>

        <p className="mb-2 mt-6 text-xs">By clicking the button below you agree to Mono T&C.</p>

        <button
          className="w-full rounded-md bg-white py-3 font-spaceGrotesk font-semibold text-blue-600"
          onClick={handleContinueClick}
        >
          Click to continue
        </button>
      </div>
    </div>
  );
}
