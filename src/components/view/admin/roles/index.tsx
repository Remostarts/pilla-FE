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
import { useRouter } from 'next/navigation';

import AdminDashboardCount from '../shared/AdminDashboardCount';
import { Sidebar } from '../../dashboard/shared/SideBar';

import AddNewUser from './AddNewUser';

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

interface UserDetails {
  id: string;
  fullName: string;
  emailAddress: string;
  access: string;
  lastAccessed: string;
  status: string;
}

// mock user data
const userDetails: UserDetails[] = [
  {
    id: 'ID-U5219J4DW',
    fullName: 'Craig Michael',
    emailAddress: 'bqXpL@example.com',
    access: 'View',
    lastAccessed: '2024-09-30 18:38:29',
    status: 'Active',
  },
  {
    id: 'ID-U5219J4DW',
    fullName: 'Craig Michael',
    emailAddress: 'bqXpL@example.com',
    access: 'Edit',
    lastAccessed: '2024-09-30 18:38:29',
    status: 'Active',
  },
  {
    id: 'ID-U5219J4DW',
    fullName: 'Craig Michael',
    emailAddress: 'bqXpL@example.com',
    access: 'view',
    lastAccessed: '2024-09-30 18:38:29',
    status: 'Active',
  },
  {
    id: 'ID-U5219J4DW',
    fullName: 'Craig Michael',
    emailAddress: 'bqXpL@example.com',
    access: 'view',
    lastAccessed: '2024-09-30 18:38:29',
    status: 'Active',
  },
  {
    id: 'ID-U5219J4DW',
    fullName: 'Craig Michael',
    emailAddress: 'bqXpL@example.com',
    access: 'Edit',
    lastAccessed: '2024-09-30 18:38:29',
    status: 'Active',
  },
  {
    id: 'ID-U5219J4DW',
    fullName: 'Craig Michael',
    emailAddress: 'bqXpL@example.com',
    access: 'view',
    lastAccessed: '2024-09-30 18:38:29',
    status: 'Active',
  },
  {
    id: 'ID-U5219J4DW',
    fullName: 'Craig Michael',
    emailAddress: 'bqXpL@example.com',
    access: 'view',
    lastAccessed: '2024-09-30 18:38:29',
    status: 'Active',
  },
  {
    id: 'ID-U5219J4DW',
    fullName: 'Craig Michael',
    emailAddress: 'bqXpL@example.com',
    access: 'view',
    lastAccessed: '2024-09-30 18:38:29',
    status: 'Active',
  },
  {
    id: 'ID-U5219J4DW',
    fullName: 'Craig Michael',
    emailAddress: 'bqXpL@example.com',
    access: 'view',
    lastAccessed: '2024-09-30 18:38:29',
    status: 'Active',
  },
  {
    id: 'ID-U5219J4DW',
    fullName: 'Craig Michael',
    emailAddress: 'bqXpL@example.com',
    access: 'Edit',
    lastAccessed: '2024-09-30 18:38:29',
    status: 'Active',
  },
  {
    id: 'ID-U5219J4DW',
    fullName: 'Craig Michael',
    emailAddress: 'bqXpL@example.com',
    access: 'Edit',
    lastAccessed: '2024-09-30 18:38:29',
    status: 'Active',
  },
];

// column definitions
const columns: ColumnDef<UserDetails>[] = [
  {
    accessorKey: 'id',
    header: 'User ID',
    cell: ({ row }) => <div>{row.getValue('id')}</div>,
  },
  {
    accessorKey: 'fullName',
    header: 'Full Name',
    cell: ({ row }) => <div>{row.getValue('fullName')}</div>,
  },
  {
    accessorKey: 'emailAddress',
    header: 'Email Address',
    cell: ({ row }) => <div>{row.getValue('emailAddress')}</div>,
  },
  {
    accessorKey: 'access',
    header: 'Access',
    cell: ({ row }) => <div>{row.getValue('access')}</div>,
  },
  {
    accessorKey: 'lastAccessed',
    header: 'Last Accessed',
    cell: ({ row }) => <div>{row.getValue('lastAccessed')}</div>,
  },
  {
    accessorKey: 'status',
    header: 'STATUS',
    cell: ({ row }) => (
      <div
        className={`inline-block rounded-full px-2 py-1 text-sm ${
          row.getValue('status') === 'Active'
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

  const router = useRouter();

  const handleRowClick = (row: UserDetails) => {
    router.push(`/admin/dashboard/roles/${row.id}/roles-details`);
  };

  const table = useReactTable({
    data: userDetails,
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
          countHead="Total Users"
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
              <Sidebar.Open opens="ADD_NEW_USER">
                <Button className="text-white">
                  <span className="mr-2">
                    <Plus />
                  </span>{' '}
                  Add New User
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
                  <TableRow
                    className="cursor-pointer"
                    onClick={() => handleRowClick(row.original)}
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
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

      <Sidebar.Window name="ADD_NEW_USER">
        <AddNewUser />
      </Sidebar.Window>
    </div>
  );
}
