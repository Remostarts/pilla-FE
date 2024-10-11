'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

import AdminDashboardCount from '../shared/AdminDashboardCount';
import { Sidebar } from '../../dashboard/shared/SideBar';

import EditInvestment from './EditInvestment';

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

interface investmentDetails {
  id: number;
  name: string;
  status: string;
  unitPrice: string;
  account: string;
  description: string;
  rio: string;
  unitSold: string;
  unclaimedUnit: string;
  period: string;
}

interface Transaction {
  id: string;
  unit: number;
  amount: string;
  date: string;
  status: string;
}

// Mock data for all savings plans
const investments: investmentDetails[] = [
  {
    id: 1,
    name: 'investment 1',
    status: 'Active',
    unitPrice: '₦50,000',
    account: 'Personal',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mattis bibendum laoreet sem rhoncus habitasse in.',
    rio: '12%',
    unitSold: '5',
    unclaimedUnit: '5',
    period: '3 Months',
  },
  {
    id: 2,
    name: 'investment 2',
    status: 'Active',
    unitPrice: '₦60,000',
    account: 'Personal',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mattis bibendum laoreet sem rhoncus habitasse in.',
    rio: '12%',
    unitSold: '12',
    unclaimedUnit: '10',
    period: '6 Months',
  },
  {
    id: 3,
    name: 'investment 3',
    status: 'Active',
    unitPrice: '₦50,000',
    account: 'Personal',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mattis bibendum laoreet sem rhoncus habitasse in.',
    rio: '10%',
    unitSold: '23',
    unclaimedUnit: '5',
    period: '12 Months',
  },
  {
    id: 4,
    name: 'investment 4',
    status: 'Active',
    unitPrice: '₦50,000',
    account: 'Personal',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mattis bibendum laoreet sem rhoncus habitasse in.',
    rio: '8%',
    unitSold: '200',
    unclaimedUnit: '5',
    period: '3 Months',
  },
  {
    id: 5,
    name: 'investment 5',
    status: 'Active',
    unitPrice: '₦50,000',
    account: 'Personal',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mattis bibendum laoreet sem rhoncus habitasse in.',
    rio: '4%',
    unitSold: '1000',
    unclaimedUnit: '5',
    period: '3 Months',
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

export default function InvestmentDetail() {
  const params = useParams();
  const [investment, setInvestment] = useState<investmentDetails | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  useEffect(() => {
    const planId = Number(params.id);
    const plan = investments.find((p) => p.id === planId);
    if (plan) {
      setInvestment(plan);
    }
  }, [params.id]);

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

  if (!investment) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className=" space-y-6 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* details section card  */}
          <Card className="bg-white md:col-span-1 ">
            <div className="mb-2 flex items-center justify-center p-6">
              <Image
                src="/assets/admin/image-placeholder.png"
                alt="image-placeholder"
                width={500}
                height={500}
              />
            </div>
            <CardHeader className="mb-6 border-b">
              <CardTitle className="font-spaceGrotesk">Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-spaceGrotesk">
              <div>
                <p className="text-md font-medium">Status:</p>
                <Badge variant="outline" className="bg-green-100 text-green-500">
                  {investment.status}
                </Badge>
              </div>
              <div>
                <p className="text-md font-medium">Account:</p>
                <p>{investment.account}</p>
              </div>
              <div>
                <p className="text-md font-medium">Title:</p>
                <p>{investment.name}</p>
              </div>
              <div>
                <p className="text-md font-medium">Description:</p>
                <p className="text-md">{investment.description}</p>
              </div>
              <div>
                <p className="text-md font-medium">Unit Price:</p>
                <p className="text-md">{investment.unitPrice}</p>
              </div>

              <div>
                <p className="text-md font-medium">RIO:</p>
                <p>{investment.rio}</p>
              </div>
              <div>
                <p className="text-md font-medium">Period:</p>
                <p>{investment.period}</p>
              </div>
              <div className="grid grid-cols-2 space-x-2">
                <Button className="bg-black text-white hover:bg-black/80">CHANGE STATUS</Button>
                <Sidebar.Open opens="EDIT_INVESTMENT">
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
              <div className="grid grid-cols-2 gap-4">
                <AdminDashboardCount
                  countHead="Units Sold"
                  countNumber={`${investment.unitSold}`}
                  className="bg-white text-black "
                />
                <AdminDashboardCount
                  countHead="Unclaimed Units"
                  countNumber={`${investment.unclaimedUnit}`}
                  className="bg-white text-black "
                />
              </div>

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

      <Sidebar.Window name="EDIT_INVESTMENT">
        <EditInvestment />
      </Sidebar.Window>
    </div>
  );
}
