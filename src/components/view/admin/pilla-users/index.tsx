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

export default function PillaUsers() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timelineFilter, setTimelineFilter] = useState('');

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

  // function to filter data with react table
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
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className=" w-full  space-y-4 ">
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
    </div>
  );
}
