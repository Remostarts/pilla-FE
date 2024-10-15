import { ChevronDown } from 'lucide-react';

import AdminDashboardCount from '../../shared/AdminDashboardCount';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Heading } from '@/components/view/dashboard/shared/Heading';

interface UserFinanceTabProps {
  userData: {
    creditLimit: number;
    financeAmount: number;
    outstandingBalance: number;
  };
}

export default function UserFinanceTab({ userData }: UserFinanceTabProps) {
  return (
    <>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <AdminDashboardCount
          countHead="Credit Limit"
          countNumber={`₦ ${userData.creditLimit.toFixed(2)}`}
          className="border shadow-sm"
        />
        <AdminDashboardCount
          countHead="Finance Amount"
          countNumber={`₦ ${userData.financeAmount.toFixed(2)}`}
          className="border shadow-sm"
        />
        <AdminDashboardCount
          countHead="Outstanding Balance"
          countNumber={`₦ ${userData.outstandingBalance.toFixed(2)}`}
          className="border shadow-sm"
        />
      </div>
      <Card className="mt-6 border-0 shadow-none">
        <CardHeader className="px-0 pt-6">
          <CardTitle className="text-lg font-medium">Loan History</CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          {[1, 2].map((_, index) => (
            <div key={index} className="mb-4 rounded-lg bg-gray-50 p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Aug 14 2022</div>
                <div className="text-sm text-gray-500">17753641265</div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex  items-center space-x-2">
                  <div className="size-4 rounded-full bg-green-500" />
                  <div className="font-medium">Loan Amount</div>
                  <div className="font-bold">₦ 220,000.00</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Weekly Payment</div>
                  <div className="font-bold">₦ 50,000.00</div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <Heading heading="Payment History" className="text-lg font-semibold" />
          <Button variant="link" className="text-sm text-blue-600">
            See All
            <ChevronDown className="ml-2 size-4" />
          </Button>
        </div>
        <Table className="mt-4">
          <TableBody>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center">
                    <div className="mr-2 size-4 rounded-full bg-red-400" />
                    Repayment
                  </div>
                </TableCell>
                <TableCell>₦10,000.00</TableCell>
                <TableCell>2021-09-05 18:38:29</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
