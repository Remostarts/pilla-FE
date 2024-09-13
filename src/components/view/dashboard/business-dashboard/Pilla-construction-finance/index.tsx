'use client';

import { ArrowUpRight, PlusCircle } from 'lucide-react';
import Image from 'next/image';

import DashboardCount from '../../shared/DashboardCount';
import { Sidebar } from '../../shared/SideBar';
import { SuccessMessage } from '../../shared/SuccessMessage';
import RepayLoan from '../../personal-dashboard/pilla-rent-finance/repay-loan';

import ApplyLoan from './ApplyLoan';
import StepForm from './StepForm';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  APPLY_FOR_LOAN,
  APPLY_LOAN_FORM_WINDOW,
  LOAN_APPLICATION_SUBMIT_SUCCESS,
} from '@/constants/businessDashboard';
import { REPAY_LOAN_WINDOW } from '@/constants/pillaRentFinanceData';

const RepaymentHistoryItem = ({
  date,
  time,
  amount,
}: {
  date: string;
  time: string;
  amount: string;
}) => (
  <div className="flex items-center justify-between border-t py-2">
    <div className="flex items-center space-x-4">
      <div className="rounded-full bg-red-100 p-2">
        <ArrowUpRight className="size-4 text-red-500" />
      </div>
      <div>
        <p className="font-medium">Repayment</p>
        <p className="text-sm text-gray-500">
          {date} | {time}
        </p>
      </div>
    </div>
    <p className="font-medium">{amount}</p>
  </div>
);

const LoanHistoryItem = ({
  date,
  status,
  amount,
  payment,
}: {
  date: string;
  status: string;
  amount: string;
  payment: string;
}) => (
  <div className="flex items-start justify-between">
    <div>
      <p className="text-sm text-gray-500">{date}</p>
      <div className="flex items-center space-x-2">
        <div className={`rounded-full p-1 ${status === 'Paid' ? 'bg-green-100' : 'bg-red-100'}`}>
          <div
            className={`size-2 rounded-full ${status === 'Paid' ? 'bg-green-500' : 'bg-red-500'}`}
          />
        </div>
        <p>Loan Amount</p>
      </div>
      <p className="font-medium">{amount}</p>
    </div>
    <div className="text-right">
      <p className="text-sm text-gray-500">{status}</p>
      <p className="font-medium">Weekly Payment</p>
      <p>{payment}</p>
    </div>
  </div>
);

export default function PillaConstructionFinance() {
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
        </div>

        {/* Repayment history card */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Repayment History</CardTitle>
              <Button variant="link" size="sm">
                See All
              </Button>
            </CardHeader>
            <CardContent>
              {[...Array(4)].map((_, index) => (
                <RepaymentHistoryItem
                  key={index}
                  date="Aug 14 2022"
                  time="08:24AM"
                  amount="₦10,000.00"
                />
              ))}
            </CardContent>
          </Card>

          {/* Loan history card table */}
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Loan History</CardTitle>
              <Button variant="link" size="sm">
                See All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <LoanHistoryItem
                  date="Aug 14 2022"
                  status="Paid"
                  amount="₦ 220,000.00"
                  payment="₦ 50,000.00"
                />
                <LoanHistoryItem
                  date="Aug 14 2022"
                  status="Pending"
                  amount="₦ 220,000.00"
                  payment="₦ 50,000.00"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Sidebar Windows */}
      <Sidebar.Window name={APPLY_FOR_LOAN}>
        <ApplyLoan />
      </Sidebar.Window>

      {/* Sidebar Windows */}
      <Sidebar.Window name={APPLY_LOAN_FORM_WINDOW}>
        <StepForm />
      </Sidebar.Window>

      {/* Sidebar Windows */}
      <Sidebar.Window name={REPAY_LOAN_WINDOW}>
        <RepayLoan />
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
