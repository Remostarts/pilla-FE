'use client';

import { CircleDollarSign, Plus } from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';

import { CardDataTable } from '../shared/CardDataTable';
import { Sidebar } from '../../dashboard/shared/SideBar';

import AddSavingsPlan from './AddSavingPlan';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type SavingsPlan = {
  id: number;
  name: string;
  status: string;
  interest: string;
  account: string;
  description: string;
  rio: string;
  totalBalance: string;
};

// mock savings plans data
const savingsPlans: SavingsPlan[] = [
  {
    id: 1,
    name: 'Rent Savings',
    status: 'Active',
    interest: '10% PA',
    account: 'Personal',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mattis bibendum laoreet sem rhoncus habitasse in.',
    rio: '12%',
    totalBalance: '₦150,000.00',
  },
  {
    id: 2,
    name: 'Home Ownership Savings',
    status: 'Active',
    interest: '10% PA',
    account: 'Personal',
    description: 'Saving for a down payment on a new home.',
    rio: '15%',
    totalBalance: '₦500,000.00',
  },
  {
    id: 3,
    name: 'Investment Savings',
    status: 'Active',
    interest: '12% PA',
    account: 'Business',
    description: 'Building a diversified investment portfolio.',
    rio: '18%',
    totalBalance: '₦750,000.00',
  },
  {
    id: 4,
    name: 'Emergency Fund',
    status: 'Active',
    interest: '8% PA',
    account: 'Personal',
    description: 'Saving for unexpected expenses and emergencies.',
    rio: '10%',
    totalBalance: '₦300,000.00',
  },
  {
    id: 5,
    name: 'tent Savings',
    status: 'Active',
    interest: '10% PA',
    account: 'Personal',
    description:
      'Lorem ipsum dolor sit amet consectetur. Mattis bibendum laoreet sem rhoncus habitasse in.',
    rio: '12%',
    totalBalance: '₦150,000.00',
  },
  {
    id: 6,
    name: 'Home Ownership Savings',
    status: 'Active',
    interest: '10% PA',
    account: 'Personal',
    description: 'Saving for a down payment on a new home.',
    rio: '15%',
    totalBalance: '₦500,000.00',
  },
  {
    id: 7,
    name: 'Investment Savings',
    status: 'Active',
    interest: '12% PA',
    account: 'Business',
    description: 'Building a diversified investment portfolio.',
    rio: '18%',
    totalBalance: '₦750,000.00',
  },
  {
    id: 8,
    name: 'Emergency Fund',
    status: 'Active',
    interest: '8% PA',
    account: 'Personal',
    description: 'Saving for unexpected expenses and emergencies.',
    rio: '10%',
    totalBalance: '₦300,000.00',
  },
];

// column definitions
const columns: ColumnDef<SavingsPlan>[] = [
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
    accessorKey: 'interest',
    header: 'Interest',
  },
  {
    accessorKey: 'account',
    header: 'Account',
  },
];

export default function Savings() {
  const router = useRouter();

  // function to handle row card click
  const handleRowClick = (row: SavingsPlan) => {
    router.push(`/admin/dashboard/savings/${row.id}/details`);
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

        {/* table div */}
        <div className="rounded-xl bg-white p-6">
          {/* add saving button  */}
          <div className="mb-6 flex items-center justify-end gap-4">
            <Sidebar.Open opens="Add_Saving_Plan">
              <Button className="bg-primary-500 text-white hover:bg-primary-400">
                <span className="mr-2">
                  <Plus />
                </span>{' '}
                Add Savings Plan
              </Button>
            </Sidebar.Open>
          </div>

          {/* table  */}
          <CardDataTable columns={columns} data={savingsPlans} onRowClick={handleRowClick} />
        </div>
      </div>

      {/* add saving plan sidebar  */}
      <Sidebar.Window name="Add_Saving_Plan">
        <AddSavingsPlan />
      </Sidebar.Window>
    </div>
  );
}
