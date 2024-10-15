import { useState, useEffect } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
} from '@tanstack/react-table';

import Pagination from './Pagination';

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
  date: string;
  status: string;
}

interface TransactionTableProps {
  timeFilter: string;
}

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => (
      <div className="flex items-center">
        <div
          className={`mr-2 size-4 rounded-full ${row.original.type === 'Deposit' ? 'bg-green-400' : 'bg-red-400'}`}
        />
        {row.getValue('type')}
      </div>
    ),
  },
  {
    accessorKey: 'id',
    header: 'Transaction ID',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => <div>₦{row.getValue<number>('amount').toFixed(2)}</div>,
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <div
        className={
          row.getValue('status') === 'Success'
            ? 'font-semibold text-green-500'
            : 'font-semibold text-red-500'
        }
      >
        {row.getValue('status')}
      </div>
    ),
  },
];

// Mock transaction data
const mockTransactions: Transaction[] = [
  { id: 'TX-001', type: 'Deposit', amount: 1000, date: '2024-10-01 10:30:00', status: 'Success' },
  { id: 'TX-002', type: 'Withdrawal', amount: 500, date: '2024-10-02 14:45:00', status: 'Success' },
  { id: 'TX-003', type: 'Transfer', amount: 250, date: '2024-10-03 09:15:00', status: 'Pending' },
  // Add more mock transactions as needed
];

export default function TransactionTable({ timeFilter }: TransactionTableProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  useEffect(() => {
    // Apply time filter to transactions
    const filteredTransactions = mockTransactions.filter((transaction) => {
      if (timeFilter === 'all') return true;
      const transactionDate = new Date(transaction.date);
      const now = new Date();
      switch (timeFilter) {
        case '7days':
          return now.getTime() - transactionDate.getTime() <= 7 * 24 * 60 * 60 * 1000;
        case '30days':
          return now.getTime() - transactionDate.getTime() <= 30 * 24 * 60 * 60 * 1000;
        case '90days':
          return now.getTime() - transactionDate.getTime() <= 90 * 24 * 60 * 60 * 1000;
        default:
          return true;
      }
    });
    setTransactions(filteredTransactions);
  }, [timeFilter]);

  const table = useReactTable({
    data: transactions,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div className="mt-6">
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-gray-100">
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
      <Pagination table={table} />
    </div>
  );
}
