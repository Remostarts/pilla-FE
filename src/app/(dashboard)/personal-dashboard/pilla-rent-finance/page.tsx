'use client';

import Image from 'next/image';

import DashboardCount from '@/components/view/dashboard/shared/DashboardCount';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import ActionBtn from '@/components/view/dashboard/shared/ActionBtn';
import { Sidebar } from '@/components/view/dashboard/shared/SideBar';
import {
  APPLY_FOR_LOAN_HOME,
  APPLY_FOR_LOAN_WINDOW,
  REPAY_LOAN_WINDOW,
} from '@/constants/pillaRentFinanceData';
import ApplyLoanHome from '@/components/view/dashboard/personal-dashboard/pilla-rent-finance/apply-loan';
import RepayLoan from '@/components/view/dashboard/personal-dashboard/pilla-rent-finance/repay-loan';
import ApplyLoan from '@/components/view/dashboard/personal-dashboard/pilla-rent-finance/apply-loan/ApplyLoan';

export default function Page() {
  return (
    <section>
      {/* Dashboard Count Section */}
      <div className="grid grid-cols-[1fr_1fr_1.5fr] gap-10">
        <DashboardCount
          className="bg-white text-black"
          countHead="Rent Finance"
          countAmount="0.00"
          headFontWeight="font-light"
        />

        <DashboardCount
          className="bg-white text-black"
          countHead="Credit Limit"
          countAmount="0.00"
          headFontWeight="font-light"
        />

        <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-primary-500 p-6">
          <div className="flex flex-col gap-2">
            <span className={`font-inter text-sm text-white xl:text-base`}>Instant Loan to</span>
            <span className="font-spaceGrotesk text-xl font-medium text-white xl:text-2xl">
              Finance Rent
            </span>
          </div>

          <Sidebar.Open opens={APPLY_FOR_LOAN_HOME}>
            <button className="flex items-center gap-2 rounded-md border border-gray-200 bg-white p-3">
              <Image
                src="/assets/personal-dashboard/pilla-rent-finance/hand-point-icon.svg"
                width={20}
                height={20}
                alt="hand-point-icon"
              />
              <p className="font-spaceGrotesk text-sm font-bold">Apply for Loan</p>
            </button>
          </Sidebar.Open>
        </div>
      </div>

      {/* Dashboard Count Line 2 */}
      <div className="mt-12 grid grid-cols-2 gap-10">
        <DashboardCount
          className="bg-white text-black"
          countHead="Outstanding Loan Balance"
          countAmount="0.00"
          headFontWeight="font-light"
        />

        <div>
          <Heading heading="Actions" />

          <div className="mt-4 flex gap-6">
            <Sidebar.Open opens={REPAY_LOAN_WINDOW}>
              <ActionBtn
                actionName="Repay Loan"
                actionImg="/assets/personal-dashboard/pilla-rent-finance/circle-add-icon.svg"
                className="bg-primary-500 text-white"
              />
            </Sidebar.Open>

            <Sidebar.Open opens={APPLY_FOR_LOAN_WINDOW}>
              <ActionBtn
                actionName="Pay Rent"
                actionImg="/assets/personal-dashboard/pilla-rent-finance/circle-arrow-up-icon.svg"
                className="border-primary-500 bg-white"
              />
            </Sidebar.Open>
          </div>
        </div>
      </div>

      {/* Sidebar Windows */}

      {/* Apply for loan home */}
      <Sidebar.Window name={APPLY_FOR_LOAN_HOME}>
        <ApplyLoanHome />
      </Sidebar.Window>

      {/* Apply for loan */}
      <Sidebar.Window name={APPLY_FOR_LOAN_WINDOW}>
        <ApplyLoan />
      </Sidebar.Window>

      {/* Repay loan window */}
      <Sidebar.Window name={REPAY_LOAN_WINDOW}>
        <RepayLoan />
      </Sidebar.Window>
    </section>
  );
}
