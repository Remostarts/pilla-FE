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

interface CreditApplicationDetails {
  id: string;
  name: string;
  user: string;
  linkedBank: string;
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
const creditApplicationDetails: CreditApplicationDetails[] = [
  {
    id: 'ID-U5219J4DW',
    name: 'Jordan Smith',
    user: 'Personal',
    linkedBank: 'Access Bank',
    date: '2024-09-30 18:38:29',
    status: 'Pending',
  },
  {
    id: 'ID-U5219J4DW',
    name: 'Jordan Smith',
    user: 'Personal',
    linkedBank: 'Access Bank',
    date: '2024-09-30 18:38:29',
    status: 'Approved',
  },
  {
    id: 'ID-U5219J4DW',
    name: 'Jordan Smith',
    user: 'Personal',
    linkedBank: 'Access Bank',
    date: '2024-09-30 18:38:29',
    status: 'Approved',
  },
  {
    id: 'ID-U5219J4DW',
    name: 'Jordan Smith',
    user: 'Personal',
    linkedBank: 'Access Bank',
    date: '2024-09-30 18:38:29',
    status: 'Pending',
  },
  {
    id: 'ID-U5219J4DW',
    name: 'Jordan Smith',
    user: 'Personal',
    linkedBank: 'Access Bank',
    date: '2024-09-30 18:38:29',
    status: 'Approved',
  },
  {
    id: 'ID-U5219J4DW',
    name: 'Jordan Smith',
    user: 'Personal',
    linkedBank: 'Access Bank',
    date: '2024-09-30 18:38:29',
    status: 'Pending',
  },
  {
    id: 'ID-U5219J4DW',
    name: 'Jordan Smith',
    user: 'Personal',
    linkedBank: 'Access Bank',
    date: '2024-09-30 18:38:29',
    status: 'Approved',
  },
  {
    id: 'ID-U5219J4DW',
    name: 'Jordan Smith',
    user: 'Personal',
    linkedBank: 'Access Bank',
    date: '2024-09-30 18:38:29',
    status: 'Approved',
  },
  {
    id: 'ID-U5219J4DW',
    name: 'Jordan Smith',
    user: 'Personal',
    linkedBank: 'Access Bank',
    date: '2024-09-30 18:38:29',
    status: 'Approved',
  },
  {
    id: 'ID-U5219J4DW',
    name: 'Jordan Smith',
    user: 'Personal',
    linkedBank: 'Access Bank',
    date: '2024-09-30 18:38:29',
    status: 'Pending',
  },
  {
    id: 'ID-U5219J4DW',
    name: 'Jordan Smith',
    user: 'Business',
    linkedBank: 'Access Bank',
    date: '2024-09-30 18:38:29',
    status: 'Pending',
  },
  {
    id: 'ID-U5219J4DW',
    name: 'Jordan Smith',
    user: 'Personal',
    linkedBank: 'Access Bank',
    date: '2024-09-30 18:38:29',
    status: 'Approved',
  },
  {
    id: 'ID-U5219J4DE',
    name: 'Jordan Smith',
    user: 'Personal',
    linkedBank: 'Access Bank',
    date: '2024-09-30 18:38:29',
    status: 'Approved',
  },
];

// column definitions
const columns: ColumnDef<CreditApplicationDetails>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => <div>{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'name',
    header: 'NAME',
    cell: ({ row }) => <div>{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'user',
    header: 'USER',
    cell: ({ row }) => <div>{row.getValue('user')}</div>,
  },
  {
    accessorKey: 'linkedBank',
    header: 'LINKED BANK',
    cell: ({ row }) => <div>{row.getValue('linkedBank')}</div>,
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
          row.getValue('status') === 'Approved'
            ? 'bg-green-100 text-green-500'
            : 'bg-red-100 text-red-500'
        }`}
      >
        {row.getValue('status')}
      </div>
    ),
  },
];

export default function CreditApplication() {
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
    const worksheet = XLSX.utils.json_to_sheet(creditApplicationDetails);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Credit Details');
    XLSX.writeFile(workbook, 'creditDetails.xlsx');
  };

  // function to export data to pdf and downloadable in pdf format
  const exportToPDF = () => {
    const doc = new JsPDF();
    const tableColumn = columns.map((col) => col.header as string);
    const tableRows = creditApplicationDetails.map((item) => [
      item.id,
      item.name,
      item.user,
      item.linkedBank,
      item.date,
      item.status,
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });

    doc.save('creditDetails.pdf');
  };

  // function to filter data by timeline
  const filterDataByTimeline = (data: CreditApplicationDetails[], filter: string) => {
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
    () => filterDataByTimeline(creditApplicationDetails, timelineFilter),
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
    return <div className="flex h-full items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="w-full  space-y-4">
      {/* Filter section*/}
      <div className="rounded-xl bg-white p-6">
        <Heading heading="Filter" className="mb-6 text-2xl font-semibold" />
        <div className="grid grid-cols-3 gap-6">
          {/* {type filter option} */}
          <Select
            onValueChange={(value) =>
              table.getColumn('user')?.setFilterValue(value === 'All users' ? '' : value)
            }
          >
            <SelectTrigger className="w-full p-6">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectLabel>Users</SelectLabel>
                <SelectItem value="All users">All users</SelectItem>
                <SelectItem value="Personal">Personal</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* status filter option*/}
          <Select
            onValueChange={(value) =>
              table.getColumn('status')?.setFilterValue(value === 'All status' ? '' : value)
            }
          >
            <SelectTrigger className="w-full p-6">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="All status">All status</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Approved">Approved</SelectItem>
                <SelectItem value="Denied">Denied</SelectItem>
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
              placeholder="Search..."
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
