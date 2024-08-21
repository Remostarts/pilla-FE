'use client';

import { useState } from 'react';

import Header from '@/components/view/dashboard/personal-dashboard/Header';
import SideNav from '@/components/view/dashboard/personal-dashboard/SideNav';
import { Sidebar } from '@/components/view/dashboard/shared/SideBar';
import { InvestmentProvider } from '@/context/InvestmentSummaryProvider';
import { LoanSummaryProvider } from '@/context/LoanSummaryProvider';
import { PaymentSummaryProvider } from '@/context/PaymentSummaryProvider';
import { SavingsSummaryProvider } from '@/context/SavingSummaryProvider';
import { TChildrenProps } from '@/types';

export default function Layout({ children }: TChildrenProps) {
  // state for current page
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <div className="grid grid-cols-[19rem_1fr] grid-rows-[auto_1fr] xl:grid-cols-[20rem_1fr]">
      {/*  passing currentPage prop for changing the heading in the header component */}
      <Header currentPage={currentPage} />

      {/* onNavSelect method for getting the current navigation link */}
      <SideNav onNavSelect={setCurrentPage} />

      <main className="bg-[#f2f2f2] p-10">
        <PaymentSummaryProvider>
          <InvestmentProvider>
            <LoanSummaryProvider>
              <SavingsSummaryProvider>
                <Sidebar>{children}</Sidebar>
              </SavingsSummaryProvider>
            </LoanSummaryProvider>
          </InvestmentProvider>
        </PaymentSummaryProvider>
      </main>
    </div>
  );
}
