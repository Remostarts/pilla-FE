'use client';

import { ArrowUpRight, PlusCircle, Pointer } from 'lucide-react';

import DashboardCount from '../../shared/DashboardCount';
import { Heading } from '../../shared/Heading';
import { Sidebar } from '../../shared/SideBar';
import { SuccessMessage } from '../../shared/SuccessMessage';

import ApplyLoan from './ApplyLoan';
import StepForm from './StepForm';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  APPLY_FOR_LOAN,
  APPLY_LOAN_FORM_WINDOW,
  LOAN_APPLICATION_SUBMIT_SUCCESS,
} from '@/constants/businessDashboard';

export default function PillaConstructionFinance() {
  return (
    <section>
      <div className="container mx-auto space-y-8">
        <div className="space-y-2">
          <DashboardCount
            className="bg-white"
            countHead="Pilla Construction Finance"
            countAmount="200,000,000.00"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* // instant loan card  */}
          <Card className="bg-primary-500 pt-4 text-white ">
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-md mb-1">Instant loan to</p>
                <Heading heading="Construction Finance" className="text-2xl font-bold" />
              </div>
              <Sidebar.Open opens={APPLY_FOR_LOAN}>
                <Button
                  variant="secondary"
                  className="w-56 bg-white p-6 text-lg text-black hover:bg-gray-100"
                >
                  <Pointer className="mr-2 size-6" />
                  Apply for loan
                </Button>
              </Sidebar.Open>
            </CardContent>
          </Card>

          {/* actions card */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full rounded-xl bg-black px-6 py-8 text-center text-lg text-white"
              >
                <PlusCircle className="mr-4 size-6" />
                Repay Loan
              </Button>
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
                <div key={index} className="flex items-center justify-between border-t py-2">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-red-100 p-2">
                      <ArrowUpRight className="size-4 text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium">Repayment</p>
                      <p className="text-sm text-gray-500">Aug 14 2022 | 08:24AM</p>
                    </div>
                  </div>
                  <p className="font-medium">₦10,000.00</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* loan history card table */}
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Loan History</CardTitle>
              <Button variant="link" size="sm">
                See All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Aug 14 2022</p>
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-green-100 p-1">
                        <div className="size-2 rounded-full bg-green-500" />
                      </div>
                      <p>Loan Amount</p>
                    </div>
                    <p className="font-medium">₦ 220,000.00</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Paid</p>
                    <p className="font-medium">Weekly Payment</p>
                    <p>₦ 50,000.00</p>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Aug 14 2022</p>
                    <div className="flex items-center space-x-2">
                      <div className="rounded-full bg-red-100 p-1">
                        <div className="size-2 rounded-full bg-red-500" />
                      </div>
                      <p>Loan Amount</p>
                    </div>
                    <p className="font-medium">₦ 220,000.00</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Pending</p>
                    <p className="font-medium">Weekly Payment</p>
                    <p>₦ 50,000.00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* // apply loan window */}
      <Sidebar.Window name={APPLY_FOR_LOAN}>
        <ApplyLoan />
      </Sidebar.Window>

      {/* // apply loan form window */}
      <Sidebar.Window name={APPLY_LOAN_FORM_WINDOW}>
        <StepForm />
      </Sidebar.Window>

      {/* // success message after creating a payment link */}
      <Sidebar.Window name={LOAN_APPLICATION_SUBMIT_SUCCESS}>
        <SuccessMessage>
          <SuccessMessage.Title>Loan Application Submitted</SuccessMessage.Title>
          <SuccessMessage.Content>
            <SuccessMessage.Description>
              You will get a feedback on your loan application within 10 working days.
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
