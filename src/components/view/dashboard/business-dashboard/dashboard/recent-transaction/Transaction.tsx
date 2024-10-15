'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { Heading } from '../../../shared/Heading';
import { Sidebar } from '../../../shared/SideBar';

import TransactionSummary from './TransactionSummary';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Transaction {
  type: string;
  date: string;
  time: string;
  amount: string;
  status: 'Successful' | 'Failed';
  sender: string;
  bankName: string;
  bankAccount: string;
  narration: string;
  sessionId: string;
  transactionId: string;
}

const transactionData: { [key: string]: Transaction[] } = {
  Today: [
    {
      type: 'Credit',
      date: 'Aug 14 2022',
      time: '08:24AM',
      amount: '+ ₦10,000.00',
      status: 'Successful',
      sender: 'Femi Falode',
      bankName: 'Opay',
      bankAccount: '7012345678',
      narration: 'Cash',
      sessionId: '2783827137633891737873',
      transactionId: 'ID237373773737373273653',
    },
    {
      type: 'Withdrawal',
      date: 'Aug 14 2022',
      time: '08:24AM',
      amount: '- ₦10,000.00',
      status: 'Successful',
      sender: 'Femi Falode',
      bankName: 'Opay',
      bankAccount: '7012345678',
      narration: 'Cash',
      sessionId: '2783827137633891737873',
      transactionId: 'ID237373773737373273653',
    },
    {
      type: 'Card Credit',
      date: 'Aug 14 2022',
      time: '08:24AM',
      amount: '+ ₦10,000.00',
      status: 'Failed',
      sender: 'Femi Falode',
      bankName: 'Opay',
      bankAccount: '7012345678',
      narration: 'Cash',
      sessionId: '2783827137633891737873',
      transactionId: 'ID237373773737373273653',
    },
    {
      type: 'Transfer',
      date: 'Aug 14 2022',
      time: '08:24AM',
      amount: '- ₦10,000.00',
      status: 'Successful',
      sender: 'Femi Falode',
      bankName: 'Opay',
      bankAccount: '7012345678',
      narration: 'Cash',
      sessionId: '2783827137633891737873',
      transactionId: 'ID237373773737373273653',
    },
  ],
  Yesterday: [
    {
      type: 'Airtime',
      date: 'Aug 14 2022',
      time: '08:24AM',
      amount: '- ₦10,000.00',
      status: 'Successful',
      sender: 'Femi Falode',
      bankName: 'Opay',
      bankAccount: '7012345678',
      narration: 'Cash',
      sessionId: '2783827137633891737873',
      transactionId: 'ID237373773737373273653',
    },
    {
      type: 'Credit',
      date: 'Aug 14 2022',
      time: '08:24AM',
      amount: '+ ₦10,000.00',
      status: 'Successful',
      sender: 'Femi Falode',
      bankName: 'Opay',
      bankAccount: '7012345678',
      narration: 'Cash',
      sessionId: '2783827137633891737873',
      transactionId: 'ID237373773737373273653',
    },
    {
      type: 'Withdrawal',
      date: 'Aug 14 2022',
      time: '08:24AM',
      amount: '- ₦10,000.00',
      status: 'Successful',
      sender: 'Femi Falode',
      bankName: 'Opay',
      bankAccount: '7012345678',
      narration: 'Cash',
      sessionId: '2783827137633891737873',
      transactionId: 'ID237373773737373273653',
    },
  ],
  '23.08.2022': [
    {
      type: 'Airtime',
      date: 'Aug 14 2022',
      time: '08:24AM',
      amount: '- ₦10,000.00',
      status: 'Successful',
      sender: 'Femi Falode',
      bankName: 'Opay',
      bankAccount: '7012345678',
      narration: 'Cash',
      sessionId: '2783827137633891737873',
      transactionId: 'ID237373773737373273653',
    },
    {
      type: 'Credit',
      date: 'Aug 14 2022',
      time: '08:24AM',
      amount: '+ ₦10,000.00',
      status: 'Successful',
      sender: 'Femi Falode',
      bankName: 'Opay',
      bankAccount: '7012345678',
      narration: 'Cash',
      sessionId: '2783827137633891737873',
      transactionId: 'ID237373773737373273653',
    },
    {
      type: 'Withdrawal',
      date: 'Aug 14 2022',
      time: '08:24AM',
      amount: '- ₦10,000.00',
      status: 'Successful',
      sender: 'Femi Falode',
      bankName: 'Opay',
      bankAccount: '7012345678',
      narration: 'Cash',
      sessionId: '2783827137633891737873',
      transactionId: 'ID237373773737373273653',
    },
  ],
};

export default function Transaction() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  return (
    <div>
      <div className="size-full max-w-md overflow-y-auto bg-white">
        <div className="flex items-center justify-between  p-4">
          <Heading heading="Transactions" className="text-4xl" />
        </div>

        {/* // Select section for Categories and status */}
        <div className="flex space-x-16 p-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="7d">Last 7 Days</SelectItem>
              <SelectItem value="30d">Last 30 Days</SelectItem>
              <SelectItem value="90d">Last 90 Days</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="7d">Last 7 Days</SelectItem>
              <SelectItem value="30d">Last 30 Days</SelectItem>
              <SelectItem value="90d">Last 90 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* // list of transactions */}
        {Object.entries(transactionData).map(([date, transactions]) => (
          <div key={date} className="mt-4">
            <h3 className="bg-gray-50 px-4 py-2 font-semibold">{date}</h3>
            <ul>
              {transactions.map((transaction, index) => (
                <Sidebar.Open opens="payment-summary" key={index}>
                  <li
                    key={index}
                    className="flex cursor-pointer items-center justify-between border-b border-gray-100 p-4"
                    onClick={() => setSelectedTransaction(transaction)}
                    tabIndex={0}
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                    role="button"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setSelectedTransaction(transaction);
                      }
                    }}
                  >
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
                      <p
                        className={`text-sm ${transaction.status === 'Failed' ? 'text-red-500' : 'text-gray-500'}`}
                      >
                        {transaction.status}
                      </p>
                    </div>
                  </li>
                </Sidebar.Open>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* // sidebar window for payment summary */}
      <Sidebar.Window name="payment-summary">
        <TransactionSummary transaction={selectedTransaction} />
      </Sidebar.Window>
    </div>
  );
}
