'use client';

import React, { useState } from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

import AdminDashboardCount from '../shared/AdminDashboardCount';
import { Sidebar } from '../../dashboard/shared/SideBar';

import AddBlogPost from './AddBlogPost';
import AddCareerPost from './AddCareerPost';

import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface Transaction {
  id: string;
  type: string;
  amount: string;
  name: string;
  date: string;
  status: string;
}

// mock transaction data
const transactions: Transaction[] = [
  {
    id: 'ID-U5219J4DW',
    type: 'Credit',
    amount: '₦1,500,000.00',
    name: 'Talan Rosser',
    date: '2024-09-30 18:38:29',
    status: 'Pending',
  },
  {
    id: 'ID-V7320K5EX',
    type: 'Bank Transfer',
    amount: '₦2,000,000.00',
    name: 'Lila Morgan',
    date: '2024-09-15 10:22:45',
    status: 'Successful',
  },
  {
    id: 'ID-W8421L6FY',
    type: 'Rent Payment',
    amount: '₦800,000.00',
    name: 'Zain Ahmed',
    date: '2024-08-01 14:55:12',
    status: 'Successful',
  },
  {
    id: 'ID-X9522M7GZ',
    type: 'Utility',
    amount: '₦50,000.00',
    name: 'Eva Chen',
    date: '2024-07-10 09:30:00',
    status: 'Successful',
  },
  {
    id: 'ID-Y0623N8HA',
    type: 'Loan Repayment',
    amount: '₦3,000,000.00',
    name: 'Omar Khalid',
    date: '2024-06-05 16:42:33',
    status: 'Successful',
  },
  {
    id: 'ID-Z1724P9IB',
    type: 'Credit',
    amount: '₦1,200,000.00',
    name: 'Sophia Lee',
    date: '2024-05-20 11:11:11',
    status: 'Successful',
  },
  {
    id: 'ID-A2825Q0JC',
    type: 'Bank Transfer',
    amount: '₦500,000.00',
    name: 'Lucas Silva',
    date: '2024-04-03 08:05:59',
    status: 'Successful',
  },
  {
    id: 'ID-B3926R1KD',
    type: 'Rent Payment',
    amount: '₦900,000.00',
    name: 'Amelia Brown',
    date: '2024-03-15 13:20:40',
    status: 'Successful',
  },
  {
    id: 'ID-C4027S2LE',
    type: 'Utility',
    amount: '₦75,000.00',
    name: 'Yuki Tanaka',
    date: '2024-02-28 17:00:00',
    status: 'Successful',
  },
  {
    id: 'ID-D5128T3MF',
    type: 'Loan Repayment',
    amount: '₦2,500,000.00',
    name: 'Elena Rossi',
    date: '2024-01-10 12:30:15',
    status: 'Successful',
  },
  {
    id: 'ID-E6229U4NG',
    type: 'Credit',
    amount: '₦1,800,000.00',
    name: 'Raj Patel',
    date: '2023-12-22 09:45:30',
    status: 'Successful',
  },
  {
    id: 'ID-F7330V5PH',
    type: 'Bank Transfer',
    amount: '₦300,000.00',
    name: 'Aisha Mohammed',
    date: '2023-11-05 15:55:22',
    status: 'Successful',
  },
];

// column definitions
const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'id',
    header: 'TRANSACTION ID',
    cell: ({ row }) => <div>{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'type',
    header: 'TYPE',
    cell: ({ row }) => <div>{row.getValue('type')}</div>,
  },
  {
    accessorKey: 'amount',
    header: 'AMOUNT',
    cell: ({ row }) => <div>{row.getValue('amount')}</div>,
  },
  {
    accessorKey: 'name',
    header: 'NAME',
    cell: ({ row }) => <div>{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'date',
    header: 'DATE',
    cell: ({ row }) => <div>{row.getValue('date')}</div>,
  },
  {
    accessorKey: 'status',
    header: 'STATUS',
    cell: ({ row }) => (
      <div
        className={`inline-block rounded-full px-2 py-1 text-sm ${
          row.getValue('status') === 'Successful'
            ? 'bg-green-100 text-green-500'
            : 'bg-red-100 text-red-500'
        }`}
      >
        {row.getValue('status')}
      </div>
    ),
  },
];

export default function Website() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data: transactions,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    globalFilterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as string;
      return value.toLowerCase().includes(filterValue.toLowerCase());
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
  });
  return (
    <div className="w-full ">
      <div className="grid grid-cols-2 gap-6">
        <AdminDashboardCount
          countHead="Total Blogs"
          countNumber="20"
          className="bg-white text-black"
        />
        <AdminDashboardCount
          countHead="Total Career"
          countNumber="20"
          className="bg-white text-black"
        />
      </div>

      {/* table section */}
      <div className="mt-6 rounded-xl bg-white p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* search field */}
            <Input
              placeholder="Search Transaction"
              value={globalFilter ?? ''}
              onChange={(event) => setGlobalFilter(event.target.value)}
              className="max-w-sm"
            />
          </div>

          {/* add button */}

          <div className="flex space-x-6">
            <div>
              <Sidebar.Open opens="addBlogPost">
                <Button className="text-white">
                  <span className="mr-2">
                    <Plus />
                  </span>{' '}
                  Post Blog
                </Button>
              </Sidebar.Open>
            </div>

            <div>
              <Sidebar.Open opens="addCareerPost">
                <Button className="border-2 border-primary-500 bg-white text-primary-500 hover:bg-gray-100">
                  <span className="mr-2">
                    <Plus />
                  </span>{' '}
                  Add Career
                </Button>
              </Sidebar.Open>
            </div>
          </div>
        </div>

        {/* table section */}
        <div className="rounded-md border">
          <Table>
            {/* table header */}
            <TableHeader className="bg-[#F2F2F2]">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>

            {/* table body */}
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
                    No results found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* pagination section */}
        <div className="mt-6 flex items-center justify-between">
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
              <SelectContent side="top" className="bg-white">
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">
              Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </p>
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
      </div>

      <Sidebar.Window name="addBlogPost">
        <AddBlogPost />
      </Sidebar.Window>

      <Sidebar.Window name="addCareerPost">
        <AddCareerPost />
      </Sidebar.Window>
    </div>
  );
}
