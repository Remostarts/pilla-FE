import React, { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Transaction {
  id: string;
  type: string;
  amount: number;
  name: string;
  date: string;
  status: 'Pending' | 'Success';
}

const TransactionTable: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    // Sample data, replace with your actual data or fetch from an API
    {
      id: 'ID-U5219J4DW',
      type: 'Transfer',
      amount: 1500000.0,
      name: 'Talan Rosser',
      date: '2021-09-05 18:38:29',
      status: 'Pending',
    },
    // ... add more sample transactions
  ]);

  const [typeFilter, setTypeFilter] = useState('All Type');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [dateFilter, setDateFilter] = useState('Last 7 Days');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = transactions.filter((transaction) => {
    return (
      (typeFilter === 'All Type' || transaction.type === typeFilter) &&
      (statusFilter === 'All Status' || transaction.status === statusFilter) &&
      (transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="space-y-4 p-4">
      <div className="flex space-x-4">
        <Select onValueChange={(value) => setTypeFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Type">All Type</SelectItem>
            <SelectItem value="Transfer">Transfer</SelectItem>
            <SelectItem value="Settlement">Settlement</SelectItem>
            {/* Add more types as needed */}
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setStatusFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Status">All Status</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Success">Success</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setDateFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Last 7 Days" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Last 7 Days">Last 7 Days</SelectItem>
            <SelectItem value="Last 30 Days">Last 30 Days</SelectItem>
            <SelectItem value="Last 90 Days">Last 90 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-between">
        <Input
          placeholder="Search Transaction"
          className="w-[300px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline">EXPORT</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>TRANSACTION ID</TableHead>
            <TableHead>TYPE</TableHead>
            <TableHead>AMOUNT</TableHead>
            <TableHead>NAME</TableHead>
            <TableHead>DATE</TableHead>
            <TableHead>STATUS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>₦{transaction.amount.toFixed(2)}</TableCell>
              <TableCell>{transaction.name}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>
                <span
                  className={`rounded-full px-2 py-1 text-xs ${
                    transaction.status === 'Pending'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {transaction.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between">
        <div>
          Rows per page:
          <Select>
            <SelectTrigger className="ml-2 w-[70px]">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          1-10 of 130
          <Button variant="outline" size="icon" className="ml-2">
            &lt;
          </Button>
          <Button variant="outline" size="icon" className="ml-2">
            &gt;
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
