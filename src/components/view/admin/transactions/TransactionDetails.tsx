import React from 'react';

import { Heading } from '../../dashboard/shared/Heading';

interface Transaction {
  id: string;
  type: string;
  amount: string;
  name: string;
  date: string;
  status: string;
  accountId: string;
  referenceNo: string;
  internalReferenceNo: string;
  beneficiaryAccount: string;
  beneficiaryBank: string;
  narrative: string;
}

interface TransactionDetailsSidebarProps {
  transaction: Transaction | null;
}
const TransactionDetails: React.FC<TransactionDetailsSidebarProps> = ({ transaction }) => {
  if (!transaction) return null;

  return (
    <div className="w-full">
      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <Heading heading="Transaction Details" className="mb-6 text-2xl font-semibold" />
        </div>
        <div className="space-y-4">
          <DetailItem label="Account ID" value={transaction.accountId} />
          <DetailItem label="Transaction Reference No" value={transaction.referenceNo} />
          <DetailItem label="Transaction Date" value={transaction.date} />
          <DetailItem label="Transaction Type" value={transaction.type} />
          <DetailItem label="Debit Amount" value={transaction.amount} />
          <DetailItem label="Credit Amount" value="-" />
          <DetailItem label="Internal Reference No" value={transaction.internalReferenceNo} />
          <DetailItem label="Transaction Status" value={transaction.status} />
          <DetailItem label="Beneficiary Account" value={transaction.beneficiaryAccount} />
          <DetailItem label="Beneficiary Account Name" value={transaction.name} />
          <DetailItem label="Beneficiary Bank" value={transaction.beneficiaryBank} />
          <DetailItem label="Transaction Narration" value={transaction.narrative} />
        </div>
      </div>
    </div>
  );
};

const DetailItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <p className="text-sm text-gray-500">{label}:</p>
    <p className="font-medium">{value}</p>
  </div>
);

export default TransactionDetails;
