import React from 'react';

import AssignCreditLimit from './AssignCreditLimit';

import { Heading } from '@/components/view/dashboard/shared/Heading';
import { Button } from '@/components/ui/button';
import { Sidebar } from '@/components/view/dashboard/shared/SideBar';

interface CreditCheckDetails {
  id: string;
  name: string;
  user: string;
  linkedBank: string;
  date: string;
  status: string;
  accountId?: string;
  employerName?: string;
  monthlySalary?: string;
  workEmail?: string;
  accountNumber?: string;
  creditAmount?: string;
  debitAmount?: string;
}

interface CreditCheckDetailsSidebarProps {
  application: CreditCheckDetails | null;
}

const CreditCheckDetails: React.FC<CreditCheckDetailsSidebarProps> = ({ application }) => {
  if (!application) return null;
  return (
    <div className="w-full">
      <div className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Heading heading="Credit Check Details" className="mb-6 text-2xl font-semibold" />
        </div>

        <div className="space-y-4">
          <DetailItem label="Account ID" value={application.accountId || application.id} />
          <DetailItem label="Application Date" value={application.date} />
          <DetailItem label="Employer Name" value={application.employerName || 'N/A'} />
          <DetailItem label="Monthly Salary" value={application.monthlySalary || 'N/A'} />
          <DetailItem label="Work Email" value={application.workEmail || 'N/A'} />
          <DetailItem label="Employment letter/contract" value="Download" isDownloadable />
          <DetailItem label="Work ID card" value="Download" isDownloadable />
          <DetailItem label="Payslip" value="Download" isDownloadable />
          <DetailItem label="Link Bank" value={application.linkedBank} />
          <DetailItem label="Account Number" value={application.accountNumber || 'N/A'} />
          <DetailItem label="Credit Amount" value={application.creditAmount || 'N/A'} />
          <DetailItem label="Debit Amount" value={application.debitAmount || 'N/A'} />
          <DetailItem label="Bank Statement" value="Download" isDownloadable />
        </div>

        <div className="mt-8 space-y-4">
          <Sidebar.Open opens="APPROVE_CREDIT">
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

      <Sidebar.Window name="APPROVE_CREDIT">
        <AssignCreditLimit />
      </Sidebar.Window>
    </div>
  );
};

interface DetailItemProps {
  label: string;
  value: string;
  isDownloadable?: boolean;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value, isDownloadable = false }) => (
  <div className="flex items-center justify-between">
    <span className="text-gray-600">{label}:</span>
    {isDownloadable ? (
      <a href="/" className="text-green-500 hover:underline" download="text.txt">
        {value}
      </a>
    ) : (
      <span className="font-medium">{value}</span>
    )}
  </div>
);

export default CreditCheckDetails;
