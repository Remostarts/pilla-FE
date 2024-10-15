'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import AdminDashboardCount from '../shared/AdminDashboardCount';
import { Sidebar } from '../../dashboard/shared/SideBar';

import EditSavingsPlan from './EditSavingPlan';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface SavingsPlan {
  id: number;
  name: string;
  status: string;
  interest: string;
  account: string;
  description: string;
  rio: string;
  totalBalance: string;
}

interface Transaction {
  id: string;
  unit: number;
  amount: string;
  date: string;
  status: string;
}

// Mock data for all savings plans
const savingsPlans: SavingsPlan[] = [
  {
    id: 1,
    name: 'Rent Savings',
    status: 'Active',
    interest: '10% PA',
    account: 'Personal',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mattis bibendum laoreet sem rhoncus habitasse in.',
    rio: '12%',
    totalBalance: '₦150,000.00',
  },
  {
    id: 2,
    name: 'Home Ownership Savings',
    status: 'Active',
    interest: '10% PA',
    account: 'Personal',
    description: 'Saving for a down payment on a new home.',
    rio: '15%',
    totalBalance: '₦500,000.00',
  },
  {
    id: 3,
    name: 'Investment Savings',
    status: 'Active',
    interest: '12% PA',
    account: 'Business',
    description: 'Building a diversified investment portfolio.',
    rio: '18%',
    totalBalance: '₦750,000.00',
  },
  {
    id: 4,
    name: 'Emergency Fund',
    status: 'Active',
    interest: '8% PA',
    account: 'Personal',
    description: 'Saving for unexpected expenses and emergencies.',
    rio: '10%',
    totalBalance: '₦300,000.00',
  },
];

// Mock data for transactions
const transactions: Transaction[] = [
  { id: 'IV-HGY6127631', unit: 3, amount: '₦150,000.00', date: '2021-09-05', status: 'Success' },
  { id: 'IV-HGY6127632', unit: 3, amount: '₦150,000.00', date: '2021-09-05', status: 'Success' },
  { id: 'IV-HGY6127633', unit: 3, amount: '₦150,000.00', date: '2021-09-05', status: 'Success' },
  { id: 'IV-HGY6127634', unit: 3, amount: '₦150,000.00', date: '2021-09-05', status: 'Success' },
  { id: 'IV-HGY6127635', unit: 3, amount: '₦150,000.00', date: '2021-09-05', status: 'Success' },
  { id: 'IV-HGY6127636', unit: 3, amount: '₦150,000.00', date: '2021-09-05', status: 'Success' },
  { id: 'IV-HGY6127637', unit: 3, amount: '₦150,000.00', date: '2021-09-05', status: 'Success' },
  { id: 'IV-HGY6127638', unit: 3, amount: '₦150,000.00', date: '2021-09-05', status: 'Success' },
];

export default function SavingsPlanDetail() {
  const params = useParams();
  const [savingsPlan, setSavingsPlan] = useState<SavingsPlan | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  useEffect(() => {
    const planId = Number(params.id);
    const plan = savingsPlans.find((p) => p.id === planId);
    if (plan) {
      setSavingsPlan(plan);
    }
  }, [params.id]);

  // function to filter transactions based on status and date
  const filteredTransactions = transactions.filter((transaction) => {
    if (statusFilter !== 'all' && transaction.status.toLowerCase() !== statusFilter) {
      return false;
    }
    if (dateFilter !== 'all') {
      const daysAgo = (Date.now() - new Date(transaction.date).getTime()) / (1000 * 3600 * 24);
      if (daysAgo > Number(dateFilter)) {
        return false;
      }
    }
    return true;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);

  // checking if plan exists
  if (!savingsPlan) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className=" space-y-6 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* details section card  */}
          <Card className="bg-white md:col-span-1 ">
            <CardHeader className="mb-6 border-b">
              <CardTitle className="font-spaceGrotesk">Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-spaceGrotesk">
              <div>
                <p className="text-md font-medium">Status:</p>
                <Badge variant="outline" className="bg-green-100 text-green-500">
                  {savingsPlan.status}
                </Badge>
              </div>
              <div>
                <p className="text-md font-medium">Account:</p>
                <p>{savingsPlan.account}</p>
              </div>
              <div>
                <p className="text-md font-medium">Title:</p>
                <p>{savingsPlan.name}</p>
              </div>
              <div>
                <p className="text-md font-medium">Description:</p>
                <p className="text-md">{savingsPlan.description}</p>
              </div>
              <div>
                <p className="text-md font-medium">RIO:</p>
                <p>{savingsPlan.rio}</p>
              </div>
              <div className="grid grid-cols-2 space-x-2">
                <Button className="bg-black text-white hover:bg-black/80">CHANGE STATUS</Button>
                <Sidebar.Open opens="EDIT_SAVINGS_PLAN">
                  <Button className="bg-green-500 text-white hover:bg-green-600">EDIT</Button>
                </Sidebar.Open>
              </div>
            </CardContent>
          </Card>

          {/* overview section  */}
          <Card className="bg-white md:col-span-2">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <AdminDashboardCount
                countHead="Total Balance"
                countNumber="₦ 10,000,000.00"
                className="bg-white text-black "
              />

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Transactions</h3>
                  {/* Filters  */}
                  <div className="flex space-x-2">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="All Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="success">Success</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="failed">Failed</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={dateFilter} onValueChange={setDateFilter}>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Last 7 Days" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">Last 7 Days</SelectItem>
                        <SelectItem value="30">Last 30 Days</SelectItem>
                        <SelectItem value="90">Last 90 Days</SelectItem>
                        <SelectItem value="all">All Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Tabel  */}
                <Table>
                  <TableHeader className="bg-[#F2F2F2]">
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Unit</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentItems.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.id}</TableCell>
                        <TableCell>{transaction.unit}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-500 text-white">
                            {transaction.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {/* Pagination  */}
                <div className="flex items-center justify-between space-x-2 py-4">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">Rows per page</p>
                    <Select
                      value={`${itemsPerPage}`}
                      onValueChange={(value) => setItemsPerPage(Number(value))}
                    >
                      <SelectTrigger className="h-8 w-[70px]">
                        <SelectValue placeholder={itemsPerPage} />
                      </SelectTrigger>
                      <SelectContent side="top">
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                          <SelectItem key={pageSize} value={`${pageSize}`}>
                            {pageSize}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                    {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredTransactions.length)}{' '}
                    of {filteredTransactions.length}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={indexOfLastItem >= filteredTransactions.length}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Edit Savings Plan Window */}
      <Sidebar.Window name="EDIT_SAVINGS_PLAN">
        <EditSavingsPlan />
      </Sidebar.Window>
    </div>
  );
}
