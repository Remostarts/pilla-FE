import React from 'react';
import Image from 'next/image';

import { Sidebar } from '../../shared/SideBar';

import Transaction from './recent-transaction/Transaction';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Transaction {
  type: string;
  date: string;
  time: string;
  amount: string;
  status: 'Successful' | 'Failed';
}

const recentTransactions: Transaction[] = [
  {
    type: 'Credit',
    date: 'Aug 14 2022',
    time: '08:24AM',
    amount: '+₦10,000.00',
    status: 'Successful',
  },
  {
    type: 'Withdrawal',
    date: 'Aug 14 2022',
    time: '08:24AM',
    amount: '-₦10,000.00',
    status: 'Successful',
  },
  {
    type: 'Card Credit',
    date: 'Aug 14 2022',
    time: '08:24AM',
    amount: '+₦10,000.00',
    status: 'Successful',
  },
];

const TransactionItem: React.FC<{ transaction: Transaction }> = ({ transaction }) => (
  <li className="flex items-center justify-between py-3">
    <div className="flex items-center">
      {transaction.amount.startsWith('+') ? (
        <Image
          src="/assets/business-dashboard/credit.svg"
          alt="credit-icon"
          width={24}
          height={24}
        />
      ) : (
        <Image
          src="/assets/business-dashboard/debit.svg"
          alt="credit-icon"
          width={24}
          height={24}
        />
      )}
      <div className="ml-3">
        <p className="font-semibold">{transaction.type}</p>
        <p className="text-sm text-gray-500">
          {transaction.date} | {transaction.time}
        </p>
      </div>
    </div>
    <div className="text-right">
      <p
        className={`font-semibold ${transaction.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}
      >
        {transaction.amount}
      </p>
      <p className="text-sm text-gray-500">{transaction.status}</p>
    </div>
  </li>
);

export default function RecentTransactionsTable() {
  return (
    <div>
      <Card className="size-full bg-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Recent Transactions</CardTitle>
          <Sidebar.Open opens="recent-transactions-list-window">
            <Button variant="link" size="sm">
              See all
            </Button>
          </Sidebar.Open>
        </CardHeader>
        <CardContent>
          <ul className="divide-y divide-gray-200">
            {recentTransactions.map((transaction, index) => (
              <TransactionItem key={index} transaction={transaction} />
            ))}
          </ul>
        </CardContent>
      </Card>

      <Sidebar.Window name="recent-transactions-list-window">
        <Transaction />
      </Sidebar.Window>
    </div>
  );
}
