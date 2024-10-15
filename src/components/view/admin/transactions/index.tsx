'use client';

import React, { useState, useEffect, useMemo } from 'react';
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
import { ChevronLeft, ChevronRight, Upload } from 'lucide-react';
import * as XLSX from 'xlsx';
import { jsPDF as JsPDF } from 'jspdf';
import 'jspdf-autotable';

import { Heading } from '../../dashboard/shared/Heading';
import { Sidebar } from '../../dashboard/shared/SideBar';

import TransactionDetails from './TransactionDetails';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Transaction {
  id: string;
  type: string;
  amount: string;
  name: string;
  date: string;
  status: string;
  accountId: string;
  referenceNo: string;
  internalReferenceNo: string;
  beneficiaryAccount: string;
  beneficiaryBank: string;
  narrative: string;
}

// Extend the jsPDF type to include autoTable
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
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
    accountId: 'PP5186E4CR',
    referenceNo: 'S5626553620FC',
    internalReferenceNo: '652425788775',
    beneficiaryAccount: '235534434',
    beneficiaryBank: 'Access Bank',
    narrative: 'Payment for services rendered',
  },
  {
    id: 'ID-U5219J4DW',
    type: 'Credit',
    amount: '₦1,500,000.00',
    name: 'Talan Rosser',
    date: '2024-09-30 18:38:29',
    status: 'Pending',
    accountId: 'PP5186E4CR',
    referenceNo: 'S5626553620FC',
    internalReferenceNo: '652425788775',
    beneficiaryAccount: '235534434',
    beneficiaryBank: 'Access Bank',
    narrative: 'Payment for services rendered',
  },
  {
    id: 'ID-U5219J4DW',
    type: 'Credit',
    amount: '₦1,500,000.00',
    name: 'Talan Rosser',
    date: '2024-09-30 18:38:29',
    status: 'Pending',
    accountId: 'PP5186E4CR',
    referenceNo: 'S5626553620FC',
    internalReferenceNo: '652425788775',
    beneficiaryAccount: '235534434',
    beneficiaryBank: 'Access Bank',
    narrative: 'Payment for services rendered',
  },
  {
    id: 'ID-U5219J4DW',
    type: 'Credit',
    amount: '₦1,500,000.00',
    name: 'Talan Rosser',
    date: '2024-09-30 18:38:29',
    status: 'Pending',
    accountId: 'PP5186E4CR',
    referenceNo: 'S5626553620FC',
    internalReferenceNo: '652425788775',
    beneficiaryAccount: '235534434',
    beneficiaryBank: 'Access Bank',
    narrative: 'Payment for services rendered',
  },
  {
    id: 'ID-U5219J4DW',
    type: 'Credit',
    amount: '₦1,500,000.00',
    name: 'Talan Rosser',
    date: '2024-09-30 18:38:29',
    status: 'Pending',
    accountId: 'PP5186E4CR',
    referenceNo: 'S5626553620FC',
    internalReferenceNo: '652425788775',
    beneficiaryAccount: '235534434',
    beneficiaryBank: 'Access Bank',
    narrative: 'Payment for services rendered',
  },
  {
    id: 'ID-U5219J4DW',
    type: 'Credit',
    amount: '₦1,500,000.00',
    name: 'Talan Rosser',
    date: '2024-09-30 18:38:29',
    status: 'Pending',
    accountId: 'PP5186E4CR',
    referenceNo: 'S5626553620FC',
    internalReferenceNo: '652425788775',
    beneficiaryAccount: '235534434',
    beneficiaryBank: 'Access Bank',
    narrative: 'Payment for services rendered',
  },
  {
    id: 'ID-U5219J4DW',
    type: 'Credit',
    amount: '₦1,500,000.00',
    name: 'Talan Rosser',
    date: '2024-09-30 18:38:29',
    status: 'Pending',
    accountId: 'PP5186E4CR',
    referenceNo: 'S5626553620FC',
    internalReferenceNo: '652425788775',
    beneficiaryAccount: '235534434',
    beneficiaryBank: 'Access Bank',
    narrative: 'Payment for services rendered',
  },
  {
    id: 'ID-U5219J4DW',
    type: 'Credit',
    amount: '₦1,500,000.00',
    name: 'Talan Rosser',
    date: '2024-09-30 18:38:29',
    status: 'Pending',
    accountId: 'PP5186E4CR',
    referenceNo: 'S5626553620FC',
    internalReferenceNo: '652425788775',
    beneficiaryAccount: '235534434',
    beneficiaryBank: 'Access Bank',
    narrative: 'Payment for services rendered',
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

export default function TransactionTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timelineFilter, setTimelineFilter] = useState('');

  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  // function to export data to excel and downloadable in xlsx format
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(transactions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions');
    XLSX.writeFile(workbook, 'transactions.xlsx');
  };

  // function to export data to pdf and downloadable in pdf format
  const exportToPDF = () => {
    const doc = new JsPDF();
    const tableColumn = columns.map((col) => col.header as string);
    const tableRows = transactions.map((item) => [
      item.id,
      item.type,
      item.amount,
      item.name,
      item.date,
      item.status,
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });

    doc.save('transactions.pdf');
  };

  // function to filter data by timeline
  const filterDataByTimeline = (data: Transaction[], filter: string) => {
    if (!filter) return data;

    const currentDate = new Date();
    const filterDate = new Date(currentDate);

    switch (filter) {
      case 'This Week':
        filterDate.setDate(currentDate.getDate() - 7);
        break;
      case 'Last Week':
        filterDate.setDate(currentDate.getDate() - 14);
        currentDate.setDate(currentDate.getDate() - 7);
        break;
      case '15 Days':
        filterDate.setDate(currentDate.getDate() - 15);
        break;
      case '30 Days':
        filterDate.setDate(currentDate.getDate() - 30);
        break;
      case 'Last Month':
        filterDate.setMonth(currentDate.getMonth() - 1);
        break;
      case 'This Quarter':
        filterDate.setMonth(currentDate.getMonth() - 3);
        break;
      case 'Last Quarter':
        filterDate.setMonth(currentDate.getMonth() - 6);
        currentDate.setMonth(currentDate.getMonth() - 3);
        break;
      case 'This Year':
        filterDate.setFullYear(currentDate.getFullYear(), 0, 1);
        break;
      case 'Last Year':
        filterDate.setFullYear(currentDate.getFullYear() - 1, 0, 1);
        currentDate.setFullYear(currentDate.getFullYear() - 1, 11, 31);
        break;
      default:
        return data;
    }

    return data.filter((transaction) => {
      const transactionDate = new Date(transaction.date.split(' ')[0]);
      return transactionDate >= filterDate && transactionDate <= currentDate;
    });
  };

  // optimized function to filter data
  const filteredData = useMemo(
    () => filterDataByTimeline(transactions, timelineFilter),
    [timelineFilter]
  );

  // table instance to filter data with react table
  const table = useReactTable({
    data: filteredData,
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

  // Function to handle row click
  const handleRowClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
  };

  // function to clear filters
  const clearFilters = () => {
    setIsLoading(true);
    setError(null);

    try {
      table.resetColumnFilters();
      setGlobalFilter('');
      setTimelineFilter('');
    } catch (err) {
      setError('An error occurred while clearing filters. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Simulate data loading
  useEffect(() => {
    // Simulate initial data loading
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <div className="flex h-full items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div>
      <div className="w-full  space-y-4">
        {/* Filter section*/}
        <div className="rounded-xl bg-white p-6">
          <Heading heading="Filter" className="mb-6 text-2xl font-semibold" />
          <div className="grid grid-cols-3 gap-6">
            {/* {type filter option} */}
            <Select
              onValueChange={(value) =>
                table.getColumn('type')?.setFilterValue(value === 'All' ? '' : value)
              }
            >
              <SelectTrigger className="w-full p-6">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectLabel>Type</SelectLabel>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Credit">Credit</SelectItem>
                  <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                  <SelectItem value="Rent Payment">Rent Payment</SelectItem>
                  <SelectItem value="Utility">Utility</SelectItem>
                  <SelectItem value="Loan Repayment">Loan Repayment</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* status filter option*/}
            <Select
              onValueChange={(value) =>
                table.getColumn('status')?.setFilterValue(value === 'All' ? '' : value)
              }
            >
              <SelectTrigger className="w-full p-6">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Successful">Successful</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* timeline filter option*/}
            <Select onValueChange={(value) => setTimelineFilter(value)}>
              <SelectTrigger className="w-full p-6">
                <SelectValue placeholder="Timeline" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectLabel>Timeline</SelectLabel>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="This Week">This Week</SelectItem>
                  <SelectItem value="Last Week">Last Week</SelectItem>
                  <SelectItem value="15 Days">15 Days</SelectItem>
                  <SelectItem value="30 Days">30 Days</SelectItem>
                  <SelectItem value="Last Month">Last Month</SelectItem>
                  <SelectItem value="This Quarter">This Quarter</SelectItem>
                  <SelectItem value="Last Quarter">Last Quarter</SelectItem>
                  <SelectItem value="This Year">This Year</SelectItem>
                  <SelectItem value="Last Year">Last Year</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* table section */}
        <div className="rounded-xl bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* search field */}
              <Input
                placeholder="Search Transaction"
                value={globalFilter ?? ''}
                onChange={(event) => setGlobalFilter(event.target.value)}
                className="max-w-sm"
              />

              {/* clear filters button */}
              <Button onClick={clearFilters} variant="outline">
                Clear Filters
              </Button>
            </div>

            {/* export button */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <span className="mr-2">
                    <Upload />
                  </span>
                  EXPORT
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem onClick={exportToExcel}>Export to Excel</DropdownMenuItem>
                <DropdownMenuItem onClick={exportToPDF}>Export to PDF</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
                    <Sidebar.Open opens="TRANSACTION_DETAILS_WINDOW" key={row.id}>
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && 'selected'}
                        onClick={() => handleRowClick(row.original as Transaction)}
                        className="cursor-pointer hover:bg-gray-100"
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                        ))}
                      </TableRow>
                    </Sidebar.Open>
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
      </div>

      {/* transaction details window */}
      <Sidebar.Window name="TRANSACTION_DETAILS_WINDOW">
        <TransactionDetails transaction={selectedTransaction} />
      </Sidebar.Window>
    </div>
  );
}
