'use client';

import { CircleDollarSign, Plus } from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';

import { CardDataTable } from '../shared/CardDataTable';
import { Sidebar } from '../../dashboard/shared/SideBar';

import CreateInvestment from './CreateInvestment';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type investmentDetails = {
  id: number;
  name: string;
  status: string;
  unitCost: string;
  account: string;
  description: string;
  rio: string;
  totalBalance: string;
};

// Mock data for all investments
const investments: investmentDetails[] = [
  {
    id: 1,
    name: 'Investment title',
    status: 'Active',
    unitCost: '₦150,000.00',
    account: 'Personal',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mattis bibendum laoreet sem rhoncus habitasse in.',
    rio: '12%',
    totalBalance: '₦150,000.00',
  },
  {
    id: 2,
    name: 'Investment title',
    status: 'Active',
    unitCost: '₦150,000.00',
    account: 'Personal',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mattis bibendum laoreet sem rhoncus habitasse in.',
    rio: '12%',
    totalBalance: '₦150,000.00',
  },
  {
    id: 3,
    name: 'Investment title',
    status: 'Active',
    unitCost: '₦150,000.00',
    account: 'Personal',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mattis bibendum laoreet sem rhoncus habitasse in.',
    rio: '12%',
    totalBalance: '₦150,000.00',
  },
  {
    id: 4,
    name: 'Investment title',
    status: 'Active',
    unitCost: '₦150,000.00',
    account: 'Personal',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mattis bibendum laoreet sem rhoncus habitasse in.',
    rio: '12%',
    totalBalance: '₦150,000.00',
  },
  {
    id: 5,
    name: 'Investment title',
    status: 'Active',
    unitCost: '₦150,000.00',
    account: 'Personal',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mattis bibendum laoreet sem rhoncus habitasse in.',
    rio: '12%',
    totalBalance: '₦150,000.00',
  },
];

// column definitions
const columns: ColumnDef<investmentDetails>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <span className="rounded-full bg-green-100 px-2 py-1 text-sm font-medium text-green-500">
        {row.getValue('status')}
      </span>
    ),
  },
  {
    accessorKey: 'unitCost',
    header: 'Unit Cost',
  },
  {
    accessorKey: 'account',
    header: 'Account',
  },
];

export default function Investment() {
  const router = useRouter();

  // function to handle row card click
  const handleRowClick = (row: investmentDetails) => {
    router.push(`/admin/dashboard/investment/${row.id}/details`);
  };

  return (
    <div>
      <div className="space-y-6 ">
        {/* header cards  */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { title: 'Total Savings', amount: '₦ 20,00,000.00' },
            { title: 'Personal Accounts', amount: '₦ 10,000,000.00' },
            { title: 'Business Accounts', amount: '₦ 10,000,000.00' },
          ].map((card, index) => (
            <Card key={index} className="bg-orange-500 text-white">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <CircleDollarSign className="size-6" />
                  <h2 className="text-lg font-semibold">{card.title}</h2>
                </div>
                <p className="mt-2 text-2xl font-bold">{card.amount}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* table container*/}
        <div className="rounded-xl bg-white p-6">
          {/* create investment button  */}
          <div className="mb-6 flex items-center justify-end gap-4">
            <Sidebar.Open opens="CREATE_INVESTMENT">
              <Button className="bg-primary-500 text-white hover:bg-primary-400">
                <span className="mr-2">
                  <Plus />
                </span>{' '}
                Create Investment
              </Button>
            </Sidebar.Open>
          </div>

          {/* table */}
          <CardDataTable columns={columns} data={investments} onRowClick={handleRowClick} />
        </div>
      </div>

      {/* create investment sidebar window  */}
      <Sidebar.Window name="CREATE_INVESTMENT">
        <CreateInvestment />
      </Sidebar.Window>
    </div>
  );
}
