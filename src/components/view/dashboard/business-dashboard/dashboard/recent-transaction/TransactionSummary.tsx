import React from 'react';
import { Share2, Download } from 'lucide-react';

interface TransactionReceiptProps {
  transaction: {
    type: string;
    amount: string;
    status: 'Successful' | 'Failed';
    sender: string;
    bankName: string;
    bankAccount: string;
    narration: string;
    sessionId: string;
    transactionId: string;
    date: string;
    time: string;
  } | null;
}

export default function TransactionSummary({ transaction }: TransactionReceiptProps) {
  // checking if transaction exists
  if (!transaction) {
    return <p>No transaction found</p>;
  }

  const isCredit = transaction.amount.startsWith('+');

  return (
    <div>
      <div className="w-full  overflow-hidden rounded-lg bg-white">
        <div className="px-6 pb-6">
          <div className="mb-6 text-center">
            <p className={`text-3xl font-bold ${isCredit ? 'text-green-500' : 'text-red-500'}`}>
              {transaction.amount}
            </p>
            <p className="text-gray-600">{transaction.type}</p>
          </div>

          <div className="mb-8 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Status</span>
              <span
                className={transaction.status === 'Successful' ? 'text-green-500' : 'text-red-500'}
              >
                {transaction.status}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{isCredit ? 'Sender' : 'Recipient'}</span>
              <span className="font-semibold">{transaction.sender}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Bank Name</span>
              <span className="font-semibold">{transaction.bankName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Bank Account</span>
              <span className="font-semibold">{transaction.bankAccount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Narration</span>
              <span className="font-semibold">{transaction.narration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date & Time</span>
              <span className="font-semibold">
                {transaction.date} | {transaction.time}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Session ID</span>
              <span className="text-xs font-semibold">{transaction.sessionId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Transaction ID</span>
              <span className="text-xs font-semibold">{transaction.transactionId}</span>
            </div>
          </div>

          <button className="mb-3 flex w-full items-center justify-center rounded-lg border border-black bg-white py-3 text-black">
            <Share2 size={20} className="mr-2" />
            Share Receipt
          </button>
          <button className="flex w-full items-center justify-center rounded-lg bg-black py-3 text-white">
            <Download size={20} className="mr-2" />
            Download Receipt
          </button>
        </div>
      </div>
    </div>
  );
}
