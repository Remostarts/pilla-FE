'use client';

import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CardDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onRowClick?: (row: TData) => void;
}

export function CardDataTable<TData, TValue>({
  columns,
  data,
  onRowClick,
}: CardDataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  return (
    <div className="w-full">
      {/* search input field */}
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter plans..."
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('name')?.setFilterValue(event.target.value)}
          className="max-w-sm border border-gray-300"
        />
      </div>

      {/* table */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <Card
              key={row.id}
              className="cursor-pointer border border-gray-200 transition-shadow duration-200 hover:shadow-md"
              onClick={() => onRowClick && onRowClick(row.original)}
            >
              <CardContent className="p-4">
                <div className=" mb-4 flex items-center justify-between border-b">
                  <h3 className="mb-2 text-lg font-semibold">
                    {flexRender(
                      row.getVisibleCells()[0].column.columnDef.cell,
                      row.getVisibleCells()[0].getContext()
                    )}
                  </h3>
                  {flexRender(
                    row.getVisibleCells()[1].column.columnDef.cell,
                    row.getVisibleCells()[1].getContext()
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {row
                    .getVisibleCells()
                    .slice(2)
                    .map((cell) => (
                      <React.Fragment key={cell.id}>
                        <div>{cell.column.columnDef.header as React.ReactNode}</div>
                        <div className="text-right">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </div>
                      </React.Fragment>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-2 text-center">No results.</div>
        )}
      </div>

      {/* pagination */}
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
              {[4, 8, 12].map((pageSize) => (
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
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
