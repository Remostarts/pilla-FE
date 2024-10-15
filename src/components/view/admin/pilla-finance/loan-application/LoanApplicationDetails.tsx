import React from 'react';

import { Heading } from '@/components/view/dashboard/shared/Heading';
import { Button } from '@/components/ui/button';
import { Sidebar } from '@/components/view/dashboard/shared/SideBar';

interface LoanApplicationDetails {
  id: string;
  date: string;
  creditLimit?: string;
  purpose?: string;
  repaymentPeriod?: string;
  loanAmount?: string;
  monthlyPayment?: string;
}

interface LoanApplicationDetailsProps {
  application: LoanApplicationDetails | null;
}

const LoanApplication: React.FC<LoanApplicationDetailsProps> = ({ application }) => {
  if (!application) return null;
  return (
    <div className="w-full">
      <div className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Heading heading="Credit Check Details" className="mb-6 text-2xl font-semibold" />
        </div>

        <div className="space-y-4">
          <DetailItem label="Account ID" value={application.id} />
          <DetailItem label="Application Date" value={application.date} />
          <DetailItem label="Credit Limit" value={application.creditLimit || 'N/A'} />
          <DetailItem label="Purpose" value={application.purpose || 'N/A'} />
          <DetailItem label="Repayment Period" value={application.repaymentPeriod || 'N/A'} />
          <DetailItem label="Loan Amount" value={application.loanAmount || 'N/A'} />
          <DetailItem label="Monthly Payment" value={application.monthlyPayment || 'N/A'} />
        </div>

        <div className="mt-8 space-y-4">
          <Sidebar.Open opens="">
            <Button className="w-full rounded-md py-2 font-spaceGrotesk text-lg font-semibold text-white transition duration-200">
              Approve
            </Button>
          </Sidebar.Open>
          <Button
            variant="link"
            className="w-full py-2 font-spaceGrotesk text-lg font-semibold text-red-500 hover:underline"
          >
            Deny
          </Button>
        </div>
      </div>
    </div>
  );
};

interface DetailItemProps {
  label: string;
  value: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span className="text-gray-600">{label}:</span>

    <span className="font-medium">{value}</span>
  </div>
);

export default LoanApplication;
