import Header from '@/components/view/dashboard/personal-dashboard/Header';
import SideNav from '@/components/view/dashboard/personal-dashboard/SideNav';
import { Sidebar } from '@/components/view/dashboard/shared/SideBar';
import { InvestmentProvider } from '@/context/InvestmentSummaryProvider';
import { LoanSummaryProvider } from '@/context/LoanSummaryProvider';
import { PaymentSummaryProvider } from '@/context/PaymentSummaryProvider';
import { SavingsSummaryProvider } from '@/context/SavingSummaryProvider';
import { TChildrenProps } from '@/types';

export default function Layout({ children }: TChildrenProps) {
  return (
    <div className="grid grid-cols-[19rem_1fr] grid-rows-[auto_1fr] xl:grid-cols-[20rem_1fr]">
      <Header />
      <SideNav />

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
