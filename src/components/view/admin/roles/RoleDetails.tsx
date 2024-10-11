'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams } from 'next/navigation';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Heading } from '../../dashboard/shared/Heading';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface UserDetails {
  id: string;
  fullName: string;
  emailAddress: string;
  access: string;
  lastAccessed: string;
  status: string;
}

type Transaction = {
  id: string;
  unit: number;
  amount: string;
  date: string;
  status: string;
};

// Mock user data (in a real application, this would be fetched from an API)
const mockUserDetails: { [key: string]: UserDetails } = {
  'ID-U5219J4DW': {
    id: 'ID-U5219J4DW',
    fullName: 'Seth Hallam',
    emailAddress: 'Sethhalla@gmail.com',
    access: 'Edit',
    lastAccessed: 'Lorem ipsum',
    status: 'Active',
  },
  // Add more mock users as needed
};

// Mock transaction data
const mockTransactions: Transaction[] = [
  { id: 'IV-HGY6127631', unit: 3, amount: '₦150,000.00', date: '2024-09-30', status: 'Success' },
  { id: 'IV-HGY6127632', unit: 3, amount: '₦150,000.00', date: '2024-09-25', status: 'Success' },
  { id: 'IV-HGY6127633', unit: 3, amount: '₦150,000.00', date: '2024-09-20', status: 'Success' },
  { id: 'IV-HGY6127634', unit: 3, amount: '₦150,000.00', date: '2024-09-15', status: 'Success' },
  { id: 'IV-HGY6127635', unit: 3, amount: '₦150,000.00', date: '2024-09-10', status: 'Success' },
  { id: 'IV-HGY6127636', unit: 3, amount: '₦150,000.00', date: '2024-09-05', status: 'Success' },
  { id: 'IV-HGY6127637', unit: 3, amount: '₦150,000.00', date: '2024-09-01', status: 'Success' },
  { id: 'IV-HGY6127638', unit: 3, amount: '₦150,000.00', date: '2024-08-28', status: 'Success' },
];

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'id',
    header: 'Transaction ID',
  },
  {
    accessorKey: 'unit',
    header: 'Unit',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <Badge variant="outline" className="bg-green-500 text-white">
        {row.getValue('status')}
      </Badge>
    ),
  },
];

export default function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState<UserDetails | null>(null);
  const [dateFilter, setDateFilter] = useState('all');

  useEffect(() => {
    // In a real application, fetch user data from an API
    setUser(mockUserDetails[id as string] || null);
  }, [id]);

  const filteredTransactions = useMemo(() => {
    return mockTransactions.filter((transaction) => {
      if (dateFilter !== 'all') {
        const transactionDate = new Date(transaction.date);
        const daysAgo = (Date.now() - transactionDate.getTime()) / (1000 * 3600 * 24);
        return daysAgo <= Number(dateFilter);
      }
      return true;
    });
  }, [dateFilter]);

  const table = useReactTable({
    data: filteredTransactions,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const handleDateFilterChange = useCallback(
    (value: string) => {
      setDateFilter(value);
      table.setPageIndex(0); // Reset to first page when filter changes
    },
    [table]
  );

  if (!user) {
    return <div className="flex h-full items-center justify-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* User Details */}
        <Card className="bg-white md:col-span-1">
          <CardContent className="p-6">
            <div className="mb-8 flex items-center">
              <div className="mr-4 size-32 rounded-lg bg-gray-300"></div>
              <div>
                <h2 className="text-xl font-bold">{user.fullName}</h2>
                <p className="text-sm text-gray-500">ID: {user.id}</p>
                <Button variant="link" className="mt-2 h-auto bg-green-100 p-2 text-green-500">
                  View & Edit
                </Button>
              </div>
            </div>

            <div className="mb-4">
              <Heading heading="Details" className="mb-2 border-b pb-2 pt-4 font-semibold" />
              <div className=" text-md  space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Status:</span>
                  <Badge className="bg-green-500 text-white">{user.status}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Email:</span>
                  <span>{user.emailAddress}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Last Login:</span>
                  <span>{user.lastAccessed}</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <Heading
                heading="Access"
                className="mb-2 space-y-2 border-b pb-2 pt-4 font-semibold"
              />
              <ul className="text-md space-y-1">
                {['Users', 'Transactions', 'Savings', 'Investment', 'Website'].map((item) => (
                  <li key={item} className="text-gray-500">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex space-x-2">
              <Button variant="outline" className="flex-1 bg-black text-xs text-white">
                CHANGE STATUS
              </Button>
              <Button className="flex-1 bg-green-500 text-xs text-white hover:bg-green-600">
                EDIT PROFILE
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Activity Log */}
        <Card className="bg-white md:col-span-2">
          <CardHeader>
            <CardTitle className="border-b border-gray-200 pb-4 font-spaceGrotesk">
              Activity Log
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Transactions</h3>
              <Select value={dateFilter} onValueChange={handleDateFilterChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="7">Last 7 Days</SelectItem>
                  <SelectItem value="30">Last 30 Days</SelectItem>
                  <SelectItem value="90">Last 90 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* table  */}
            <div className="rounded-md border">
              <Table>
                <TableHeader className="bg-[#F2F2F2]">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={columns.length} className="h-24 text-center">
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {/* pagination  */}
            <div className="flex items-center justify-between space-x-2 py-4">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">Rows per page</p>
                <Select
                  value={`${table.getState().pagination.pageSize}`}
                  onValueChange={(value) => {
                    table.setPageSize(Number(value));
                  }}
                >
                  <SelectTrigger className="h-8 w-[70px]">
                    <SelectValue placeholder={table.getState().pagination.pageSize} />
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
                Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  <ChevronLeft className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
