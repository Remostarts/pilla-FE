'use client';

import React from 'react';
import { Check, ChevronDown, Minus, PlusCircle } from 'lucide-react';
import Image from 'next/image';

import DashboardCount from '../../shared/DashboardCount';
import { Sidebar } from '../../shared/SideBar';
import { SuccessMessage } from '../../shared/SuccessMessage';
import RepayLoan from '../../personal-dashboard/pilla-rent-finance/repay-loan';

import ApplyLoan from './ApplyLoan';
import StepForm from './StepForm';
import LoanHistoryDetails from './LoanHistoryDetails';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  APPLY_FOR_LOAN,
  APPLY_LOAN_FORM_WINDOW,
  LOAN_APPLICATION_SUBMIT_SUCCESS,
} from '@/constants/businessDashboard';
import { REPAY_LOAN_WINDOW } from '@/constants/pillaRentFinanceData';

// Repayment History Item Component
interface RepaymentHistoryItemProps {
  date: string;
  time: string;
  amount: string;
}

// Loan History Item Component
interface LoanHistoryItemProps {
  date: string;
  status: string;
  amount: string;
  payment: string;
}

// History Card Component
interface HistoryCardProps {
  title: string;
  children: React.ReactNode;
}

const RepaymentHistoryItem: React.FC<RepaymentHistoryItemProps> = ({ date, time, amount }) => (
  <div className="flex items-center justify-between border-t py-4">
    <div className="flex items-center space-x-4">
      <div className="p-2">
        <Image src="/assets/business-dashboard/debit.svg" alt="debit-icon" width={26} height={26} />
      </div>
      <div>
        <p className="font-medium">Repayment</p>
        <p className="text-sm text-gray-500">{`${date} | ${time}`}</p>
      </div>
    </div>
    <p className="font-medium">{amount}</p>
  </div>
);

const LoanHistoryItem: React.FC<LoanHistoryItemProps> = ({ date, status, amount, payment }) => (
  <div className="rounded-lg border p-4">
    <div className="flex items-center justify-between bg-[#F2F2F2] px-4 py-2">
      <p className="text-sm">{date}</p>
      <p className="text-sm">{status}</p>
    </div>
    <div className="mt-4 flex items-center space-x-2">
      {status === 'Paid' ? (
        <Check className="rounded-full bg-green-500 p-1 text-lg text-white" />
      ) : (
        <Minus className="rounded-full bg-red-100 p-1 text-red-500" />
      )}
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col">
          <p>Loan Amount</p>
          <p className="text-lg font-medium">{amount}</p>
        </div>
        <div>
          <p>Weekly Payment</p>
          <p className="text-lg font-medium">{payment}</p>
        </div>
      </div>
    </div>
  </div>
);

// Action Card Component
const ActionCard: React.FC = () => (
  <Card className="bg-white">
    <CardHeader>
      <CardTitle>Actions</CardTitle>
    </CardHeader>
    <CardContent>
      <Sidebar.Open opens={REPAY_LOAN_WINDOW}>
        <Button
          variant="outline"
          className="w-full rounded-xl bg-black px-6 py-8 text-center text-lg text-white"
        >
          <PlusCircle className="mr-4 size-6" />
          Repay Loan
        </Button>
      </Sidebar.Open>
    </CardContent>
  </Card>
);

const HistoryCard: React.FC<HistoryCardProps> = ({ title, children }) => (
  <Card className="bg-white">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
      <CardTitle className="text-lg font-medium">{title}</CardTitle>
      <Button variant="link" size="sm">
        See All <ChevronDown className="ml-2" />
      </Button>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

// Pilla Construction Finance page
export default function PillaConstructionFinance() {
  // Sample data for repayment history
  const repaymentHistoryData: RepaymentHistoryItemProps[] = Array(4).fill({
    date: 'Aug 14 2022',
    time: '08:24AM',
    amount: '₦10,000.00',
  });

  // Sample data for loan history
  const loanHistoryData: LoanHistoryItemProps[] = [
    { date: 'Aug 14 2022', status: 'Paid', amount: '₦ 220,000.00', payment: '₦ 50,000.00' },
    { date: 'Aug 14 2022', status: 'Pending', amount: '₦ 220,000.00', payment: '₦ 50,000.00' },
  ];

  return (
    <section>
      <div className="container mx-auto space-y-8">
        <DashboardCount
          className="bg-white"
          countHead="Pilla Construction Finance"
          countAmount="200,000,000.00"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Instant loan card */}
          <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-primary-500 p-6">
            <div className="flex flex-col gap-2">
              <span className="font-inter text-sm text-white xl:text-base">Instant Loan to</span>
              <span className="font-spaceGrotesk text-xl font-medium text-white xl:text-2xl">
                Finance Rent
              </span>
            </div>
            <Sidebar.Open opens={APPLY_FOR_LOAN}>
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

          {/* Actions card */}
          <ActionCard />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Repayment history card */}
          <HistoryCard title="Repayment History">
            {repaymentHistoryData.map((item, index) => (
              <RepaymentHistoryItem key={index} {...item} />
            ))}
          </HistoryCard>

          {/* Loan history card */}
          <HistoryCard title="Loan History">
            <Sidebar.Open opens="loan-history-details">
              <div className="space-y-4">
                {loanHistoryData.map((item, index) => (
                  <LoanHistoryItem key={index} {...item} />
                ))}
              </div>
            </Sidebar.Open>
          </HistoryCard>
        </div>
      </div>

      {/* Sidebar Windows */}
      <Sidebar.Window name={APPLY_FOR_LOAN}>
        <ApplyLoan />
      </Sidebar.Window>

      <Sidebar.Window name={APPLY_LOAN_FORM_WINDOW}>
        <StepForm />
      </Sidebar.Window>

      <Sidebar.Window name={REPAY_LOAN_WINDOW}>
        <RepayLoan />
      </Sidebar.Window>

      <Sidebar.Window name="loan-history-details">
        <LoanHistoryDetails />
      </Sidebar.Window>

      {/* Success Message */}
      <Sidebar.Window name={LOAN_APPLICATION_SUBMIT_SUCCESS}>
        <SuccessMessage>
          <SuccessMessage.Title>Loan Application Submitted</SuccessMessage.Title>
          <SuccessMessage.Content>
            <SuccessMessage.Description>
              You will get feedback on your loan application within 10 working days.
            </SuccessMessage.Description>
          </SuccessMessage.Content>
          <SuccessMessage.Button closes={LOAN_APPLICATION_SUBMIT_SUCCESS}>
            Done
          </SuccessMessage.Button>
        </SuccessMessage>
      </Sidebar.Window>
    </section>
  );
}
